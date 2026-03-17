"use client"

export default function NotificationsPage() {
  const notifications = [
    { icon: "🧧", title: "Red Packet Claimed", desc: "You received 52.3 USDT", time: "2m ago", color: "#f59e0b" },
    { icon: "💬", title: "New Message", desc: "0xAbcd...1234 sent you a message", time: "1h ago", color: "#00f5d4" },
    { icon: "🎰", title: "Lucky Draw Win", desc: "You won $3,112 in Round #1,847", time: "3h ago", color: "#10b981" },
    { icon: "📊", title: "Staking Reward", desc: "+124.5 RWA earned", time: "1d ago", color: "#8b5cf6" },
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Notifications
        </h1>

        <div className="space-y-3">
          {notifications.map((notif, i) => (
            <div key={i} className="flex gap-3 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl" style={{ backgroundColor: `${notif.color}20` }}>
                {notif.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">{notif.title}</h3>
                <p className="mt-1 text-xs text-[#64748b]">{notif.desc}</p>
                <span className="mt-2 inline-block font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#334155]">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
