import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Cpu,
  Headphones,
  CheckCircle2,
  HelpCircle,
  Phone,
  Mail,
  Store,
  Layers,
  Sparkles
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacy Franchise Opportunity | Healix",
  description: "Join the Healix pharmacy franchise model and build a modern pharmacy business with end-to-end setup, operational, and technology support."
};

export default function PharmacyFranchisePage() {
  return (
    <>
      {/* 01 HERO BANNER */}
      <section className="relative overflow-hidden bg-[#075A46] pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <div className="container-healix relative z-10 grid items-center gap-12 lg:grid-cols-12">
          <Reveal direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--healix-lime)] backdrop-blur-md">
              <Store size={14} /> Franchise Business Opportunity
            </div>

            <h1 className="display-title mt-6 max-w-3xl font-extrabold tracking-tight text-white leading-[1.04]">
              Build your pharmacy with <br className="hidden sm:inline" />
              <span className="text-[var(--healix-lime)]">Healix.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 md:text-xl md:leading-9 font-medium">
              Join the Healix pharmacy franchise model and build a modern pharmacy business supported across setup, site evaluation, staff training, stock fulfillment, and technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=franchise"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span>Request Information</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href="#franchise-structure"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-extrabold text-white transition hover:bg-white/15"
              >
                <span>Explore Model</span>
              </a>
            </div>
          </Reveal>

          {/* Right Hero Image */}
          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/pharmacy-franchise.jpg"
                  alt="Healix Franchise Storefront Environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075A46]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--healix-lime)]">Healix Franchise</p>
                  <p className="text-lg font-extrabold text-white">Structured Operational Excellence</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 INTRODUCTION & OVERVIEW */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
              Franchise Introduction
            </span>
            <h2 className="section-title mt-4 text-[#10231E]">A complete operational framework for pharmacy partners.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From initial site selection and regulatory licensing guidance to staff training, inventory systems, technology and ongoing operational assistance, Healix is building a structured franchise experience for business owners and healthcare professionals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 WHAT WE OFFER — 4 CORE PILLARS */}
      <section id="franchise-structure" className="section-pad bg-white scroll-mt-24">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Support Structure"
              title="What We Offer"
              description="Four comprehensive pillars guiding your pharmacy setup, launch, and daily operations."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "SETUP & COMPLIANCE",
                icon: Building2,
                items: [
                  "Location guidance & demographic analysis",
                  "Site evaluation & architectural planning",
                  "Category & licensing guidance",
                  "Initial store setup assistance"
                ]
              },
              {
                step: "02",
                title: "OPERATIONS & TRAINING",
                icon: ShieldCheck,
                items: [
                  "Staff training & onboarding SOPs",
                  "Customer service standards",
                  "Initial stock fulfillment support",
                  "Operational management blueprints"
                ]
              },
              {
                step: "03",
                title: "TECHNOLOGY & GROWTH",
                icon: Cpu,
                items: [
                  "Pharmacy management software",
                  "Inventory control & reordering systems",
                  "Point-of-sale retail management",
                  "Digital prescription workflow tools"
                ]
              },
              {
                step: "04",
                title: "ONGOING SUPPORT",
                icon: Headphones,
                items: [
                  "Dedicated software & IT assistance",
                  "Continuous operational guidance",
                  "Supply chain coordination",
                  "Brand standard maintenance"
                ]
              }
            ].map(({ step, title, icon: Icon, items }, idx) => (
              <Reveal key={step} delay={idx * 0.08}>
                <div className="group h-full rounded-[2.5rem] border border-[#D8E7E0] bg-[#F7FAF8] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#075A46] hover:bg-white hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#075A46]">{step}</span>
                    <div className="grid size-10 place-items-center rounded-xl bg-[#EAF4EF] text-[#075A46] group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-black tracking-wide text-[#10231E]">{title}</h3>
                  <div className="mt-6 space-y-3">
                    {items.map((it) => (
                      <div key={it} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="mt-0.5 size-4 text-[#075A46] shrink-0" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 OPERATIONAL STEP-BY-STEP JOURNEY */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Franchise Journey"
              title="How to start your franchise enquiry."
              description="A clear, structured path from initial request to detailed discussion."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { num: "01", title: "Submit Request", desc: "Fill out the online request form with your target city, mobile, and budget details." },
              { num: "02", title: "Initial Call", desc: "Our franchise team conducts a introductory discussion to review your interest." },
              { num: "03", title: "Site & Model Review", desc: "Evaluate location guidance, site feasibility, and detailed operational requirements." },
              { num: "04", title: "Setup & Onboarding", desc: "Proceed with store layout, staff training, stock fulfillment, and technology integration." }
            ].map(({ num, title, desc }, idx) => (
              <Reveal key={num} delay={idx * 0.1}>
                <div className="rounded-[2rem] border border-[#D8E7E0] bg-white p-7 shadow-sm">
                  <span className="text-2xl font-black text-[#075A46]">{num}</span>
                  <h3 className="mt-4 text-lg font-extrabold text-[#10231E]">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 FRANCHISE FAQ */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Franchise Questions"
              title="Frequently Asked Questions"
              description="Clear answers regarding the Healix pharmacy franchise opportunity."
              align="center"
            />
          </Reveal>

          <div className="mt-12 mx-auto max-w-3xl space-y-6">
            {[
              {
                q: "What is the Healix pharmacy franchise model?",
                a: "The Healix franchise model enables business partners to open and operate a modern pharmacy under the Healix brand, backed by complete setup guidance, staff training, stock support, and management technology."
              },
              {
                q: "What support is provided during setup?",
                a: "We assist with site feasibility evaluation, store layout planning, licensing guidance, staff onboarding standards, and initial inventory stocking."
              },
              {
                q: "Is location support available?",
                a: "Yes, our team provides location guidance and site evaluation criteria to help identify suitable retail pharmacy locations in your target city."
              },
              {
                q: "Is staff training provided?",
                a: "Yes, structured training SOPs cover pharmacist advisory standards, point-of-sale management, inventory control, and customer service."
              },
              {
                q: "Is technology support available?",
                a: "Every franchise is equipped with pharmacy management software, inventory tracking tools, and ongoing IT support."
              },
              {
                q: "What information is required to start a franchise enquiry?",
                a: "Simply submit your name, email, mobile number, target city, and estimated budget range through our Request Information form."
              }
            ].map(({ q, a }, idx) => (
              <Reveal key={q} delay={idx * 0.05}>
                <div className="rounded-[2rem] border border-[#D8E7E0] bg-[#F7FAF8] p-7 transition hover:border-[#075A46]">
                  <h3 className="text-base font-extrabold text-[#10231E]">{q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CONVERSION CALLOUT & REQUEST INFORMATION CTA */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <div className="relative overflow-hidden rounded-[3rem] bg-[#075A46] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
              <div className="relative z-10 mx-auto max-w-3xl">
                <span className="inline-block rounded-full bg-[var(--healix-lime)] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#10231E]">
                  Franchise Enquiry
                </span>
                <h2 className="display-title mt-6 text-3xl font-extrabold tracking-tight md:text-5xl text-white">
                  Ready to build your pharmacy business?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                  Submit your request today. Our franchise team will review your city and budget information and connect with you directly.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact?type=franchise"
                    className="inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-9 py-4 text-base font-extrabold text-[#10231E] transition-all hover:bg-white hover:shadow-xl"
                  >
                    <span>Request Information</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
