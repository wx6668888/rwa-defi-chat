"use client";

import { Bell, Search, Plus, Lock, MessageSquare, Compass, User, Settings } from "lucide-react";
import Link from "next/link";

// Node level badge component
function NodeBadge({ level, emoji, highlight = false }: { level: string; emoji: string; highlight?: boolean }) {
  const isHighLevel = parseInt(level.replace("L", "")) >= 2;
  
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-[11px] font-bold ${
        isHighLevel || highlight
          ? "text-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.3)]"
          : "text-[#64748b]"
      }`}
    >
      <span>{emoji}</span>
      <span>{level}</span>
    </span>
  );
}

// Unread badge component
function UnreadBadge({ count }: { count: string }) {
  return (
    <span className="inline-flex min-w-[20px] items-center justify-center rounded-full bg-[#00f5d4] px-1.5 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] font-bold text-[#05050a]">
      {count}
    </span>
  );
}

// Channel row component
function ChannelRow({
  emoji,
  name,
  preview,
  time,
  unread,
  locked,
  lockRequirement,
  href,
}: {
  emoji: string;
  name: string;
  preview: string;
  time: string;
  unread?: string;
  locked?: boolean;
  lockRequirement?: string;
  href?: string;
}) {
  if (locked) {
    return (
      <div className="relative overflow-hidden rounded-xl bg-[rgba(255,255,255,0.02)] p-3">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#13131e] text-lg blur-[2px]">
            {emoji}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#f1f5f9] blur-[2px]">
                {name}
              </span>
              <Lock className="h-3.5 w-3.5 shrink-0 text-[#64748b]" />
            </div>
            <p className="mt-1 font-[family-name:var(--font-inter)] text-[11px] text-[#64748b]">
              {lockRequirement}{" "}
              <span className="cursor-pointer text-[#00f5d4] hover:underline">
                {"→ Learn more"}
              </span>
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      </div>
    );
  }

  const content = (
    <div className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(255,255,255,0.02)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#13131e] text-lg">
        {emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-[#f1f5f9]">
            {name}
          </span>
          <span className="shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
            {time}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate font-[family-name:var(--font-inter)] text-xs text-[#64748b]">
            {preview}
          </p>
          {unread && <UnreadBadge count={unread} />}
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

// DM row component
function DMRow({
  address,
  level,
  emoji,
  preview,
  time,
  unread,
}: {
  address: string;
  level: string;
  emoji: string;
  preview: string;
  time: string;
  unread?: string;
}) {
  return (
    <div className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(255,255,255,0.02)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#13131e]">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00f5d4] to-[#8b5cf6]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-medium text-[#f1f5f9]">
              {address}
            </span>
            <NodeBadge level={level} emoji={emoji} highlight={parseInt(level.replace("L", "")) >= 4} />
          </div>
          <span className="shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
            {time}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate font-[family-name:var(--font-inter)] text-xs text-[#64748b]">
            {preview}
          </p>
          {unread && <UnreadBadge count={unread} />}
        </div>
      </div>
    </div>
  );
}

// Section header component
function SectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#334155]">
        {title}
      </span>
      {action}
    </div>
  );
}

// Tab item component
function TabItem({
  icon,
  label,
  active = false,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
}) {
  const content = (
    <button
      className={`relative flex flex-1 flex-col items-center gap-1 py-2 ${
        active ? "text-[#00f5d4]" : "text-[#334155]"
      }`}
    >
      {active && (
        <div className="absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#00f5d4]" />
      )}
      <span className="h-5 w-5">{icon}</span>
      <span className="font-[family-name:var(--font-inter)] text-[10px] font-medium">
        {label}
      </span>
    </button>
  );
  
  return href ? <Link href={href}>{content}</Link> : content;
}

export default function ChannelsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a]">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#00f5d4] opacity-[0.03] blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#8b5cf6] opacity-[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative flex flex-1 flex-col pb-16">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <button className="flex items-center gap-1.5 rounded-lg bg-[#0d0d14] px-2.5 py-1.5">
            <span className="text-base">{"⚡"}</span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold text-[#64748b]">
              L1
            </span>
          </button>

          <span className="font-[family-name:var(--font-space-grotesk)] text-[15px] font-extrabold tracking-[0.08em] text-[#f1f5f9]">
            RWA CHAT
          </span>

          <button className="relative p-2">
            <Bell className="h-5 w-5 text-[#f1f5f9]" />
            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#00f5d4] font-[family-name:var(--font-jetbrains-mono)] text-[9px] font-bold text-[#05050a]">
              3
            </span>
          </button>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0d0d14] px-3 py-2.5">
            <Search className="h-4 w-4 text-[#334155]" />
            <span className="font-[family-name:var(--font-inter)] text-[13px] text-[#334155]">
              Search channels, users...
            </span>
          </div>
        </div>

        {/* Channel list */}
        <div className="flex-1 overflow-y-auto px-4">
          {/* Official section */}
          <SectionHeader title="Official" />
          <div className="space-y-1">
            <ChannelRow
              emoji="📢"
              name="Announcements"
              preview="System maintenance scheduled for..."
              time="2m"
              unread="3"
              href="/chat"
            />
            <ChannelRow
              emoji="🎰"
              name="Lucky Draw"
              preview="🥇 Winner: 0x4f2a...8b1c claimed +$6,225"
              time="1h"
              href="/chat"
            />
          </div>

          {/* Community section */}
          <div className="mt-4">
            <SectionHeader title="Community" />
            <div className="space-y-1">
              <ChannelRow
                emoji="🌐"
                name="Global"
                preview="GM everyone! RWA just hit new ATH..."
                time="just now"
                unread="99+"
                href="/chat"
              />
              <ChannelRow
                emoji="🛸"
                name="Starship Alliance [L4+]"
                preview=""
                time=""
                locked
                lockRequirement="L4 Starship required · $50K team volume"
              />
              <ChannelRow
                emoji="💫"
                name="Nebula Core [L8+]"
                preview=""
                time=""
                locked
                lockRequirement="L8 Nebula · $2.5M team volume"
              />
            </div>
          </div>

          {/* Direct Messages section */}
          <div className="mt-4">
            <SectionHeader
              title="Direct Messages"
              action={
                <button className="rounded-md p-1 text-[#64748b] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-[#f1f5f9]">
                  <Plus className="h-4 w-4" />
                </button>
              }
            />
            <div className="space-y-1">
              <DMRow
                address="0xAbcd...1234"
                level="L7"
                emoji="⭐"
                preview="Sure, I can send 500 USDT..."
                time="5m"
                unread="1"
              />
              <DMRow
                address="0xEfgh...5678"
                level="L4"
                emoji="🛸"
                preview="Thanks for the referral!"
                time="2h"
              />
            </div>
          </div>

          <div className="h-4" />
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="fixed bottom-0 left-0 right-0 flex h-16 items-center border-t border-[rgba(255,255,255,0.06)] bg-[#0d0d14] px-2">
        <TabItem
          icon={<MessageSquare className="h-5 w-5" />}
          label="Chat"
          active
          href="/channels"
        />
        <TabItem icon={<Compass className="h-5 w-5" />} label="Discover" href="/discover" />
        <TabItem icon={<Bell className="h-5 w-5" />} label="Alerts" href="/notifications" />
        <TabItem icon={<User className="h-5 w-5" />} label="Profile" href="/profile" />
        <TabItem icon={<Settings className="h-5 w-5" />} label="Settings" href="/settings" />
      </div>
    </div>
  );
}
