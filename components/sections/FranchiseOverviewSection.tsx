import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, ShieldCheck, Cpu, Headphones, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FranchiseOverviewSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-healix">
        {/* Top Header Badge */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                Franchise Opportunity
              </span>
              <h2 className="section-title mt-4 text-[#10231E]">Build your pharmacy with Healix Care.</h2>
            </div>
            <Link
              href="/pharmacy-franchise"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#075A46] hover:underline"
            >
              <span>Explore Full Franchise Model</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Short Intro + Compact Visual Grid */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          {/* Left Intro Text & CTA */}
          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-8 text-slate-600">
              Join the Healix Care pharmacy franchise model and build a modern pharmacy business with structured support across setup, location guidance, staff training, inventory systems, and technology.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From initial site selection to ongoing software and operational support, Healix Care delivers a complete operational framework so you can focus on serving your community.
            </p>

            {/* Quick Feature Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 font-bold text-[#10231E] text-sm">
                <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                <span>Site Evaluation & Setup Support</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-[#10231E] text-sm">
                <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                <span>Staff Training & Operations</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-[#10231E] text-sm">
                <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                <span>Initial Stock & Supply Guidance</span>
              </div>
              <div className="flex items-center gap-3 font-bold text-[#10231E] text-sm">
                <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                <span>Pharmacy Management Tech</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?type=franchise"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#075A46] hover:text-white hover:shadow-xl hover:shadow-[#075A46]/20"
              >
                <span>Request Information</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/pharmacy-franchise"
                className="inline-flex items-center gap-2 rounded-full border border-[#D8E7E0] bg-[#F7FAF8] px-7 py-4 text-base font-extrabold text-[#10231E] transition hover:bg-[#EAF4EF] hover:border-[#075A46]"
              >
                <span>Explore Franchise</span>
              </Link>
            </div>
          </Reveal>

          {/* Right Small Franchise Editorial Visual */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-[#F7FAF8] p-3 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/pharmacy-franchise.jpg"
                  alt="Healix Care Pharmacy Franchise Opportunity"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075A46]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--healix-lime)]">
                    Franchise Partner Network
                  </p>
                  <p className="text-base font-extrabold">Modern Operational Framework</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Benefit Highlights (4 Concise Cards) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "SETUP & COMPLIANCE",
              icon: Building2,
              desc: "Location guidance, site evaluation, category licensing assistance, and store layout support."
            },
            {
              title: "OPERATIONS & TRAINING",
              icon: ShieldCheck,
              desc: "Staff training modules, operational SOPs, customer service standards, and initial stock guidance."
            },
            {
              title: "TECHNOLOGY & GROWTH",
              icon: Cpu,
              desc: "Integrated pharmacy management technology, inventory software, and digital retail management."
            },
            {
              title: "ONGOING SUPPORT",
              icon: Headphones,
              desc: "Continuous technical support, operational advice, and ongoing business enhancement."
            }
          ].map(({ title, icon: Icon, desc }, idx) => (
            <Reveal key={title} delay={idx * 0.08}>
              <div className="group h-full rounded-[2rem] border border-[#D8E7E0] bg-[#F7FAF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#075A46] hover:bg-white hover:shadow-lg">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-black tracking-wide text-[#10231E]">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
