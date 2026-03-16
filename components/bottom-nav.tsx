"use client";

import { MessageSquare, Compass, Bell, User, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { id: "chat", label: "Chat", icon: MessageSquare, href: "/channels" },
  { id: "discover", label: "Discover", icon: Compass, href: "/discover" },
  { id: "alerts", label: "Alerts", icon: Bell, href: "/notifications" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-around border-t border-[rgba(255,255,255,0.04)] bg-[#0d0d14]/90 px-4 backdrop-blur-md">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.id}
            href={tab.href}
            className="flex flex-col items-center gap-1"
          >
            <Icon
              className={`h-5 w-5 ${isActive ? "text-[#f59e0b]" : "text-[#64748b]"}`}
              strokeWidth={isActive ? 2 : 1.5}
            />
            <span className={`text-[10px] ${isActive ? "text-[#f59e0b]" : "text-[#64748b]"}`}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
