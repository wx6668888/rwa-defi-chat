"use client";

import { Search, Bell, Lock } from "lucide-react";
import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";
import { BackgroundEffects } from "@/components/background-effects";

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-void-black pb-20">
      <BackgroundEffects />

      {/* Top Bar */}
      <div className="relative z-10 sticky top-0 bg-surface-1/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-2 rounded-full">
            <span className="text-sm">⚡</span>
            <span className="font-mono text-xs font-bold text-plasma-cyan">L1</span>
          </div>
          <h1 className="font-display text-base font-black text-text-primary tracking-wider">RWA CHAT</h1>
          <div className="relative">
            <Bell className="w-5 h-5 text-text-secondary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-danger rounded-full flex items-center justify-center">
              <span className="text-[9px] font-bold text-white">3</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-6 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search channels, users..."
              className="w-full bg-surface-2 border border-border-subtle rounded-xl pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-plasma-cyan/30"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 py-6 space-y-8">
        {/* Official */}
        <div>
          <div className="text-[10px] text-text-disabled uppercase tracking-[0.15em] mb-4 font-bold">OFFICIAL</div>
          <div className="space-y-3">
            <Link href="/chat">
              <div className="flex items-center gap-4 py-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-2xl">📢</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-primary text-sm mb-0.5">Announcements</div>
                  <div className="text-xs text-text-secondary">2m ago</div>
                </div>
                <div className="w-6 h-6 bg-plasma-cyan rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-void-black">3</span>
                </div>
              </div>
            </Link>
            <Link href="/chat">
              <div className="flex items-center gap-4 py-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-2xl">🎰</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-primary text-sm mb-0.5">Lucky Draw</div>
                  <div className="text-xs text-text-secondary">1h ago</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Community */}
        <div>
          <div className="text-[10px] text-text-disabled uppercase tracking-[0.15em] mb-4 font-bold">COMMUNITY</div>
          <div className="space-y-3">
            <Link href="/chat">
              <div className="flex items-center gap-4 py-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-2xl">🌐</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-primary text-sm mb-0.5">Global Community</div>
                  <div className="text-xs text-text-secondary">Just now</div>
                </div>
                <div className="px-2 py-1 bg-plasma-cyan rounded-full">
                  <span className="text-[10px] font-bold text-void-black">99+</span>
                </div>
              </div>
            </Link>

            {/* Locked Channel */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-surface-2/50 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-6 h-6 text-gold-node mx-auto mb-2" />
                  <div className="text-xs font-bold text-text-primary mb-1">L4 Starship required</div>
                  <div className="text-[10px] text-text-secondary">$50K team volume</div>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3 opacity-40">
                <div className="text-2xl">🛸</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-primary text-sm mb-0.5">Starship Alliance [L4+]</div>
                  <div className="text-xs text-text-secondary">Exclusive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
