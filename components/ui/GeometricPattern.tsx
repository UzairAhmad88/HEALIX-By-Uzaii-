type GeometricPatternProps = {
  className?: string;
  variant?: "light" | "dark" | "lime";
};

export function GeometricPattern({ className = "", variant = "dark" }: GeometricPatternProps) {
  const strokeColor =
    variant === "lime"
      ? "rgba(148, 209, 38, 0.25)"
      : variant === "dark"
      ? "rgba(7, 90, 70, 0.12)"
      : "rgba(255, 255, 255, 0.12)";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="size-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="140" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="90" stroke={strokeColor} strokeWidth="1" />
        <path d="M120 120 L280 280" stroke={strokeColor} strokeWidth="1.5" />
        <path d="M280 120 L120 280" stroke={strokeColor} strokeWidth="1.5" />
        <circle cx="200" cy="200" r="6" fill={strokeColor} />
      </svg>
    </div>
  );
}
