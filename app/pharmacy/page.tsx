import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Pill, ShieldCheck, HeartPulse, Clock, CheckCircle2, Phone, Mail, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicineRangeSection } from "@/components/sections/MedicineRangeSection";
import { MedicineRangeReminder } from "@/components/sections/MedicineRangeReminder";
import { ServicesQuestionCTA } from "@/components/sections/ServicesQuestionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Everyday Pharmacy Services | Healix",
  description: "Discover Healix Everyday Pharmacy — medication advisory, authentic prescription fulfillment, and complete medicine range."
};

export default function PharmacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#075A46] py-20 text-white md:py-28">
        <div className="container-healix relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              <Pill size={16} /> Everyday Pharmacy
            </div>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Modern Pharmacy Care, Designed Around You.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Everyday healthcare essentials, transparent medication guidance, and certified pharmacist support—putting community care ahead of transaction speed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview & Pharmacy Experience */}
      <section className="section-pad bg-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0E745B]">Pharmacy Overview</span>
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

      {/* Complete Medicine Range Section */}
      <MedicineRangeSection
        id="medicine-range"
        eyebrow="Product Range"
        title="Medicine Range & Categories"
        description="Explore our full selection of prescription medicines, over-the-counter health items, vitamins, and family wellness products."
      />

      {/* Franchise Opportunity Callout on Pharmacy Page */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <div className="rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF4EF] px-3.5 py-1 text-xs font-extrabold uppercase text-[#0E745B] border border-[#D8E7E0]">
                    <Building2 size={14} /> Franchise Partnership
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold text-[#10231E]">Interested in opening a Healix pharmacy?</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-xl">
                    Explore our structured pharmacy franchising model with full setup guidance, staff training, and software support.
                  </p>
                </div>
                <Link
                  href="/pharmacy-franchise"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Explore Franchise Model</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Have a Question Prompt */}
      <ServicesQuestionCTA />
    </>
  );
}
