"use client";

import { Search, Hash, Lock } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { BackgroundEffects } from "@/components/background-effects";

export default function ChannelsPage() {
  const official = [
    { name: "Announcements", members: "12.5K", unread: 3 },
    { name: "General Chat", members: "8.3K", unread: 0 },
    { name: "Trading Signals", members: "5.2K", unread: 12 },
  ];

  const community = [
    { name: "Node Masters", members: "3.1K", unread: 0 },
    { name: "DeFi Alpha", members: "2.8K", unread: 5 },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <BackgroundEffects />

      {/* Header */}
      <div className="relative z-10 sticky top-0 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="px-4 py-4">
          <h1 className="font-display text-xl font-bold text-text-primary mb-4">Channels</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full bg-surface-2 border border-border-subtle rounded-lg pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-plasma-cyan/30"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-6 space-y-6">
        {/* Official */}
        <div>
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-3 px-1">Official</div>
          <div className="space-y-2">
            {official.map((ch) => (
              <div key={ch.name} className="bg-surface-1 border border-border-subtle rounded-xl p-4 hover:border-border-active transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                      <Hash className="w-5 h-5 text-plasma-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{ch.name}</div>
                      <div className="text-xs text-text-secondary">{ch.members} members</div>
                    </div>
                  </div>
                  {ch.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-plasma-cyan flex items-center justify-center">
                      <span className="text-[10px] font-bold text-void-black">{ch.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community */}
        <div>
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-3 px-1">Community</div>
          <div className="space-y-2">
            {community.map((ch) => (
              <div key={ch.name} className="bg-surface-1 border border-border-subtle rounded-xl p-4 hover:border-border-active transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                      <Hash className="w-5 h-5 text-text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{ch.name}</div>
                      <div className="text-xs text-text-secondary">{ch.members} members</div>
                    </div>
                  </div>
                  {ch.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-plasma-cyan flex items-center justify-center">
                      <span className="text-[10px] font-bold text-void-black">{ch.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
