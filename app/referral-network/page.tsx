"use client";

import { ArrowLeft, Users } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function ReferralNetworkPage() {
  const network = [
    { name: "@alice_defi", level: "L5", referrals: 12, earnings: "$2,400" },
    { name: "@bob_trader", level: "L4", referrals: 8, earnings: "$1,600" },
    { name: "@carol_stake", level: "L6", referrals: 15, earnings: "$3,000" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Referral Network</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-surface-1 rounded-2xl p-6 border border-border-subtle mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-plasma-cyan" />
            <span className="text-sm font-medium text-text-primary">Your Network</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-text-secondary mb-1">Total Referrals</div>
              <div className="font-mono text-2xl font-bold text-text-primary">35</div>
            </div>
            <div>
              <div className="text-xs text-text-secondary mb-1">Total Earned</div>
              <div className="font-mono text-2xl font-bold text-accent-green">$7,000</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {network.map((user, i) => (
            <div key={i} className="bg-surface-1 rounded-xl p-4 border border-border-subtle">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plasma-cyan to-accent-purple" />
                  <div>
                    <div className="text-sm font-medium text-text-primary">{user.name}</div>
                    <div className="text-xs text-plasma-cyan">{user.level}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">{user.referrals} referrals</span>
                <span className="font-mono font-bold text-accent-green">{user.earnings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
