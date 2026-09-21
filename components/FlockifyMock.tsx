export function FlockifyMock({ className = "" }: { className?: string }) {
  const kpis = [
    { label: "FCR", value: "1.52", delta: "−0.04" },
    { label: "Mortality", value: "2.1%", delta: "−0.3%" },
    { label: "Avg weight", value: "2.34 kg", delta: "+0.08" },
  ];

  const bars = [42, 55, 48, 63, 71, 66, 78, 84, 80, 92, 88, 96];

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] text-[#f4f6fb] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div>
          <div className="text-xs tracking-[0.16em] text-white/50">FLOCKIFY</div>
          <div className="font-display text-sm font-semibold">Shed B · Cycle 14</div>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] text-emerald-300">Healthy</span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-[11px] uppercase tracking-wider text-white/45">{kpi.label}</div>
            <div className="mt-1 font-display text-xl font-semibold">{kpi.value}</div>
            <div className="text-[11px] text-emerald-300">{kpi.delta}</div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5">
        <div className="text-[11px] uppercase tracking-wider text-white/45">Daily gain · 12 days</div>
        <div className="mt-3 flex h-24 items-end gap-1.5">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/20 to-emerald-400/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
