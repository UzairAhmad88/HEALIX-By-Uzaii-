import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--healix-green)] text-white">
      <div className="container-healix relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Logo variant="light" size="lg" />
            <p className="mt-6 max-w-sm text-base leading-7 text-white/75">
              Better Health Begins Here. A modern healthcare destination bringing doctors, diagnostic laboratory, pharmacy, and clinical care together in your community.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--healix-lime)]" />
                <span>contact@healix.health</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--healix-lime)]" />
                <span>+1 (800) 555-HEALIX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[var(--healix-lime)]" />
                <span>HEALIX Healthcare Center</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Company</h3>
              <ul className="mt-6 space-y-3.5 text-sm font-semibold text-white/75">
                <li>
                  <Link href="/about" className="transition hover:text-white">About HEALIX</Link>
                </li>
                <li>
                  <Link href="/services" className="transition hover:text-white">Healthcare Services</Link>
                </li>
                <li>
                  <Link href="/portfolio" className="transition hover:text-white">Initiatives Portfolio</Link>
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
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Care Pillars</h3>
              <ul className="mt-6 space-y-3.5 text-sm font-semibold text-white/75">
                <li>
                  <Link href="/pharmacy" className="transition hover:text-white">Pharmacy Services</Link>
                </li>
                <li>
                  <Link href="/laboratory" className="transition hover:text-white">Laboratory & Diagnostics</Link>
                </li>
                <li>
                  <Link href="/clinics" className="transition hover:text-white">Clinical Care</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--healix-lime)]">Connect</h3>
              <ul className="mt-6 space-y-3.5 text-sm font-semibold text-white/75">
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition hover:text-white"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs font-semibold text-white/50 sm:flex-row">
          <p>© 2026 HEALIX. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
