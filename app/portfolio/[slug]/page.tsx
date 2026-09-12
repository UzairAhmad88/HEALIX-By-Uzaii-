import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Healix Case Study`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--healix-lime)] transition hover:text-white"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[var(--healix-lime)]">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-white/60">Initiative Year: {project.year}</span>
            </div>

            <h1 className="display-title mt-4 max-w-5xl font-extrabold text-white">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">
              {project.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad">
        <div className="container-healix">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="space-y-12 lg:col-span-8">
              <Reveal>
                <div className="rounded-[2.5rem] bg-[var(--healix-soft)] p-8 md:p-12">
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Overview</h2>
                  <p className="mt-4 text-xl leading-9 text-[var(--healix-text)] font-semibold">
                    {project.summary}
                  </p>
                </div>
              </Reveal>

              {/* Challenge & Approach */}
              <div className="grid gap-8 sm:grid-cols-2">
                <Reveal>
                  <div className="h-full rounded-3xl border border-[var(--healix-border)] p-8">
                    <h3 className="text-xl font-extrabold text-[var(--healix-text)]">The Challenge</h3>
                    <p className="mt-4 leading-7 text-slate-600">{project.challenge}</p>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="h-full rounded-3xl border border-[var(--healix-border)] p-8">
                    <h3 className="text-xl font-extrabold text-[var(--healix-text)]">Our Approach</h3>
                    <p className="mt-4 leading-7 text-slate-600">{project.approach}</p>
                  </div>
                </Reveal>
              </div>

              {/* Solution */}
              <Reveal>
                <div className="rounded-3xl border border-[var(--healix-border)] bg-white p-8 md:p-10">
                  <h3 className="text-2xl font-extrabold text-[var(--healix-text)]">Implemented Solution</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{project.solution}</p>

                  <h4 className="mt-8 text-sm font-extrabold uppercase tracking-wider text-[var(--healix-green-2)]">Key Capability Pillars</h4>
                  <div className="mt-4 space-y-3">
                    {project.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-center gap-3 font-semibold text-slate-700">
                        <CheckCircle2 className="size-5 shrink-0 text-[var(--healix-green)]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Impact / Status Disclaimer */}
              <Reveal>
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8">
                  <div className="flex items-center gap-3 text-[var(--healix-green)]">
                    <ShieldAlert size={24} />
                    <h3 className="text-lg font-extrabold">Outcome & Verification Status</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-emerald-950 font-medium">
                    {project.impact}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-8 lg:col-span-4">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-[var(--healix-border)] bg-[var(--healix-soft)] p-7">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Project Metadata</h3>
                  
                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <p className="text-xs text-slate-400">Category</p>
                      <p className="font-extrabold text-[var(--healix-text)]">{project.category}</p>
                    </div>
                    <div className="border-t border-[var(--healix-border)] pt-3">
                      <p className="text-xs text-slate-400">Initiative Year</p>
                      <p className="font-extrabold text-[var(--healix-text)]">{project.year}</p>
                    </div>
                    <div className="border-t border-[var(--healix-border)] pt-3">
                      <p className="text-xs text-slate-400">Domain Tags</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-[var(--healix-border)]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Gallery Placeholders */}
              <Reveal delay={0.25}>
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Visual Artifacts</h3>
                  {project.galleryPlaceholders.map((gallery, idx) => (
                    <div key={idx} className="rounded-2xl border border-[var(--healix-border)] bg-white p-6 shadow-sm">
                      <div className="grid size-10 place-items-center rounded-xl bg-[var(--healix-green)] text-[var(--healix-lime)] font-black text-sm">
                        0{idx + 1}
                      </div>
                      <p className="mt-3 font-extrabold text-[var(--healix-text)]">{gallery.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{gallery.caption}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-pad bg-[var(--healix-soft)]">
          <div className="container-healix">
            <h2 className="section-title">Explore Related Initiatives</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {relatedProjects.map((rel) => (
                <div key={rel.slug} className="rounded-3xl border border-[var(--healix-border)] bg-white p-8">
                  <span className="text-xs font-bold uppercase text-[var(--healix-green-2)]">{rel.category}</span>
                  <h3 className="mt-3 text-2xl font-extrabold">{rel.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{rel.summary}</p>
                  <Link href={`/portfolio/${rel.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--healix-green)]">
                    <span>Read Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
