"use client";

import { ArrowLeft, TrendingUp } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { BackgroundEffects } from "@/components/background-effects";
import Link from "next/link";

export default function FinancialPage() {
  return (
    <div className="min-h-screen bg-void-black pb-20">
      <BackgroundEffects />

      {/* Header */}
      <div className="relative z-10 sticky top-0 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
            <h1 className="font-display text-lg font-bold text-text-primary tracking-wide">FINANCE</h1>
          </div>
          <div className="flex gap-2">
            {["7D", "30D", "90D"].map((t, i) => (
              <button key={t} className={`px-3 py-1 text-xs font-bold rounded ${i === 1 ? "bg-plasma-cyan text-void-black" : "bg-surface-2 text-text-secondary"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-6 space-y-6">
        {/* Hero */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-6">
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">TOTAL INCOME · 30 DAYS</div>
          <div className="font-mono text-5xl font-bold text-text-primary mb-2">$4,892.30</div>
          <div className="flex items-center gap-2 text-success text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>+18.4%</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-[9px] text-text-secondary uppercase tracking-wider mb-1">USDT</div>
              <div className="font-mono text-sm font-bold text-plasma-cyan">$3,240.50</div>
            </div>
            <div>
              <div className="text-[9px] text-text-secondary uppercase tracking-wider mb-1">REFERRAL</div>
              <div className="font-mono text-sm font-bold text-gold-node">$847.20</div>
            </div>
            <div>
              <div className="text-[9px] text-text-secondary uppercase tracking-wider mb-1">RWA</div>
              <div className="font-mono text-sm font-bold text-void-purple">804.6</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
          <div className="h-[140px] flex items-end justify-between gap-1">
            {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-plasma-cyan/20 to-plasma-cyan/5 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Income Details */}
        <div className="space-y-3">
          <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
            <div className="text-xs font-bold text-text-primary mb-3">STATIC INCOME (USDT)</div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-text-secondary">Flexible</span><span className="font-mono text-plasma-cyan">$12.60/day</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">90-day Lock</span><span className="font-mono text-plasma-cyan">$9.25/day</span></div>
              <div className="flex justify-between"><span className="text-text-secondary">180-day Lock</span><span className="font-mono text-plasma-cyan">$22.83/day</span></div>
              <div className="pt-2 border-t border-border-subtle flex justify-between"><span className="text-text-secondary">Mixed APY</span><span className="font-mono text-success font-bold">14.2%</span></div>
            </div>
          </div>

          <div className="bg-surface-1 border border-border-subtle rounded-xl p-5">
            <div className="text-xs font-bold text-text-primary mb-3">REFERRAL REWARDS</div>
            <div className="space-y-2">
              {[
                { addr: "0x742d...4a8f", stake: "$5,000", reward: "$125.00" },
                { addr: "0x8b3c...2e1d", stake: "$3,200", reward: "$80.00" },
                { addr: "0x1f9a...7c4b", stake: "$2,100", reward: "$52.50" },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="font-mono text-text-secondary">{r.addr}</span>
                  <span className="font-mono text-gold-node font-bold">{r.reward}</span>
                </div>
              ))}
              <div className="pt-2 text-center text-[10px] text-plasma-cyan">View all 12 records →</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
