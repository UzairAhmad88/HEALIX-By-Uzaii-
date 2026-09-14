import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Pill, ShieldCheck, HeartPulse, Clock, CheckCircle2, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Services | Healix",
  description: "Discover Healix Pharmacy — a modern pharmaceutical care concept focused on medication advisory, prescription safety verification, and everyday wellness support."
};

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#075A46] py-20 text-white md:py-28">
        <div className="container-healix relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              <Pill size={16} /> Healix Pharmacy
            </div>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Modern Pharmacy Care, Designed Around You.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Everyday healthcare essentials, transparent medication guidance, and certified advisory—putting personal support ahead of transaction speed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview & Pharmacy Experience */}
      <section className="section-pad bg-white">
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
                  "Dedicated consultation for chronic medication questions",
                  "Cold-chain storage standards for temperature-sensitive supplies"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="size-5 shrink-0 text-[#075A46]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[2.5rem] border border-[#D8E7E0] bg-[#F7FAF8] p-8 md:p-12">
              <div className="grid size-16 place-items-center rounded-2xl bg-[#075A46] text-[var(--healix-lime)]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-[#10231E]">Safety Verification Protocol</h3>
              <p className="mt-3 text-slate-600">
                Every prescription undergoes a thorough review by certified pharmacists to cross-reference dosage accuracy, patient allergy records, and drug interaction safety.
              </p>
              <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm border border-[#D8E7E0]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0E745B]">Standard of Care</p>
                <p className="mt-1 text-sm font-extrabold text-[#10231E]">100% Verification & Authenticity Guarantee</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pharmacy Services & Categories */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Pharmacy Services"
              title="Everyday Healthcare Categories"
              description="A structured suite of services built to assist individuals and families with long-term health management."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Prescription Medicines", icon: Pill, desc: "In-depth guidance on correct usage, timing, and storage of prescription drugs." },
              { title: "Over-the-Counter Care", icon: HeartPulse, desc: "Trusted solutions for everyday ailments, pain management, and wellness." },
              { title: "Wellness & Vitamins", icon: ShieldCheck, desc: "Curated clinical supplements, vitamins, and daily preventive health items." },
              { title: "Pharmacy Support", icon: Clock, desc: "Direct consultation with certified pharmacists for dosing and safety queries." }
            ].map(({ title, icon: Icon, desc }, idx) => (
              <Reveal key={title} delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-[#D8E7E0] bg-white p-8">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[#10231E]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility & Future Vision */}
      <section className="section-pad bg-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#075A46] p-10 text-white md:p-14">
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[var(--healix-lime)]">
                Looking Ahead
              </span>
              <h3 className="mt-6 text-3xl font-extrabold">Today, Pharmacy. Tomorrow, More Ways to Care.</h3>
              <p className="mt-4 leading-7 text-white/80">
                Healix is focused on building an exceptional pharmacy experience today, while laying the groundwork for integrated healthcare services in the future.
              </p>
              <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-xs font-mono text-[var(--healix-lime)]">Healix Pharmacy is dedicated to community health access and prescription authenticity.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <SectionHeading
                eyebrow="Accessibility & Human Care"
                title="Healthcare should feel approachable."
                description="Our pharmacy design prioritizes welcoming environments, warm consultation spaces, and human listening."
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <Phone className="size-5 text-[#075A46]" />
                  <a href="tel:+923160000000" className="hover:underline">+92 316 0000000</a>
                </div>
                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <Mail className="size-5 text-[#075A46]" />
                  <a href="mailto:info@healixcare.pk" className="hover:underline">info@healixcare.pk</a>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3.5 font-extrabold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Contact Healix</span>
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
