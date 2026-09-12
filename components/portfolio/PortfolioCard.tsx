import Link from "next/link";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { Project } from "@/data/projects";

type PortfolioCardProps = {
  project: Project;
  featured?: boolean;
};

export function PortfolioCard({ project, featured = false }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--healix-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--healix-green)] hover:shadow-2xl hover:shadow-[var(--healix-green)]/10 ${
        featured ? "lg:col-span-2 lg:flex-row lg:items-center" : ""
      }`}
    >
      <div className={featured ? "lg:max-w-xl" : ""}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold text-[var(--healix-green-2)]">
            {project.category}
          </span>
          <span className="text-xs font-semibold text-slate-400">{project.year}</span>
        </div>

        <h3
          className={`mt-5 font-extrabold text-[var(--healix-text)] transition-colors group-hover:text-[var(--healix-green)] ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-base leading-7 text-slate-600">
          {project.summary}
        </p>

        {project.tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-[var(--healix-soft)] px-2.5 py-1 text-xs text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className={`mt-8 flex items-center justify-between border-t border-[var(--healix-border)] pt-6 ${
          featured ? "lg:mt-0 lg:border-t-0 lg:pt-0" : ""
        }`}
      >
        <div className="flex items-center gap-2 text-sm font-bold text-[var(--healix-green)]">
          <FolderKanban size={16} />
          <span>View Case Study</span>
        </div>

        <div className="grid size-11 place-items-center rounded-full bg-[var(--healix-soft)] text-[var(--healix-green)] transition-all duration-300 group-hover:bg-[var(--healix-green)] group-hover:text-[var(--healix-lime)] group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </Link>
  );
}
