import Link from "next/link";
import { ArrowRight, HelpCircle, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesQuestionCTA() {
  return (
    <section className="section-pad bg-white">
      <div className="container-healix">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-[#075A46] px-8 py-14 text-white shadow-xl md:px-14 md:py-16">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-3.5 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#10231E]">
                  <HelpCircle size={14} /> Contact Prompt
                </span>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-4xl">
                  Have a question about our services?
                </h2>
                <p className="mt-3 text-base text-white/80 leading-7">
                  Speak with the Healix team for guidance on everyday pharmacy needs, franchise opportunities, or general healthcare inquiries.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-bold text-white/90">
                  <a href="tel:+923160000000" className="flex items-center gap-2 transition hover:text-[var(--healix-lime)]">
                    <Phone size={14} className="text-[var(--healix-lime)]" />
                    <span>+92 316 0000000</span>
                  </a>
                  <a href="mailto:info@healixcare.pk" className="flex items-center gap-2 transition hover:text-[var(--healix-lime)]">
                    <Mail size={14} className="text-[var(--healix-lime)]" />
                    <span>info@healixcare.pk</span>
                  </a>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--healix-lime)] px-8 py-4 text-base font-extrabold text-[#10231E] transition-all duration-200 hover:bg-white hover:shadow-xl"
                >
                  <span>Contact Healix</span>
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
