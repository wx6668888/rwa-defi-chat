"use client";

import { ArrowLeft, BarChart3, MoreVertical, Send } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-void-black flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
            <div>
              <div className="font-display text-sm font-bold text-text-primary">🌐 Global</div>
              <div className="flex items-center gap-1.5 text-[10px] text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-plasma-cyan animate-pulse" />
                <span>1,247 online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button><BarChart3 className="w-5 h-5 text-text-secondary" /></button>
            <button><MoreVertical className="w-5 h-5 text-text-secondary" /></button>
          </div>
        </div>
        
        {/* Data Bar */}
        <div className="overflow-x-auto scrollbar-hide px-4 py-2 border-t border-border-subtle">
          <div className="flex gap-4 text-[10px] whitespace-nowrap">
            <span className="text-text-secondary">TVL <span className="font-mono text-plasma-cyan font-bold">$24.7M</span> ↑</span>
            <span className="text-text-secondary">RWA <span className="font-mono text-void-purple font-bold">$0.87</span></span>
            <span className="text-text-secondary">APY <span className="font-mono text-success font-bold">40%</span></span>
            <span className="text-text-secondary">Nodes <span className="font-mono text-text-primary font-bold">8,432</span></span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {/* User Message */}
        <div className="flex gap-3 border-b border-border-subtle pb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plasma-cyan to-void-purple flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-text-secondary">0x742d...4a8f</span>
              <span className="text-[9px] text-plasma-cyan">L5</span>
            </div>
            <div className="text-sm text-text-primary">Just staked 5000 USDT! 🚀</div>
          </div>
        </div>

        {/* Red Packet */}
        <div className="bg-gradient-to-br from-danger/20 to-warning/20 border border-danger/30 rounded-xl p-5 text-center">
          <div className="text-2xl mb-2">🧧</div>
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">RED PACKET</div>
          <div className="font-mono text-3xl font-bold text-text-primary mb-2">500 USDT</div>
          <div className="text-xs text-text-secondary mb-3">10 packets · First come first served</div>
          <div className="h-1.5 bg-surface-2 rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-danger rounded-full" style={{ width: "30%" }} />
          </div>
          <div className="text-xs text-text-secondary mb-3">3/10 claimed</div>
          <button className="w-full bg-danger text-white font-bold py-2.5 rounded-lg">CLAIM</button>
        </div>

        {/* System Bot */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-5 text-center">
          <div className="text-xl mb-2">🎰</div>
          <div className="text-xs font-bold text-text-primary mb-2">Lucky Draw · Round #1,847 Result</div>
          <div className="text-sm text-text-secondary mb-3">
            🥇 <span className="font-mono">0xAbcd...1234</span> <span className="text-plasma-cyan">(⭐L7)</span> won <span className="text-success font-bold">+$6,225</span>
          </div>
          <div className="text-[10px] text-plasma-cyan">View Full Results →</div>
        </div>
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-surface-1 border-t border-border-subtle p-4">
        <div className="flex gap-3 mb-3 overflow-x-auto scrollbar-hide">
          {["🧧 Red Packet", "📊 Share Card", "💸 Transfer", "🎰 Lucky", "📎 Image"].map((btn) => (
            <button key={btn} className="px-3 py-1.5 bg-surface-2 text-xs text-text-secondary rounded-lg whitespace-nowrap">
              {btn}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Message..." className="flex-1 bg-surface-2 border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary" />
          <button className="w-10 h-10 bg-plasma-cyan rounded-full flex items-center justify-center">
            <Send className="w-4 h-4 text-void-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
