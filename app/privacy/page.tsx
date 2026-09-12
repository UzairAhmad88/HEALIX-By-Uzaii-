import { Reveal } from "@/components/ui/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Healix Healthcare Ecosystem",
  description: "Read the privacy policy for Healix Healthcare Ecosystem outlining data protection practices, inquiry handling, and patient privacy standards."
};

export default function PrivacyPage() {
  return (
    <section className="section-pad pt-28">
      <div className="container-healix max-w-4xl">
        <Reveal>
          <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">
            Legal & Governance
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-[var(--healix-text)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-semibold text-slate-400">Effective Date: September 2026</p>
        </Reveal>

        <div className="mt-10 space-y-8 leading-8 text-slate-600">
          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">1. Commitment to Data Privacy</h2>
              <p className="mt-3">
                Healix Healthcare (&ldquo;Healix&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) prioritizes data protection and patient privacy. This Privacy Policy explains how information is collected, used, and safeguarded when visiting our website.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">2. Informational Scope & Portfolio Nature</h2>
              <p className="mt-3">
                This website is an informational healthcare brand showcase. We do not store personal electronic health records (EHR), medical test results, or prescription data on this public website platform.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">3. Contact Form Submissions</h2>
              <p className="mt-3">
                Information submitted via our contact form (such as name, email address, phone number, and inquiry message) is used solely to respond to your specific request. We do not sell or rent user contact details to third parties.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">4. Analytics & Technical Cookies</h2>
              <p className="mt-3">
                We may collect aggregated, non-personally-identifiable analytics data (such as page views and browser type) to optimize website performance and user experience.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-extrabold text-[var(--healix-text)]">5. Contact Information</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, please contact our team at <strong className="text-[var(--healix-text)]">privacy@healix.health</strong>.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
