"use client";

import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function FinancialPage() {
  const stats = [
    { label: "Total Income", value: "$12,847.50", change: "+24.5%", up: true },
    { label: "This Month", value: "$3,240.00", change: "+12.3%", up: true },
    { label: "Pending", value: "$580.00", change: "-5.2%", up: false },
  ];

  const transactions = [
    { type: "Staking Reward", amount: "+$125.50", time: "2h ago", status: "completed" },
    { type: "Red Packet", amount: "+$50.00", time: "5h ago", status: "completed" },
    { type: "Referral Bonus", amount: "+$200.00", time: "1d ago", status: "completed" },
    { type: "Node Upgrade", amount: "-$500.00", time: "2d ago", status: "completed" },
    { type: "Staking Reward", amount: "+$125.50", time: "3d ago", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile">
            <ArrowLeft className="w-5 h-5 text-text-secondary" />
          </Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Financial Report</h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 py-6 grid grid-cols-3 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-void-dark rounded-2xl p-4 border border-white/5">
            <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <div className="font-mono text-lg font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className={`flex items-center gap-1 text-xs font-medium ${stat.up ? 'text-accent-green' : 'text-accent-red'}`}>
              {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="px-6 mb-6">
        <div className="bg-void-dark rounded-2xl p-6 border border-white/5">
          <div className="text-sm font-medium text-text-primary mb-4">Income Trend</div>
          <div className="h-40 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-plasma-cyan/20 to-plasma-cyan/5 rounded-t" 
                style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-text-secondary">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-6">
        <div className="text-sm font-medium text-text-primary mb-3">Recent Transactions</div>
        <div className="space-y-2">
          {transactions.map((tx, i) => (
            <div key={i} className="bg-void-dark rounded-xl p-4 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-text-primary">{tx.type}</div>
                <div className="text-xs text-text-secondary mt-1">{tx.time}</div>
              </div>
              <div className={`font-mono text-sm font-bold ${tx.amount.startsWith('+') ? 'text-accent-green' : 'text-accent-red'}`}>
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
