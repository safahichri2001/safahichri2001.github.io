import Image from "next/image";
import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="hero-wrap" id="top">
      <div className="hero">
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
            on {profile.focus.slice(0, -1).join(", ")} and{" "}
            {profile.focus.at(-1)}.
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

        <div className="hero-portrait">
          <div className="portrait-glow" aria-hidden="true"></div>
          <Image
            src="/media/hero/portrait.png"
            alt={`Portrait of ${profile.name}`}
            width={900}
            height={881}
            sizes="(max-width: 850px) 80vw, 480px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
