import Link from "next/link";
import { ArrowRight, FlaskConical, Activity, Microchip, CheckCircle2, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory & Diagnostics | Diagnostic Testing Clarity",
  description: "Explore Healix Diagnostics — laboratory diagnostics built around scientific precision, ISO-aligned quality standards, and readable patient result reports."
};

export default function LaboratoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              <FlaskConical size={16} /> Pillar 02 · Diagnostics & Laboratory
            </div>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Precision Diagnostic Science
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Delivering precise diagnostic laboratory insights with visual clarity, rapid turnaround, and strict quality control.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Laboratory Overview */}
      <section className="section-pad">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Diagnostic Philosophy</span>
              <h2 className="section-title mt-3">Accuracy Driven by Standards</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Diagnostic lab work provides the quantitative foundation for over 70% of clinical decisions. Healix Diagnostics pairs advanced assay technology with plain-language patient summaries.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "ISO-aligned laboratory quality control procedures",
                  "Automated double-verification on critical biomarker values",
                  "Visual reference range bars replacing confusing numerical tables",
                  "Seamless synchronization with Healix clinic record systems"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="size-5 shrink-0 text-[var(--healix-green)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[2.5rem] bg-[var(--healix-green)] p-8 text-white shadow-xl md:p-12">
              <div className="grid size-16 place-items-center rounded-2xl bg-[var(--healix-lime)] text-[var(--healix-green)]">
                <Activity size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold">Testing Transparency</h3>
              <p className="mt-3 leading-7 text-white/75">
                We believe lab results belong to the patient. Reports include doctor-approved summaries to help individuals understand their metabolic and cardiovascular numbers.
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 p-5 border border-white/15">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--healix-lime)]">Quality Protocol</p>
                <p className="mt-1 text-sm text-white/90">Multi-point calibration and daily control runs on all diagnostic equipment.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Diagnostics Suite */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Diagnostic Testing Areas"
              description="Comprehensive laboratory screening options designed for routine checkups and targeted health investigations."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Metabolic Panels", desc: "Glucose, kidney function, and liver enzyme profiles." },
              { title: "Lipid & Cardiac", desc: "Cholesterol, triglycerides, and inflammatory cardiovascular markers." },
              { title: "Hormonal Assays", desc: "Thyroid function, cortisol, and endocrine system screening." },
              { title: "Preventive Wellness", desc: "Comprehensive baseline wellness and micronutrient panels." }
            ].map(({ title, desc }, idx) => (
              <Reveal key={title} delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-[var(--healix-border)] bg-white p-8">
                  <div className="grid size-10 place-items-center rounded-xl bg-[var(--healix-pale)] text-[var(--healix-green)] font-extrabold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-[var(--healix-text)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-healix rounded-[3rem] bg-[var(--healix-green)] px-8 py-16 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">Learn More About Healix Diagnostics</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Discuss laboratory integration, diagnostic research, or institutional partnerships with Healix.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-8 py-3.5 font-bold text-[var(--healix-text)] hover:bg-white"
            >
              <span>Contact Diagnostics Team</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
