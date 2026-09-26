"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Event } from "@/content/experience";

export default function EventCard({ event }: { event: Event }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const photos = event.photos ?? [];
  const hasDetails = Boolean(event.story || photos.length);
  const current = photos[index];

  const show = (i = 0) => {
    setIndex(i);
    setOpen(true);
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i + delta + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <article className="card event-card">
      {event.cover && (
        <button
          type="button"
          className="event-photo"
          onClick={() => show(Math.max(0, photos.indexOf(event.cover!)))}
          aria-label={`Open ${event.name} gallery`}
        >
          <Image
            src={event.cover.src}
            alt={event.cover.alt}
            fill
            sizes="(max-width: 850px) 100vw, 33vw"
          />
          {photos.length > 1 && (
            <span className="photo-count">{photos.length} photos</span>
          )}
        </button>
      )}

      <p className="lab-category">{event.role}</p>
      <h3>{event.name}</h3>
      <p className="project-context">
        {[event.date, event.organizer, event.location]
          .filter(Boolean)
          .join(" · ")}
      </p>
      <p className="lab-summary">{event.description}</p>

      <div className="metrics compact">
        {event.stats.map((s) => (
          <div key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {hasDetails && (
        <button type="button" className="text-link event-more" onClick={() => show()}>
          Story & photos →
        </button>
      )}

      {hasDetails && (
        <dialog
          ref={dialogRef}
          className="event-dialog"
          aria-labelledby={`${event.slug}-title`}
          onClose={() => setOpen(false)}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          {open && (
          <div className="dialog-inner">
            <header className="dialog-head">
              <div>
                <p className="lab-category">{event.role}</p>
                <h3 id={`${event.slug}-title`}>{event.name}</h3>
                {event.fullName && (
                  <p className="dialog-fullname">{event.fullName}</p>
                )}
                <p className="project-context">
                  {[event.date, event.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <button
                type="button"
                className="dialog-close"
                onClick={close}
                aria-label="Close"
              >
                ✕
              </button>
            </header>

            {current && (
              <figure className="viewer">
                <div className="viewer-frame">
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 860px"
                  />
                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="viewer-nav prev"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="viewer-nav next"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <figcaption>
                  <span>
                    {index + 1} / {photos.length}
                  </span>
                  {current.caption}
                </figcaption>

                {photos.length > 1 && (
                  <div className="thumbs">
                    {photos.map((p, i) => (
                      <button
                        key={p.src}
                        type="button"
                        className={`thumb ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Show photo ${i + 1}`}
                      >
                        <Image src={p.src} alt="" fill sizes="96px" />
                      </button>
                    ))}
                  </div>
                )}
              </figure>
            )}

            <div className="dialog-body">
              <div className="dialog-story">
                {event.story?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <aside className="dialog-aside">
                {event.responsibilities && (
                  <div>
                    <h4>My role</h4>
                    <ul className="highlights">
                      {event.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.program && (
                  <div>
                    <h4>Program</h4>
                    <ol className="program">
                      {event.program.map((step) => (
                        <li key={step.date}>
                          <span className="program-date">{step.date}</span>
                          <div>
                            <p>{step.label}</p>
                            {step.detail && <small>{step.detail}</small>}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {event.tags && (
                  <div>
                    <h4>{event.tags.title}</h4>
                    <div className="chips">
                      {event.tags.items.map((k) => (
                        <span key={k} className="chip">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    Official website ↗
                  </a>
                )}
              </aside>
            </div>
          </div>
          )}
        </dialog>
      )}
    </article>
  );
}
