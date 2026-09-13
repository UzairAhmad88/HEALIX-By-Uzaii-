import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FlaskConical,
  HeartPulse,
  Pill,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
  Activity,
  Layers,
  Users,
  Building2,
  ArrowUpRight,
  Microchip,
  Award,
  Clock,
  MapPin
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { GeometricPattern } from "@/components/ui/GeometricPattern";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function HomePage() {
  return (
    <>
      {/* Top Brand Announcement */}
      <aside aria-label="Brand Announcement" className="bg-[var(--healix-lime)] py-2.5 text-center text-xs font-black uppercase tracking-[0.18em] text-[var(--healix-text)]">
        <div className="container-healix flex items-center justify-center gap-2">
          <Activity size={14} />
          <span>Introducing HEALIX — A Connected Healthcare Chain</span>
          <span className="hidden sm:inline">· Pharmacy · Laboratory · Clinics</span>
        </div>
      </aside>

      {/* 01 HERO SECTION (Deep Healix Green) */}
      <section className="relative overflow-hidden bg-[#075A46] pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <GeometricPattern variant="lime" className="opacity-25" />
        
        <div className="container-healix relative z-10 grid items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <Reveal direction="up" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[var(--healix-lime)] backdrop-blur-md">
              <Activity size={14} /> HEALIX
            </div>

            <h1 className="display-title mt-6 max-w-3xl font-extrabold tracking-tight text-white leading-[1.04]">
              Better Health <br className="hidden sm:inline" />
              <span className="text-[var(--healix-lime)]">Begins Here.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 md:text-xl md:leading-9 font-medium">
              Pharmacy, diagnostics and clinical care — connected through one modern healthcare experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/20"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:bg-white/15 hover:border-white/50"
              >
                <span>Discover HEALIX</span>
              </Link>
            </div>

            {/* Quality Markers */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">3</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Care Pillars</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">100%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Human-Centered</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[var(--healix-lime)] lg:text-3xl">Unified</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/70">Health Network</p>
              </div>
            </div>
          </Reveal>

          {/* Right Hero Editorial Visual */}
          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/hero-healthcare.jpg"
                  alt="Modern HEALIX UK healthcare environment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075A46]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-[var(--healix-lime)]">Modern Healthcare</p>
                    <p className="text-sm font-extrabold text-white">Pharmacy · Labs · Clinics</p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-xl bg-[var(--healix-lime)] text-[#075A46]">
                    <ShieldCheck size={18} />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 HEALTHCARE, CONNECTED (Off White) */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Healthcare Ecosystem"
              title="Healthcare, connected."
              description="One trusted destination for everyday pharmacy needs, diagnostics and clinical care."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Card 01: Pharmacy */}
            <Reveal delay={0.05}>
              <div className="group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#075A46]/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[var(--healix-lime)] bg-[#075A46] px-3 py-1 rounded-full">01</span>
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition-colors group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                      <Pill size={24} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#10231E] group-hover:text-[#075A46]">Pharmacy</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Everyday healthcare and professional pharmacy support, closer to your community.
                  </p>

                  <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#D8E7E0]">
                    <Image
                      src="/images/pharmacy-interior.jpg"
                      alt="HEALIX Community Pharmacy"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8E7E0] flex items-center justify-between">
                  <Link
                    href="/pharmacy"
                    className="inline-flex items-center gap-2 font-bold text-[#075A46] transition-all group-hover:gap-3"
                  >
                    <span>Explore Pharmacy</span>
                    <ArrowRight size={16} />
                  </Link>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#075A46] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Reveal>

            {/* Card 02: Laboratory */}
            <Reveal delay={0.15}>
              <div className="group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#075A46]/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[var(--healix-lime)] bg-[#075A46] px-3 py-1 rounded-full">02</span>
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition-colors group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                      <FlaskConical size={24} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#10231E] group-hover:text-[#075A46]">Laboratory</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Modern diagnostic services designed around clarity, confidence and a better healthcare experience.
                  </p>

                  <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#D8E7E0]">
                    <Image
                      src="/images/laboratory-diagnostics.jpg"
                      alt="HEALIX Laboratory Diagnostics"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8E7E0] flex items-center justify-between">
                  <Link
                    href="/laboratory"
                    className="inline-flex items-center gap-2 font-bold text-[#075A46] transition-all group-hover:gap-3"
                  >
                    <span>Explore Laboratory</span>
                    <ArrowRight size={16} />
                  </Link>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#075A46] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Reveal>

            {/* Card 03: Clinics */}
            <Reveal delay={0.25}>
              <div className="group flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#075A46]/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[var(--healix-lime)] bg-[#075A46] px-3 py-1 rounded-full">03</span>
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition-colors group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                      <Stethoscope size={24} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#10231E] group-hover:text-[#075A46]">Clinics</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Patient-centered clinical care in a welcoming, modern environment.
                  </p>

                  <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#D8E7E0]">
                    <Image
                      src="/images/clinic-consultation.jpg"
                      alt="HEALIX Medical Clinic Consultation"
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8E7E0] flex items-center justify-between">
                  <Link
                    href="/clinics"
                    className="inline-flex items-center gap-2 font-bold text-[#075A46] transition-all group-hover:gap-3"
                  >
                    <span>Explore Clinics</span>
                    <ArrowRight size={16} />
                  </Link>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-[#075A46] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 WHY HEALIX CARE (White) */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="Why HEALIX?"
              description="Healthcare should feel simpler. Six principles that define our care model."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "TRUST",
                icon: ShieldCheck,
                desc: "Professional healthcare services guided by rigorous quality standards."
              },
              {
                title: "CARE",
                icon: HeartPulse,
                desc: "Compassionate, patient-centered consultations where listening comes first."
              },
              {
                title: "ACCESS",
                icon: Building2,
                desc: "Healthcare embedded in communities, eliminating unnecessary barriers."
              },
              {
                title: "CONNECTION",
                icon: Layers,
                desc: "Pharmacy, diagnostics, and clinical care working as one unified team."
              },
              {
                title: "QUALITY",
                icon: Award,
                desc: "ISO-aligned laboratory protocols and verified prescription safety."
              },
              {
                title: "INNOVATION",
                icon: Microchip,
                desc: "Purposeful technology designed to make everyday health easier."
              }
            ].map(({ title, icon: Icon, desc }, idx) => (
              <Reveal key={title} delay={idx * 0.08}>
                <div className="group h-full rounded-3xl border border-[#D8E7E0] bg-[#F7FAF8] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#075A46] hover:bg-white hover:shadow-lg">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition-colors group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
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

      {/* 04 PHARMACY SECTION (Soft Green) */}
      <section className="section-pad bg-[#EAF4EF]">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div>
              <span className="rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                Pharmacy Chain
              </span>
              <h2 className="section-title mt-4 text-[#10231E]">Your everyday healthcare, closer to you.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Everyday healthcare and professional pharmacy support, closer to your community. We prioritize medication dosage clarity, consultation availability, and prescription safety verification.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#D8E7E0] bg-white p-5 shadow-sm">
                  <h4 className="font-extrabold text-[#075A46]">Medication Advisory</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-600">Clear explanations of dosages, timing, and storage.</p>
                </div>
                <div className="rounded-2xl border border-[#D8E7E0] bg-white p-5 shadow-sm">
                  <h4 className="font-extrabold text-[#075A46]">Everyday Wellness</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-600">Curated health supplements and clinical essentials.</p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/pharmacy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3.5 font-bold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Explore Pharmacy</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-white p-4 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/pharmacy-interior.jpg"
                  alt="HEALIX Pharmacy Consultation Room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 LABORATORY SECTION (Dark Green) */}
      <section className="section-pad bg-[#0E745B] text-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-6 lg:order-2">
            <div>
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--healix-lime)]">
                Diagnostic Laboratory Network
              </span>
              <h2 className="section-title mt-4 text-white">Better understanding starts with better diagnostics.</h2>
              <p className="mt-6 text-lg leading-8 text-white/80">
                Modern diagnostic services designed around clarity, confidence and a better healthcare experience. Accurate testing converts symptoms into clear visual biomarker guidance.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="size-5 text-[var(--healix-lime)] shrink-0" />
                  <span className="font-semibold">ISO-aligned testing quality procedures</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="size-5 text-[var(--healix-lime)] shrink-0" />
                  <span className="font-semibold">Readable visual summary reports for patients</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="size-5 text-[var(--healix-lime)] shrink-0" />
                  <span className="font-semibold">Direct synchronization with clinical records</span>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/laboratory"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-7 py-3.5 font-bold text-[#10231E] transition hover:bg-white"
                >
                  <span>Explore Laboratory</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="lg:col-span-6 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/laboratory-diagnostics.jpg"
                  alt="HEALIX Laboratory Testing Equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 CLINICS SECTION (White) */}
      <section className="section-pad bg-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div>
              <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                Clinics Network
              </span>
              <h2 className="section-title mt-4 text-[#10231E]">Care that starts with listening.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Patient-centered clinical care in a welcoming, modern environment. HEALIX Clinics connect individuals and families with compassionate general practitioners and specialists.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F7FAF8] p-5 border border-[#D8E7E0]">
                  <p className="text-xl font-extrabold text-[#075A46]">Primary Care</p>
                  <p className="mt-1 text-xs text-slate-500">Unhurried consultations</p>
                </div>
                <div className="rounded-2xl bg-[#F7FAF8] p-5 border border-[#D8E7E0]">
                  <p className="text-xl font-extrabold text-[#075A46]">Specialist Care</p>
                  <p className="mt-1 text-xs text-slate-500">Coordinated referrals</p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/clinics"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3.5 font-bold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Explore Clinics</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-[#F7FAF8] p-4 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/clinic-consultation.jpg"
                  alt="HEALIX Clinic Consultation Room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 HEALTHCARE JOURNEY (Off White) */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Care Experience Flow"
              title="A clear four-step care flow."
              description="Connecting discovery, access, consultation, and ongoing wellness into one continuous journey."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "DISCOVER",
                desc: "Understand your everyday health needs through clear, accessible guidance."
              },
              {
                step: "02",
                title: "CONNECT",
                desc: "Access the right HEALIX service—pharmacy advisory, diagnostic lab, or clinic consult."
              },
              {
                step: "03",
                title: "CARE",
                desc: "Receive professional, empathetic support in a comforting environment."
              },
              {
                step: "04",
                title: "CONTINUE",
                desc: "Stay informed about your long-term health with clear follow-up and diagnostic trends."
              }
            ].map(({ step, title, desc }, idx) => (
              <Reveal key={step} delay={idx * 0.1}>
                <div className="relative h-full rounded-3xl border border-[#D8E7E0] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#075A46]">
                  <span className="text-xs font-black text-[#075A46] bg-[#EAF4EF] px-3 py-1 rounded-full">{step}</span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#10231E]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 LOCATIONS / NETWORK (White) */}
      <section className="section-pad bg-white">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div>
              <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                Network Presence
              </span>
              <h2 className="section-title mt-4 text-[#10231E]">Healthcare, closer to your community.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                HEALIX is expanding as a physical and digital healthcare chain. Our goal is to bring connected pharmacy, lab testing, and clinic care to your neighborhood.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <Building2 className="size-5 text-[#075A46]" />
                  <span>Physical pharmacy, lab, and clinic location centers</span>
                </div>
                <div className="flex items-center gap-3 font-semibold text-slate-700">
                  <MapPin className="size-5 text-[#075A46]" />
                  <span>Convenient community-based healthcare destinations</span>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#F7FAF8] px-5 py-4 border border-[#D8E7E0]">
                <Clock className="size-5 text-[#075A46]" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#0E745B]">Branch Expansion</p>
                  <p className="text-sm font-extrabold text-[#10231E]">More HEALIX locations coming soon</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#075A46] p-8 text-white shadow-xl md:p-12">
              <GeometricPattern variant="lime" className="opacity-25" />
              <div className="relative z-10">
                <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[var(--healix-lime)]">
                  Network Architecture
                </span>
                <h3 className="mt-6 text-2xl font-extrabold">Healthcare Chain Network</h3>
                <p className="mt-3 leading-7 text-white/75">
                  Future platform updates will feature an interactive location finder to locate nearby HEALIX pharmacies, labs, and clinics with real-time hours.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Pill className="mx-auto text-[var(--healix-lime)]" size={24} />
                    <p className="mt-2 text-xs font-bold">Pharmacies</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <FlaskConical className="mx-auto text-[var(--healix-lime)]" size={24} />
                    <p className="mt-2 text-xs font-bold">Labs</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Stethoscope className="mx-auto text-[var(--healix-lime)]" size={24} />
                    <p className="mt-2 text-xs font-bold">Clinics</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 PORTFOLIO SHOWCASE (Soft Green) */}
      <section className="section-pad bg-[#EAF4EF]">
        <div className="container-healix">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0E745B]">Initiatives Portfolio</p>
                <h2 className="section-title mt-2 text-[#10231E]">Building the future of healthcare.</h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-bold text-[#075A46] transition hover:gap-3"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.15}>
                <PortfolioCard project={project} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 INSIGHTS SECTION (White) */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0E745B]">Health & Wellness Insights</p>
                <h2 className="section-title mt-2 text-[#10231E]">Useful healthcare knowledge, simply explained.</h2>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 font-bold text-[#075A46] transition hover:gap-3"
              >
                <span>View All Insights</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((article, idx) => (
              <Reveal key={article.slug} delay={idx * 0.1}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 FINAL CTA (Deep Healix Green) */}
      <section className="section-pad bg-white">
        <div className="container-healix relative overflow-hidden rounded-[3rem] bg-[#075A46] px-8 py-20 text-center text-white shadow-2xl md:px-16 md:py-24">
          <GeometricPattern variant="lime" className="opacity-25" />
          
          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal>
              <span className="inline-block rounded-full bg-[var(--healix-lime)] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#10231E]">
                Start a Conversation
              </span>
              <h2 className="display-title mt-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl text-white">
                Better health starts with better care.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Discover a more connected healthcare experience with HEALIX.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all hover:bg-white hover:shadow-xl"
                >
                  <span>Talk to HEALIX</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-extrabold text-white transition hover:bg-white/20"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
