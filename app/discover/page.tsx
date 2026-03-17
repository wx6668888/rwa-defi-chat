"use client"

import { Search, Lock, ChevronRight } from "lucide-react"

export default function DiscoverPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a]">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00f5d4] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-[#8b5cf6] opacity-[0.03] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(rgba(0,245,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col pb-20">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 pb-4 pt-6">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
            Discover
          </h1>
          <button className="flex h-7 items-center gap-1.5 rounded-full border border-[#334155] px-3">
            <span className="text-xs">🌐</span>
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#64748b]">ALL</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 pb-3">
          <div className="flex h-11 items-center gap-3 rounded-xl border border-[rgba(0,245,212,0.08)] bg-[#0d0d14] px-4">
            <Search className="h-4 w-4 text-[#334155]" />
            <input type="text" placeholder="Search channels..." 
              className="flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:outline-none" />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="mb-4 flex gap-2 overflow-x-auto px-5 pb-1 scrollbar-hide">
          {["All", "Official", "Community", "L4+", "L7+", "L8+"].map((chip, i) => (
            <button key={chip}
              className={`flex h-8 shrink-0 items-center rounded-full border px-4 text-xs font-medium transition-all ${
                i === 0 ? "border-[#00f5d4] bg-[rgba(0,245,212,0.1)] text-[#00f5d4]" : "border-[#334155] text-[#64748b] hover:border-[#64748b]"
              }`}>
              {chip}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 space-y-6 overflow-y-auto px-5">
          {/* OFFICIAL Section */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-[9px] font-medium uppercase tracking-[0.2em] text-[#334155]">
              Official
            </h2>
            <div className="space-y-3">
              {/* Announcements Card */}
              <div className="rounded-[14px] border border-[rgba(0,245,212,0.125)] bg-[#0d0d14] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(0,245,212,0.1)] text-2xl">
                    📢
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">
                        Announcements
                      </h3>
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#334155]">2m ago</span>
                    </div>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Official updates, protocol changes, emergency notices
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#00f5d4]">8.4K</span>
                        <span className="text-[10px] text-[#334155]">members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#10b981]">247</span>
                        <span className="text-[10px] text-[#334155]">online</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#334155]" />
                </div>
              </div>

              {/* Lucky Draw Card */}
              <div className="rounded-[14px] border border-[rgba(245,158,11,0.125)] bg-[#0d0d14] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(245,158,11,0.1)] text-2xl">
                    🎰
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">
                        Lucky Draw
                      </h3>
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#334155]">1h ago</span>
                    </div>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Daily draws, prize pools, winner announcements
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#00f5d4]">12.1K</span>
                        <span className="text-[10px] text-[#334155]">members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#10b981]">892</span>
                        <span className="text-[10px] text-[#334155]">online</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#334155]" />
                </div>
              </div>
            </div>
          </section>

          {/* COMMUNITY Section */}
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-[9px] font-medium uppercase tracking-[0.2em] text-[#334155]">
              Community
            </h2>
            <div className="space-y-3">
              {/* Global Card */}
              <div className="rounded-[14px] border border-[rgba(0,245,212,0.125)] bg-[#0d0d14] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(0,245,212,0.1)] text-2xl">
                    🌐
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">
                      Global Community
                    </h3>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      General discussion, questions, support
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#00f5d4]">24.7K</span>
                        <span className="text-[10px] text-[#334155]">members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[#10b981]">1.2K</span>
                        <span className="text-[10px] text-[#334155]">online</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#334155]" />
                </div>
              </div>

              {/* Locked Channel - Starship */}
              <div className="relative overflow-hidden rounded-[14px] border border-[rgba(139,92,246,0.125)] bg-[#0d0d14] p-4">
                <div className="flex items-start gap-3 opacity-40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[rgba(139,92,246,0.1)] text-2xl blur-[1px]">
                    🛸
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">
                        Starship Alliance [L4+]
                      </h3>
                      <Lock className="h-3.5 w-3.5 text-[#8b5cf6]" />
                    </div>
                    <p className="mt-0.5 text-xs text-[#64748b]">
                      Exclusive L4+ community
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[0.5px]">
                  <div className="text-center">
                    <Lock className="mx-auto mb-2 h-5 w-5 text-[#8b5cf6]" />
                    <p className="font-[family-name:var(--font-inter)] text-xs font-medium text-[#f1f5f9]">
                      L4 Starship required
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#64748b]">
                      $50K team volume
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
