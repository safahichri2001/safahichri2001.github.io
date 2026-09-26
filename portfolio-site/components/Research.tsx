import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import { research } from "@/content/research";

export default function Research() {
  return (
    <section className="section" id="research">
      <SectionHeading index="03" eyebrow="RESEARCH" title="Current research." />

      <article className="card research-card">
        <div className="project-head">
          <p className="project-context">
            {research.context} · {research.organization} · {research.period}
          </p>
          <StatusBadge status={research.status} />
        </div>

        <h3>{research.title}</h3>
        <p className="research-abstract">{research.abstract}</p>

        <ul className="highlights">
          {research.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <div className="chips">
          {research.keywords.map((k) => (
            <span key={k} className="chip">
              {k}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
