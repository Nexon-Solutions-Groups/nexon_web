import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-signal text-white shadow-[0_0_0_1px_rgba(59,130,255,0.4),0_8px_32px_rgba(59,130,255,0.28)] hover:bg-signal-2 hover:shadow-[0_0_0_1px_rgba(59,130,255,0.55),0_12px_40px_rgba(59,130,255,0.38)]",
  outline:
    "border border-line bg-fill text-paper hover:border-signal/40 hover:bg-surface",
  ghost: "text-mist hover:text-paper hover:bg-fill",
  light: "bg-paper text-ink hover:opacity-90",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition duration-200 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
