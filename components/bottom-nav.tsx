"use client";

import { MessageSquare, Compass, Bell, User, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { id: "chat", label: "Chat", icon: MessageSquare, href: "/channels" },
  { id: "discover", label: "Discover", icon: Compass, href: "/discover" },
  { id: "alerts", label: "Alerts", icon: Bell, href: "/alerts" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, href: "/settings" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border-subtle bg-surface-1 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.id}
              href={tab.href}
              className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors"
            >
              {isActive && (
                <div className="absolute top-0 h-0.5 w-12 bg-plasma-cyan" />
              )}
              <Icon
                className={`h-5 w-5 ${
                  isActive ? "text-plasma-cyan" : "text-text-secondary"
                }`}
              />
              <span
                className={`text-[9px] font-medium ${
                  isActive ? "text-plasma-cyan" : "text-text-secondary"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
