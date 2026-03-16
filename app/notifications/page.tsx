"use client";

import { ArrowLeft, Gift, TrendingUp, MessageCircle, Bell } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function NotificationsPage() {
  const notifications = [
    { icon: Gift, text: "You received a red packet", amount: "+$50", time: "2h ago", color: "text-accent-red" },
    { icon: TrendingUp, text: "Staking reward claimed", amount: "+$125.50", time: "5h ago", color: "text-accent-green" },
    { icon: MessageCircle, text: "@defi_whale mentioned you", time: "1d ago", color: "text-plasma-cyan" },
    { icon: Bell, text: "Node upgrade available", time: "2d ago", color: "text-accent-gold" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
            <h1 className="font-display text-xl font-bold text-text-primary">Notifications</h1>
          </div>
          <button className="text-xs text-plasma-cyan font-medium">Mark all read</button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-2">
        {notifications.map((notif, i) => {
          const Icon = notif.icon;
          return (
            <div key={i} className="bg-surface-1 rounded-xl p-4 border border-border-subtle flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full bg-void-black flex items-center justify-center ${notif.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-text-primary">{notif.text}</div>
                {notif.amount && <div className="font-mono text-sm font-bold text-accent-green mt-1">{notif.amount}</div>}
                <div className="text-xs text-text-secondary mt-1">{notif.time}</div>
              </div>
            </div>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
}
