"use client"

export default function StakingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Staking
        </h1>

        {/* Active Stakes */}
        <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5">
          <div className="mb-3 text-xs font-bold uppercase text-[#64748b]">ACTIVE STAKE</div>
          <div className="mb-2 font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#00f5d4]">$25,000 USDT</div>
          <div className="mb-4 text-xs text-[#64748b]">90-day lock · 47 days remaining</div>
          <div className="mb-3 h-2 overflow-hidden rounded-full bg-[#13131e]">
            <div className="h-full rounded-full bg-[#00f5d4]" style={{ width: "48%" }} />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-[#64748b]">APY</span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] font-bold text-[#f59e0b]">17%</span>
          </div>
        </div>

        {/* Earnings */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5">
          <div className="mb-3 text-xs font-bold uppercase text-[#64748b]">TOTAL EARNED</div>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#10b981]">+$1,240 RWA</div>
          <div className="mt-2 text-xs text-[#64748b]">≈ 1,424 RWA tokens</div>
        </div>
      </div>
    </div>
  )
}
