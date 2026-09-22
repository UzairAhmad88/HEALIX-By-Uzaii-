import Link from "next/link";
import { ArrowRight, Pill, Building2, Stethoscope, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesOverviewSection() {
  return (
    <section className="section-pad bg-[#F7FAF8]">
      <div className="container-healix">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Healthcare & Pharmacy Solutions"
            description="Focused services built around community health access, pharmacy franchising, and future clinical care."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* 01 EVERYDAY PHARMACY (PRIMARY CORE SERVICE) */}
          <Reveal delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border-2 border-[#075A46] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#075A46]">01</span>
                  <span className="rounded-full bg-[var(--healix-lime)] px-3 py-1 text-xs font-black uppercase text-[#10231E]">
                    PRIMARY SERVICE
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#10231E]">EVERYDAY PHARMACY</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Everyday pharmacy support and healthcare essentials designed around the needs of our community.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Verified prescription medicines & OTC products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Certified pharmacist consultation & advisory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Vitamins, wellness & clinical skincare
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-[#D8E7E0] pt-6">
                <Link
                  href="/pharmacy"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075A46] py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Explore Pharmacy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 02 PHARMACY FRANCHISEE (BUSINESS OPPORTUNITY) */}
          <Reveal delay={0.15}>
            <div className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#075A46] hover:shadow-xl md:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#075A46]">02</span>
                  <span className="rounded-full bg-[#EAF4EF] px-3 py-1 text-xs font-extrabold uppercase text-[#0E745B] border border-[#D8E7E0]">
                    FRANCHISE MODEL
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#10231E]">PHARMACY FRANCHISEE</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  A modern pharmacy franchising opportunity supported by Healix&apos;s business, operational and technology model.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Site selection & setup guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Staff training & operational blueprints
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#075A46]" />
                    Pharmacy technology & inventory software
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-[#D8E7E0] pt-6">
                <Link
                  href="/pharmacy-franchise"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7FAF8] border border-[#D8E7E0] py-3.5 text-sm font-extrabold text-[#10231E] transition hover:bg-[#075A46] hover:text-white hover:border-[#075A46]"
                >
                  <span>Explore Franchise</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 03 CLINICAL CARE (VISUALLY SECONDARY — COMING SOON) */}
          <Reveal delay={0.25}>
            <div className="group relative flex h-full flex-col justify-between rounded-[2.5rem] border border-dashed border-[#D8E7E0] bg-[#F7FAF8]/70 p-8 transition-all duration-300 md:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-400">03</span>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-black uppercase text-slate-700">
                    COMING SOON
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-700">CLINICAL CARE</h3>
                <p className="mt-4 text-base leading-7 text-slate-500">
                  Future clinical care services as Healix continues to grow.
                </p>

                <p className="mt-6 text-xs text-slate-500 leading-5 italic">
                  Planned expansion linking clinical consultation services directly with community pharmacy access.
                </p>
              </div>

              <div className="mt-8 border-t border-[#D8E7E0] pt-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white border border-[#D8E7E0] py-3.5 text-sm font-extrabold text-slate-600 transition hover:bg-[#EAF4EF] hover:text-[#075A46]"
                >
                  <span>Learn About Our Future</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
