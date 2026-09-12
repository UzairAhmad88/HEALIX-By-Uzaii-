import Link from "next/link";
import { ArrowRight, Pill, ShieldCheck, HeartPulse, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Services | Modern Pharmaceutical Advisory",
  description: "Discover Healix Pharmacy — a modern pharmaceutical care concept focused on medication advisory, prescription safety verification, and wellness support."
};

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              <Pill size={16} /> Pillar 01 · Pharmacy
            </div>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Modern Pharmaceutical Care
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Designed around clarity, dosage verification, and pharmacist accessibility—putting patient support ahead of transaction speed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview & Experience */}
      <section className="section-pad">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Pharmacy Overview</span>
              <h2 className="section-title mt-3">Rx Guidance Without Confusion</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Taking prescribed medication should never feel confusing. Healix Pharmacy provides clear visual dosage schedules, side-effect explanations, and private pharmacist consultations.
              </p>
              <div className="mt-8 space-y-3.5">
                {[
                  "Comprehensive contraindication & interaction screening",
                  "Clear dosage labeling with visual administration guides",
                  "Dedicated consultation desk for chronic medication questions",
                  "Cold-chain storage standards for sensitive biotics"
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
            <div className="rounded-[2.5rem] border border-[var(--healix-border)] bg-[var(--healix-soft)] p-8 md:p-12">
              <div className="grid size-16 place-items-center rounded-2xl bg-[var(--healix-green)] text-[var(--healix-lime)]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-[var(--healix-text)]">Safety Verification Protocol</h3>
              <p className="mt-3 text-slate-600">
                Every prescription undergoes a double-pass review by certified pharmacists to cross-reference dosage accuracy, patient allergy records, and drug-food interaction safety.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm border border-[var(--healix-border)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">Standard of Care</p>
                <p className="mt-1 text-sm font-extrabold text-[var(--healix-text)]">100% Verification Coverage Prior to Fulfillment</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Comprehensive Pharmaceutical Support"
              description="A structured suite of services built to assist individuals and families with long-term health management."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Medication Advisory", icon: Pill, desc: "In-depth guidance on correct usage, timing, and storage of prescription drugs." },
              { title: "Specialty Pharmacy", icon: HeartPulse, desc: "Targeted support for complex regimens and chronic conditions." },
              { title: "Wellness Essentials", icon: Sparkles, desc: "Curated clinical supplements, vitamins, and skincare products." },
              { title: "Refill Coordination", icon: Clock, desc: "Automated reminders and synchronization for recurring prescriptions." }
            ].map(({ title, icon: Icon, desc }, idx) => (
              <Reveal key={title} delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-[var(--healix-border)] bg-white p-8">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[var(--healix-text)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility & Tech Vision */}
      <section className="section-pad">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[var(--healix-green)] p-10 text-white md:p-14">
              <h3 className="text-3xl font-extrabold">Technology Vision</h3>
              <p className="mt-4 leading-7 text-white/80">
                Future iterations of Healix Pharmacy will support digital prescription uploads, automated refill scheduling, and direct chat consultations with licensed pharmacists.
              </p>
              <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-mono text-[var(--healix-lime)]">Note: E-commerce purchasing and online medicine checkouts are disabled in this portfolio showcase edition.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <SectionHeading
                eyebrow="Accessibility & Care"
                title="Healthcare should feel approachable."
                description="Our pharmacy design eliminates high counters and noisy environments, replacing them with warm, accessible consultation spaces."
              />
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--healix-green)] px-7 py-3.5 font-bold text-white transition hover:bg-[var(--healix-green-2)]"
                >
                  <span>Inquire About Pharmacy Partnerships</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
