"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { projects } from "@/data/projects";

const categories = ["All", "Pharmacy", "Laboratory", "Clinics", "Technology"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--healix-green)] py-20 text-white md:py-28">
        <div className="container-healix">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              Case Studies & Initiatives
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Healix Ecosystem Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              Explore our architectural case studies across pharmacy, diagnostic laboratory testing, clinical environments, and digital care infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container-healix">
          {/* Category Filter Pills */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 border-b border-[var(--healix-border)] pb-8">
              <span className="mr-2 text-xs font-black uppercase tracking-wider text-slate-400">Filter by:</span>
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

          {/* Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 0.1}>
                <PortfolioCard project={project} featured={idx === 0 && selectedCategory === "All"} />
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-16 rounded-3xl bg-[var(--healix-soft)] p-12 text-center">
              <p className="text-lg font-bold text-slate-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
