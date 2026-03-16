"use client";

import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function AIAssistantPage() {
  const messages = [
    { from: "ai", text: "Hi! I'm your AI assistant. How can I help you today?" },
    { from: "user", text: "What's my current APY?" },
    { from: "ai", text: "Your current APY is 45% on locked stakes and 25% on flexible stakes." },
  ];

  return (
    <div className="min-h-screen bg-void-black flex flex-col pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/channels"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-plasma-cyan to-accent-purple flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-text-primary">AI Assistant</div>
              <div className="text-xs text-accent-green">Online</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${msg.from === 'user' ? 'bg-plasma-cyan/10' : 'bg-void-dark'} rounded-2xl px-4 py-3 border border-white/5`}>
              <div className="text-sm text-text-primary">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-void-black border-t border-white/5 px-6 py-4">
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Ask anything..." 
            className="flex-1 bg-void-dark border border-white/5 rounded-xl px-4 py-3 text-sm text-text-primary" />
          <button className="w-10 h-10 bg-plasma-cyan rounded-xl flex items-center justify-center">
            <Send className="w-4 h-4 text-void-black" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
