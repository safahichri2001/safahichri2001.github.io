
# Safa Hichri — Cybersecurity Portfolio

Cybersecurity & AI Engineering Student | [LinkedIn](https://linkedin.com/in/TON-LIEN) | safa.hicheri@polytechnicien.tn

Reports below are written in French (academic requirement) — each entry includes a short English summary of the key findings and methodology.

---

## 🔍 Digital Forensics Investigations

**[Windows Multi-Source Investigation](forensics/windows-multi-source-investigation.pdf)**
Correlated network traffic (Wireshark), disk artifacts (Autopsy), and memory dumps (Volatility 3) to reconstruct a full Windows attack scenario — from HTTP downloads to deleted file traces.

**[Memory Forensics with Volatility 3](forensics/memory-forensics-volatility3.pdf)**
Investigated a live ransomware case, identifying the C2 server IP and reconstructing the full kill chain; recovered evidence of an active authenticated browser session in a separate case.

**[Network Forensics Case Study](forensics/network-forensics-case-study.pdf)**
Attributed a network harassment incident by correlating IP flows, HTTP content, and browser fingerprinting across multiple internal hosts.

**[Network Traffic Analysis with Wireshark](forensics/network-traffic-wireshark.pdf)**
Captured and analyzed HTTP traffic to confirm downloads, login attempts, and brute-force activity between a client machine and a local server.

**[Data Carving with Scalpel](forensics/data-carving-scalpel.pdf)**
Recovered 3,221 deleted files (JPG, PNG, ZIP, TXT) from a raw disk image via signature-based data carving, validating integrity through SHA-256 hashing.

**[iOS Forensic Analysis](forensics/ios-forensic-analysis.pdf)**
Analyzed a full iOS filesystem extraction using iLEAPP, reconstructing device timelines, application usage, and communication patterns.

**[Android Forensic Analysis](forensics/android-forensic-analysis.pdf)**
Analyzed an Android device image using ALEAPP, identifying 125+ applications, linked accounts, and 200+ call log entries, and cross-correlating contacts with the iOS device above.


