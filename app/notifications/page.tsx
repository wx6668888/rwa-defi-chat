"use client"

import { useState } from "react"

// Notification types with proper styling
const notificationTypes = {
  redPacket: { icon: "🧧", color: "#f59e0b", bgColor: "rgba(245,158,11,0.1)" },
  message: { icon: "💬", color: "#00f5d4", bgColor: "rgba(0,245,212,0.1)" },
  luckyDraw: { icon: "🎰", color: "#10b981", bgColor: "rgba(16,185,129,0.1)" },
  staking: { icon: "📊", color: "#8b5cf6", bgColor: "rgba(139,92,246,0.1)" },
  system: { icon: "⚙️", color: "#64748b", bgColor: "rgba(100,116,139,0.1)" },
}

interface Notification {
  id: string
  type: keyof typeof notificationTypes
  title: string
  description: string
  time: string
  read: boolean
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "redPacket",
      title: "Red Packet Claimed",
      description: "You received 52.3 USDT from 0xAbcd...1234",
      time: "2m ago",
      read: false,
    },
    {
      id: "2",
      type: "message",
      title: "New Message",
      description: "0xEfgh...5678 sent you a message in Global Community",
      time: "1h ago",
      read: false,
    },
    {
      id: "3",
      type: "luckyDraw",
      title: "Lucky Draw Win!",
      description: "Congratulations! You won $3,112 in Round #1,847",
      time: "3h ago",
      read: false,
    },
    {
      id: "4",
      type: "staking",
      title: "Staking Reward",
      description: "+124.5 RWA tokens earned from your stake",
      time: "1d ago",
      read: true,
    },
    {
      id: "5",
      type: "system",
      title: "System Update",
      description: "New features available: AI Assistant and Level Timeline",
      time: "2d ago",
      read: true,
    },
  ])

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
        <div className="absolute -bottom-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#00f5d4] opacity-[0.05] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 pt-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
            Notifications
          </h1>
          {unreadCount > 0 && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f59e0b]">
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold text-[#05050a]">
                {unreadCount}
              </span>
            </div>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notif) => {
            const type = notificationTypes[notif.type]
            return (
              <button
                key={notif.id}
                onClick={() => markAsRead(notif.id)}
                className="w-full text-left"
              >
                <div className={`flex gap-3 rounded-xl border p-4 transition-all ${
                  notif.read 
                    ? 'border-[rgba(255,255,255,0.04)] bg-[#0d0d14]' 
                    : 'border-[rgba(245,158,11,0.2)] bg-[#0d0d14] shadow-[0_0_20px_rgba(245,158,11,0.1)]'
                }`}>
                  <div 
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl"
                    style={{ backgroundColor: type.bgColor }}
                  >
                    {type.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[#f1f5f9]">
                        {notif.title}
                      </h3>
                      {!notif.read && (
                        <div className="h-2 w-2 shrink-0 rounded-full bg-[#f59e0b]" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-[#64748b] line-clamp-2">
                      {notif.description}
                    </p>
                    <span className="mt-2 inline-block font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#334155]">
                      {notif.time}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
