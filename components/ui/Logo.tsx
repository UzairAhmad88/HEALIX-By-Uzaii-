import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export function Logo({ variant = "dark", size = "md", className = "", onClick }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[var(--healix-text)]";
  
  const sizeMap = {
    sm: { imageSize: 32, text: "text-base sm:text-lg" },
    md: { imageSize: 38, text: "text-lg sm:text-xl" },
    lg: { imageSize: 48, text: "text-2xl sm:text-3xl" }
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 font-extrabold tracking-tight transition hover:opacity-90 ${className}`}
      aria-label="HEALIX - Better Health Begins Here"
    >
      <Image
        src="/logo/logo.jpeg"
        alt="HEALIX Logo"
        width={currentSize.imageSize}
        height={currentSize.imageSize}
        priority
        className="rounded-xl object-cover shadow-sm transition-transform hover:scale-105 shrink-0"
      />
      <span className={`font-black tracking-[0.05em] whitespace-nowrap ${currentSize.text} ${textColor}`}>
        HEAL<span className="text-[var(--healix-lime)]">IX</span>
      </span>
    </Link>
  );
}
