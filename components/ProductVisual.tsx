import { PosMock } from "@/components/PosMock";
import { ProductShot } from "@/components/ProductShot";

export function CustomMock({ className = "" }: { className?: string }) {
  const systems = [
    { name: "Field ops", env: "Production", status: "Healthy" },
    { name: "Warehouse API", env: "Production", status: "Healthy" },
    { name: "Franchise portal", env: "Staging", status: "Build" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#070b14] text-[#f4f6fb] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[#3b82ff] text-[11px] font-bold">
            N
          </span>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em]">NEXONS CONTROL</div>
            <div className="text-[10px] text-white/45">Custom systems · Islamabad HQ</div>
          </div>
        </div>
        <span className="text-[11px] text-[#2ee9c6]">99.9% uptime</span>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-3">
        {[
          ["Active systems", "12"],
          ["Integrations", "8"],
          ["Open SLAs", "0"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">{label}</div>
            <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="overflow-hidden rounded-xl border border-white/10">
          {systems.map((row, index) => (
            <div
              key={row.name}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-sm ${
                index !== 0 ? "border-t border-white/10" : ""
              }`}
            >
              <span>{row.name}</span>
              <span className="text-[11px] text-white/45">{row.env}</span>
              <span className="text-[11px] text-[#2ee9c6]">{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductVisual({ slug, className = "" }: { slug: string; className?: string }) {
  if (slug === "nexon-kds") {
    return (
      <ProductShot
        src="/products/nexon-kds.jpg"
        alt="Nexon KDS kitchen display on a restaurant screen"
        className={className}
      />
    );
  }
  if (slug === "nexon-pos") return <PosMock className={className} />;
  if (slug === "flockify") {
    return (
      <ProductShot
        src="/products/flockify.jpg"
        alt="Flockify poultry farm management dashboard"
        className={className}
      />
    );
  }
  return <CustomMock className={className} />;
}
