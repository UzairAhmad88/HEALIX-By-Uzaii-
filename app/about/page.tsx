import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Sparkles, Compass, CheckCircle2, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Healix Care | Healthcare Chain & Ecosystem Philosophy",
  description: "Learn about Healix Care — our mission, healthcare philosophy, brand values, and connected chain connecting pharmacy, laboratory, and clinical care."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              About Healix Care
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Healthcare With a Bigger Vision
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Healix Care is building a modern consumer-facing healthcare destination where pharmacy, diagnostic laboratory testing, and clinical care come together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad">
        <div className="container-healix">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2.5rem] bg-[var(--healix-soft)] p-8 md:p-12">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-green)] text-[var(--healix-lime)]">
                  <Compass size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-[var(--healix-text)]">Our Mission</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  To eliminate healthcare fragmentation by connecting everyday pharmacy advice, laboratory diagnostic testing, and clinical consultations into one trustworthy, transparent patient experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full rounded-[2.5rem] border border-[var(--healix-border)] bg-white p-8 md:p-12">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-lime)] text-[var(--healix-green)]">
                  <Sparkles size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-[var(--healix-text)]">Our Vision</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  To create a future where seeking healthcare is clear, comforting, and barrier-free—where modern diagnostic technology serves people, and patients feel truly supported.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--healix-green)] p-10 text-white shadow-xl md:p-14">
              <GeometricPattern variant="lime" className="opacity-20" />
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
                  Core Philosophy
                </span>
                <p className="mt-6 text-3xl font-extrabold leading-snug">
                  Designed around people, not paperwork.
                </p>
                <p className="mt-4 leading-7 text-white/75">
                  Healthcare should not require navigating isolated silos or deciphering medical jargon without support. Healix Care frames every service through human clarity.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <SectionHeading
                eyebrow="Ecosystem Foundation"
                title="Three care pillars under one cohesive brand."
                description="Rather than offering isolated medical services, Healix Care coordinates everyday health needs across three vital pillars."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Pharmacy: Transparent medication advice & verification",
                  "Laboratory: High-precision biomarker testing with readable reports",
                  "Clinics: Unhurried, empathetic consultations with primary physicians"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="size-5 shrink-0 text-[var(--healix-green)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-pad">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Healix Care Values"
              title="Principles that guide our care model."
              description="Six foundational values that inform our approach to pharmaceutical, laboratory, and clinical services."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Trust", desc: "Reliability, safety, and certified standards in every prescription and lab test." },
              { name: "Care", desc: "Empathetic listening and genuine concern for patient well-being." },
              { name: "Accessibility", desc: "Clear explanations without intimidating medical terminology." },
              { name: "Innovation", desc: "Purposeful technology that simplifies diagnostic access." },
              { name: "Community", desc: "A warm healthcare presence embedded within neighborhoods." },
              { name: "Professionalism", desc: "Uncompromising quality standards across doctors, pharmacists, and lab staff." }
            ].map(({ name, desc }, idx) => (
              <Reveal key={name} delay={idx * 0.08}>
                <div className="h-full rounded-3xl border border-[var(--healix-border)] bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] font-black text-lg">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-[var(--healix-text)]">{name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision CTA */}
      <section className="section-pad">
        <div className="container-healix rounded-[3rem] bg-[var(--healix-green)] px-8 py-16 text-center text-white md:px-14">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Looking Ahead</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">The Future of Connected Care</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              Healix Care is building a modular healthcare chain architecture, preparing for future phases including location finders, digital lab report portals, and telehealth integration.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-8 py-3.5 font-bold text-[var(--healix-text)] transition hover:bg-white"
            >
              <span>Discuss Partnership</span>
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
