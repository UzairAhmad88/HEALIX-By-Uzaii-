import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  category?: string;
  features?: string[];
  className?: string;
};

export function ServiceCard({ icon, title, description, href, category, features, className = "" }: ServiceCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[2rem] border border-[var(--healix-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--healix-green)] hover:shadow-xl hover:shadow-[var(--healix-green)]/5 ${className}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="grid size-14 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] transition-colors duration-300 group-hover:bg-[var(--healix-green)] group-hover:text-[var(--healix-lime)]">
            {icon}
          </div>
          {category && (
            <span className="rounded-full bg-[var(--healix-soft)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[var(--healix-green-2)]">
              {category}
            </span>
          )}
        </div>

        <h3 className="mt-7 text-2xl font-extrabold text-[var(--healix-text)] transition-colors group-hover:text-[var(--healix-green)]">
          {title}
        </h3>

        <p className="mt-3.5 leading-7 text-slate-600">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="mt-6 space-y-2 border-t border-[var(--healix-border)] pt-5">
            {features.slice(0, 3).map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="size-1.5 rounded-full bg-[var(--healix-lime)]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 pt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-bold text-[var(--healix-green)] transition-all duration-200 group-hover:gap-3 group-hover:text-[var(--healix-green-2)]"
        >
          <span>Explore {title}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
