"use client";

import { Copy } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import { NodeHexIcon } from "@/components/node-hex-icon";
import { NODE_LEVELS } from "@/lib/node-levels";

export default function ProfilePage() {
  const currentLevel = NODE_LEVELS[4]; // L5
  return (
    <div className="min-h-screen bg-void-black pb-20">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="bg-surface-1 px-6 py-8">
          {/* Node Level Icon */}
          <div className="mb-4 flex justify-center">
            <NodeHexIcon config={currentLevel} size={96} showCode={false} />
          </div>

          {/* Level Badge */}
          <div className="mb-2 text-center">
            <span className="font-display text-sm font-extrabold tracking-[0.12em] text-accent-gold">
              L5 COMET
            </span>
          </div>
          <p className="mb-4 text-center text-xs text-text-secondary">
            ☄️ Comet · Dividend eligible
          </p>

          {/* Address */}
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="font-mono text-base font-bold text-text-primary">
              0x4f2a...8b1c
            </span>
            <button className="text-text-secondary hover:text-plasma-cyan">
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <p className="text-center text-[11px] text-text-disabled">
            Joined 94 days ago · BNB Chain
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 border-y border-border-subtle bg-surface-1">
          <StatItem value="25,000" label="STAKED" color="text-plasma-cyan" />
          <StatItem value="+$1,240" label="EARNED" color="text-accent-green" />
          <StatItem value="47" label="TEAM" color="text-text-primary" />
          <StatItem value="17%" label="APY" color="text-accent-gold" />
        </div>

        {/* Level Progress */}
        <div className="mx-5 mt-6">
          <div className="rounded-2xl border border-accent-gold/20 bg-surface-1 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-[13px] font-bold text-text-primary">
                L5 → L6
              </span>
              <span className="font-mono text-xs text-accent-gold">
                38% to Planet
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-surface-1er">
              <div className="h-full w-[38%] bg-accent-gold" />
            </div>

            {/* Requirements */}
            <div className="flex items-center justify-between text-[11px]">
              <div className="font-mono text-text-secondary">
                Personal $20K / $3K <span className="text-accent-green">✓</span>
              </div>
              <div className="font-mono text-text-secondary">
                Team $400K / $151K
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="mx-5 mt-4 grid grid-cols-2 gap-3">
          {/* USDT Staking */}
          <div className="rounded-xl border border-plasma-cyan/20 bg-surface-1 p-4">
            <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-text-disabled">
              USDT STAKED
            </div>
            <div className="mb-2 font-mono text-xl font-bold text-text-primary">
              $25,000
            </div>
            <p className="mb-3 text-[11px] text-text-secondary">
              90 days · 47d remaining
            </p>
            <div className="flex items-center justify-center">
              <svg className="h-11 w-11 -rotate-90">
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="#1a1a2e"
                  strokeWidth="3"
                />
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  fill="none"
                  stroke="#00f5d4"
                  strokeWidth="3"
                  strokeDasharray="113"
                  strokeDashoffset="45"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* stRWA Balance */}
          <div className="rounded-xl border border-accent-purple/20 bg-surface-1 p-4">
            <div className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-text-disabled">
              stRWA BALANCE
            </div>
            <div className="mb-1 font-mono text-xl font-bold text-text-primary">
              1,240
            </div>
            <p className="mb-3 text-[11px] text-text-secondary">
              ≈ $1,054 · Liquid
            </p>
            <div className="flex items-center gap-1 text-[11px] text-accent-purple">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-purple" />
              <span>Flexible unlock</span>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="mx-5 mt-4">
          <div className="rounded-xl border border-accent-purple/20 bg-surface-1 p-4">
            <div className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-text-disabled">
              MY REFERRAL LINK
            </div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex-1 truncate font-mono text-xs text-accent-purple">
                rwa.finance/?ref=0x4f2a...
              </span>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-purple/40 text-accent-purple">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="font-mono text-[11px] text-text-secondary">
              47 direct · $151K team volume
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center border-r border-border-subtle py-3 last:border-r-0">
      <div className={`font-mono text-lg font-bold ${color}`}>{value}</div>
      <div className="text-[9px] uppercase tracking-wider text-text-disabled">{label}</div>
    </div>
  );
}
