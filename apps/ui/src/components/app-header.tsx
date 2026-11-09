"use client";

import { usePathname } from "next/navigation";
import MaterialSymbol from "./material-symbol";

function sectionLabel(pathname: string): string {
  if (pathname.startsWith("/chat")) return "/ Chat & Ask";
  if (pathname.startsWith("/inspector")) return "/ Insights";
  if (pathname.startsWith("/documents")) return "/ Document";
  return "/ Documents";
}

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-sm border-b border-outline-variant">
      <div className="h-16 px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <MaterialSymbol
              name="auto_stories"
              className="text-on-primary text-[18px]"
            />
          </div>
          <div className="flex items-baseline gap-space-xs">
            <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
              Papyr
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">
              {sectionLabel(pathname)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              RAG Active
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <MaterialSymbol
              name="person"
              className="text-on-primary text-[18px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
