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
      <div className="relative z-10 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle px-4 py-4">
        <h1 className="font-display text-xl font-bold text-text-primary">Profile</h1>
      </div>

      <div className="relative z-10 px-4 py-6 space-y-4">
        {/* User Card */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-plasma-cyan to-void-purple" />
              <div>
                <div className="font-display text-lg font-bold text-text-primary">@defi_master</div>
                <div className="text-xs text-text-secondary mt-1">Member since Mar 2026</div>
              </div>
            </div>
            <NodeHexIcon config={currentLevel} size={56} showCode={false} />
          </div>

          {/* Address */}
          <div className="bg-surface-2 rounded-lg p-3 flex items-center justify-between">
            <span className="font-mono text-xs text-text-secondary">0x742d...4a8f</span>
            <button className="text-plasma-cyan">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-1 border border-border-subtle rounded-xl p-4">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">Total Staked</div>
            <div className="font-mono text-xl font-bold text-text-primary">5,000</div>
            <div className="text-xs text-text-secondary mt-1">RWA</div>
          </div>
          <div className="bg-surface-1 border border-border-subtle rounded-xl p-4">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">Total Earned</div>
            <div className="font-mono text-xl font-bold text-success">$2,847</div>
            <div className="text-xs text-text-secondary mt-1">All time</div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
          <div className="text-sm font-medium text-text-primary mb-4">Portfolio</div>
          <div className="space-y-3">
            {[
              { asset: "RWA", amount: "5,000", value: "$4,250", change: "+12.5%" },
              { asset: "USDT", amount: "1,200", value: "$1,200", change: "0%" },
            ].map((item) => (
              <div key={item.asset} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-text-primary">{item.asset}</div>
                  <div className="text-xs text-text-secondary mt-0.5">{item.amount}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono font-bold text-text-primary">{item.value}</div>
                  <div className="text-xs text-success mt-0.5">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
