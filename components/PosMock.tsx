export function PosMock({ className = "" }: { className?: string }) {
  const items = [
    { name: "Grill burger", price: "12.50" },
    { name: "Caesar salad", price: "8.00" },
    { name: "Fries", price: "3.50" },
    { name: "Espresso", price: "2.80" },
    { name: "House soda", price: "2.20" },
    { name: "Cheesecake", price: "6.40" },
  ];
  const ticket = [
    { name: "Grill burger", qty: 1, price: "12.50" },
    { name: "Fries", qty: 2, price: "7.00" },
    { name: "Espresso", qty: 1, price: "2.80" },
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
            <div className="text-[11px] font-semibold tracking-[0.18em]">NEXON POS</div>
            <div className="text-[10px] text-white/45">Till 01 · Floor · Site 12</div>
          </div>
        </div>
        <span className="font-mono text-[11px] text-white/50">14:22 · Table 7</span>
      </div>
      <div className="grid sm:grid-cols-[1.15fr_0.85fr]">
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.name}
              type="button"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-left"
            >
              <div className="text-sm font-medium">{item.name}</div>
              <div className="mt-1 font-mono text-[11px] text-[#3b82ff]">${item.price}</div>
            </button>
          ))}
        </div>
        <div className="border-t border-white/10 bg-white/[0.03] p-4 sm:border-l sm:border-t-0">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/40">Current ticket</div>
          <ul className="mt-3 space-y-2">
            {ticket.map((line) => (
              <li key={line.name} className="flex items-center justify-between text-sm">
                <span className="text-white/80">
                  {line.qty}× {line.name}
                </span>
                <span className="font-mono text-xs text-white/55">${line.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-white/45">Due</span>
            <span className="font-display text-2xl font-semibold">$22.30</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-[#3b82ff] py-2 text-center text-xs font-semibold">Pay</div>
            <div className="rounded-lg border border-white/15 py-2 text-center text-xs text-white/70">
              Send to KDS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
