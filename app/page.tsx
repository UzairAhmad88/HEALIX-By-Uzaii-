import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartPulse,
  Pill,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Users,
  Building2,
  Clock,
  Sparkles,
  Phone,
  Mail,
  HelpCircle,
  Sparkle,
  Layers,
  SparklesIcon
} from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { articles } from "@/data/articles";

export default function HomePage() {
  const pharmacyArticles = articles.filter(a => a.category === "Pharmacy" || a.category === "Health" || a.category === "Preventive Care").slice(0, 3);

  return (
    <>
      {/* Top Brand Announcement */}
      <aside aria-label="Brand Announcement" className="bg-[var(--healix-lime)] py-2.5 text-center text-xs font-black uppercase tracking-[0.18em] text-[#10231E]">
        <div className="container-healix flex items-center justify-center gap-2">
          <Activity size={14} />
          <span>Introducing Healix — A Modern Pharmacy Experience</span>
          <span className="hidden sm:inline">· Professional Support · Everyday Health</span>
        </div>
      </aside>

      {/* 01 HERO SECTION (Deep Healix Green) */}
      <section className="relative overflow-hidden bg-[#075A46] pt-28 pb-20 text-white md:pt-36 md:pb-28">
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:bg-white/15 hover:border-white/50"
              >
                <span>Contact Us</span>
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

          {/* Right Hero Visual - Single Strong Pharmacy Image */}
          <Reveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/pharmacy-interior.jpg"
                  alt="Modern Healix pharmacy environment"
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

      {/* 02 PHARMACY INTRODUCTION (Off White) */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
              Healix Pharmacy
            </span>
            <h2 className="section-title mt-4 text-[#10231E]">Your everyday healthcare, closer to you.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Healix brings a modern pharmacy experience together with professional support, everyday health essentials and a focus on the people we serve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 WHY HEALIX (White - Asymmetric Layout) */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Our Principles"
              title="Why Healix?"
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
                <div className="group h-full rounded-[2rem] border border-[#D8E7E0] bg-[#F7FAF8] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#075A46] hover:bg-white hover:shadow-xl">
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

      {/* 04 PHARMACY EXPERIENCE (Soft Green Split Editorial) */}
      <section className="section-pad bg-[#EAF4EF]/50">
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
              <span className="rounded-full bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#075A46] border border-[#D8E7E0]">
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

      {/* 05 PHARMACY SERVICES & CATEGORIES (White) */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Pharmacy Categories"
              title="More than a pharmacy."
              description="A healthcare experience designed to make everyday care simpler, more accessible and more personal."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Prescription Medicines",
                desc: "Verified prescription fulfillment with clear instructions and dosage guidance."
              },
              {
                title: "Over-the-Counter Healthcare",
                desc: "Trusted solutions for everyday ailments, cold care, allergy relief, and pain management."
              },
              {
                title: "Wellness & Supplements",
                desc: "Essential vitamins, minerals, and preventive health products for long-term wellbeing."
              },
              {
                title: "Personal Care",
                desc: "Dermatological skincare, hygiene essentials, and personal health supplies."
              },
              {
                title: "Health Essentials",
                desc: "First aid supplies, monitoring devices, and daily health management items."
              },
              {
                title: "Pharmacy Advisory",
                desc: "Direct access to certified pharmacists for questions on dosing, safety, and storage."
              }
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div className="rounded-[2rem] border border-[#D8E7E0] bg-[#F7FAF8] p-8 transition hover:-translate-y-1 hover:border-[#075A46]">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46]">
                    <Pill size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[#10231E]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 PHARMACY EXPERIENCE FLOW (3 Steps) */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Pharmacy Flow"
              title="A simple, 3-step experience."
              description="Designed around clarity, comfort, and peace of mind."
              align="center"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "DISCOVER",
                desc: "Find what you need for your everyday health and wellness."
              },
              {
                step: "02",
                title: "CONNECT",
                desc: "Get approachable, professional pharmacy support and clear guidance."
              },
              {
                step: "03",
                title: "CARE",
                desc: "Take the next step with confidence, safety, and personalized attention."
              }
            ].map((st, idx) => (
              <Reveal key={st.step} delay={idx * 0.1}>
                <div className="rounded-[2rem] border border-[#D8E7E0] bg-white p-8 shadow-sm">
                  <span className="text-3xl font-black text-[#075A46]">{st.step}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-[#10231E]">{st.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 FUTURE CLINICS SECTION (SMALL, SUBTLE COMING SOON SECTION) */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-[#D8E7E0] bg-[#EAF4EF]/60 p-8 text-center md:p-12">
              <span className="inline-block rounded-full bg-[var(--healix-lime)] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#10231E]">
                COMING SOON
              </span>
              <h2 className="mt-5 text-2xl font-extrabold text-[#10231E] md:text-4xl">More care is coming.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
                We&apos;re looking ahead to a future where Healix can bring pharmacy and clinical care even closer together.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-7 py-3 text-sm font-extrabold text-white transition hover:bg-[#0E745B]"
                >
                  <span>Stay Connected</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 INSIGHTS (Lightweight Editorial) */}
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

      {/* 09 CONTACT CTA SECTION */}
      <section className="section-pad bg-white">
        <div className="container-healix relative overflow-hidden rounded-[3rem] bg-[#075A46] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-3xl">
            <Reveal>
              <span className="inline-block rounded-full bg-[var(--healix-lime)] px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#10231E]">
                Have a question?
              </span>
              <h2 className="display-title mt-6 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
                Better health begins with a conversation.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
                Reach out to the Healix team for general questions, pharmacy inquiries, or partnership discussions.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-extrabold">
                <a
                  href="tel:+923160000000"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Phone size={16} className="text-[var(--healix-lime)]" />
                  <span>+92 316 0000000</span>
                </a>
                <a
                  href="mailto:info@healixcare.pk"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
                >
                  <Mail size={16} className="text-[var(--healix-lime)]" />
                  <span>info@healixcare.pk</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all hover:bg-white hover:shadow-xl"
                >
                  <span>Contact Healix</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
