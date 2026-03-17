"use client"

import { Search } from "lucide-react"

export default function SearchPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05050a] pb-20">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -right-[200px] top-[100px] h-[500px] w-[500px] rounded-full bg-[#f59e0b] opacity-[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 px-5 pt-6">
        <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold uppercase tracking-[0.08em] text-[#f1f5f9]">
          Search
        </h1>

        <div className="mb-6 flex h-11 items-center gap-3 rounded-xl border border-[rgba(0,245,212,0.08)] bg-[#0d0d14] px-4">
          <Search className="h-4 w-4 text-[#334155]" />
          <input type="text" placeholder="Search channels, users, messages..." 
            className="flex-1 bg-transparent font-[family-name:var(--font-inter)] text-sm text-[#f1f5f9] placeholder:text-[#334155] focus:outline-none" />
        </div>

        <div className="text-center text-sm text-[#64748b]">
          Start typing to search...
        </div>
      </div>
    </div>
  )
}
