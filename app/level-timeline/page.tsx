"use client"

export default function LevelTimelinePage() {
  const levels = [
    { level: 1, emoji: "⚡", name: "Spark", req: "$1K", unlocked: true },
    { level: 2, emoji: "🔬", name: "Atom", req: "$3K", unlocked: false },
    { level: 3, emoji: "✨", name: "Photon", req: "$10K", unlocked: false },
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Level Timeline
        </h1>

        <div className="space-y-4">
          {levels.map((lvl) => (
            <div key={lvl.level} className={`rounded-xl border bg-[#0d0d14] p-4 ${lvl.unlocked ? 'border-[rgba(0,245,212,0.12)]' : 'border-[rgba(255,255,255,0.04)] opacity-50'}`}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(245,158,11,0.1)] text-2xl">
                  {lvl.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">L{lvl.level} {lvl.name}</div>
                  <div className="text-xs text-[#64748b]">Requires {lvl.req} personal</div>
                </div>
                {lvl.unlocked && <div className="text-[#10b981]">✓</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
