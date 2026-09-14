import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Healix Care",
  description: "Connect with the Healix Care team for pharmacy support, general inquiries, partnerships, and business opportunities."
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-28">
      <div className="container-healix grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <div>
            <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">
              Contact Us
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--healix-text)] md:text-6xl lg:text-7xl">
              Let&apos;s connect.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Have a question about our pharmacy services, partnership opportunities, or general inquiries? We&apos;re here to help.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Phone Support</h3>
                  <a
                    href="tel:+923160000000"
                    className="mt-1 block text-base font-extrabold text-[#075A46] hover:underline"
                  >
                    +92 316 0000000
                  </a>
                  <p className="mt-1 text-xs text-slate-500">Call Healix Care for direct inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Email Us</h3>
                  <a
                    href="mailto:info@healixcare.pk"
                    className="mt-1 block text-base font-extrabold text-[#075A46] hover:underline"
                  >
                    info@healixcare.pk
                  </a>
                  <p className="mt-1 text-xs text-slate-500">Send an email anytime to our team.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
