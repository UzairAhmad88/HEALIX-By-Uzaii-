import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
  children
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3.5 text-xs font-extrabold uppercase tracking-[0.22em] ${
            isDark ? "text-[var(--healix-lime)]" : "text-[var(--healix-green-2)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`section-title ${
          isDark ? "text-white" : "text-[var(--healix-text)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            isDark ? "text-white/75" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
