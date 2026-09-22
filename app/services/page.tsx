import Link from "next/link";
import { ArrowRight, Pill, CheckCircle2, Phone, Mail, Stethoscope, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { MedicineRangeSection } from "@/components/sections/MedicineRangeSection";
import { ServicesQuestionCTA } from "@/components/sections/ServicesQuestionCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Overview | Healix Care",
  description: "Explore Healix Care services — Everyday Pharmacy, Pharmacy Franchisee opportunities, and upcoming clinical care directions."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#075A46] py-20 text-white md:py-28">
        <div className="container-healix relative z-10">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              Services Overview
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              Pharmacy First Healthcare Experience
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Discover how Healix Care brings modern pharmacy support, authentic medication guidance, and structured franchising opportunities to local communities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Overview: 01 Everyday Pharmacy, 02 Pharmacy Franchisee, 03 Clinical Care */}
      <ServicesOverviewSection />

      {/* Medicine Range Display */}
      <MedicineRangeSection
        eyebrow="Medication Catalogue"
        title="Medicine Range & Health Essentials"
        description="Browse our approved categories for prescription medicines, over-the-counter care, wellness supplements, and personal care products."
      />

      {/* Have a Question Prompt */}
      <ServicesQuestionCTA />
    </>
  );
}
