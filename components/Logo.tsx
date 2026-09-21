import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5 text-paper", className)}
      aria-label="NEXONS GROUP home"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-[9px] bg-signal text-white shadow-[0_0_20px_rgba(37,99,235,0.28)] transition group-hover:shadow-[0_0_28px_rgba(37,99,235,0.4)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M5.5 19V5h2.7l6.1 8.2V5H17v14h-2.7L8.2 10.8V19H5.5Z" />
        </svg>
      </span>
      {compact ? (
        <span className="font-display text-[15px] font-semibold tracking-[0.18em]">NEXONS</span>
      ) : (
        <span className="font-display text-[15px] font-semibold tracking-[0.16em]">
          NEXONS <span className="tracking-[0.22em] text-mist">GROUP</span>
        </span>
      )}
    </Link>
  );
}
