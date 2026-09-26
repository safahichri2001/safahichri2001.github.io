import { profile } from "@/content/profile";

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "safahichri2001", href: profile.github },
    ...(profile.linkedin
      ? [{ label: "LinkedIn", value: "Safa Hichri", href: profile.linkedin }]
      : []),
  ];

  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">
        06 <span>/</span> CONTACT
      </p>
      <h2>
        Let&apos;s secure what&apos;s
        <br />
        <span>coming next.</span>
      </h2>
      <p className="section-description">
        {profile.availability}. {profile.relocation}.
      </p>

      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="card contact-link"
          >
            <span>{link.label}</span>
            <p>{link.value} ↗</p>
          </a>
        ))}
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </footer>
    </section>
  );
}
