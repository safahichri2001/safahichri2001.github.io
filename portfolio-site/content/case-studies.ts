export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type PipelineStep = {
  label: string;
  detail: string;
  // Drives the color: guards are highlighted, actions stand out
  kind: "source" | "guard" | "ai" | "decision" | "action";
  // Text shown in the pill; defaults to `kind`
  tag?: string;
};

export type Card = {
  label?: string;
  title: string;
  body: string;
  // Render the title as code (component or class names)
  code?: boolean;
  // Visually emphasize this card (e.g. "my part" in a group project)
  highlight?: boolean;
};

type BlockBase = { eyebrow: string; title: string; lead?: string };

export type Block = BlockBase &
  (
    | { type: "prose"; body: string[] }
    | {
        type: "table";
        columns: string[];
        rows: string[][];
        codeColumn?: number;
        emphasisColumn?: number;
      }
    | { type: "pipeline"; steps: PipelineStep[] }
    | { type: "cards"; cards: Card[]; columns?: 2 | 3; chips?: string[] }
    | { type: "gallery"; items: Screenshot[] }
    | { type: "list"; items: string[] }
  );

export type CaseStudy = {
  slug: string;
  tagline: string;
  intro: string[];
  videoCaption?: string;
  links: { label: string; href: string }[];
  blocks: Block[];
};

const soc = "/media/projects/ai-powered-soc";
const socRepo = "https://github.com/safahichri2001/ai-powered-soc";

const aiPoweredSoc: CaseStudy = {
  slug: "ai-powered-soc",
  tagline:
    "Real Wazuh alerts, analyzed by a local LLM through RAG — with an agent that is itself treated as part of the attack surface.",
  intro: [
    "Real security alerts from a Wazuh SIEM are analyzed by a local LLM through a RAG pipeline and turned into a structured threat assessment. For high-risk alerts, a deterministic SOAR playbook proposes a response — which only executes after a role-gated human approval.",
  ],
  videoCaption:
    "Live demo from the lab — real Wazuh alerts, real LLM analysis, real Active Response. No mocked data.",
  links: [
    { label: "GitHub repository", href: socRepo },
    {
      label: "SECURITY.md — threat-by-threat writeup",
      href: `${socRepo}/blob/main/SECURITY.md`,
    },
  ],
  blocks: [
    {
      type: "prose",
      eyebrow: "Thesis",
      title: "The agent is part of the attack surface.",
      body: [
        "The interesting part isn't that an AI analyzes alerts. It's that the alerts themselves are attacker-controlled input. A username in an SSH log, a document in the knowledge base, a paraphrased request to a tool — each is a way to hijack the agent that is supposed to defend you.",
        "So the agent is defended like any other asset: three independent guard systems against prompt injection, RAG poisoning and tool misuse, each measured with Attack Success Rate on held-out data. And the SOAR layer is built so that the LLM's free-text output can never itself become an executed command.",
      ],
    },
    {
      type: "table",
      eyebrow: "Measured, not assumed",
      title: "Attack Success Rate per threat.",
      lead: "The percentage of malicious inputs that get through — lower is better.",
      columns: ["Threat", "Guard", "Test set", "ASR"],
      codeColumn: 1,
      emphasisColumn: 3,
      rows: [
        ["RAG poisoning", "RAGContextGuard", "BIPIA held-out test (200 records)", "0.00%"],
        ["Tool misuse", "ToolMisuseGuard", "Dev benchmark (89 records)", "0.00%"],
        ["Tool misuse", "ToolMisuseGuard", "Adversarial paraphrase / social-engineering set", "0.00%"],
        ["Prompt injection", "InputGuard + SemanticGuard", "Evasion corpus (obfuscation / encoding)", "2.00%"],
      ],
    },
    {
      type: "pipeline",
      eyebrow: "Architecture",
      title: "From alert to action — with guards at every boundary.",
      steps: [
        {
          label: "Wazuh alert",
          detail: "Real alerts pulled live from the Wazuh Indexer with watermark-based polling — no alert is processed twice.",
          kind: "source",
        },
        {
          label: "Normalize & format",
          detail: "Raw JSON becomes a typed SecurityAlert, including Wazuh's untruncated full_log line.",
          kind: "source",
        },
        {
          label: "InputGuard → SemanticGuard",
          detail: "Prompt-injection detection: a fast regex layer, then embedding similarity against a reference attack corpus.",
          kind: "guard",
        },
        {
          label: "RAG retrieval",
          detail: "sentence-transformers embeddings and a Qdrant vector store retrieve SOC knowledge for the alert.",
          kind: "ai",
        },
        {
          label: "RAGContextGuard",
          detail: "Checks the retrieved documents — not just the query — for indirect prompt injection.",
          kind: "guard",
        },
        {
          label: "Local LLM (Ollama)",
          detail: "Produces a structured ThreatAssessment: threat type, risk level, confidence, summary. Its job ends here.",
          kind: "ai",
        },
        {
          label: "Deterministic SOAR playbook",
          detail: "Builds the response plan from risk level and fixed alert fields only — never from the LLM's prose.",
          kind: "decision",
        },
        {
          label: "Role-gated human approval",
          detail: "Analyst / admin RBAC with a content-bound confirmation token that is invalidated if the action is altered.",
          kind: "decision",
        },
        {
          label: "ToolMisuseGuard → ToolExecutor",
          detail: "The single choke point between intent and side effect. Even a human-approved action passes through it.",
          kind: "guard",
        },
        {
          label: "Wazuh Active Response",
          detail: "Real host isolation via iptables on the target — and reversible the same way.",
          kind: "action",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Defenses",
      title: "Four layers protecting the agent.",
      cards: [
        {
          label: "Prompt injection",
          title: "InputGuard + SemanticGuard",
          code: true,
          body: "A regex layer for known patterns, chained with an embedding-similarity layer against a reference attack corpus. Same order in every pipeline: regex first, semantic second.",
        },
        {
          label: "RAG poisoning",
          title: "RAGContextGuard",
          code: true,
          body: "Inspects the retrieved context for indirect injection, using the same two-layer approach against the BIPIA attack corpus. This is what stops a poisoned knowledge-base document from overriding the LLM's instructions.",
        },
        {
          label: "Tool misuse",
          title: "ToolMisuseGuard",
          code: true,
          body: "A sensitive tool alone never triggers a block — a read-only lookup stays allowed. A call is blocked only when dangerous intent (explicit, paraphrased or context-manipulated) is paired with a capable tool. There is no code path from intent to a real side effect that skips it.",
        },
        {
          label: "Evasion resistance",
          title: "TextNormalizer",
          code: true,
          body: "Every guard also checks a normalized copy of its input: leetspeak reversal, homoglyph-to-Latin mapping, zero-width character stripping. The leetspeak reversal is token-aware, so IPs, ports, rule IDs and CVE numbers pass through untouched while 1gn0r3 still gets caught.",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Red-team validation",
      title: "Validated live, against real infrastructure.",
      columns: 3,
      cards: [
        {
          title: "SSH brute-force → isolated",
          body: "A real brute-force launched from the Kali VM was detected by Wazuh, classified CRITICAL by the LLM, proposed for isolation by the playbook, approved by a human in the dashboard, and executed as a genuine Wazuh Active Response — then reversed.",
        },
        {
          title: "Live prompt injection → blocked",
          body: "An attacker-chosen SSH username reading “ignore all previous instructions…” travelled through the real pipeline and was caught by the input guards.",
        },
        {
          title: "RAG poisoning → blocked",
          body: "A malicious instruction embedded in a retrieved knowledge document was caught by RAGContextGuard — through the live pipeline, confirmed via its own audit trail.",
        },
      ],
    },
    {
      type: "gallery",
      eyebrow: "Dashboard",
      title: "The analyst console.",
      items: [
        {
          src: `${soc}/01-dashboard-overview.png`,
          alt: "SOC dashboard overview with severity breakdown, alerts per hour and guard activity",
          caption: "Live overview — severity breakdown, alert volume and guard activity over a real 24-hour window.",
          width: 1365,
          height: 837,
        },
        {
          src: `${soc}/02-critical-alert-executed.png`,
          alt: "Critical SSH brute-force alert with AI assessment, RAG context and an executed isolation action",
          caption: "A real SSH brute-force classified CRITICAL: RAG context, AI assessment, and the role-gated isolation action approved and EXECUTED.",
          width: 1032,
          height: 801,
        },
        {
          src: `${soc}/03-critical-high-history.png`,
          alt: "History of critical and high alerts with their outcomes",
          caption: "Every Critical/High alert of the session with its real outcome — or Pending Approval.",
          width: 1363,
          height: 840,
        },
        {
          src: `${soc}/04-recent-decisions.png`,
          alt: "Audit trail of recent approval decisions",
          caption: "The audit trail: who approved what, under which role, plus read-only enrichment lookups.",
          width: 1355,
          height: 845,
        },
        {
          src: `${soc}/05-severity-filtered-alert.png`,
          alt: "Medium-severity alert triaged by the AI",
          caption: "A routine login alert gets a full assessment — without over-reacting to it.",
          width: 1362,
          height: 842,
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Methodology",
      title: "How the numbers were earned.",
      cards: [
        {
          title: "Calibrated, not guessed",
          body: "Every detection threshold comes from a sweep over labeled validation splits, reporting precision, recall, F1 and ASR — never picked by feel, never tuned on the reported test set.",
        },
        {
          title: "Adversarial, not just clean-set",
          body: "Dedicated robustness and evasion corpora test paraphrase, social engineering and character-level obfuscation. ASR is reported per attack family, not only in aggregate.",
        },
        {
          title: "Bugs found live, not just in unit tests",
          body: "Running real alerts surfaced a false positive (SemanticGuard blocking a routine PAM logout, because its threshold was calibrated on chat text) and a false negative (Wazuh's sshd decoder truncating an attacker-controlled username before it reached the guard). Both were root-caused and fixed.",
        },
        {
          title: "Limitations tracked, not hidden",
          body: "French-language phrasing of a known attack still scores under threshold. It is kept as a strict xfail test and documented as open, rather than silently passing.",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Lab & stack",
      title: "A controlled virtualized SOC.",
      columns: 3,
      cards: [
        {
          label: "Host",
          title: "Windows 11 · i7-13620H · 32 GB · RTX 2050",
          body: "VMware Workstation 17 Pro, local LLM inference",
        },
        {
          label: "SOC-Ubuntu",
          title: "Ubuntu Server 24.04 LTS",
          body: "Wazuh Manager, Indexer & Dashboard",
        },
        {
          label: "Kali Linux",
          title: "Wazuh Agent 4.14.7",
          body: "Monitored endpoint and red-team attack source",
        },
      ],
      chips: [
        "Python",
        "Pydantic",
        "Pytest",
        "FastAPI",
        "Docker",
        "Wazuh",
        "sentence-transformers",
        "Qdrant",
        "Ollama",
        "VMware",
        "GitHub Actions",
      ],
    },
    {
      type: "list",
      eyebrow: "What's next",
      title: "Known gaps, tracked openly.",
      items: [
        "Close the French / multilingual prompt-injection gap (tracked as xfail)",
        "Real integrations for the remaining simulated SOC tools — firewall, account and case management",
        "Data exfiltration controls (not addressed yet)",
        "A dedicated ML detection pipeline alongside the LLM layer",
      ],
    },
  ],
};

const zeroTrustIam: CaseStudy = {
  slug: "zero-trust-iam",
  tagline:
    "A 3-VM Zero Trust architecture where every request is authenticated, authorized and logged — wherever it comes from.",
  intro: [
    "SecureCorp is an academic project built by a team of four: a complete Zero Trust IAM architecture split across three virtual machines — identity, secrets & monitoring, and secure access — then put to the test with real attack and recovery scenarios. I owned the identity layer.",
  ],
  videoCaption:
    "Demo of the four test scenarios: legitimate access, role segregation, external attack, and disaster recovery.",
  links: [
    {
      label: "My part on GitHub (VM1)",
      href: "https://github.com/safahichri2001/securecorp-iam",
    },
    {
      label: "Watch on YouTube",
      href: "https://www.youtube.com/watch?v=MxU6_hBwiV4",
    },
  ],
  blocks: [
    {
      type: "prose",
      eyebrow: "Principle",
      title: "Never trust, always verify.",
      body: [
        "A classic perimeter trusts anything already inside the network. SecureCorp assumes the opposite: no user, device or request is trusted by default. Every access goes through the same chain — identity, multi-factor authentication, role-based authorization and short-lived secrets — and every step is logged centrally.",
      ],
    },
    {
      type: "pipeline",
      eyebrow: "Authentication flow",
      title: "One path to every resource.",
      steps: [
        {
          label: "User",
          detail: "Any request, from inside or outside the network, starts untrusted.",
          kind: "source",
          tag: "untrusted",
        },
        {
          label: "Nginx",
          detail: "Reverse proxy and single secure entry point — nothing reaches a service directly.",
          kind: "guard",
          tag: "gateway",
        },
        {
          label: "Keycloak",
          detail: "SSO over OIDC with MFA (TOTP), backed by the OpenLDAP directory.",
          kind: "guard",
          tag: "identity",
        },
        {
          label: "RBAC",
          detail: "Least-privilege authorization across three roles — IT, Dev and HR.",
          kind: "decision",
          tag: "authorization",
        },
        {
          label: "Vault",
          detail: "Secrets are delivered on demand — zero plaintext passwords in configs or scripts.",
          kind: "guard",
          tag: "secrets",
        },
        {
          label: "Resource",
          detail: "Browser-based SSH / RDP / VNC through Apache Guacamole.",
          kind: "action",
          tag: "resource",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Architecture",
      title: "Three VMs, three responsibilities.",
      lead: "Access logs from the whole chain are centralized into Wazuh for real-time audit, and Fail2Ban blocks brute-force attempts automatically.",
      columns: 3,
      cards: [
        {
          label: "VM1 · My part",
          title: "Identity management",
          body: "OpenLDAP (LDAPS) as the central directory, Keycloak for SSO and MFA.",
          highlight: true,
        },
        {
          label: "VM2",
          title: "Secrets & SIEM",
          body: "HashiCorp Vault for secrets management, Wazuh for monitoring and alerting.",
        },
        {
          label: "VM3",
          title: "Secure access gateway",
          body: "Nginx as reverse proxy, Apache Guacamole for browser-based remote access.",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "My contribution",
      title: "I built the identity layer — VM1.",
      lead: "Every other component depends on it: no identity, no access.",
      cards: [
        {
          label: "Directory",
          title: "OpenLDAP + LDAPS",
          body: "Deployed OpenLDAP as the centralized identity directory, secured with LDAPS (port 636) so credentials never travel in clear text.",
        },
        {
          label: "Identity provider",
          title: "Keycloak 26",
          body: "Deployed Keycloak as the identity provider with LDAP user federation: a dedicated realm, an OIDC client for the application, single sign-on and TOTP multi-factor authentication.",
        },
        {
          label: "Organization",
          title: "Users & roles",
          body: "Modeled the company as organizational units — IT, Dev and HR — with their users: the structure the RBAC policies rely on to enforce least privilege.",
        },
        {
          label: "Monitoring",
          title: "Wazuh agent",
          body: "Enrolled VM1 in the SIEM so identity-layer events are collected centrally alongside the rest of the infrastructure.",
        },
      ],
    },
    {
      type: "cards",
      eyebrow: "Test scenarios",
      title: "Four ways to try to break it.",
      cards: [
        {
          label: "Scenario 1",
          title: "Legitimate access — baseline",
          body: "A standard user goes through the full chain — Nginx, Keycloak SSO/MFA, RBAC, Vault — confirming that normal access works end to end.",
        },
        {
          label: "Scenario 2",
          title: "Access segregation",
          body: "Users from IT, Dev and HR each try to reach resources outside their role, validating that least privilege holds at every boundary.",
        },
        {
          label: "Scenario 3",
          title: "External attack",
          body: "A simulated intrusion is detected by Wazuh and blocked by Fail2Ban, with a honeypot used to analyze the attacker's behavior.",
        },
        {
          label: "Scenario 4",
          title: "Disaster recovery",
          body: "A simulated crash tests Vault's secrets backup and restore process, and measures the overall recovery time.",
        },
      ],
      chips: [
        "OpenLDAP",
        "LDAPS",
        "Keycloak",
        "OIDC",
        "TOTP MFA",
        "HashiCorp Vault",
        "Wazuh",
        "Nginx",
        "Apache Guacamole",
        "Fail2Ban",
      ],
    },
  ],
};

export const caseStudies: CaseStudy[] = [aiPoweredSoc, zeroTrustIam];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
