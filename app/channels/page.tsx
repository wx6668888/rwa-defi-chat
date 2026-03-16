"use client";

import { Bell, Search } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-void-black pb-20">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-void-darker text-sm">
              ⚡
            </div>
            <span className="text-[10px] font-mono text-accent-gold">L1</span>
          </div>
          <h1 className="font-display text-[15px] font-extrabold tracking-[0.08em] text-text-primary">
            RWA CHAT
          </h1>
          <button className="relative">
            <Bell className="h-5 w-5 text-text-secondary" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-plasma-cyan" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mx-5 mb-4">
          <div className="flex h-10 items-center gap-2 rounded-lg border border-white/5 bg-void-dark px-3">
            <Search className="h-4 w-4 text-text-disabled" />
            <input
              type="text"
              placeholder="Search channels, users..."
              className="flex-1 bg-transparent text-[13px] text-text-primary placeholder:text-text-disabled focus:outline-none"
            />
          </div>
        </div>

        {/* Channels List */}
        <div className="space-y-6 px-5">
          {/* Official Section */}
          <section>
            <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-disabled">
              Official
            </h2>
            <div className="space-y-2">
              <ChannelRow
                emoji="📢"
                name="Announcements"
                preview="System maintenance scheduled for..."
                time="2m"
                unread="3"
              />
              <ChannelRow
                emoji="🎰"
                name="Lucky Draw"
                preview="🥇 Winner: 0x4f2a...8b1c claimed +$6,225"
                time="1h"
              />
            </div>
          </section>

          {/* Community Section */}
          <section>
            <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-disabled">
              Community
            </h2>
            <div className="space-y-2">
              <ChannelRow
                emoji="🌐"
                name="Global"
                preview="GM everyone! RWA just hit new ATH..."
                time="just now"
                unread="99+"
              />
              <LockedChannelRow
                emoji="🛸"
                name="Starship Alliance"
                requirement="L4 Starship · $50K team volume"
              />
              <LockedChannelRow
                emoji="💫"
                name="Nebula Core"
                requirement="L8 Nebula · $2.5M team volume"
              />
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function ChannelRow({
  emoji,
  name,
  preview,
  time,
  unread,
}: {
  emoji: string;
  name: string;
  preview: string;
  time: string;
  unread?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-void-darker text-lg">
        {emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-display text-sm font-semibold text-text-primary">
            {name}
          </span>
          <span className="shrink-0 font-mono text-[11px] text-text-secondary">
            {time}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-xs text-text-secondary">{preview}</p>
          {unread && (
            <span className="inline-flex min-w-[20px] shrink-0 items-center justify-center rounded-full bg-plasma-cyan px-1.5 py-0.5 font-mono text-[10px] font-bold text-void-black">
              {unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function LockedChannelRow({
  emoji,
  name,
  requirement,
}: {
  emoji: string;
  name: string;
  requirement: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white/5 p-3 backdrop-blur-sm">
      <div className="flex items-start gap-3 opacity-40 blur-[2px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-void-darker text-lg">
          {emoji}
        </div>
        <div className="min-w-0 flex-1">
          <span className="truncate font-display text-sm font-semibold text-text-primary">
            {name}
          </span>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-text-secondary">
        {requirement}{" "}
        <span className="cursor-pointer text-plasma-cyan hover:underline">
          → Learn more
        </span>
      </p>
    </div>
  );
}
