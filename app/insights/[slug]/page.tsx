import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";
import { articles } from "@/data/articles";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Healix Insights`,
    description: article.excerpt
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10 max-w-4xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--healix-lime)] transition hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/70">
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[var(--healix-lime)]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
            </div>

            <h1 className="display-title mt-5 font-extrabold text-white">
              {article.title}
            </h1>

            <p className="mt-6 text-xl leading-9 text-white/80">
              {article.subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-white/75">
              <span className="grid size-10 place-items-center rounded-full bg-[var(--healix-lime)] text-xs font-black text-[var(--healix-green)]">
                H
              </span>
              <div>
                <p className="font-bold text-white">{article.author.name}</p>
                <p className="text-xs text-white/60">{article.author.title}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Body */}
      <section className="section-pad">
        <div className="container-healix max-w-4xl">
          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <Reveal>
              <div className="mb-14 rounded-[2.5rem] bg-[var(--healix-soft)] p-8 border border-[var(--healix-border)] md:p-10">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-green-2)]">
                  <Sparkles size={16} /> Key Takeaways
                </div>
                <ul className="mt-4 space-y-3">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-semibold text-[var(--healix-text)] text-base leading-7">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--healix-green)]" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Article Sections */}
          <div className="space-y-12 text-slate-700 leading-8">
            {article.content.map((sec, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <section>
                  <h2 className="text-2xl font-extrabold text-[var(--healix-text)] md:text-3xl">
                    {sec.sectionTitle}
                  </h2>
                  <div className="mt-4 space-y-4 text-lg leading-8 text-slate-600">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Medical Responsibility Disclaimer */}
          <Reveal>
            <div className="mt-16 rounded-3xl border border-amber-200 bg-amber-50/60 p-7 text-xs leading-6 text-amber-900">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-800">
                <ShieldAlert size={16} /> Healthcare Content Advisory
              </div>
              <p className="mt-2">
                This article is provided for educational and informational health awareness purposes only. It is not intended as medical diagnosis, treatment advice, or personal medical consultation. Always consult a qualified physician or healthcare professional regarding personal medical concerns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-pad bg-[var(--healix-soft)]">
          <div className="container-healix">
            <h2 className="section-title">Related Insights</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
