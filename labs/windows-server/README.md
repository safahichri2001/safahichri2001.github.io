# 🖥️ Windows Server Administration Labs

Hands-on Windows Server laboratories focused on enterprise
infrastructure, network services, Active Directory administration
and PowerShell-based system management.

These labs explore the deployment, configuration and validation
of core Windows Server services in isolated virtual environments.

---

## 🛠️ Technologies

- Windows Server 2019 / 2022
- Active Directory Domain Services (AD DS)
- Active Directory Users and Computers (ADUC)
- DNS Server
- DHCP Server
- PowerShell
- RSAT
- VMware Workstation
- Windows 10 / 11
- TCP/IP
- Network troubleshooting

---

## 📂 Laboratory Work

### 🔵 Active Directory — Users & Groups Management

Configured and administered Active Directory Domain Services
on Windows Server 2019.

The laboratory covered:

- Organizational Unit (OU) design
- User account management
- Security group administration
- Role-based access control (RBAC)
- Active Directory Users and Computers (ADUC)
- RSAT administration
- PowerShell-based Active Directory automation
- Account and group verification
- Password policy management

A multi-level OU hierarchy was implemented to represent
different organizational departments. PowerShell was also used
to automate OU creation and verify users and group membership.

📄 [View Technical Report](reports/active-directory-users-groups-management.pdf)

---

### 🟢 DHCP Server Deployment

Deployed and configured a DHCP server on Windows Server 2019
within an isolated VMware laboratory environment.

The laboratory covered:

- DHCP Server role installation
- IPv4 scope configuration
- Address range and exclusion management
- DHCP options configuration
- DNS integration
- Active Directory integration
- DHCP server authorization
- Client IP address allocation
- DHCP reservation
- Connectivity and DNS testing
- Network troubleshooting

The environment included a Windows Server acting as DHCP/DNS
infrastructure and a Windows client receiving its network
configuration dynamically.

📄 [View Technical Report](reports/windows-server-dhcp-deployment.pdf)

---

### 🟣 DNS Server Deployment & PowerShell Diagnostics

Deployed and configured a DNS infrastructure on Windows Server.

The laboratory covered:

- DNS Server role installation
- Forward lookup zones
- Reverse lookup zones
- A records
- CNAME records
- MX records
- TXT records
- Secure dynamic updates
- DNS scavenging
- Forward and reverse resolution testing
- PowerShell-based DNS diagnostics

Multiple PowerShell and command-line tools were used to validate
DNS functionality, including `Resolve-DnsName`, `Get-Service`,
`nslookup` and `ipconfig /displaydns`.

📄 [View Technical Report](reports/windows-server-dns-deployment.pdf)

---

## 🔑 Key Windows Server Skills

Through these laboratories, I practiced:

- Windows Server administration
- Active Directory administration
- Domain services management
- Organizational Unit design
- User and group management
- Security group configuration
- Role-based access control
- DNS administration
- DHCP administration
- Network service integration
- PowerShell automation
- PowerShell-based diagnostics
- Network troubleshooting
- VMware virtual lab deployment

---

## ⚙️ Automation & PowerShell

PowerShell was used throughout the laboratories to automate
administrative tasks and validate infrastructure configuration.

Examples included:

- Active Directory OU creation
- User and group verification
- Group membership inspection
- DNS resolution testing
- DNS service validation
- Network configuration diagnostics

The Active Directory laboratory specifically used PowerShell
to automate the creation of the OU hierarchy, reducing repetitive
manual configuration and improving reproducibility.

---

## 🌐 Virtual Lab Environment

The laboratories were performed using isolated virtual
environments with VMware Workstation.

The environments included combinations of:

- Windows Server 2019 / 2022
- Windows 10 / 11 clients
- Active Directory domains
- DNS services
- DHCP services
- Isolated virtual networks

This setup provided a controlled environment for deploying,
testing and troubleshooting enterprise infrastructure services.

---

## 📑 Technical Reports

Detailed documentation of the laboratory configurations,
procedures, validation steps and troubleshooting is available
in the corresponding reports.

| Laboratory | Report |
|---|---|
| Active Directory Users & Groups | [PDF](reports/active-directory-users-groups-management.pdf) |
| DHCP Server Deployment | [PDF](reports/windows-server-dhcp-deployment.pdf) |
| DNS Server Deployment | [PDF](reports/windows-server-dns-deployment.pdf) |

---

## 🎓 Academic Context

These laboratories were conducted as part of academic
cybersecurity and Windows Server administration coursework.

The technical reports document the laboratory procedures,
configurations, troubleshooting steps and validation results.

The reports are written in English and are maintained as
technical evidence of practical Windows Server and
infrastructure administration experience.