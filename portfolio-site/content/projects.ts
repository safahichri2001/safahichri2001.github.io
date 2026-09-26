export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  status: ProjectStatus;
  highlights: string[];
  metrics?: { value: string; label: string }[];
  stack: string[];
  repo?: string;
  // YouTube embed URL or a file under public/media/projects/
  video?: string;
  poster?: string;
  // True when content/case-studies.ts has a matching slug
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-powered-soc",
    title: "AI-Powered SOC",
    subtitle:
      "Security-hardened LLM agent for threat detection & response",
    context: "Personal project",
    status: "completed",
    highlights: [
      "Treats the AI agent itself as attack surface: three independent guards against prompt injection, RAG poisoning and tool misuse, each measured with Attack Success Rate on held-out data.",
      "The LLM only assesses — a deterministic SOAR playbook decides, and every state-changing action needs a role-gated human approval. A direct mitigation of OWASP LLM Top 10 “Excessive Agency”.",
      "Validated live against real infrastructure: a Kali-launched SSH brute-force was detected, classified CRITICAL, and isolated through a genuine Wazuh Active Response after approval.",
    ],
    metrics: [
      { value: "0.00%", label: "RAG poisoning ASR (BIPIA held-out)" },
      { value: "2.00%", label: "prompt injection ASR on evasion corpus" },
      { value: "177", label: "automated tests in CI" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "Qdrant",
      "Wazuh",
      "Docker",
      "GitHub Actions",
    ],
    repo: "https://github.com/safahichri2001/ai-powered-soc",
    video: "/media/projects/ai-powered-soc/demo.mp4",
    poster: "/media/projects/ai-powered-soc/demo-poster.jpg",
    caseStudy: true,
  },
  {
    slug: "zero-trust-iam",
    title: "Zero Trust IAM — SecureCorp",
    subtitle: "Zero Trust architecture & operational security",
    context: "Academic group project · Team of 4",
    status: "completed",
    highlights: [
      "3-VM Zero Trust architecture enforcing “Never Trust, Always Verify”: identity (OpenLDAP + Keycloak SSO/MFA), secrets & SIEM (Vault + Wazuh), and secure access gateway (Nginx + Apache Guacamole).",
      "RBAC across three user roles with automated brute-force protection (Fail2Ban), enforcing least-privilege and zero-plaintext passwords.",
      "End-to-end authentication flow User → Nginx → Keycloak → RBAC → Vault → Resource, with access logs centralized in Wazuh for real-time audit.",
      "My part — VM1, the identity layer: OpenLDAP over LDAPS and Keycloak with LDAP federation, OIDC SSO and TOTP MFA.",
    ],
    stack: [
      "Keycloak",
      "OpenLDAP",
      "Vault",
      "Wazuh",
      "Nginx",
      "Guacamole",
      "Fail2Ban",
    ],
    repo: "https://github.com/safahichri2001/securecorp-iam",
    video: "https://www.youtube.com/watch?v=MxU6_hBwiV4",
    caseStudy: true,
  },
  {
    slug: "facial-recognition-access-control",
    title: "Real-Time Facial Recognition Access Control",
    subtitle: "Bachelor's final year project — Future Vision Association",
    context: "Bachelor's final year project · 2023 – 2024",
    status: "completed",
    highlights: [
      "Deployed a real-time facial recognition access-control system in a live coworking space.",
      "Prevented spoofing attempts with an integrated Hugging Face liveness-detection model.",
      "Automated access logging and reservation sync through mobile app integration.",
    ],
    metrics: [
      { value: "92%", label: "recognition accuracy" },
      { value: "<1s", label: "detection time" },
    ],
    stack: ["Python", "Computer Vision", "Hugging Face", "Mobile App"],
  },
];
