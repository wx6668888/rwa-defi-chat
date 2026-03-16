"use client";

import { Bell, Search, Lock } from "lucide-react";
import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";
import { BackgroundEffects } from "@/components/background-effects";

function NodeBadge({ level, emoji }: { level: string; emoji: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 font-mono text-[11px] font-bold text-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.3)]">
      <span>{emoji}</span>
      <span>{level}</span>
    </span>
  );
}

function UnreadBadge({ count }: { count: string }) {
  return (
    <span className="inline-flex min-w-[20px] items-center justify-center rounded-full bg-[#00f5d4] px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#05050a]">
      {count}
    </span>
  );
}

function ChannelRow({ emoji, name, preview, time, unread, locked, lockRequirement, href }: {
  emoji: string; name: string; preview: string; time: string; unread?: string; locked?: boolean; lockRequirement?: string; href?: string;
}) {
  if (locked) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-[rgba(255,255,255,0.02)] p-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#13131e] text-lg blur-[2px]">{emoji}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate font-display text-sm font-semibold text-[#f1f5f9] blur-[2px]">{name}</span>
              <Lock className="h-3.5 w-3.5 shrink-0 text-[#64748b]" />
            </div>
            <p className="mt-1 text-[11px] text-[#64748b]">{lockRequirement}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      </div>
    );
  }

  const content = (
    <div className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(255,255,255,0.02)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#13131e] text-lg">{emoji}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-display text-sm font-semibold text-[#f1f5f9]">{name}</span>
          <span className="shrink-0 font-mono text-[11px] text-[#64748b]">{time}</span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-xs text-[#64748b]">{preview}</p>
          {unread && <UnreadBadge count={unread} />}
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href} className="block cursor-pointer">{content}</Link> : content;
}

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-[#05050a] pb-20">
      <BackgroundEffects />

      {/* Header */}
      <div className="relative z-10 border-b border-[rgba(255,255,255,0.04)] bg-[#0d0d14]/90 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4">
          <NodeBadge level="L1" emoji="⚡" />
          <h1 className="font-display text-base font-black uppercase tracking-[0.1em] text-[#f1f5f9]">RWA CHAT</h1>
          <div className="relative">
            <Bell className="h-5 w-5 text-[#64748b]" />
            <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#f43f5e] flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">3</span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
            <input type="text" placeholder="Search channels, users..." 
              className="w-full rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#13131e] py-2.5 pl-10 pr-4 text-sm text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#f59e0b]/30 focus:outline-none" />
          </div>
        </div>
      </div>

      {/* Channels */}
      <div className="relative z-10 px-4 py-6 space-y-6">
        <div>
          <h2 className="mb-3 px-3 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748b]">OFFICIAL</h2>
          <ChannelRow emoji="📢" name="Announcements" preview="New staking pool live!" time="2m" unread="3" href="/chat" />
          <ChannelRow emoji="🎰" name="Lucky Draw" preview="Round #1,847 starting soon" time="1h" href="/chat" />
        </div>

        <div>
          <h2 className="mb-3 px-3 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748b]">COMMUNITY</h2>
          <ChannelRow emoji="🌐" name="Global Community" preview="Just staked 5000 RWA! 🚀" time="now" unread="99+" href="/chat" />
          <ChannelRow emoji="🛸" name="Starship Alliance [L4+]" preview="" time="" locked lockRequirement="L4 Starship required · $50K team volume" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
