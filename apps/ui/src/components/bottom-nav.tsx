"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaterialSymbol from "./material-symbol";

const tabs = [
  { href: "/", icon: "folder_open", label: "Documents" },
  { href: "/chat", icon: "forum", label: "Chat & Ask" },
  { href: "/inspector", icon: "data_object", label: "Insights / Chunks" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/documents");
  }
  return pathname.startsWith(href);
}

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-sm border-t border-outline-variant">
      <div className="h-16 px-gutter flex items-center justify-around">
        {tabs.map((tab) => {
          const active = isActive(pathname, tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-space-sm transition-all ${
                active
                  ? "text-primary font-headline-sm scale-100"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <MaterialSymbol name={tab.icon} className="text-[22px]" />
              <span className="font-label-sm text-label-sm mt-0.5">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
