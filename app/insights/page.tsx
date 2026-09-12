"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { articles } from "@/data/articles";

const categories = [
  "All",
  "Preventive Care",
  "Health",
  "Diagnostics",
  "Pharmacy",
  "Clinics",
  "Technology",
  "Wellness"
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--healix-green)] py-20 text-white md:py-28">
        <div className="container-healix">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              Healthcare Journal
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Healix Insights & Wellness
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Thoughtful healthcare education, clear explanations of diagnostic science, and wellness guidance written for patients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Article Banner */}
      {featuredArticle && selectedCategory === "All" && (
        <section className="section-pad bg-[var(--healix-soft)]">
          <div className="container-healix">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 border border-[var(--healix-border)] shadow-xl md:p-12">
                <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold text-[var(--healix-green-2)]">
                  Featured Read · {featuredArticle.category}
                </span>
                
                <h2 className="mt-4 text-3xl font-extrabold text-[var(--healix-text)] md:text-4xl">
                  <Link href={`/insights/${featuredArticle.slug}`} className="hover:text-[var(--healix-green)]">
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--healix-border)] pt-6 text-sm text-slate-500">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2"><Clock size={16} /> {featuredArticle.readTime}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {featuredArticle.date}</span>
                  </div>

                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-[var(--healix-green)] hover:gap-3"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-pad">
        <div className="container-healix">
          {/* Filter Pills */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 border-b border-[var(--healix-border)] pb-8">
              <span className="mr-2 text-xs font-black uppercase tracking-wider text-slate-400">Category:</span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                      isSelected
                        ? "bg-[var(--healix-green)] text-white shadow-md"
                        : "bg-[var(--healix-soft)] text-slate-600 hover:bg-[var(--healix-pale)] hover:text-[var(--healix-green)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={idx * 0.1}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="mt-16 rounded-3xl bg-[var(--healix-soft)] p-12 text-center">
              <p className="text-lg font-bold text-slate-600">No articles available in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
