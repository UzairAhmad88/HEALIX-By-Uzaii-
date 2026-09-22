import Link from "next/link";
import { ArrowRight, Pill, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function MedicineRangeReminder() {
  return (
    <section className="section-pad bg-[#F7FAF8]">
      <div className="container-healix">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D8E7E0] bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF4EF] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                  <Pill size={14} /> Healthcare Essentials
                </div>
                <h2 className="mt-4 text-2xl font-extrabold text-[#10231E] md:text-3xl lg:text-4xl">
                  Looking for something specific?
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-7">
                  Explore our complete range of prescription medicines, over-the-counter health solutions, vitamins, personal care products, and daily health supplies.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/pharmacy#medicine-range"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#075A46] px-8 py-4 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0E745B] hover:shadow-xl hover:shadow-[#075A46]/20"
                >
                  <span>View Medicine Range</span>
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
