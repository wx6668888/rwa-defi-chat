"use client";

import { useState } from "react";
import Link from "next/link";
import { NodeHexIcon } from "@/components/node-hex-icon";
import { NODE_LEVELS } from "@/lib/node-levels";
import { BackgroundEffects } from "@/components/background-effects";

export default function LaunchPage() {
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-void-black overflow-hidden">
      <BackgroundEffects />

      {/* Hero Screen */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="text-center mb-20">
          <h1 className="font-display text-[72px] font-black text-text-primary tracking-tighter leading-none mb-4">
            RWA
          </h1>
          <p className="text-[11px] tracking-[0.3em] text-text-secondary uppercase font-medium">
            REAL WORLD ASSETS · TOKENIZED
          </p>
        </div>

        {/* Node Honeycomb */}
        <div className="mb-20">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {NODE_LEVELS.map((level) => (
              <NodeHexIcon
                key={level.level}
                config={level}
                size={80}
                showCode={false}
              />
            ))}
          </div>
        </div>

        {/* Data Bar */}
        <div className="flex items-center gap-10 mb-16">
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-plasma-cyan mb-1">$24.7M</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider">TVL</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-plasma-cyan mb-1">8,432</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider">NODES</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-plasma-cyan mb-1">40%</div>
            <div className="text-[9px] text-text-secondary uppercase tracking-wider">APY UP TO</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href="/channels">
          <button 
            className="group px-10 py-4 border-2 border-plasma-cyan bg-transparent text-plasma-cyan font-bold text-sm tracking-wide rounded-lg hover:bg-plasma-cyan hover:text-void-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.5)]"
          >
            CONNECT WALLET
          </button>
        </Link>

        {/* Footer */}
        <p className="text-[10px] text-text-secondary mt-8 tracking-wide">
          Powered by BNB Chain · Non-custodial
        </p>
      </div>

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-void-black/80 backdrop-blur-sm" onClick={() => setShowWalletModal(false)} />
          <div className="relative w-full bg-surface-1 rounded-t-3xl border-t border-border-subtle" style={{ height: "80vh" }}>
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-6">
              <div className="w-12 h-1 bg-text-disabled rounded-full" />
            </div>

            {/* Header */}
            <div className="px-6 mb-8">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-2">SELECT WALLET</h2>
              <p className="text-sm text-text-secondary">Sign-in with your BNB Chain wallet</p>
            </div>

            {/* Wallet List */}
            <div className="px-6 space-y-3">
              {[
                { name: "MetaMask", icon: "🦊" },
                { name: "Trust Wallet", icon: "🛡️" },
                { name: "Binance Web3 Wallet", icon: "🟡" },
                { name: "WalletConnect", icon: "🔗" },
              ].map((wallet) => (
                <button key={wallet.name} className="w-full bg-surface-2 border border-border-subtle rounded-xl p-4 flex items-center gap-4 hover:border-plasma-cyan/30 transition-colors">
                  <div className="text-3xl">{wallet.icon}</div>
                  <div className="text-left">
                    <div className="font-medium text-text-primary">{wallet.name}</div>
                  </div>
                </button>
              ))}

              {/* QR Option */}
              <button className="w-full bg-surface-2 border border-border-subtle rounded-xl p-4 text-center text-sm text-plasma-cyan font-medium hover:border-plasma-cyan/30 transition-colors">
                Scan QR Code
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
