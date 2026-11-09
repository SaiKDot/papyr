"use client";

import MaterialSymbol from "@/components/material-symbol";

export type DistanceMetric = "cosine" | "dot";

type MetricOptionProps = {
  selected: boolean;
  title: string;
  description: string;
  onSelect: () => void;
};

function MetricOption({
  selected,
  title,
  description,
  onSelect,
}: MetricOptionProps) {
  return (
    <button
      className={
        selected
          ? "flex flex-col p-3 rounded-xl bg-secondary-fixed text-left transition-all relative overflow-hidden"
          : "flex flex-col p-3 rounded-xl bg-surface-container-low text-left transition-all hover:bg-surface-container"
      }
      onClick={onSelect}
    >
      <div className="flex items-center justify-between w-full">
        <span
          className={`font-headline-sm text-headline-sm ${
            selected ? "text-on-secondary-fixed" : "text-on-surface"
          }`}
        >
          {title}
        </span>
        <MaterialSymbol
          name="check_circle"
          className={
            selected
              ? "text-secondary text-[20px]"
              : "text-outline text-[20px] hidden"
          }
        />
      </div>
      <p
        className={`font-body-sm text-body-sm ${
          selected ? "text-on-secondary-fixed-variant" : "text-on-surface-variant"
        } mt-1`}
      >
        {description}
      </p>
    </button>
  );
}

type TuningPanelProps = {
  chunkSize: number;
  overlap: number;
  metric: DistanceMetric;
  onChunkSizeChange: (value: number) => void;
  onOverlapChange: (value: number) => void;
  onMetricChange: (metric: DistanceMetric) => void;
};

export default function TuningPanel({
  chunkSize,
  overlap,
  metric,
  onChunkSizeChange,
  onOverlapChange,
  onMetricChange,
}: TuningPanelProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between pb-2 border-b-2 border-primary">
        <div className="flex items-center gap-2">
          <MaterialSymbol name="tune" className="text-secondary text-[20px]" />
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Extraction &amp; Vector Tuning
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-outline">
          Beginner Preset
        </span>
      </div>
      <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <label
              className="font-headline-sm text-headline-sm text-on-surface"
              htmlFor="chunk-size-input"
            >
              Chunk Size
            </label>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Recommended for readable paragraphs
            </p>
          </div>
          <span className="font-label-md text-label-md px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
            {chunkSize} chars
          </span>
        </div>
        <input
          className="w-full accent-secondary h-2 bg-surface-container-high rounded-lg cursor-pointer"
          id="chunk-size-input"
          max={1200}
          min={200}
          step={50}
          type="range"
          value={chunkSize}
          onChange={(e) => onChunkSizeChange(Number(e.target.value))}
        />
        <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
          <span>Short (200c)</span>
          <span className="text-secondary font-semibold">Standard (500c)</span>
          <span>Broad (1200c)</span>
        </div>
      </div>
      <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <label
              className="font-headline-sm text-headline-sm text-on-surface"
              htmlFor="chunk-overlap-input"
            >
              Chunk Overlap
            </label>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Prevents splitting sentences mid-thought
            </p>
          </div>
          <span className="font-label-md text-label-md px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-semibold">
            {overlap} chars
          </span>
        </div>
        <input
          className="w-full accent-secondary h-2 bg-surface-container-high rounded-lg cursor-pointer"
          id="chunk-overlap-input"
          max={200}
          min={0}
          step={10}
          type="range"
          value={overlap}
          onChange={(e) => onOverlapChange(Number(e.target.value))}
        />
        <div className="flex justify-between font-label-sm text-label-sm text-outline px-1">
          <span>0 (Strict)</span>
          <span className="text-on-surface font-medium">50 (Safe window)</span>
          <span>200 (Heavy)</span>
        </div>
      </div>
      <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-3">
        <div>
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Vector Distance Metric
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Determines semantic proximity calculation
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <MetricOption
            selected={metric === "cosine"}
            title="Cosine Similarity"
            description="Best for angular semantic comparison."
            onSelect={() => onMetricChange("cosine")}
          />
          <MetricOption
            selected={metric === "dot"}
            title="Dot Product"
            description="Faster for strictly normalized embeddings."
            onSelect={() => onMetricChange("dot")}
          />
        </div>
      </div>
    </div>
  );
}
