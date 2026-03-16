"use client";

import { useState } from "react";

export default function LaunchPage() {
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-void-black overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        {/* Cyan orb top-right */}
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.08)_0%,transparent_70%)] blur-3xl" />
        {/* Purple orb bottom-left */}
        <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.07)_0%,transparent_70%)] blur-3xl" />
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Wordmark */}
        <div className="text-center mb-12">
          <h1 className="font-display text-7xl font-black text-text-primary tracking-tight mb-3">
            RWA
          </h1>
          <p className="font-sans text-[11px] tracking-[0.25em] text-text-secondary uppercase">
            REAL WORLD ASSETS · TOKENIZED
          </p>
        </div>

        {/* Node Hexagon Grid - Placeholder for now */}
        <div className="mb-12">
          <div className="relative h-[280px] w-[280px]">
            {/* Will add hexagon grid in next iteration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🌐</div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="flex items-center gap-8 mb-16">
          <div className="text-center">
            <div className="font-mono text-lg text-plasma-cyan font-bold">$24.7M</div>
            <div className="font-sans text-[10px] text-text-secondary uppercase tracking-wider">TVL</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg text-plasma-cyan font-bold">8,432</div>
            <div className="font-sans text-[10px] text-text-secondary uppercase tracking-wider">NODES</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-lg text-plasma-cyan font-bold">40%</div>
            <div className="font-sans text-[10px] text-text-secondary uppercase tracking-wider">APY</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setShowWalletModal(true)}
          className="group relative w-full max-w-sm h-14 rounded-xl border border-plasma-cyan bg-transparent font-display text-sm font-bold tracking-[0.15em] text-plasma-cyan transition-all hover:bg-plasma-cyan/8 hover:shadow-[0_0_20px_rgba(0,245,212,0.15)]"
        >
          CONNECT WALLET
        </button>

        {/* Footer */}
        <p className="mt-6 font-sans text-[11px] text-text-disabled">
          Powered by BNB Chain · Non-custodial
        </p>
      </div>

      {/* Wallet Modal - Will implement in next step */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-md bg-void-dark rounded-t-3xl p-6 animate-slide-up">
            <div className="w-9 h-1 bg-text-disabled rounded-full mx-auto mb-6" />
            <h2 className="font-display text-base font-bold tracking-[0.1em] text-text-primary mb-2">
              SELECT WALLET
            </h2>
            <p className="font-sans text-[13px] text-text-secondary mb-6">
              Sign-in with your BNB Chain wallet. No registration required.
            </p>
            {/* Wallet options - simplified for now */}
            <div className="space-y-2">
              {["MetaMask", "Trust Wallet", "Binance Web3", "WalletConnect"].map((wallet) => (
                <button
                  key={wallet}
                  className="w-full h-16 flex items-center justify-between px-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <span className="font-display text-sm font-semibold text-text-primary">{wallet}</span>
                  <span className="text-text-secondary">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
