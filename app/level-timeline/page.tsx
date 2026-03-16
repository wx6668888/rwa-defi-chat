"use client";

import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { MiniNodeHexIcon } from "@/components/node-hex-icon";
import { NODE_LEVELS } from "@/lib/node-levels";
import Link from "next/link";

export default function LevelTimelinePage() {
  const milestones = [
    { level: 5, date: "2026-03-15", unlocked: true },
    { level: 4, date: "2026-02-10", unlocked: true },
    { level: 3, date: "2026-01-05", unlocked: true },
    { level: 2, date: "2025-12-01", unlocked: true },
    { level: 1, date: "2025-11-15", unlocked: true },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Level Timeline</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-plasma-cyan to-accent-purple" />
          <div className="space-y-6">
            {milestones.map((m) => {
              const config = NODE_LEVELS[m.level - 1];
              return (
                <div key={m.level} className="relative flex items-start gap-4">
                  <div className="relative z-10">
                    <MiniNodeHexIcon config={config} size={48} />
                  </div>
                  <div className="flex-1 bg-void-dark rounded-xl p-4 border border-white/5">
                    <div className="font-display text-lg font-bold text-text-primary mb-1">
                      {config.name}
                    </div>
                    <div className="text-xs text-text-secondary">{m.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
