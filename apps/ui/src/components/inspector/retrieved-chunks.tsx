import Link from "next/link";
import MaterialSymbol from "@/components/material-symbol";

type SnippetSegment = {
  text: string;
  highlight?: boolean;
};

type Chunk = {
  id: string;
  document: string;
  documentSlug: string;
  location: string;
  matchPct: number;
  topMatch: boolean;
  tokens: number;
  snippet: SnippetSegment[];
  sparklinePath: string;
  cosine: string;
  metadata: string[];
};

const chunks: Chunk[] = [
  {
    id: "#18",
    document: "Q3_Financial_Summary.pdf",
    documentSlug: "q3-financial-summary",
    location: "Page 4 • Lines 12–28",
    matchPct: 92,
    topMatch: true,
    tokens: 148,
    snippet: [
      { text: "…strategic growth catalysts and " },
      { text: "enterprise subscription renewals", highlight: true },
      { text: " increased by " },
      { text: "34% year-over-year", highlight: true },
      { text: ", accounting for " },
      { text: "$14.2M of total net new ARR", highlight: true },
      { text: " in European and APAC commercial accounts…" },
    ],
    sparklinePath: "M0 10 L15 3 L30 14 L45 2 L60 8 L75 1 L90 12 L100 6",
    cosine: "0.924",
    metadata: ["Chunk: 500 chars", "Overlap: 50 chars", "text-embedding-3-small"],
  },
  {
    id: "#19",
    document: "Q3_Financial_Summary.pdf",
    documentSlug: "q3-financial-summary",
    location: "Page 5 • Lines 1–15",
    matchPct: 85,
    topMatch: false,
    tokens: 132,
    snippet: [
      { text: "…offsetting headwinds from hardware margin compressions, " },
      { text: "SaaS cross-sell conversions", highlight: true },
      { text: " reached record high rates, cementing " },
      { text: "recurring revenue stability", highlight: true },
      { text: " as the core quarterly catalyst…" },
    ],
    sparklinePath: "M0 8 L18 12 L35 4 L50 14 L65 5 L80 11 L92 3 L100 9",
    cosine: "0.851",
    metadata: ["Chunk: 480 chars", "Overlap: 50 chars", "text-embedding-3-small"],
  },
];

function ChunkCard({ chunk }: { chunk: Chunk }) {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm transition-transform active:scale-[0.99] flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-label-md text-label-md text-secondary font-mono">
              {chunk.id}
            </span>
            <Link
              href={`/documents/${chunk.documentSlug}`}
              className="font-label-sm text-label-sm text-on-surface-variant font-mono truncate hover:underline"
            >
              {chunk.document}
            </Link>
          </div>
          <span className="font-label-sm text-[11px] text-on-surface-variant block">
            {chunk.location}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span
            className={`font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
              chunk.topMatch
                ? "bg-accent-tint text-accent"
                : "bg-surface-container-high text-on-surface"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                chunk.topMatch ? "bg-accent" : "bg-outline"
              }`}
            />
            {chunk.matchPct}% match
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
            {chunk.tokens} tokens
          </span>
        </div>
      </div>
      <div className="bg-surface-container-low rounded p-space-sm font-body-sm text-body-sm text-on-surface leading-relaxed">
        {chunk.snippet.map((segment, i) =>
          segment.highlight ? (
            <mark
              key={i}
              className="bg-peach-tint text-on-surface font-medium rounded-sm px-1 py-0.5"
            >
              {segment.text}
            </mark>
          ) : (
            <span key={i}>{segment.text}</span>
          ),
        )}
      </div>
      <div className="bg-surface-container px-3 py-2 rounded flex items-center justify-between">
        <span className="font-label-sm text-[10px] text-on-surface-variant font-mono uppercase">
          Similarity
        </span>
        <span
          className={`font-label-sm text-[11px] font-mono font-medium ${
            chunk.topMatch ? "text-secondary" : "text-on-surface-variant"
          }`}
        >
          Cos: {chunk.cosine}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {chunk.metadata.map((pill) => (
          <span
            key={pill}
            className={`bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm ${
              pill.includes("embedding") ? "font-mono" : ""
            }`}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function RetrievedChunks() {
  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex items-center justify-between px-1 pb-2 border-b-2 border-primary">
        <div className="flex items-center gap-1.5">
          <MaterialSymbol name="view_list" className="text-secondary text-[18px]" />
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Retrieved Chunks
          </span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
          2 / 38 total
        </span>
      </div>
      {chunks.map((chunk) => (
        <ChunkCard key={chunk.id} chunk={chunk} />
      ))}
    </div>
  );
}
