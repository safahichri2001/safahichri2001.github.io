export type Link = { label: string; href: string };

export const profile = {
  name: "Safa Hichri",
  role: "Cybersecurity & AI Engineering Student",
  focus: ["AI Code Security", "Security Agents", "LLM Security"],
  location: "Sousse, Tunisia",
  availability: "Seeking a 6-month internship from February 2027",
  relocation: "Open to relocation (Belgium)",
  email: "safa.hicheri@polytechnicien.tn",
  github: "https://github.com/safahichri2001",
  linkedin: "https://www.linkedin.com/in/safa-hichri/" as string | undefined,
  // TODO: drop the one-page CV in public/cv/ and set "/cv/safa-hichri-cv.pdf"
  cv: undefined as string | undefined,
  summary: [
    "Cybersecurity engineering student and AI master's candidate working where identity and AI agents meet.",
    "I have designed a Zero Trust IAM architecture with SSO/MFA, least-privilege RBAC and centralized audit logging, and built an LLM security agent whose actions are restricted by RBAC and human approval to prevent excessive agency.",
    "I'm looking to help secure human, non-human and AI agent identities.",
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "C1" },
    { name: "English", level: "B2" },
  ],
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI Code Security",
    items: [
      "Source-Code Analysis",
      "Cryptographic Misuse Detection",
      "CrySL",
      "CWE",
      "SAST concepts",
      "False-Positive Reduction",
      "Vulnerability Analysis",
    ],
  },
  {
    category: "AI Agents & LLMs",
    items: [
      "Agentic AI",
      "Multi-agent Systems",
      "RAG",
      "LangChain",
      "LangGraph",
      "LLMs",
      "Machine Learning",
    ],
  },
  {
    category: "LLM Security",
    items: [
      "OWASP LLM Top 10",
      "Prompt Injection Defense",
      "RAG Poisoning",
      "Tool-Misuse Guards",
    ],
  },
  {
    category: "Security & Cloud",
    items: [
      "Wazuh (SIEM)",
      "SOAR",
      "Keycloak",
      "Vault",
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "AWS",
      "Linux",
    ],
  },
  {
    category: "Engineering",
    items: [
      "Python",
      "Git / GitHub",
      "GitHub Actions (CI)",
      "Automated Testing",
      "PowerShell",
    ],
  },
];

export const education: {
  degree: string;
  school: string;
  period: string;
  current?: boolean;
}[] = [
  {
    degree: "Engineering Cycle — Cybersecurity (2nd year)",
    school: "École Polytechnique de Sousse",
    period: "2025 – Present",
    current: true,
  },
  {
    degree: "Master's M2 — Artificial Intelligence",
    school: "ISSAT Sousse",
    period: "2024 – Present",
    current: true,
  },
  {
    degree: "Bachelor's — IoT & Embedded Systems",
    school: "ISSAT Sousse",
    period: "2021 – 2023",
  },
];
