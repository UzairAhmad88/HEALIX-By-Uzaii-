import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Healix | Healthcare Ecosystem Inquiries",
  description: "Connect with the Healix healthcare team for ecosystem inquiries, pharmaceutical partnerships, diagnostic collaborations, and general questions."
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-28">
      <div className="container-healix grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <div>
            <span className="rounded-full bg-[var(--healix-pale)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--healix-green-2)]">
              Get In Touch
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--healix-text)] md:text-6xl lg:text-7xl">
              Let&apos;s build better healthcare together.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Have a healthcare project, partnership proposal, diagnostic collaboration idea, or general inquiry? Send a message and our team will follow up.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Email Inquiries</h3>
                  <p className="mt-1 text-sm text-slate-600">contact@healix.health</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Telephone</h3>
                  <p className="mt-1 text-sm text-slate-600">+1 (800) 555-HEALIX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Headquarters</h3>
                  <p className="mt-1 text-sm text-slate-600">Healix Healthcare Ecosystem Center, Suite 400</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[var(--healix-pale)] text-[var(--healix-green)] shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[var(--healix-text)]">Advisory Hours</h3>
                  <p className="mt-1 text-sm text-slate-600">Monday – Friday: 8:00 AM – 6:00 PM EST</p>
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
