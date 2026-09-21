import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold bg-gradient-to-r from-signal to-signal-2 bg-clip-text text-transparent">
          NEXONS
        </span>
      </div>
    </Link>
  );
}
