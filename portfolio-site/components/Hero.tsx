import { profile } from "@/content/profile";

const coreItems = ["AGENTS", "LLM SEC", "IAM", "SOC"];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="availability">
          <span className="status-dot"></span>
          {profile.availability}
        </p>

        <p className="eyebrow">
          CYBERSECURITY <span>×</span> ARTIFICIAL INTELLIGENCE
        </p>

        <h1>
          Securing Humans,
          <br />
          <span>Machines & AI Agents.</span>
        </h1>

        <p className="hero-description">
          {profile.role} working where identity and AI agents meet — focused
          on {profile.focus.join(", ")}.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore Projects ↗
          </a>

          {profile.cv && (
            <a href={profile.cv} download className="secondary-button">
              Download CV ↓
            </a>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-tags">
          {profile.focus.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <span>Zero Trust IAM</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="glow"></div>

        <div className="security-card">
          <div className="card-header">
            <span className="status-dot"></span>
            <span>AI SECURITY CORE</span>
            <span className="card-id">SEC-01</span>
          </div>

          <div className="core">
            <div className="core-ring ring-one"></div>
            <div className="core-ring ring-two"></div>
            <div className="core-center">AI</div>
          </div>

          <div className="core-items">
            {coreItems.map((item, i) => (
              <div key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="card-footer">
            <span>NEVER TRUST · ALWAYS VERIFY</span>
            <span>● ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
