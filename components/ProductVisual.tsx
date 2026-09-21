import { FlockifyMock } from "@/components/FlockifyMock";
import { KdsMock } from "@/components/KdsMock";
import { PosMock } from "@/components/PosMock";

export function CustomMock({ className = "" }: { className?: string }) {
  const rows = [
    { name: "Field ops app", stage: "Live" },
    { name: "Warehouse sync", stage: "Build" },
    { name: "Franchise portal", stage: "Discovery" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] text-[#f4f6fb] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <span className="text-xs font-medium tracking-[0.16em] text-white/55">CUSTOM BUILD</span>
        <span className="rounded-full bg-[#2ee9c6]/15 px-2.5 py-1 text-[11px] text-[#2ee9c6]">In progress</span>
      </div>
      <div className="space-y-2 p-4 sm:p-5">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span className="text-sm">{row.name}</span>
            <span className="text-[11px] uppercase tracking-wider text-white/50">{row.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductVisual({ slug, className = "" }: { slug: string; className?: string }) {
  if (slug === "nexon-kds") return <KdsMock className={className} />;
  if (slug === "nexon-pos") return <PosMock className={className} />;
  if (slug === "flockify") return <FlockifyMock className={className} />;
  return <CustomMock className={className} />;
}
