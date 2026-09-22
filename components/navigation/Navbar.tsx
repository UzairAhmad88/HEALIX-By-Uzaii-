"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Pharmacy", href: "/pharmacy" },
  { label: "Franchise", href: "/pharmacy-franchise" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#D8E7E0] bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-md"
          : "border-b border-[#D8E7E0] bg-white shadow-sm"
      }`}
    >
      <nav className="container-healix flex h-20 items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <Logo variant="dark" size="md" onClick={() => setOpen(false)} />

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {links.map(({ label, href }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2.5 text-sm font-extrabold transition-colors ${
                  isActive
                    ? "text-[#075A46]"
                    : "text-[#10231E] hover:text-[#075A46]"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-[var(--healix-lime)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--healix-lime)] px-6 py-2.5 text-sm font-extrabold text-[#10231E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#075A46] hover:text-white hover:shadow-lg hover:shadow-[#075A46]/20"
          >
            <span>Contact Us</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-2xl border border-[#D8E7E0] bg-[#F7FAF8] text-[#10231E] transition hover:bg-[#EAF4EF] lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-x-0 top-20 z-40 h-[calc(100vh-5rem)] overflow-y-auto border-b border-[#D8E7E0] bg-white px-6 pb-12 pt-6 backdrop-blur-2xl lg:hidden">
          <div className="container-healix flex flex-col gap-2">
            {links.map(({ label, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[52px] items-center justify-between rounded-2xl px-5 text-lg font-extrabold transition ${
                    isActive
                      ? "bg-[#EAF4EF] text-[#075A46]"
                      : "text-slate-800 hover:bg-[#F7FAF8]"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="size-2.5 rounded-full bg-[var(--healix-lime)]" />}
                </Link>
              );
            })}
            <div className="mt-6 border-t border-[#D8E7E0] pt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full min-h-[54px] items-center justify-center gap-2 rounded-full bg-[var(--healix-lime)] py-4 text-center text-base font-extrabold text-[#10231E] shadow-md transition hover:bg-[#075A46] hover:text-white"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
