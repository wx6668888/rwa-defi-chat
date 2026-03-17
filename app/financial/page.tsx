"use client"

export default function FinancialPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Financial Report
        </h1>

        {/* Total Income */}
        <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5">
          <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">TOTAL INCOME · 30 DAYS</div>
          <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-[#f1f5f9]">$4,892.30</div>
          <div className="mb-4 text-sm text-[#10b981]">+18.4% vs last period</div>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-[10px] text-[#64748b]">USDT</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#00f5d4]">$3,240.50</div>
            </div>
            <div>
              <div className="text-[10px] text-[#64748b]">REFERRAL</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#f59e0b]">$847.20</div>
            </div>
            <div>
              <div className="text-[10px] text-[#64748b]">RWA</div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#8b5cf6]">804.6</div>
            </div>
          </div>
        </div>

        {/* Income Breakdown */}
        <div className="space-y-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold text-[#f1f5f9]">Static Yield (USDT)</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#00f5d4]">$12.60/day</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold text-[#f1f5f9]">Referral Rewards</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#f59e0b]">$28.24/day</div>
          </div>
        </div>
      </div>
    </div>
  )
}
