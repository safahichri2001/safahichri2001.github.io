import Link from "next/link";
import DemoVideo from "./DemoVideo";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        index="02"
        eyebrow="PROJECTS"
        title="Selected work."
        description="Security-hardened AI agents, Zero Trust identity and applied computer vision."
      />

      <div className="projects-list">
        {projects.map((project, i) => (
          <article key={project.slug} className="card project-card">
            <div className="project-head">
              <span className="project-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <StatusBadge status={project.status} />
            </div>

            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-context">{project.context}</p>

            {project.metrics && (
              <div className="metrics">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <ul className="highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {project.video && (
              <DemoVideo
                src={project.video}
                poster={project.poster}
                title={`${project.title} demo`}
              />
            )}

            <div className="project-foot">
              <div className="chips">
                {project.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.caseStudy && (
                  <Link href={`/projects/${project.slug}`} className="text-link">
                    Read case study →
                  </Link>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
