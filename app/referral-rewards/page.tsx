"use client";

import { ArrowLeft, Copy, Share2 } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function ReferralRewardsPage() {
  const rewards = [
    { tier: "Tier 1", rate: "10%", count: 15, earned: "$1,500" },
    { tier: "Tier 2", rate: "5%", count: 8, earned: "$800" },
    { tier: "Tier 3", rate: "2%", count: 12, earned: "$240" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Referral Rewards</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-plasma-cyan/10 to-accent-purple/10 rounded-2xl p-6 border border-plasma-cyan/20 mb-6">
          <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Your Referral Code</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 font-mono text-lg font-bold text-text-primary">RWA-X7K9P2</div>
            <button className="w-10 h-10 bg-void-dark rounded-lg flex items-center justify-center">
              <Copy className="w-4 h-4 text-plasma-cyan" />
            </button>
            <button className="w-10 h-10 bg-void-dark rounded-lg flex items-center justify-center">
              <Share2 className="w-4 h-4 text-plasma-cyan" />
            </button>
          </div>
        </div>

        <div className="bg-void-dark rounded-2xl p-6 border border-white/5 mb-6">
          <div className="text-xs text-text-secondary uppercase tracking-wider mb-3">Total Earnings</div>
          <div className="font-mono text-3xl font-bold text-accent-green">$2,540.00</div>
        </div>

        <div className="space-y-3">
          {rewards.map((r, i) => (
            <div key={i} className="bg-void-dark rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-primary">{r.tier}</span>
                <span className="text-xs text-plasma-cyan font-bold">{r.rate}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">{r.count} referrals</span>
                <span className="font-mono font-bold text-accent-green">{r.earned}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
