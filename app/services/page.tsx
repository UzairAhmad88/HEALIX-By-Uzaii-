import Link from "next/link";
import { ArrowRight, Pill, CheckCircle2, Phone, Mail, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Overview | Healix",
  description: "Explore Healix services — modern pharmacy advisory, prescription guidance, and upcoming clinical care directions."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
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
              Discover how Healix brings modern pharmacy support, verified prescription guidance, and accessible health essentials to your community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Primary Pharmacy Focus */}
      <section className="section-pad bg-white">
        <div className="container-healix">
          <Reveal>
            <SectionHeading
              eyebrow="Primary Service"
              title="Modern Pharmacy Care"
              description="Our core operational focus is delivering trustworthy, transparent, and approachable pharmacy support."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[2.5rem] border border-[#D8E7E0] bg-[#F7FAF8] p-8 md:p-12">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#075A46] text-[var(--healix-lime)]">
                  <Pill size={30} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-[#10231E]">Prescription & OTC Support</h3>
                <p className="mt-3 text-slate-600 leading-7">
                  We combine certified pharmacist advice, transparent guidance, and medication verification to make health management simpler and safer.
                </p>
                <div className="mt-8">
                  <Link
                    href="/pharmacy"
                    className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#0E745B]"
                  >
                    <span>View Pharmacy Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 shadow-sm md:p-12">
                <h3 className="text-xl font-extrabold text-[#10231E]">What We Offer</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "100% authentic prescription medicines",
                    "Certified pharmacist consultations",
                    "Over-the-counter health & pain care",
                    "Vitamins, supplements & nutrition",
                    "Dermatological & personal hygiene essentials",
                    "Chronic medication management advice"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 font-semibold text-slate-700">
                      <CheckCircle2 className="size-5 text-[#075A46] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Future Clinical Care (Coming Soon) */}
      <section className="section-pad bg-[#F7FAF8]">
        <div className="container-healix">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 text-center shadow-sm md:p-12">
              <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46]">
                <Stethoscope size={28} />
              </div>
              <span className="mt-6 inline-block rounded-full bg-[var(--healix-lime)] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#10231E]">
                COMING SOON
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-[#10231E] md:text-3xl">More care is coming.</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
                Healix is growing beyond pharmacy, with clinical care planned as part of our future healthcare journey.
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

      {/* Contact CTA */}
      <section className="section-pad bg-white">
        <div className="container-healix rounded-[3rem] bg-[#075A46] px-8 py-16 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">Have a Question About Our Services?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Get in touch with the Healix team directly by phone or email.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-extrabold">
              <a href="tel:+923160000000" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">
                <Phone size={16} className="text-[var(--healix-lime)]" />
                <span>+92 316 0000000</span>
              </a>
              <a href="mailto:info@healixcare.pk" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">
                <Mail size={16} className="text-[var(--healix-lime)]" />
                <span>info@healixcare.pk</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
