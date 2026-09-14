import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--healix-green)] text-white">
      <div className="container-healix relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Logo variant="light" size="lg" />
            <p className="mt-6 max-w-sm text-base leading-7 text-white/75">
              Better Health Begins Here. Modern pharmacy care designed around your everyday health, with trusted support when you need it.
            </p>

            <div className="mt-8 space-y-3.5 text-sm text-white/80 font-medium">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--healix-lime)] shrink-0" />
                <a href="tel:+923160000000" className="transition hover:text-white hover:underline">
                  +92 316 0000000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--healix-lime)] shrink-0" />
                <a href="mailto:info@healixcare.pk" className="transition hover:text-white hover:underline">
                  info@healixcare.pk
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Navigation</h3>
              <ul className="mt-6 space-y-3.5 text-sm font-semibold text-white/75">
                <li>
                  <Link href="/about" className="transition hover:text-white">About Healix Care</Link>
                </li>
                <li>
                  <Link href="/pharmacy" className="transition hover:text-white">Pharmacy Services</Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-white">Healthcare Overview</Link>
                </li>
                <li>
                  <Link href="/insights" className="transition hover:text-white">Health Insights</Link>
                </li>
                <li>
                  <Link href="/contact" className="transition hover:text-white">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Care Focus</h3>
              <ul className="mt-6 space-y-3.5 text-sm font-semibold text-white/75">
                <li>
                  <Link href="/pharmacy" className="transition hover:text-white">Everyday Pharmacy</Link>
                </li>
                <li>
                  <Link href="/pharmacy" className="transition hover:text-white">Prescription & OTC Support</Link>
                </li>
                <li>
                  <span className="inline-flex items-center gap-2 text-white/50 cursor-default">
                    <span>Clinical Care</span>
                    <span className="rounded-full bg-[var(--healix-lime)]/20 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[var(--healix-lime)]">Coming Soon</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-semibold text-white/50 sm:flex-row">
          <p>© 2026 Healix Care. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
