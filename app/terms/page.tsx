import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Healix Healthcare Ecosystem",
  description: "Review the terms of use for the Healix Healthcare Ecosystem showcase website."
};

export default function TermsPage() {
  return (
    <section className="section-pad pt-28">
      <div className="container-healix max-w-4xl">
        <Reveal>
          <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">
            Legal & Governance
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-[var(--healix-text)] md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs font-semibold text-slate-400">Effective Date: September 2026</p>
        </Reveal>

        <div className="mt-10 space-y-8 leading-8 text-slate-600">
          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using the Healix website, you agree to comply with and be bound by these Terms & Conditions.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">2. Medical Content Disclaimer</h2>
              <p className="mt-3">
                The content provided on this website is for informational, educational, and brand presentation purposes only. It does not constitute formal medical diagnosis, treatment advice, or online pharmaceutical sales. Always consult a licensed healthcare professional for personal medical conditions.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">3. Intellectual Property</h2>
              <p className="mt-3">
                All brand identity assets, Healix X visual motifs, logo marks, copy, layouts, and code structures are the property of Healix and protected by applicable copyright and trademark laws.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">4. Portfolio & Operational Disclaimers</h2>
              <p className="mt-3">
                Operational metrics and case studies presented as concepts are explicitly marked as portfolio concepts and will be updated with verified operational outcomes upon deployment.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
