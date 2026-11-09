"use client";

import { useRef, useState } from "react";
import MaterialSymbol from "@/components/material-symbol";

export default function TestQueryButton() {
  const [computing, setComputing] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (computing) return;
    setComputing(true);
    timeoutRef.current = setTimeout(() => setComputing(false), 1000);
  };

  return (
    <div className="sticky bottom-2 w-full pt-2">
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-accent text-on-accent font-headline-sm text-headline-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 active:scale-98 transition-all hover:opacity-90"
      >
        {computing ? (
          <>
            <MaterialSymbol name="refresh" className="text-[20px] animate-spin" />
            <span>Computing Cosine Distances...</span>
          </>
        ) : (
          <>
            <MaterialSymbol name="science" className="text-[20px]" />
            <span>Test Embedding Query</span>
            <span className="font-label-sm text-label-sm text-surface-variant bg-surface-tint/20 px-2 py-0.5 rounded-full ml-1">
              Live Demo
            </span>
          </>
        )}
      </button>
    </div>
  );
}
