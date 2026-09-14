import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2, ShieldCheck, Heart, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Healix Care | Modern Pharmacy Brand",
  description: "Learn about Healix Care — our mission, pharmacy-first philosophy, core values, and vision for accessible everyday healthcare."
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#075A46] py-20 text-white md:py-28">
        <div className="container-healix relative z-10">
          <Reveal>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
              About Healix Care
            </span>
            <h1 className="display-title mt-6 max-w-4xl font-extrabold text-white">
              A Modern Pharmacy Brand Designed Around You.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl md:leading-9">
              Healix Care is building a modern consumer-facing pharmacy experience where authentic medications, certified advisory, and human care come together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2.5rem] bg-[#F7FAF8] p-8 md:p-12 border border-[#D8E7E0]">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#075A46] text-[var(--healix-lime)]">
                  <Compass size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-[#10231E]">Our Mission</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  To simplify everyday healthcare by providing authentic medications, transparent guidance, and accessible pharmacy support built on safety and human warmth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 md:p-12 shadow-sm">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-lime)] text-[#10231E]">
                  <Heart size={24} />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-[#10231E]">Our Vision</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  To create a pharmacy-first healthcare presence that patients and families trust implicitly—where seeking advice is simple, comforting, and reassuring.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-pad bg-[#EAF4EF]/50">
        <div className="container-healix grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#075A46] p-10 text-white shadow-xl md:p-14">
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">
                  Core Philosophy
                </span>
                <p className="mt-6 text-3xl font-extrabold leading-snug">
                  Designed around people, not transaction speed.
                </p>
                <p className="mt-4 leading-7 text-white/75">
                  Everyday healthcare should not require navigating confusion or feeling rushed. Healix Care frames pharmacy support through clarity and unhurried listening.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <SectionHeading
                eyebrow="Pharmacy Foundation"
                title="Six principles guiding our pharmacy model."
                description="Our commitment is to deliver transparent, reliable, and approachable healthcare support."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Trust: 100% verified authentic prescription medicines",
                  "Care: People-first interactions with dedicated pharmacists",
                  "Access: Convenient everyday healthcare essentials in your community",
                  "Simplicity: Clear dosage instructions without intimidating jargon"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                    <CheckCircle2 className="size-5 shrink-0 text-[#075A46]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Future Direction CTA */}
      <section className="section-pad bg-white">
        <div className="container-healix rounded-[3rem] bg-[#075A46] px-8 py-16 text-center text-white md:px-14">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Looking Ahead</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Today, Pharmacy. Tomorrow, More Ways to Care.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              While our core operational focus is pharmacy today, we are looking ahead to future expansions including clinical care directions.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-8 py-3.5 font-extrabold text-[#10231E] transition hover:bg-white"
            >
              <span>Contact Healix Care</span>
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
