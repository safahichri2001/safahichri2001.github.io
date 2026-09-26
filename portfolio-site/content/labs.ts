export type LabCategory =
  | "Digital Forensics"
  | "Identity & Access Management"
  | "Windows Server";

export type Lab = {
  title: string;
  category: LabCategory;
  summary: string;
  tools: string[];
  report: string;
};

const forensics = "/reports/digital-forensics";
const iam = "/reports/identity-access-management";
const winsrv = "/reports/windows-server";

export const labCategories: LabCategory[] = [
  "Digital Forensics",
  "Identity & Access Management",
  "Windows Server",
];

export const labs: Lab[] = [
  {
    title: "Windows Multi-Source Investigation",
    category: "Digital Forensics",
    summary:
      "Correlated network traffic, disk artifacts and memory dumps to reconstruct a full Windows attack scenario — from HTTP downloads to deleted file traces.",
    tools: ["Wireshark", "Autopsy", "Volatility 3"],
    report: `${forensics}/windows-multi-source-investigation.pdf`,
  },
  {
    title: "Memory Forensics",
    category: "Digital Forensics",
    summary:
      "Investigated a live ransomware case, identifying the C2 server IP and 9 encrypted files, and reconstructed the full kill chain.",
    tools: ["Volatility 3"],
    report: `${forensics}/memory-forensics-volatility3.pdf`,
  },
  {
    title: "Network Forensics Case Study",
    category: "Digital Forensics",
    summary:
      "Attributed a network harassment incident by correlating IP flows, HTTP content and browser fingerprinting across multiple internal hosts.",
    tools: ["Wireshark"],
    report: `${forensics}/network-forensics-case-study.pdf`,
  },
  {
    title: "Network Traffic Analysis",
    category: "Digital Forensics",
    summary:
      "Captured and analyzed HTTP traffic to confirm downloads, login attempts and brute-force activity between a client and a local server.",
    tools: ["Wireshark", "HTTP"],
    report: `${forensics}/network-traffic-wireshark.pdf`,
  },
  {
    title: "Data Carving",
    category: "Digital Forensics",
    summary:
      "Recovered 3,221 deleted files from a raw disk image via signature-based carving, validating integrity with SHA-256.",
    tools: ["Scalpel", "SHA-256"],
    report: `${forensics}/data-carving-scalpel.pdf`,
  },
  {
    title: "iOS Forensic Analysis",
    category: "Digital Forensics",
    summary:
      "Analyzed a full iOS filesystem extraction, reconstructing device timelines, application usage and communication patterns.",
    tools: ["iLEAPP"],
    report: `${forensics}/ios-forensic-analysis.pdf`,
  },
  {
    title: "Android Forensic Analysis",
    category: "Digital Forensics",
    summary:
      "Identified 125+ applications, linked accounts and 200+ call log entries, cross-correlating contacts with the iOS device.",
    tools: ["ALEAPP"],
    report: `${forensics}/android-forensic-analysis.pdf`,
  },
  {
    title: "Active Directory with Samba 4",
    category: "Identity & Access Management",
    summary:
      "Provisioned an AD domain on Linux (LAB.LOCAL) with DNS, Kerberos and LDAP, group-based access to file shares, and an Ubuntu client joined to the domain.",
    tools: ["Samba 4", "Kerberos", "LDAP", "DNS"],
    report: `${iam}/active-directory-samba4.pdf`,
  },
  {
    title: "FreeIPA Identity Management",
    category: "Identity & Access Management",
    summary:
      "Centralized identity and authentication management in a Linux environment.",
    tools: ["FreeIPA", "LDAP", "Kerberos"],
    report: `${iam}/iam-freeipa.pdf`,
  },
  {
    title: "Cross-Platform Kerberos",
    category: "Identity & Access Management",
    summary:
      "Kerberos-based authentication across heterogeneous Linux and Windows environments.",
    tools: ["Kerberos", "Linux", "Windows"],
    report: `${iam}/kerberos-cross-platform.pdf`,
  },
  {
    title: "AD Users & Groups Management",
    category: "Windows Server",
    summary:
      "Multi-level OU hierarchy, security groups and RBAC on Windows Server 2019, with PowerShell automation of OU creation and membership checks.",
    tools: ["AD DS", "RSAT", "PowerShell"],
    report: `${winsrv}/active-directory-users-groups-management.pdf`,
  },
  {
    title: "DHCP Server Deployment",
    category: "Windows Server",
    summary:
      "Scopes, exclusions, reservations and DNS/AD integration in an isolated VMware lab, validated with a dynamically configured Windows client.",
    tools: ["DHCP", "DNS", "VMware"],
    report: `${winsrv}/windows-server-dhcp-deployment.pdf`,
  },
  {
    title: "DNS Server & PowerShell Diagnostics",
    category: "Windows Server",
    summary:
      "Forward/reverse zones, A/CNAME/MX/TXT records, secure dynamic updates and scavenging, validated with Resolve-DnsName and nslookup.",
    tools: ["DNS", "PowerShell"],
    report: `${winsrv}/windows-server-dns-deployment.pdf`,
  },
];
