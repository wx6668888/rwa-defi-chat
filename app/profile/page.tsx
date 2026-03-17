"use client"

import { Copy } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
        <div className="absolute -bottom-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#00f5d4] opacity-[0.05] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 pt-6">
        {/* Header */}
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Profile
        </h1>

        {/* Avatar & Level */}
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5d4] to-[#8b5cf6] text-4xl">
            ⚡
          </div>
          <h2 className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[#f1f5f9]">
            0x4f2a...8b1c
          </h2>
          <div className="mt-2 rounded-full bg-[#f59e0b]/10 px-3 py-1">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#f59e0b]">
              ⚡ L1 Spark
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-4 gap-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-3 text-center">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#00f5d4]">25K</div>
            <div className="mt-1 text-[9px] uppercase tracking-wider text-[#64748b]">Staked</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-3 text-center">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#10b981]">$1.2K</div>
            <div className="mt-1 text-[9px] uppercase tracking-wider text-[#64748b]">Earned</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-3 text-center">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#f1f5f9]">47</div>
            <div className="mt-1 text-[9px] uppercase tracking-wider text-[#64748b]">Team</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-3 text-center">
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-bold text-[#f59e0b]">17%</div>
            <div className="mt-1 text-[9px] uppercase tracking-wider text-[#64748b]">APY</div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-bold text-[#f1f5f9]">L1 → L2</span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#f59e0b]">38%</span>
          </div>
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-[#13131e]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fb923c]" style={{ width: "38%" }} />
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-[#64748b]">Personal $3K</span>
              <span className="text-[#10b981]">$1.1K ✓</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#64748b]">Team $10K</span>
              <span className="text-[#f1f5f9]">$3.8K</span>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-[#64748b]">USDT STAKED</div>
            <div className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[#00f5d4]">$25,000</div>
            <div className="mb-2 text-xs text-[#64748b]">90-day lock · 47 days left</div>
            <div className="flex justify-center">
              <svg width="48" height="48" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="24" cy="24" r="20" fill="none" stroke="#1a1a2e" strokeWidth="4" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="50.24" />
              </svg>
            </div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-[10px] uppercase tracking-wider text-[#64748b]">stRWA BALANCE</div>
            <div className="mb-1 font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[#8b5cf6]">1,240</div>
            <div className="mb-3 text-xs text-[#64748b]">≈ $1,054</div>
            <div className="text-xs font-medium text-[#10b981]">Flexible unlock</div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-5">
          <div className="mb-3 text-xs font-bold uppercase text-[#f1f5f9]">REFERRAL LINK</div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex-1 truncate rounded-lg bg-[#13131e] px-3 py-2 font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#64748b]">
              rwa.chat/ref/4f2a8b1c
            </div>
            <button className="text-[#00f5d4]">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <div className="text-xs text-[#64748b]">47 direct · $151K team volume</div>
        </div>
      </div>
    </div>
  )
}
