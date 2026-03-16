"use client";

import { ArrowLeft, Gift } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function RedPacketPage() {
  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/chat"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Send Red Packet</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-accent-red/10 to-accent-gold/10 rounded-2xl p-8 border border-accent-red/20 mb-6 text-center">
          <Gift className="w-16 h-16 text-accent-red mx-auto mb-4" />
          <div className="text-sm text-text-secondary mb-2">Total Amount</div>
          <input type="text" placeholder="0.00" 
            className="w-full bg-transparent text-center font-mono text-4xl font-bold text-text-primary mb-2 outline-none" />
          <div className="text-xs text-text-secondary">≈ $0.00</div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-xs text-text-secondary uppercase tracking-wider mb-2 block">Number of Packets</label>
            <input type="number" defaultValue="10" 
              className="w-full bg-surface-1 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary" />
          </div>
          <div>
            <label className="text-xs text-text-secondary uppercase tracking-wider mb-2 block">Message (Optional)</label>
            <input type="text" placeholder="Best wishes!" 
              className="w-full bg-surface-1 border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary" />
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-accent-red to-accent-gold text-white font-bold py-4 rounded-xl">
          Send Red Packet
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
