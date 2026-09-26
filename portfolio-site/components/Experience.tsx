import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";
import { events } from "@/content/experience";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        index="05"
        eyebrow="LEADERSHIP & EVENTS"
        title="Building communities."
        description="Organizing conferences, hackathons and CTFs for the tech and security community."
      />

      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </section>
  );
}
