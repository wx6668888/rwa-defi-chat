"use client";

import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function DMPage() {
  const messages = [
    { from: "them", text: "Hey! Saw your node upgrade 🎉", time: "10:23" },
    { from: "me", text: "Thanks! Finally hit L6", time: "10:25" },
    { from: "them", text: "Nice! What's your APY now?", time: "10:26" },
    { from: "me", text: "45% on locked stakes", time: "10:27" },
  ];

  return (
    <div className="min-h-screen bg-void-black flex flex-col">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plasma-cyan to-accent-purple" />
            <div>
              <div className="font-medium text-text-primary">@defi_whale</div>
              <div className="text-xs text-accent-green">Online</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] ${msg.from === 'me' ? 'bg-plasma-cyan/10 text-text-primary' : 'bg-void-dark text-text-primary'} rounded-2xl px-4 py-3 border border-white/5`}>
              <div className="text-sm">{msg.text}</div>
              <div className="text-[10px] text-text-secondary mt-1">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-void-black border-t border-white/5 px-6 py-4">
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Message..." 
            className="flex-1 bg-void-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-text-primary" />
          <button className="w-10 h-10 bg-plasma-cyan rounded-xl flex items-center justify-center">
            <Send className="w-4 h-4 text-void-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
