import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Phone, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Franchise Enquiry | Healix",
  description: "Connect with Healix for pharmacy support, franchise inquiries, partnerships, and general information."
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-28">
      <div className="container-healix grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <div>
            <span className="rounded-full bg-[#EAF4EF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E745B] border border-[#D8E7E0]">
              Contact Us
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#10231E] md:text-6xl lg:text-7xl">
              Let&apos;s connect.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Have a question about our pharmacy services, franchise opportunities, or business partnerships? Our team is here to assist you.
            </p>

            <div className="mt-10 rounded-2xl bg-[#EAF4EF]/50 p-6 border border-[#D8E7E0]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#075A46]">
                <Building2 size={16} /> Pharmacy Franchise Inquiries
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                To request information about opening a Healix pharmacy franchise, please fill in your target city, mobile number, and estimated budget range in the form.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#10231E]">Phone Support</h3>
                  <a
                    href="tel:+923160000000"
                    className="mt-1 block text-base font-extrabold text-[#075A46] hover:underline"
                  >
                    +92 316 0000000
                  </a>
                  <p className="mt-1 text-xs text-slate-500">Call Healix for direct inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#EAF4EF] text-[#075A46] shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#10231E]">Email Us</h3>
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
          <Suspense fallback={<div className="rounded-[2.5rem] border border-[#D8E7E0] bg-white p-12 text-center text-slate-400">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
