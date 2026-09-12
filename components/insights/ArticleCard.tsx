import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-[2rem] border border-[var(--healix-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--healix-green)] hover:shadow-xl hover:shadow-[var(--healix-green)]/5">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-[var(--healix-pale)] px-3 py-1 text-xs font-bold text-[var(--healix-green-2)]">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-[var(--healix-text)] transition-colors group-hover:text-[var(--healix-green)]">
          <Link href={`/insights/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-[var(--healix-border)] pt-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar size={14} />
          <span>{article.date}</span>
        </div>

        <Link
          href={`/insights/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--healix-green)] transition-all duration-200 group-hover:gap-2.5"
        >
          <span>Read Article</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
