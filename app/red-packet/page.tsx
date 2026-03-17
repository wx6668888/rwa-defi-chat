"use client"

import { useState } from "react"
import { Minus, Plus, Check } from "lucide-react"
import Link from "next/link"

// Bottom navigation component
function BottomNav({ active = "rewards" }: { active?: string }) {
  const items = [
    { id: "home", label: "Home", href: "/channels" },
    { id: "discover", label: "Discover", href: "/discover" },
    { id: "rewards", label: "Rewards", href: "/red-packet" },
    { id: "wallet", label: "Wallet", href: "/profile" },
    { id: "profile", label: "Profile", href: "/profile" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-20 items-center justify-around border-t border-[rgba(255,255,255,0.04)] bg-[#0d0d14]/90 px-4 backdrop-blur-md">
      {items.map((item) => {
        const isActive = item.id === active
        return (
          <Link key={item.id} href={item.href}>
            <button className="flex flex-col items-center gap-1">
              <span className={`text-[10px] ${isActive ? "text-[#f59e0b]" : "text-[#64748b]"}`}>
                {item.label}
              </span>
            </button>
          </Link>
        )
      })}
    </div>
  )
}

// Send Red Packet Bottom Sheet
function SendRedPacketSheet() {
  const [selectedToken, setSelectedToken] = useState<"USDT" | "RWA">("USDT")
  const [amount, setAmount] = useState("500")
  const [packets, setPackets] = useState(10)
  const [distribution, setDistribution] = useState<"equal" | "random">("equal")
  const [message, setMessage] = useState("")

  const quickAmounts = ["100", "500", "1,000", "5,000"]
  const perPacket = parseInt(amount.replace(",", "")) / packets

  return (
    <div className="flex min-h-screen flex-col bg-[#05050a]">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
        <div className="absolute -bottom-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#00f5d4] opacity-[0.05] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative flex-1 overflow-y-auto p-6 pb-24">
        {/* Header */}
        <h2 className="mt-2 text-center font-[family-name:var(--font-space-grotesk)] text-base font-bold uppercase tracking-[0.1em] text-[#f1f5f9]">
          New Red Packet
        </h2>

        {/* Token selector */}
        <div className="mt-5 flex justify-center gap-3">
          {(["USDT", "RWA"] as const).map((token) => (
            <button
              key={token}
              onClick={() => setSelectedToken(token)}
              className={`h-9 w-20 rounded-full border font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold transition-colors ${
                selectedToken === token
                  ? "border-[#f59e0b] text-[#f59e0b]"
                  : "border-[#334155] text-[#64748b]"
              }`}
            >
              {token}
            </button>
          ))}
        </div>

        {/* Amount input */}
        <div className="mt-6">
          <label className="block font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-[#64748b]">
            Total Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-4 py-3 text-center font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-[#f1f5f9] focus:border-[#f59e0b]/30 focus:outline-none"
          />
          <div className="mt-3 flex gap-2">
            {quickAmounts.map((qa) => (
              <button
                key={qa}
                onClick={() => setAmount(qa)}
                className="flex-1 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#13131e] py-2 font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#64748b] transition-colors hover:border-[#f59e0b]/30 hover:text-[#f59e0b]"
              >
                {qa}
              </button>
            ))}
          </div>
        </div>

        {/* Number of packets */}
        <div className="mt-6">
          <label className="block font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-[#64748b]">
            Number of Packets
          </label>
          <div className="mt-2 flex items-center justify-center gap-4">
            <button
              onClick={() => setPackets(Math.max(1, packets - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[#13131e] text-[#64748b] transition-colors hover:border-[#f59e0b]/30 hover:text-[#f59e0b]"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-16 text-center font-[family-name:var(--font-jetbrains-mono)] text-3xl font-bold text-[#f1f5f9]">
              {packets}
            </span>
            <button
              onClick={() => setPackets(Math.min(100, packets + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[#13131e] text-[#64748b] transition-colors hover:border-[#f59e0b]/30 hover:text-[#f59e0b]"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Distribution type */}
        <div className="mt-6">
          <label className="block font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-[#64748b]">
            Distribution
          </label>
          <div className="mt-2 flex gap-3">
            {(["equal", "random"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setDistribution(type)}
                className={`flex-1 rounded-xl border py-3 font-[family-name:var(--font-inter)] text-sm transition-colors ${
                  distribution === type
                    ? "border-[#f59e0b] bg-[#f59e0b]/10 text-[#f59e0b]"
                    : "border-[rgba(255,255,255,0.08)] bg-[#13131e] text-[#64748b]"
                }`}
              >
                {type === "equal" ? "Equal Split" : "Random Amount"}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-[#64748b]">
            Message (Optional)
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Best wishes!"
            className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:border-[#f59e0b]/30 focus:outline-none"
          />
        </div>

        {/* Preview */}
        <div className="mt-6 rounded-2xl border border-[rgba(245,158,11,0.2)] bg-[#1a0a00] p-4">
          <div className="mb-2 font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[#f59e0b]">
            Preview
          </div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-black text-[#f1f5f9]">
            {amount} {selectedToken}
          </div>
          <p className="mt-1 font-[family-name:var(--font-inter)] text-xs text-[#64748b]">
            {packets} packets · {distribution === "equal" ? `${perPacket.toFixed(2)} each` : "Random amount"}
          </p>
          {message && (
            <p className="mt-2 font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9]">
              "{message}"
            </p>
          )}
        </div>

        {/* Send button */}
        <button className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#fb923c] font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90">
          Send Red Packet
        </button>
      </div>

      <BottomNav active="rewards" />
    </div>
  )
}

export default function RedPacketPage() {
  return <SendRedPacketSheet />
}
