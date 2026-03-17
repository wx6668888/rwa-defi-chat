"use client"

import { Send } from "lucide-react"
import { useState } from "react"

export default function AIAssistantPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a]">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="px-5 pt-6">
          <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
            AI Assistant
          </h1>
        </div>

        <div className="flex-1 px-5">
          <div className="rounded-xl border border-[rgba(255,255,255,0.04)] bg-[#0d0d14] p-4 text-center">
            <div className="mb-3 text-4xl">🤖</div>
            <div className="text-sm text-[#64748b]">How can I help you today?</div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] bg-[#0d0d14] p-4">
          <div className="flex items-center gap-3">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask me anything..." 
              className="flex-1 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#13131e] px-4 py-3 text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:border-[#00f5d4]/30 focus:outline-none" />
            <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00f5d4]">
              <Send className="h-5 w-5 text-[#05050a]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
