import SectionHeading from "./SectionHeading";
import { education, profile, skills } from "@/content/profile";

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading index="01" eyebrow="ABOUT" title="Identity meets AI." />

      <div className="about-grid">
        <div className="about-text">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="about-meta">
            <div>
              <span>Location</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span>Availability</span>
              <p>
                {profile.availability} · {profile.relocation}
              </p>
            </div>
            <div>
              <span>Languages</span>
              <p>
                {profile.languages
                  .map((l) => `${l.name} (${l.level})`)
                  .join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h3>Education</h3>
          {education.map((e) => (
            <div key={e.degree} className="timeline-item">
              <span className={`timeline-dot ${e.current ? "current" : ""}`} />
              <p className="timeline-period">{e.period}</p>
              <p className="timeline-title">{e.degree}</p>
              <p className="timeline-sub">{e.school}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="card skill-card">
            <h3>{group.category}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
