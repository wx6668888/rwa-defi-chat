"use client"

export default function LuckyDrawPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Lucky Draw
        </h1>

        <div className="mb-6 rounded-xl border border-[rgba(0,245,212,0.12)] bg-[#0d0d14] p-6 text-center">
          <div className="mb-3 text-4xl">🎰</div>
          <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">ROUND #1,847</div>
          <div className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#f1f5f9]">$12,450</div>
          <button className="h-12 w-full rounded-xl bg-gradient-to-r from-[#00f5d4] to-[#8b5cf6] font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase text-white">
            ENTER DRAW
          </button>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold text-[#f1f5f9]">🥇 1st Prize</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#f59e0b]">$6,225</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold text-[#f1f5f9]">🥈 2nd Prize</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#00f5d4]">$3,112</div>
          </div>
        </div>
      </div>
    </div>
  )
}
