import type { ProjectStatus } from "@/content/projects";

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-badge ${status}`}>
      {status === "in-progress" ? "In progress" : "Completed"}
    </span>
  );
}
