import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Phone,
  Mail,
  Building2
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { articles } from "@/data/articles";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { MedicineRangeSection } from "@/components/sections/MedicineRangeSection";
import { FranchiseOverviewSection } from "@/components/sections/FranchiseOverviewSection";
import { MedicineRangeReminder } from "@/components/sections/MedicineRangeReminder";
import { ServicesQuestionCTA } from "@/components/sections/ServicesQuestionCTA";

export default function HomePage() {
  const pharmacyArticles = articles.filter(a => a.category === "Pharmacy" || a.category === "Health" || a.category === "Preventive Care").slice(0, 3);

  return (
    <>
      {/* Top Brand Announcement */}
      <aside aria-label="Brand Announcement" className="bg-[var(--healix-lime)] py-2.5 text-center text-xs font-black uppercase tracking-[0.18em] text-[#10231E]">
        <div className="container-healix flex items-center justify-center gap-2">
          <Activity size={14} />
          <span>Introducing Healix Care — A Modern Pharmacy & Franchise Network</span>
          <span className="hidden sm:inline">· Professional Support · Community Healthcare</span>
        </div>
      </aside>

      {/* 01 HERO SECTION (Deep Healix Green) */}
      <section className="relative overflow-hidden bg-[#075A46] pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <div className="container-healix relative z-10 grid items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <Reveal direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[var(--healix-lime)] backdrop-blur-md">
              <Activity size={14} /> HEALIX CARE
            </div>

            <h1 className="display-title mt-6 max-w-3xl font-extrabold tracking-tight text-white leading-[1.04]">
              Better Health <br className="hidden sm:inline" />
              <span className="text-[var(--healix-lime)]">Begins Here.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 md:text-xl md:leading-9 font-medium">
              Modern pharmacy care designed around your everyday health, with trusted support when you need it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/pharmacy"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/20"
              >
                <span>Explore Pharmacy</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/pharmacy-franchise"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:bg-white/15 hover:border-white/50"
              >
                <Building2 size={16} />
                <span>Explore Franchise</span>
              </Link>
            </div>

            {/* Quality Markers */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">100%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Verified Care</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">Certified</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Pharmacist Advice</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">Everyday</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Health Essentials</p>
              </div>
            </div>
          </Reveal>

          {/* Right Hero Visual — Single Strong Pharmacy Image */}
          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/pharmacy-interior.jpg"
                  alt="Modern Healix Care pharmacy environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075A46]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[var(--healix-lime)]">Modern Pharmacy</p>
                  <p className="text-lg font-extrabold text-white">Everyday Health & Wellness</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 PHARMACY INTRODUCTION */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
              Healix Care Pharmacy
            </span>
            <h2 className="section-title mt-4 text-[#10231E]">Your everyday healthcare, closer to you.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Healix Care brings a modern pharmacy experience together with professional support, everyday health essentials and a focus on the communities we serve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 OUR SERVICES (01 Everyday Pharmacy, 02 Pharmacy Franchisee, 03 Clinical Care — Coming Soon) */}
      <ServicesOverviewSection />

      {/* 04 MEDICINE RANGE */}
      <MedicineRangeSection
        eyebrow="Pharmacy Range"
        title="Medicine Range"
        description="Comprehensive healthcare essentials, prescription fulfillment, over-the-counter care, and wellness supplies."
      />

      {/* 05 WHY HEALIX CARE */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Our Principles"
              title="Why Healix Care?"
              description="Six core principles defining our approach to modern pharmacy care."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "TRUST",
                desc: "Professional and responsible pharmacy care focused on safety and authenticity."
              },
              {
                title: "CARE",
                desc: "A people-first healthcare experience with attentive pharmacist support."
              },
              {
                title: "ACCESS",
                desc: "Making everyday healthcare easier to reach for individuals and families."
              },
              {
                title: "SIMPLICITY",
                desc: "Clear, straightforward experiences without unnecessary jargon or complexity."
              },
              {
                title: "COMMUNITY",
                desc: "Built around the everyday healthcare needs of the communities we serve."
              },
              {
                title: "MODERN",
                desc: "A contemporary approach to pharmacy presentation, quality, and service."
              }
            ].map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <div className="group h-full rounded-[2rem] border border-[#D8E7E0] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#075A46] hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-[#0E745B]">0{idx + 1}</span>
                    <span className="rounded-full bg-[#EAF4EF] px-3 py-1 text-xs font-extrabold text-[#075A46]">{value.title}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-[#10231E]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 PHARMACY EXPERIENCE */}
      <section className="section-pad bg-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] shadow-lg">
              <Image
                src="/images/pharmacy-interior.jpg"
                alt="Healix Pharmacy Consultation Space"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div>
              <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#075A46] border border-[#D8E7E0]">
                Pharmacy Experience
              </span>
              <h2 className="section-title mt-4 text-[#10231E]">Healthcare should feel easier.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We believe accessing pharmacy support and everyday health products should be simple, welcoming, and reassuring.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Approachable pharmacy support & clear dosage advice",
                  "Verified, high-quality healthcare & wellness products",
                  "Convenient community access in a calm environment",
                  "Professional, unhurried human interaction"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/pharmacy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Explore Pharmacy Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 PHARMACY FRANCHISEE SECTION */}
      <FranchiseOverviewSection />

      {/* 08 HEALTH / WELLNESS INSIGHTS */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                  Health Editorial
                </span>
                <h2 className="section-title mt-4 text-[#10231E]">Pharmacy & Health Insights</h2>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#075A46] hover:underline"
              >
                <span>View All Articles</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pharmacyArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={idx * 0.1}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 MEDICINE RANGE REMINDER */}
      <MedicineRangeReminder />

      {/* 10 HAVE A QUESTION ABOUT OUR SERVICES? */}
      <ServicesQuestionCTA />
    </>
  );
}
