# 🔐 Identity & Access Management Labs

Hands-on cybersecurity laboratories focused on identity management,
authentication, authorization and centralized access control.

These labs explore practical IAM concepts through FreeIPA,
Active Directory, Samba 4 and Kerberos in Linux and Windows environments.

---

## 🛠️ Technologies

- Active Directory
- Samba 4
- FreeIPA
- Kerberos
- LDAP
- DNS
- Linux
- Windows
- SMB / Samba

---

## 📂 Laboratory Work

### 🔵 Active Directory with Samba 4

Implemented an Active Directory domain environment using Samba 4
on Linux.

The laboratory covered the deployment of a domain controller,
internal DNS configuration, Kerberos authentication, LDAP-based
directory management and centralized identity administration.

Practical work included:

- Active Directory domain provisioning
- DNS configuration and validation
- Kerberos authentication
- LDAP directory management
- Organizational Units (OUs)
- User and security group administration
- Password policy configuration
- Group-based access control
- Secure Samba file shares
- Linux client integration with Active Directory

The laboratory also included troubleshooting of network,
DNS and Kerberos configuration issues. 

📄 [View Technical Report](reports/active-directory-samba4.pdf)

---

### 🟢 FreeIPA — Identity Management

Explored centralized identity and authentication management
using FreeIPA in a Linux environment.

**Focus:** IAM · LDAP · Kerberos · Centralized Authentication

📄 [View Technical Report](reports/iam-freeipa.pdf)

---

### 🟣 Cross-Platform Kerberos Authentication

Explored Kerberos-based authentication across heterogeneous
Linux and Windows environments.

**Focus:** Kerberos · Authentication · Linux · Windows

📄 [View Technical Report](reports/kerberos-cross-platform.pdf)

---

## 🔑 Key IAM Concepts Practiced

Through these laboratories, I practiced:

- Centralized identity management
- User and group administration
- Authentication and authorization
- Kerberos-based authentication
- LDAP directory services
- Active Directory administration
- Samba 4 configuration
- Organizational Units (OUs)
- Security groups
- Group-based access control
- Password security policies
- DNS service discovery
- SMB file sharing
- Linux–Windows integration
- Cross-platform authentication

---

## 🧪 Practical Environment

The Active Directory laboratory simulated an enterprise
environment with:

- An Active Directory domain: `LAB.LOCAL`
- A Samba 4 domain controller: `dc1.lab.local`
- Centralized DNS services
- Kerberos authentication
- LDAP directory services
- Organizational units representing departments
- Department-based security groups
- Shared network resources
- An Ubuntu client joined to the domain

The laboratory validated both authorized and unauthorized
access to department-specific resources.

---

## 🔐 Access Control

Access to shared resources was controlled using
Active Directory security groups.

For example:

| Resource | Authorized Group |
|---|---|
| Informatique | GRP-Informatique |
| RH | GRP-RH |
| Commun | Domain Users |

Access tests were performed to validate both successful
authorization and access denial for unauthorized users.

---

## 🌐 Authentication & Domain Integration

The laboratory also demonstrated the integration of an
Ubuntu client into the Active Directory domain.

The client was able to:

- Discover the domain
- Authenticate using Kerberos
- Join the `LAB.LOCAL` domain
- Obtain a machine account in Active Directory
- Be recognized by the domain controller

The domain membership was validated from both the client
and the Samba domain controller.

---

## 📑 Technical Reports

Detailed documentation of the laboratory configurations,
procedures, troubleshooting and validation results is available
in the corresponding reports.

| Laboratory | Report |
|---|---|
| Active Directory / Samba 4 | [PDF](reports/active-directory-samba4.pdf) |
| FreeIPA Identity Management | [PDF](reports/iam-freeipa.pdf) |
| Cross-Platform Kerberos | [PDF](reports/kerberos-cross-platform.pdf) |

---

## 🎓 Academic Context

These laboratories were conducted as part of academic
cybersecurity and Identity & Access Management coursework.

The technical reports document the complete laboratory
procedures, configurations, troubleshooting steps and
validation results.

The reports are written in French due to academic requirements,
while this README provides an English overview for professional
and portfolio purposes.