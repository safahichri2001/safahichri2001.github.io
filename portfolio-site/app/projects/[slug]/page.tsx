import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DemoVideo from "@/components/DemoVideo";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import {
  caseStudies,
  getCaseStudy,
  type Block,
} from "@/content/case-studies";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  const study = getCaseStudy(slug);
  if (!project || !study) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: study.tagline,
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: study.tagline,
      images: project.poster ? [project.poster] : undefined,
    },
  };
}

function BlockContent({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <div className="cs-prose">
          {block.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="table-wrap">
          <table className="cs-table">
            <thead>
              <tr>
                {block.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={i === block.emphasisColumn ? "emphasis" : ""}
                    >
                      {i === block.codeColumn ? <code>{cell}</code> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "pipeline":
      return (
        <ol className="pipeline">
          {block.steps.map((step, i) => (
            <li key={step.label} className={`pipeline-step ${step.kind}`}>
              <span className="pipeline-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="pipeline-label">{step.label}</p>
                <p className="pipeline-detail">{step.detail}</p>
              </div>
              <span className="pipeline-kind">{step.tag ?? step.kind}</span>
            </li>
          ))}
        </ol>
      );

    case "cards":
      return (
        <>
          <div className={`cs-grid ${block.columns === 3 ? "three" : ""}`}>
            {block.cards.map((card) => (
              <article
                key={card.title}
                className={`card cs-card ${card.highlight ? "highlight" : ""}`}
              >
                {card.label && <p className="lab-category">{card.label}</p>}
                <h3>{card.code ? <code>{card.title}</code> : card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          {block.chips && (
            <div className="chips cs-stack">
              {block.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          )}
        </>
      );

    case "gallery":
      return (
        <div className="screenshots">
          {block.items.map((s) => (
            <figure key={s.src}>
              <a href={s.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(max-width: 850px) 100vw, 560px"
                />
              </a>
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="highlights">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default async function CaseStudyPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  return (
    <>
      <Navbar />
      <main className="case-study">
        <Link href="/#projects" className="back-link">
          ← All projects
        </Link>

        <header className="cs-header">
          <div className="project-head">
            <p className="project-context">{project.context}</p>
            <StatusBadge status={project.status} />
          </div>
          <h1>{project.title}</h1>
          <p className="cs-tagline">{study.tagline}</p>
          {study.intro.map((p) => (
            <p key={p} className="cs-intro">
              {p}
            </p>
          ))}

          <div className="cs-links">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                {l.label} ↗
              </a>
            ))}
          </div>

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
        </header>

        {project.video && (
          <figure className="cs-video">
            <DemoVideo
              src={project.video}
              poster={project.poster}
              title={`${project.title} demo`}
            />
            {study.videoCaption && (
              <figcaption>{study.videoCaption}</figcaption>
            )}
          </figure>
        )}

        {study.blocks.map((block, i) => (
          <section key={block.title} className="cs-block">
            <p className="eyebrow">
              {String(i + 1).padStart(2, "0")} <span>/</span>{" "}
              {block.eyebrow.toUpperCase()}
            </p>
            <h2>{block.title}</h2>
            {block.lead && <p className="cs-lead">{block.lead}</p>}
            <BlockContent block={block} />
          </section>
        ))}

        <footer className="footer">
          <Link href="/#projects" className="text-link">
            ← Back to all projects
          </Link>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </footer>
      </main>
    </>
  );
}
