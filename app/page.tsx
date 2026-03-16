"use client";

import { useState } from "react";
import { NodeHexIcon } from "@/components/node-hex-icon";
import { NODE_LEVELS } from "@/lib/node-levels";
import { BackgroundEffects } from "@/components/background-effects";

export default function LaunchPage() {
  return (
    <div className="relative min-h-screen bg-void-black overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl font-black text-text-primary tracking-tight mb-2">
            RWA
          </h1>
          <p className="text-[10px] tracking-[0.3em] text-text-secondary uppercase">
            DEFI CHAT · POWERED BY BNB CHAIN
          </p>
        </div>

        {/* Node Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {NODE_LEVELS.map((level) => (
              <NodeHexIcon
                key={level.level}
                config={level}
                size={72}
                showCode={true}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 w-full max-w-sm">
          <div className="text-center">
            <div className="font-mono text-xl font-bold text-plasma-cyan">$24.7M</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">TVL</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-xl font-bold text-plasma-cyan">8,432</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">NODES</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-xl font-bold text-plasma-cyan">40%</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider mt-1">APY</div>
          </div>
        </div>

        {/* CTA */}
        <button className="px-8 py-3 bg-plasma-cyan text-void-black font-bold text-sm rounded-lg hover:bg-plasma-cyan/90 transition-colors">
          CONNECT WALLET
        </button>

        <p className="text-[10px] text-text-secondary mt-6">
          Powered by BNB Chain · Non-custodial
        </p>
      </div>
    </div>
  );
}
