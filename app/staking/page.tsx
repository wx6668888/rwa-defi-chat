"use client";

import { ArrowLeft, Lock, Unlock } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function StakingPage() {
  const positions = [
    { amount: "5,000", token: "RWA", apy: "45%", unlockDate: "2026-06-15", days: 89, locked: true },
    { amount: "2,500", token: "RWA", apy: "35%", unlockDate: "2026-04-20", days: 34, locked: true },
    { amount: "1,000", token: "RWA", apy: "25%", unlockDate: "Flexible", days: 0, locked: false },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Staking</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-surface-1 rounded-2xl p-6 border border-border-subtle mb-6">
          <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Total Staked</div>
          <div className="font-mono text-3xl font-bold text-text-primary mb-1">8,500 RWA</div>
          <div className="text-sm text-accent-green">≈ $34,000.00</div>
        </div>

        <div className="space-y-3">
          {positions.map((pos, i) => (
            <div key={i} className="bg-surface-1 rounded-2xl p-5 border border-border-subtle">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-mono text-xl font-bold text-text-primary">{pos.amount} {pos.token}</div>
                  <div className="text-xs text-text-secondary mt-1">APY {pos.apy}</div>
                </div>
                {pos.locked ? <Lock className="w-5 h-5 text-accent-gold" /> : <Unlock className="w-5 h-5 text-accent-green" />}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Unlock</span>
                <span className="text-text-primary font-medium">{pos.unlockDate}</span>
              </div>
              {pos.locked && (
                <div className="mt-3 h-1.5 bg-void-black rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-plasma-cyan to-accent-purple" style={{ width: `${(90 - pos.days) / 90 * 100}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="w-full mt-6 bg-plasma-cyan text-void-black font-bold py-4 rounded-xl">
          New Stake
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
