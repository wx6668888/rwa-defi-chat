"use client"

export default function SettingsPage() {
  const settings = [
    { icon: "🔔", label: "Notifications", value: "On" },
    { icon: "🔒", label: "Privacy", value: "Public" },
    { icon: "🌐", label: "Language", value: "English" },
    { icon: "🎨", label: "Theme", value: "Dark" },
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Settings
        </h1>

        <div className="space-y-3">
          {settings.map((setting, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{setting.icon}</span>
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">{setting.label}</span>
              </div>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#00f5d4]">{setting.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
