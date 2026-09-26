"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { labCategories, labs, type LabCategory } from "@/content/labs";

type Filter = LabCategory | "All";

export default function Labs() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? labs : labs.filter((lab) => lab.category === filter);

  return (
    <section className="section" id="labs">
      <SectionHeading
        index="04"
        eyebrow="LABS"
        title="Hands-on labs."
        description="Forensic investigations and infrastructure labs, each documented in a full technical report."
      />

      <div className="filters" role="tablist">
        {(["All", ...labCategories] as Filter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`filter ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
            <span>
              {cat === "All"
                ? labs.length
                : labs.filter((l) => l.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <div className="labs-grid">
        {visible.map((lab) => (
          <article key={lab.report} className="card lab-card">
            <p className="lab-category">{lab.category}</p>
            <h3>{lab.title}</h3>
            <p className="lab-summary">{lab.summary}</p>
            <div className="lab-foot">
              <div className="chips">
                {lab.tools.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={lab.report}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Report (PDF) ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
