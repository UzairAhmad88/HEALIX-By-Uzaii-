import Link from "next/link";
import { ArrowRight, Pill, FlaskConical, Stethoscope, CheckCircle2, Cpu } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem Services | Pharmacy, Laboratory & Clinics",
  description: "Explore Healix ecosystem services connecting modern pharmacy advisory, diagnostic laboratory testing, and patient-centered clinical care."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--healix-green)] py-20 text-white md:py-28">
        <GeometricPattern variant="lime" className="opacity-20" />
        <div className="container-healix relative z-10">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              Ecosystem Overview
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Healthcare Designed Around You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Discover how Healix integrates pharmaceutical advice, diagnostic laboratory science, and primary clinical care under one connected vision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Three Core Pillars"
              title="Integrated Healthcare Capabilities"
              description="Each service operates with independent excellence while sharing unified patient data protocols and communication standards."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.15}>
                <ServiceCard
                  icon={
                    service.id === "pharmacy" ? (
                      <Pill size={28} />
                    ) : service.id === "laboratory" ? (
                      <FlaskConical size={28} />
                    ) : (
                      <Stethoscope size={28} />
                    )
                  }
                  category={service.category}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  features={service.features}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Synergistic User Journey */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="How Services Work Together"
              title="The Connected Care Advantage"
              description="Eliminating redundant data entry and paperwork carrying between your doctor, laboratory, and pharmacist."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01. Clinical Visit",
                title: "Diagnosis & Consult",
                desc: "Your doctor reviews symptoms, orders necessary laboratory tests, or writes a prescription directly into your Healix profile."
              },
              {
                step: "02. Lab Processing",
                title: "Diagnostic Screening",
                desc: "Laboratory technicians perform precision testing and upload clear, structured report data back to your care team."
              },
              {
                step: "03. Pharmacy Delivery",
                title: "Medication Advisory",
                desc: "Your pharmacist verifies the dosage, checks contraindications, and provides clear usage guidance."
              }
            ].map(({ step, title, desc }, idx) => (
              <Reveal key={step} delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-[var(--healix-border)] bg-white p-8">
                  <span className="text-xs font-black uppercase tracking-wider text-[var(--healix-green-2)]">{step}</span>
                  <h3 className="mt-4 text-2xl font-extrabold text-[var(--healix-text)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Vision */}
      <section className="section-pad">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">
                Technology Vision
              </span>
              <h2 className="section-title mt-4">Future-Ready Healthcare Infrastructure</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                While Healix currently acts as an informational showcase, our underlying technical blueprint is designed for modular expansion into telemedicine, digital lab booking, and electronic health record integration.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "HIPAA & GDPR compliant data privacy architecture",
                  "Modular microservice APIs for third-party lab & pharmacy sync",
                  "Consent-driven record sharing controlled entirely by the patient"
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
            <div className="rounded-[2.5rem] bg-[var(--healix-green)] p-10 text-white shadow-xl md:p-14">
              <div className="grid size-16 place-items-center rounded-2xl bg-[var(--healix-lime)] text-[var(--healix-green)]">
                <Cpu size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold">Extensible Platform Blueprint</h3>
              <p className="mt-3 leading-7 text-white/75">
                Built with modern React Server Components, Next.js App Router, and strict TypeScript types to support high availability and secure data transmission.
              </p>
              <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-mono text-[var(--healix-lime)]">API Status: Ready for CMS / Provider Integration</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-[var(--healix-soft)]">
        <div className="container-healix rounded-[3rem] bg-[var(--healix-green)] px-8 py-16 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">Explore Specific Pillars</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Deep-dive into our individual pharmacy, laboratory diagnostics, or clinical care frameworks.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/pharmacy" className="rounded-full bg-[var(--healix-lime)] px-6 py-3 font-bold text-[var(--healix-text)] hover:bg-white">Pharmacy</Link>
              <Link href="/laboratory" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/15">Laboratory</Link>
              <Link href="/clinics" className="rounded-full border border-white/30 px-6 py-3 font-bold text-white hover:bg-white/15">Clinics</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
