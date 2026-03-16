"use client";

import { ArrowLeft, Search, Clock } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function SearchPage() {
  const recent = ["DeFi Alpha", "Node upgrade", "Staking rewards"];
  const results = [
    { type: "Channel", name: "DeFi Alpha", members: "12.5K" },
    { type: "User", name: "@defi_whale", level: "L7" },
    { type: "Message", text: "New staking pool live!", time: "2h ago" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input type="text" placeholder="Search..." autoFocus
              className="w-full bg-void-dark border border-white/5 rounded-xl pl-11 pr-4 py-3 text-sm text-text-primary" />
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-text-secondary" />
          <span className="text-xs text-text-secondary uppercase tracking-wider">Recent</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {recent.map((term) => (
            <button key={term} className="px-3 py-1.5 bg-void-dark border border-white/5 rounded-full text-xs text-text-secondary">
              {term}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {results.map((r, i) => (
            <div key={i} className="bg-void-dark rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1">{r.type}</div>
                  <div className="text-sm font-medium text-text-primary">{r.name || r.text}</div>
                  {r.members && <div className="text-xs text-text-secondary mt-1">{r.members} members</div>}
                  {r.level && <div className="text-xs text-plasma-cyan mt-1">{r.level}</div>}
                  {r.time && <div className="text-xs text-text-secondary mt-1">{r.time}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
