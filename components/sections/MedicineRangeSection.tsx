import Link from "next/link";
import {
  Pill,
  HeartPulse,
  Thermometer,
  Activity,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Baby,
  Stethoscope,
  Package,
  ArrowRight
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { medicineCategories, MedicineCategory } from "@/data/medicineCategories";

const iconMap: Record<string, React.ElementType> = {
  Pill,
  HeartPulse,
  Thermometer,
  Activity,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Baby,
  Stethoscope,
  Package
};

interface MedicineRangeSectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  showCta?: boolean;
}

export function MedicineRangeSection({
  id = "medicine-range",
  eyebrow = "Healthcare Essentials",
  title = "Medicine Range",
  description = "Explore our structured range of authentic pharmaceuticals, over-the-counter health products, vitamins, and family care supplies.",
  showCta = true
}: MedicineRangeSectionProps) {
  return (
    <section id={id} className="section-pad bg-white scroll-mt-24">
      <div className="container-healix">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {medicineCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.iconName] || Pill;
            return (
              <Reveal key={cat.id} delay={idx * 0.04}>
                <div className="group flex h-full flex-col justify-between rounded-[2rem] border border-[#D8E7E0] bg-[#F7FAF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#075A46] hover:bg-white hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid size-11 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] transition group-hover:bg-[#075A46] group-hover:text-[var(--healix-lime)]">
                        <IconComponent size={20} />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
                        {cat.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-extrabold text-[#10231E]">{cat.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{cat.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {showCta && (
          <Reveal delay={0.3} className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-3xl border border-[#D8E7E0] bg-[#EAF4EF]/50 p-6">
              <span className="text-sm font-semibold text-[#10231E]">
                Looking for a specific prescription medication or advice?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#075A46] px-6 py-2.5 text-xs font-extrabold text-white transition hover:bg-[#0E745B]"
              >
                <span>Ask Our Pharmacist</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
