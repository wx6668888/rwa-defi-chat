"use client";

import { ArrowLeft, BarChart3, MoreVertical, Send, ImageIcon } from "lucide-react";
import { useState } from "react";

export default function ChatRoomPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen flex-col bg-void-black">
      {/* Top Bar */}
      <div className="flex h-12 items-center justify-between border-b border-border-subtle px-4">
        <button className="flex h-10 w-10 items-center justify-center text-text-secondary">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center">
          <span className="font-display text-[15px] font-bold text-text-primary">
            🌐 Global
          </span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plasma-cyan opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-plasma-cyan" />
            </span>
            <span className="text-[11px] text-plasma-cyan">1,247 online</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center text-text-secondary">
            <BarChart3 className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center text-text-secondary">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Live Stats Strip */}
      <div className="flex h-8 items-center gap-3 overflow-x-auto border-b border-border-subtle bg-surface-1 px-4 scrollbar-hide">
        <StatItem label="TVL" value="$24.7M" trend="↑" />
        <span className="text-text-disabled">·</span>
        <StatItem label="RWA" value="$0.87" />
        <span className="text-text-disabled">·</span>
        <StatItem label="APY" value="40%" />
        <span className="text-text-disabled">·</span>
        <StatItem label="Nodes" value="8,432" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-4">
          {/* System Message */}
          <SystemMessage />
          
          {/* Normal Message */}
          <Message
            address="0xAbcd...1234"
            level="L7"
            emoji="⭐"
            text="GM everyone! Just staked another 5,000 USDT 🚀"
            time="09:32"
          />

          {/* Data Card Message */}
          <DataCardMessage />

          {/* Red Packet Message */}
          <RedPacketMessage />
        </div>
      </div>

      {/* Bottom Input */}
      <div className="border-t border-border-subtle bg-surface-1 p-3">
        {/* Quick Actions */}
        <div className="mb-2 flex gap-2 overflow-x-auto scrollbar-hide">
          <QuickAction emoji="🧧" label="Red Packet" />
          <QuickAction emoji="📊" label="Share Card" />
          <QuickAction emoji="💸" label="Transfer" />
          <QuickAction emoji="🎰" label="Lucky" />
          <QuickAction emoji="📎" label="Image" />
        </div>

        {/* Input Row */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 h-10 rounded-lg border border-white/8 bg-surface-1er px-3 text-sm text-text-primary placeholder:text-text-disabled focus:border-plasma-cyan/30 focus:outline-none"
          />
          {message && (
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-plasma-cyan">
              <Send className="h-4 w-4 text-void-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value, trend }: { label: string; value: string; trend?: string }) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <span className="font-mono text-[11px] text-text-secondary">{label}</span>
      <span className="font-mono text-[11px] text-plasma-cyan">{value}</span>
      {trend && <span className="text-[10px] text-accent-green">{trend}</span>}
    </div>
  );
}

function QuickAction({ emoji, label }: { emoji: string; label: string }) {
  return (
    <button className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-white/8 bg-surface-1er px-3 text-xs text-text-secondary hover:border-plasma-cyan/20 hover:text-plasma-cyan">
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );
}

function SystemMessage() {
  return (
    <div className="mx-auto max-w-sm rounded-xl border border-plasma-cyan/12 bg-surface-1 p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg">🎰</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
          Lucky Draw · Round #1,847 Result
        </span>
      </div>
      <p className="font-mono text-[13px] text-accent-gold">
        🥇 0xAbcd...1234 (⭐L7) won +$6,225
      </p>
      <button className="mt-2 text-xs text-plasma-cyan hover:underline">
        View Full Results →
      </button>
    </div>
  );
}

function Message({ address, level, emoji, text, time }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-1er text-sm">
        {emoji}
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-mono text-[11px] text-text-secondary">{address}</span>
          <span className="font-mono text-[10px] text-accent-gold">{level}</span>
          <span className="ml-auto font-mono text-[10px] text-text-disabled">{time}</span>
        </div>
        <p className="text-sm text-text-primary">{text}</p>
      </div>
    </div>
  );
}

function DataCardMessage() {
  return (
    <div className="max-w-sm rounded-xl border border-accent-gold/20 bg-surface-1 p-3">
      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-accent-gold">
        📊 STAKING SNAPSHOT
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="font-mono text-sm text-plasma-cyan">$25,000</div>
          <div className="text-[10px] text-text-disabled">Staked</div>
        </div>
        <div>
          <div className="font-mono text-sm text-plasma-cyan">17%</div>
          <div className="text-[10px] text-text-disabled">APY</div>
        </div>
        <div>
          <div className="font-mono text-sm text-accent-green">+$1,240</div>
          <div className="text-[10px] text-text-disabled">Earnings</div>
        </div>
        <div>
          <div className="font-mono text-sm text-accent-gold">☄️ L5</div>
          <div className="text-[10px] text-text-disabled">Level</div>
        </div>
      </div>
    </div>
  );
}

function RedPacketMessage() {
  return (
    <div className="max-w-sm rounded-2xl border border-accent-gold/30 bg-gradient-to-br from-[#1a0a00] to-void-dark p-4">
      <div className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-gold">
        🧧 RED PACKET
      </div>
      <div className="mb-2 text-center font-display text-3xl font-black text-text-primary">
        500 USDT
      </div>
      <p className="mb-3 text-center text-xs text-text-secondary">
        10 packets · First come first served
      </p>
      <div className="mb-3 h-1 overflow-hidden rounded-full bg-surface-1er">
        <div className="h-full w-[30%] bg-plasma-cyan" />
      </div>
      <p className="mb-3 text-center font-mono text-xs text-text-secondary">
        3/10 claimed
      </p>
      <button className="w-full h-11 rounded-xl border border-accent-gold bg-transparent font-display text-sm font-bold tracking-wider text-accent-gold hover:bg-accent-gold/10">
        CLAIM
      </button>
    </div>
  );
}
