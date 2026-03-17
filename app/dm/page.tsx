"use client"

export default function DMPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Direct Messages
        </h1>

        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00f5d4] to-[#8b5cf6]" />
              <div className="flex-1">
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#f1f5f9]">0xAbcd...{i}234</div>
                <div className="text-xs text-[#64748b]">Last message 2h ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
