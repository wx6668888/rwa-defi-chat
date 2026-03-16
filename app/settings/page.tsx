"use client";

import { ArrowLeft, Bell, Lock, Globe, Moon } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";

export default function SettingsPage() {
  const sections = [
    { icon: Bell, label: "Notifications", value: "On" },
    { icon: Lock, label: "Privacy", value: "Public" },
    { icon: Globe, label: "Language", value: "English" },
    { icon: Moon, label: "Theme", value: "Dark" },
  ];

  return (
    <div className="min-h-screen bg-void-black pb-20">
      <div className="sticky top-0 z-10 bg-void-black/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="flex items-center gap-4 px-6 py-4">
          <Link href="/profile"><ArrowLeft className="w-5 h-5 text-text-secondary" /></Link>
          <h1 className="font-display text-xl font-bold text-text-primary">Settings</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-2">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <button key={i} className="w-full bg-surface-1 rounded-xl p-4 border border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-plasma-cyan" />
                <span className="text-sm text-text-primary">{s.label}</span>
              </div>
              <span className="text-xs text-text-secondary">{s.value}</span>
            </button>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
}
