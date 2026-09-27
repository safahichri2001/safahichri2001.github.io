export type Link = { label: string; href: string };

export const profile = {
  name: "Safa Hichri",
  role: "Cybersecurity & AI Engineering Student",
  focus: ["AI Code Security", "Security Agents", "LLM Security", "Cybersecurity"],
  location: "Sousse, Tunisia",
  availability: "Seeking a 6-month internship from February 2027",
  relocation: "Open to relocation in Europe",
  email: "safa.hicheri@polytechnicien.tn",
  github: "https://github.com/safahichri2001",
  linkedin: "https://www.linkedin.com/in/safa-hichri/" as string | undefined,
  // Public version: no phone number
  cv: "/cv/safa-hichri-cv.pdf" as string | undefined,
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
    category: "Secure Code & Cryptography",
    items: [
      "AES (ECB, CBC, GCM)",
      "RSA",
      "ECC",
      "Diffie-Hellman / ECDH",
      "Hashing & Digital Signatures",
      "CrySL",
      "CWE",
      "Cryptographic Misuse Detection",
      "Source-Code Analysis",
      "SAST concepts",
    ],
  },
  {
    category: "AI & LLM Security",
    items: [
      "OWASP LLM Top 10",
      "Prompt Injection Defense",
      "RAG Poisoning",
      "Tool-Misuse Guards",
    ],
  },
  {
    category: "AI & Agents",
    items: [
      "LLMs",
      "Agentic AI",
      "Multi-agent Systems",
      "RAG",
      "LangChain",
      "LangGraph",
      "Ollama",
      "Machine Learning",
      "Computer Vision",
    ],
  },
  {
    category: "Identity & Access",
    items: [
      "IAM",
      "Zero Trust",
      "RBAC",
      "Keycloak (SSO/MFA)",
      "OpenLDAP",
      "Active Directory",
      "HashiCorp Vault",
      "AWS IAM",
    ],
  },
  {
    category: "Security Operations",
    items: [
      "Wazuh (SIEM)",
      "SOAR",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Analysis",
      "Nmap",
      "Wireshark",
      "Kali Linux",
    ],
  },
  {
    category: "Forensics",
    items: ["Autopsy", "Volatility 3", "Scalpel", "iLEAPP / ALEAPP"],
  },
  {
    category: "Engineering & Systems",
    items: [
      "Python",
      "PowerShell",
      "Git / GitHub",
      "GitHub Actions (CI)",
      "Automated Testing",
      "Linux",
      "Windows Server",
      "TCP/IP",
      "Cisco Networking",
      "AWS",
      "VMware",
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
