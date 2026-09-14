import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export function Logo({ variant = "dark", size = "md", className = "", onClick }: LogoProps) {
  const sizeMap = {
    sm: { imageSize: 32, text: "text-base sm:text-lg" },
    md: { imageSize: 38, text: "text-lg sm:text-xl" },
    lg: { imageSize: 48, text: "text-2xl sm:text-3xl" }
  };

  const currentSize = sizeMap[size];
  const healColor = variant === "light" ? "text-white" : "text-[#075A46]";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 font-extrabold tracking-tight transition hover:opacity-90 ${className}`}
      aria-label="Healix - Better Health Begins Here"
    >
      <Image
        src="/logo/logo.jpeg"
        alt="Healix Logo"
        width={currentSize.imageSize}
        height={currentSize.imageSize}
        priority
        className="rounded-xl object-cover shadow-sm transition-transform hover:scale-105 shrink-0"
      />
      <span className={`font-black tracking-[0.03em] whitespace-nowrap ${currentSize.text}`}>
        <span className={healColor}>HEAL</span>
        <span className="text-[var(--healix-lime)]">IX</span>
      </span>
    </Link>
  );
}
