"use client"

export default function TransparencyPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Protocol Transparency
        </h1>

        <div className="space-y-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">TOTAL VALUE LOCKED</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#00f5d4]">$24.7M</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">ACTIVE NODES</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#f59e0b]">8,432</div>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
            <div className="mb-2 text-xs font-bold uppercase text-[#64748b]">24H VOLUME</div>
            <div className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#8b5cf6]">$1.2M</div>
          </div>
        </div>
      </div>
    </div>
  )
}
