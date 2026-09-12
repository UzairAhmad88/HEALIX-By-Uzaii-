import Link from "next/link";
import { ArrowRight, Stethoscope, Users, Heart, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Care | Human-Centered Medical Consultations",
  description: "Discover Healix Clinics — primary care and specialist clinical consultations designed around patient comfort, active listening, and unhurried visits."
};

export default function ClinicsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              <Stethoscope size={16} /> Pillar 03 · Clinical Care
            </div>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Human-Centered Primary & Specialty Care
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Clinical consultations designed around unhurried listening, quiet comforting spaces, and seamless connection to lab diagnostics and pharmacy care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className="section-pad">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--healix-green-2)]">Clinical Philosophy</span>
              <h2 className="section-title mt-3">Care That Begins With Listening</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Medical consultations should never feel rushed or transactional. Healix Clinics structure appointment schedules to allow doctors ample time to understand patient concerns.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "Unhurried 30-minute primary care consultation blocks",
                  "Integrated access to your Healix laboratory test results",
                  "Comforting physical and digital reception environments",
                  "Direct coordination with specialty medical consultants"
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
                <Heart size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-[var(--healix-text)]">Patient Comfort First</h3>
              <p className="mt-3 text-slate-600">
                From quiet intake spaces to clean digital summaries given at the end of every visit, we eliminate clinical anxiety.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm border border-[var(--healix-border)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">Care Standard</p>
                <p className="mt-1 text-sm font-extrabold text-[var(--healix-text)]">Comprehensive Care Plan Provided Post-Consultation</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clinical Specialties */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Clinical Focus Areas"
              title="Primary & Preventive Specialties"
              description="General practice and coordinated referrals designed for total family health."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Family Medicine", desc: "Routine checkups, physicals, and long-term health monitoring for all ages." },
              { title: "Preventive Screening", desc: "Cardiovascular risk evaluations and metabolic checkups." },
              { title: "Chronic Care", desc: "Long-term management plans for hypertension, diabetes, and wellness." },
              { title: "Specialist Network", desc: "Direct coordination with cardiologists, endocrinologists, and pediatricians." }
            ].map(({ title, desc }, idx) => (
              <Reveal key={title} delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-[var(--healix-border)] bg-white p-8">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)]">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[var(--healix-text)]">{title}</h3>
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
            <h2 className="text-3xl font-extrabold md:text-5xl">Connect With Healix Clinics</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Learn more about our clinical care philosophy or inquire about healthcare ecosystem partnerships.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-8 py-3.5 font-bold text-[var(--healix-text)] hover:bg-white"
            >
              <span>Contact Clinical Team</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
