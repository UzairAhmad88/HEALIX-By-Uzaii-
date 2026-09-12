import Link from "next/link";
import { ArrowRight, Home, Compass } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="section-pad pt-36">
      <div className="container-healix text-center">
        <Reveal>
          <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-[var(--healix-pale)] text-[var(--healix-green)] font-black text-3xl">
            404
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-[var(--healix-text)] md:text-6xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-600">
            The page or healthcare resource you are looking for may have been moved or doesn&apos;t exist.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--healix-green)] px-7 py-3.5 font-bold text-white transition hover:bg-[var(--healix-green-2)]"
            >
              <Home size={18} />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--healix-border)] bg-white px-7 py-3.5 font-bold text-[var(--healix-text)] transition hover:bg-[var(--healix-soft)]"
            >
              <Compass size={18} />
              <span>Explore Services</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
