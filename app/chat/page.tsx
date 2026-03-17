"use client"

import { useState } from "react"
import { ArrowLeft, BarChart3, MoreVertical, Send } from "lucide-react"
import Link from "next/link"

export default function ChatPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-[#05050a]">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,212,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative flex h-12 items-center justify-between border-b border-[rgba(255,255,255,0.05)] px-4">
        <Link href="/channels">
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </Link>
        <div className="flex flex-col items-center">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[15px] font-bold text-[#f1f5f9]">
            Global
          </span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f5d4] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00f5d4]" />
            </span>
            <span className="font-[family-name:var(--font-inter)] text-[11px] text-[#00f5d4]">
              1,247 online
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <BarChart3 className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center text-[#64748b]">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Live Stats Strip */}
      <div className="relative flex h-8 items-center gap-3 overflow-x-auto border-b border-[rgba(255,255,255,0.05)] bg-[#0d0d14] px-4 scrollbar-hide">
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">TVL</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00f5d4]">$24.7M</span>
          <span className="text-[10px] text-[#10b981]">↑</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">RWA</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00f5d4]">$0.87</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">APY</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00f5d4]">40%</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">Nodes</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00f5d4]">8,432</span>
        </div>
        <span className="text-[#334155]">·</span>
        <div className="flex shrink-0 items-center gap-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">24h Vol</span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#00f5d4]">$1.2M</span>
        </div>
      </div>

      {/* Message Feed */}
      <div className="relative flex-1 overflow-y-auto px-4 py-3">
        {/* System Bot Message */}
        <div className="mb-4 rounded-xl border border-[rgba(0,245,212,0.12)] bg-[#0d0d14] p-3">
          <div className="flex items-center gap-2">
            <span className="text-base">🎰</span>
            <span className="font-[family-name:var(--font-inter)] text-[13px] font-medium text-[#f1f5f9]">
              Lucky Draw · Round #1,847 Result
            </span>
          </div>
          <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-[#f59e0b]">
            🥇 0xAbcd...1234 (⭐L7) won +$6,225
          </p>
          <button className="mt-2 font-[family-name:var(--font-inter)] text-xs text-[#00f5d4]">
            View Full Results →
          </button>
        </div>

        {/* Message 1 */}
        <div className="border-b border-[rgba(255,255,255,0.03)] py-3">
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#13131e] text-xs">
              ⚡
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
                    0x7Fe2...9a3B
                  </span>
                  <span className="rounded bg-[#13131e] px-1.5 py-0.5 font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">
                    ⚡L1
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#334155]">2:34 PM</span>
              </div>
              <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">
                GM everyone! Just staked another 5,000 USDT 🚀 RWA to the moon
              </p>
            </div>
          </div>
        </div>

        {/* Message 2 - Data Card */}
        <div className="border-b border-[rgba(255,255,255,0.03)] py-3">
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#13131e] text-xs">
              🛸
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
                    0xCd89...4f21
                  </span>
                  <span className="rounded bg-[#1a1a2e] px-1.5 py-0.5 font-[family-name:var(--font-inter)] text-[10px] text-[#8b5cf6]">
                    🛸L4
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#334155]">2:35 PM</span>
              </div>
              <div className="mt-2 rounded-xl border border-[rgba(249,158,11,0.2)] bg-[#0d0d14] p-3">
                <div className="mb-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.15em] text-[#f59e0b]">
                  📊 STAKING SNAPSHOT
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">Staked</div>
                    <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#00f5d4]">
                      $25,000 USDT
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">APY</div>
                    <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#00f5d4]">17%</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">Earnings</div>
                    <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#10b981]">
                      +$1,240 RWA
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">Level</div>
                    <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#f59e0b]">
                      ☄️ L5 Comet
                    </div>
                  </div>
                </div>
                <div className="mt-3 font-[family-name:var(--font-inter)] text-[11px] text-[#64748b]">
                  RWA Protocol · View Dashboard →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message 3 - Red Packet */}
        <div className="border-b border-[rgba(255,255,255,0.03)] py-3">
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#13131e] text-xs">
              ⭐
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
                    0xAe12...8c7D
                  </span>
                  <span className="rounded bg-[#1a1a2e] px-1.5 py-0.5 font-[family-name:var(--font-inter)] text-[10px] text-[#f59e0b]">
                    ⭐L7
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#334155]">2:36 PM</span>
              </div>
              <div className="mt-2 rounded-2xl border border-[rgba(245,158,11,0.3)] bg-[#1a0a00] p-4">
                <div className="mb-3 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[#f59e0b]">
                  🧧 RED PACKET
                </div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-[32px] font-black text-[#f1f5f9]">
                  500 USDT
                </div>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-xs text-[#64748b]">
                  10 packets · First come first served
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#1a1a2e]">
                  <div className="h-full w-[30%] rounded-full bg-[#00f5d4]" />
                </div>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-[10px] text-[#64748b]">
                  3/10 claimed
                </p>
                <button className="mt-3 h-11 w-full rounded-xl border border-[#f59e0b] bg-transparent font-[family-name:var(--font-space-grotesk)] text-[13px] font-bold uppercase tracking-[0.1em] text-[#f59e0b] transition-colors hover:bg-[#f59e0b]/10">
                  CLAIM
                </button>
              </div>

        {/* Message 4 - Own message (right-aligned) */}
        <div className="border-b border-[rgba(255,255,255,0.03)] py-3">
          <div className="flex flex-row-reverse gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00f5d4]/10 text-xs">
              🚀
            </div>
            <div className="flex-1">
              <div className="flex flex-row-reverse items-center justify-between">
                <div className="flex flex-row-reverse items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
                    0xYour...Addr
                  </span>
                  <span className="rounded bg-[#00f5d4]/10 px-1.5 py-0.5 font-[family-name:var(--font-inter)] text-[10px] text-[#00f5d4]">
                    🚀L3
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#334155]">2:37 PM</span>
              </div>
              <p className="mt-1 text-right font-[family-name:var(--font-inter)] text-sm text-white">
                Just claimed! Thanks 🙏
              </p>
            </div>
          </div>
        </div>

        {/* Message 5 - Own Data Card - Lucky Draw Win */}
        <div className="border-b border-[rgba(255,255,255,0.03)] py-3">
          <div className="flex flex-row-reverse gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00f5d4]/10 text-xs">
              🚀
            </div>
            <div className="flex-1">
              <div className="flex flex-row-reverse items-center justify-between">
                <div className="flex flex-row-reverse items-center gap-2">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-[#64748b]">
                    0xYour...Addr
                  </span>
                  <span className="rounded bg-[#00f5d4]/10 px-1.5 py-0.5 font-[family-name:var(--font-inter)] text-[10px] text-[#00f5d4]">
                    🚀L3
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#334155]">2:38 PM</span>
              </div>
              <div className="mt-2 rounded-xl border border-[rgba(0,245,212,0.2)] bg-[#0d0d14] p-3">
                <div className="mb-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.15em] text-[#00f5d4]">
                  🎰 LUCKY DRAW WIN
                </div>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">
                  I won 2nd prize in Round #1,847!
                </p>
                <div className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[28px] font-bold text-[#10b981]">
                  +$3,112
                </div>
                <div className="mt-2 font-[family-name:var(--font-inter)] text-[11px] text-[#64748b]">
                  Share this result · Verify on BscScan →
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Input Bar */}
      <div className="relative border-t border-[rgba(255,255,255,0.06)] bg-[#0d0d14] pb-2">
        {/* DeFi Quick Actions */}
        <div className="flex gap-2 overflow-x-auto px-4 py-2 scrollbar-hide">
          {[
            { icon: "🧧", label: "Red Packet" },
            { icon: "📊", label: "Share Card" },
            { icon: "💸", label: "Transfer" },
            { icon: "🎰", label: "Lucky" },
            { icon: "📎", label: "Image" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-3 font-[family-name:var(--font-inter)] text-[11px] text-[#64748b] transition-colors hover:border-[rgba(0,245,212,0.2)] hover:text-[#00f5d4]"
            >
              <span>{action.icon}</span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>

        {/* Text Input + Send */}
        <div className="flex items-center gap-2 px-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="h-10 flex-1 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-4 font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:border-[rgba(0,245,212,0.2)] focus:outline-none"
          />
          <button
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
              message
                ? "bg-[#00f5d4] text-[#05050a]"
                : "border border-[rgba(255,255,255,0.08)] bg-[#13131e] text-[#334155]"
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
