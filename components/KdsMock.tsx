export function KdsMock({ className = "" }: { className?: string }) {
  const tickets = [
    { table: "T12", items: ["Smash burger", "Fries", "Pickle"], time: "4:02", tone: "late" as const },
    { table: "T04", items: ["Cacio e pepe", "Garlic bread"], time: "1:18", tone: "cook" as const },
    { table: "BAR", items: ["Negroni", "House red ×2"], time: "0:22", tone: "new" as const },
    { table: "T19", items: ["Ribeye medium", "Tenderstem"], time: "2:41", tone: "cook" as const },
  ];

  const tones = {
    late: "border-red-400/30 bg-red-500/10",
    cook: "border-amber-300/25 bg-amber-400/10",
    new: "border-emerald-300/30 bg-emerald-400/10",
  };

  const badges = {
    late: "text-red-300",
    cook: "text-amber-200",
    new: "text-emerald-300",
  };

  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1220] text-[#f4f6fb] shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-live" />
          <span className="text-xs font-medium tracking-[0.16em] text-white/55">LIVE KITCHEN</span>
        </div>
        <span className="font-mono text-xs text-white/55">Nexon KDS · 19:42</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
        {tickets.map((ticket) => (
          <div key={ticket.table} className={`rounded-2xl border p-3.5 ${tones[ticket.tone]}`}>
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">{ticket.table}</span>
              <span className={`font-mono text-xs ${badges[ticket.tone]}`}>{ticket.time}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {ticket.items.map((item) => (
                <li key={item} className="text-xs text-white/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-[11px] text-white/50">
        <span>Grill · Pass · Expo</span>
        <span>4 tickets · 1 delayed</span>
      </div>
    </div>
  );
}
