"use client";

import { useState } from "react";
import { ArrowLeft, BarChart3, MoreVertical, Send } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen flex-col bg-[#05050a]">
      {/* Top Bar */}
      <div className="flex h-12 items-center justify-between border-b border-[rgba(255,255,255,0.05)] px-4">
        <Link href="/channels">
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div className="flex flex-col items-center">
          <span className="font-display text-[15px] font-bold text-[#f1f5f9]">Global</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f5d4] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00f5d4]" />
            </span>
            <span className="text-[11px] text-[#00f5d4]">1,247 online</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <BarChart3 className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Live Stats Strip */}
      <div className="flex h-8 items-center gap-3 overflow-x-auto border-b border-[rgba(255,255,255,0.05)] bg-[#0d0d14] px-4 scrollbar-hide">
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-mono text-[11px] text-[#64748b]">TVL</span>
          <span className="font-mono text-[11px] text-[#00f5d4]">$24.7M</span>
          <span className="text-[10px] text-[#10b981]">↑</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-mono text-[11px] text-[#64748b]">RWA</span>
          <span className="font-mono text-[11px] text-[#00f5d4]">$0.87</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-mono text-[11px] text-[#64748b]">APY</span>
          <span className="font-mono text-[11px] text-[#00f5d4]">40%</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-mono text-[11px] text-[#64748b]">Nodes</span>
          <span className="font-mono text-[11px] text-[#00f5d4]">8,432</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* User Message */}
        <div className="flex gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#00f5d4] to-[#8b5cf6]" />
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-xs text-[#64748b]">0x742d...4a8f</span>
              <span className="rounded-full bg-[#f59e0b]/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#f59e0b]">L5</span>
              <span className="font-mono text-[10px] text-[#334155]">2m ago</span>
            </div>
            <p className="text-sm text-[#f1f5f9]">Just staked 5000 USDT! 🚀</p>
          </div>
        </div>

        {/* Red Packet */}
        <div className="mx-auto max-w-sm rounded-2xl border border-[rgba(245,158,11,0.2)] bg-gradient-to-br from-[#f59e0b]/10 to-[#fb923c]/5 p-6 text-center">
          <div className="mb-3 text-3xl">🧧</div>
          <div className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-[#64748b]">RED PACKET</div>
          <div className="mb-2 font-mono text-3xl font-bold text-[#f1f5f9]">500 USDT</div>
          <div className="mb-3 text-xs text-[#64748b]">10 packets · First come first served</div>
          <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-[#13131e]">
            <div className="h-full w-[30%] rounded-full bg-[#f59e0b]" />
          </div>
          <div className="mb-4 text-xs text-[#64748b]">3/10 claimed</div>
          <button className="w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fb923c] py-3 font-bold text-white">CLAIM</button>
        </div>
      </div>

      {/* Input Bar */}
      <div className="border-t border-[rgba(255,255,255,0.05)] bg-[#0d0d14] p-4">
        <div className="flex items-center gap-3">
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message..." 
            className="flex-1 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#13131e] px-4 py-3 text-sm text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#00f5d4]/30 focus:outline-none" />
          <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00f5d4]">
            <Send className="h-5 w-5 text-[#05050a]" />
          </button>
        </div>
      </div>
    </div>
  );
}
