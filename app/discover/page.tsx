"use client";

import { Search, TrendingUp } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";

export default function DiscoverPage() {
  const trending = [
    { name: "DeFi Alpha", members: "12.5K", growth: "+245%", tag: "Trading" },
    { name: "Node Masters", members: "8.3K", growth: "+180%", tag: "Staking" },
    { name: "Whale Watch", members: "5.2K", growth: "+120%", tag: "Analytics" },
  ];

  const categories = ["All", "Trading", "Staking", "NFT", "Gaming", "DAO"];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="px-6 py-4">
          <h1 className="font-display text-xl font-bold text-text-primary mb-4">Discover</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input type="text" placeholder="Search channels..." 
              className="w-full bg-void-dark border border-white/5 rounded-xl pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-secondary" />
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 bg-void-dark border border-white/5 rounded-full text-xs font-medium text-text-secondary whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-plasma-cyan" />
          <span className="text-sm font-medium text-text-primary">Trending Now</span>
        </div>
        <div className="space-y-3">
          {trending.map((ch, i) => (
            <div key={i} className="bg-void-dark rounded-2xl p-5 border border-white/5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-display text-lg font-bold text-text-primary">{ch.name}</div>
                  <div className="text-xs text-text-secondary mt-1">{ch.members} members</div>
                </div>
                <span className="px-2 py-1 bg-plasma-cyan/10 text-plasma-cyan text-[10px] font-medium rounded-full">
                  {ch.tag}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent-green font-medium">{ch.growth} growth</span>
                <button className="px-4 py-1.5 bg-plasma-cyan/10 text-plasma-cyan text-xs font-bold rounded-lg">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
