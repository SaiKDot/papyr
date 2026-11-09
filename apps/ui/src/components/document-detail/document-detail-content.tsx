"use client";

import { useEffect, useRef, useState } from "react";
import DocumentCard from "@/components/document-detail/document-card";
import ChunkInspector from "@/components/document-detail/chunk-inspector";
import TuningPanel, {
  type DistanceMetric,
} from "@/components/document-detail/tuning-panel";
import ActionBar from "@/components/document-detail/action-bar";

const TOTAL_CHARS = 48200;

export default function DocumentDetailContent() {
  const [chunkSize, setChunkSize] = useState(500);
  const [overlap, setOverlap] = useState(50);
  const [metric, setMetric] = useState<DistanceMetric>("cosine");
  const [chunkCount, setChunkCount] = useState(42);
  const [pulsing, setPulsing] = useState(false);
  const pulseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    };
  }, []);

  const handleChunkSizeChange = (value: number) => {
    setChunkSize(value);
    setChunkCount(Math.round(TOTAL_CHARS / (value * 0.82)));
    setPulsing(true);
    if (pulseTimeout.current) clearTimeout(pulseTimeout.current);
    pulseTimeout.current = setTimeout(() => setPulsing(false), 150);
  };

  return (
    <div className="px-gutter flex flex-col gap-space-md mt-space-sm">
      <DocumentCard chunkCount={chunkCount} chunkCountPulsing={pulsing} />
      <ChunkInspector />
      <TuningPanel
        chunkSize={chunkSize}
        overlap={overlap}
        metric={metric}
        onChunkSizeChange={handleChunkSizeChange}
        onOverlapChange={setOverlap}
        onMetricChange={setMetric}
      />
      <ActionBar />
    </div>
  );
}
