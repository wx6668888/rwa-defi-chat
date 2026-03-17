"use client"

export default function ReferralRewardsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Referral Rewards
        </h1>

        <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5 text-center">
          <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">TOTAL EARNED</div>
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-4xl font-bold text-[#f59e0b]">$847.20</div>
        </div>

        <div className="space-y-3">
          {[
            { type: "Direct", amount: "$124.50", time: "2h ago" },
            { type: "Team", amount: "$89.30", time: "1d ago" },
            { type: "Direct", amount: "$56.80", time: "3d ago" },
          ].map((reward, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">{reward.type} Reward</div>
                <div className="text-xs text-[#64748b]">{reward.time}</div>
              </div>
              <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#f59e0b]">{reward.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
