"use client";

import { Copy, ExternalLink } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { BackgroundEffects } from "@/components/background-effects";
import { NodeHexIcon } from "@/components/node-hex-icon";
import { NODE_LEVELS } from "@/lib/node-levels";

export default function ProfilePage() {
  const currentLevel = NODE_LEVELS[4]; // L5

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <BackgroundEffects />

      {/* Header */}
      <div className="relative z-10 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle px-6 py-4">
        <h1 className="font-display text-lg font-bold text-text-primary">PROFILE</h1>
      </div>

      <div className="relative z-10 px-6 py-8 space-y-6">
        {/* Hero */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <NodeHexIcon config={currentLevel} size={96} showCode={false} />
          </div>
          <h2 className="font-display text-2xl font-bold text-text-primary mb-2">L5 COMET</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-mono text-sm text-text-secondary">0x4f2a...8b1c</span>
            <button className="text-plasma-cyan"><Copy className="w-4 h-4" /></button>
          </div>
          <div className="text-xs text-text-disabled">Joined 94 days ago · BNB Chain</div>
          <div className="text-sm text-text-primary mt-2 font-medium">CryptoWhale_88</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="font-mono text-lg font-bold text-plasma-cyan">25K</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">Staked</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg font-bold text-success">$1.2K</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">Earned</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg font-bold text-text-primary">47</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">Team</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg font-bold text-gold-node">17%</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">APY</div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-text-primary">L5 → L6</span>
            <span className="font-mono text-sm font-bold text-gold-node">38%</span>
          </div>
          <div className="h-2 bg-surface-2 rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold-node to-warning rounded-full" style={{ width: "38%" }} />
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-text-secondary">Personal $20K</span>
              <span className="text-success">$3K ✓</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Team $400K</span>
              <span className="text-text-primary">$151K</span>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-1 border border-border-subtle rounded-xl p-4">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">USDT STAKED</div>
            <div className="font-mono text-xl font-bold text-plasma-cyan mb-3">$25,000</div>
            <div className="text-xs text-text-secondary mb-2">90-day lock · 47 days left</div>
            <div className="flex justify-center">
              <svg width="48" height="48" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="24" cy="24" r="20" fill="none" stroke="#1a1a2e" strokeWidth="4" />
                <circle cx="24" cy="24" r="20" fill="none" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="50.24" />
              </svg>
            </div>
          </div>
          <div className="bg-surface-1 border border-border-subtle rounded-xl p-4">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">stRWA BALANCE</div>
            <div className="font-mono text-xl font-bold text-void-purple mb-1">1,240</div>
            <div className="text-xs text-text-secondary mb-3">≈ $1,054</div>
            <div className="text-xs text-success font-medium">Flexible unlock</div>
          </div>
        </div>

        {/* Referral */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
          <div className="text-xs font-bold text-text-primary mb-3">REFERRAL LINK</div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-surface-2 rounded-lg px-3 py-2 font-mono text-xs text-text-secondary truncate">
              rwa.chat/ref/4f2a8b1c
            </div>
            <button className="text-plasma-cyan"><Copy className="w-4 h-4" /></button>
          </div>
          <div className="text-xs text-text-secondary">47 direct · $151K team volume</div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
