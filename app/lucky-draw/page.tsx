"use client";

import { ArrowLeft, Sparkles } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function LuckyDrawPage() {
  const winners = [
    { name: "@alice", prize: "$500", time: "2h ago" },
    { name: "@bob", prize: "$200", time: "5h ago" },
    { name: "@carol", prize: "$100", time: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Lucky Draw</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-accent-gold/10 to-accent-purple/10 rounded-2xl p-8 border border-accent-gold/20 mb-6 text-center">
          <Sparkles className="w-16 h-16 text-accent-gold mx-auto mb-4" />
          <div className="text-sm text-text-secondary mb-2">Prize Pool</div>
          <div className="font-mono text-4xl font-bold text-accent-gold mb-2">$10,000</div>
          <div className="text-xs text-text-secondary mb-6">Next draw in 2h 34m</div>
          <button className="w-full bg-accent-gold text-void-black font-bold py-3 rounded-xl">
            Enter Draw (100 RWA)
          </button>
        </div>

        <div className="text-sm font-medium text-text-primary mb-3">Recent Winners</div>
        <div className="space-y-2">
          {winners.map((w, i) => (
            <div key={i} className="bg-void-dark rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-text-primary">{w.name}</div>
                <div className="text-xs text-text-secondary mt-1">{w.time}</div>
              </div>
              <div className="font-mono text-sm font-bold text-accent-gold">{w.prize}</div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
