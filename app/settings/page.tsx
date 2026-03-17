"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface SettingItem {
  id: string
  icon: string
  label: string
  value: string
  type: "toggle" | "select" | "link"
  options?: string[]
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingItem[]>([
    {
      id: "notifications",
      icon: "🔔",
      label: "Notifications",
      value: "On",
      type: "toggle",
      options: ["On", "Off"],
    },
    {
      id: "privacy",
      icon: "🔒",
      label: "Privacy",
      value: "Public",
      type: "select",
      options: ["Public", "Friends Only", "Private"],
    },
    {
      id: "language",
      icon: "🌐",
      label: "Language",
      value: "English",
      type: "select",
      options: ["English", "中文", "日本語", "한국어"],
    },
    {
      id: "theme",
      icon: "🎨",
      label: "Theme",
      value: "Dark",
      type: "toggle",
      options: ["Dark", "Light"],
    },
    {
      id: "currency",
      icon: "💰",
      label: "Currency Display",
      value: "USD",
      type: "select",
      options: ["USD", "EUR", "CNY", "JPY"],
    },
  ])

  const toggleSetting = (id: string) => {
    setSettings(prev => prev.map(s => {
      if (s.id === id && s.type === "toggle" && s.options) {
        const currentIndex = s.options.indexOf(s.value)
        const nextIndex = (currentIndex + 1) % s.options.length
        return { ...s, value: s.options[nextIndex] }
      }
      return s
    }))
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
        <div className="absolute -bottom-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#00f5d4] opacity-[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Settings
        </h1>

        {/* Settings List */}
        <div className="space-y-3">
          {settings.map((setting) => (
            <button
              key={setting.id}
              onClick={() => setting.type === "toggle" && toggleSetting(setting.id)}
              className="w-full"
            >
              <div className="flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4 transition-all hover:border-[rgba(0,245,212,0.2)]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{setting.icon}</span>
                  <span className="font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">
                    {setting.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-[#00f5d4]">
                    {setting.value}
                  </span>
                  {setting.type === "select" && (
                    <ChevronRight className="h-4 w-4 text-[#64748b]" />
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Account Section */}
        <div className="mt-8">
          <h2 className="mb-3 px-3 font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#334155]">
            Account
          </h2>
          <div className="space-y-3">
            <button className="w-full rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4 text-left transition-all hover:border-[rgba(0,245,212,0.2)]">
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">Connected Wallet</span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#64748b]">0x4f2a...8b1c</span>
              </div>
            </button>
            <button className="w-full rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4 text-left transition-all hover:border-[rgba(0,245,212,0.2)]">
              <span className="font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">Backup & Security</span>
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8">
          <h2 className="mb-3 px-3 font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#334155]">
            Danger Zone
          </h2>
          <button className="w-full rounded-xl border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)] p-4 text-left transition-all hover:border-[rgba(239,68,68,0.4)]">
            <span className="font-[family-name:var(--font-inter)] text-sm text-[#ef4444]">Disconnect Wallet</span>
          </button>
        </div>
      </div>
    </div>
  )
}
