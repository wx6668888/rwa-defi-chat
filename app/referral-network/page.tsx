"use client"

export default function ReferralNetworkPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Referral Network
        </h1>

        <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5 text-center">
          <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">TOTAL TEAM</div>
          <div className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-[#f1f5f9]">47</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] text-[#64748b]">DIRECT</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#00f5d4]">12</div>
            </div>
            <div>
              <div className="text-[10px] text-[#64748b]">INDIRECT</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#8b5cf6]">35</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5d4] to-[#8b5cf6] text-xl">
                ⚡
              </div>
              <div className="flex-1">
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#f1f5f9]">0xAbcd...{i}234</div>
                <div className="text-xs text-[#64748b]">L{i} · $5.2K volume</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
