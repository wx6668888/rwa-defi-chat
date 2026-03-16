"use client";

import { ArrowLeft, Shield, TrendingUp, Users, Lock } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function TransparencyPage() {
  const metrics = [
    { icon: TrendingUp, label: "Total Value Locked", value: "$24.7M", color: "text-plasma-cyan" },
    { icon: Users, label: "Active Nodes", value: "8,432", color: "text-accent-green" },
    { icon: Lock, label: "Locked Tokens", value: "12.5M RWA", color: "text-accent-gold" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Protocol Transparency</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-void-dark rounded-2xl p-6 border border-white/5 mb-6 text-center">
          <Shield className="w-12 h-12 text-plasma-cyan mx-auto mb-3" />
          <div className="text-sm text-text-secondary">All data is on-chain and verifiable</div>
        </div>

        <div className="space-y-3">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="bg-void-dark rounded-xl p-5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`w-5 h-5 ${m.color}`} />
                  <span className="text-xs text-text-secondary uppercase tracking-wider">{m.label}</span>
                </div>
                <div className="font-mono text-2xl font-bold text-text-primary">{m.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
