"use client";

import { useState } from "react";
import MaterialSymbol from "@/components/material-symbol";

export default function QueryInspector() {
  const [thresholdPct, setThresholdPct] = useState(70);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(10, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setThresholdPct(pct);
  };

  return (
    <div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-3 shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Active Query Vector
          </span>
          <span className="font-label-sm text-label-sm text-secondary font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            q_norm: 1.000
          </span>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded">
          <MaterialSymbol
            name="search"
            className="text-on-surface-variant text-[18px]"
          />
          <span className="font-body-md text-body-md text-on-surface font-medium truncate">
            “Revenue drivers in Q3”
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-surface-container-high px-3 py-2 rounded">
        <div className="flex items-center gap-2">
          <MaterialSymbol
            name="tune"
            className="text-on-surface-variant text-[16px]"
          />
          <span className="font-label-md text-label-md text-on-surface">
            Top-K: 3 chunks
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
          Similarity &gt; 0.70
        </span>
      </div>
      <div className="flex items-center justify-between px-1">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Min Threshold cutoff
        </span>
        <span className="font-label-sm text-label-sm text-secondary font-mono font-bold">
          {(thresholdPct / 100).toFixed(2)}
        </span>
      </div>
      <div
        className="w-full bg-surface-container-highest h-2 rounded-full relative overflow-hidden cursor-pointer"
        onClick={handleTrackClick}
      >
        <div
          className="bg-secondary h-full rounded-full"
          style={{ width: `${thresholdPct}%` }}
        />
      </div>
    </div>
  );
}
