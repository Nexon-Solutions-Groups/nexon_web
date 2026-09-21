export function PosMock({ className = "" }: { className?: string }) {
  const tickets = [
    { name: "Table 7", total: "86.40", status: "Open" },
    { name: "Counter", total: "12.50", status: "Paid" },
    { name: "Table 2", total: "54.00", status: "Open" },
  ];

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] text-[#f4f6fb] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <span className="text-xs font-medium tracking-[0.16em] text-white/55">NEXON POS</span>
        <span className="font-mono text-xs text-white/55">Till 01 · Floor</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-[11px] uppercase tracking-wider text-white/45">Now serving</div>
          <div className="mt-2 font-display text-2xl font-semibold">Table 7</div>
          <div className="mt-1 text-xs text-white/55">2 guests · 3 items</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-[11px] uppercase tracking-wider text-white/45">Today</div>
          <div className="mt-2 font-display text-2xl font-semibold">$4,280</div>
          <div className="mt-1 text-xs text-[#2ee9c6]">142 covers</div>
        </div>
      </div>
      <ul className="space-y-2 px-5 pb-5">
        {tickets.map((ticket) => (
          <li
            key={ticket.name}
            className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2.5 text-sm"
          >
            <span>{ticket.name}</span>
            <span className="font-mono text-xs text-white/70">
              ${ticket.total} · {ticket.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
