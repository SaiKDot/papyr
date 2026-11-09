"use client";

import { useState } from "react";
import MaterialSymbol from "@/components/material-symbol";
import AssistantHeader from "@/components/chat/assistant-header";
import CitationCard from "@/components/chat/citation-card";

const bullets = [
  {
    heading: "Query, Key, Value Triplet:",
    text: " Every input token vector is projected into three distinct spaces via linear transformations: $Q$, $K$, and $V$.",
  },
  {
    heading: "Scaled Dot-Product:",
    text: " Calculates the dot product of $Q$ with $K^T$, scaled by $\\sqrt{d_k}$ to prevent gradient vanishing in large dimensions.",
  },
  {
    heading: "Softmax Weighting:",
    text: " A softmax distribution is applied over the keys to output a weighted sum across all value vectors ($V$).",
  },
];

export default function AssistantTurnTwo() {
  const [chunk3Open, setChunk3Open] = useState(false);

  return (
    <div className="flex flex-col gap-space-sm pr-2">
      <AssistantHeader
        meta="· Grounded on Page 3"
        metaClassName="font-label-sm text-label-sm text-secondary font-medium"
      />
      <div className="bg-surface-container-lowest p-space-md rounded-2xl rounded-tl-sm shadow-sm space-y-space-md text-on-surface">
        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
          Based on{" "}
          <button
            className="inline-flex items-baseline px-1.5 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md font-medium"
            onClick={() => setChunk3Open((open) => !open)}
          >
            Attention_Is_All_You_Need.pdf § Page 3
          </button>
          , self-attention (or intra-attention) relates distinct positions of a
          single sequence to compute a contextual representation:
        </p>
        <div className="flex flex-col gap-space-sm pl-1">
          {bullets.map((bullet) => (
            <div key={bullet.heading} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
              <p className="font-body-md text-body-md text-on-surface leading-normal">
                <strong className="font-semibold text-primary">
                  {bullet.heading}
                </strong>
                {bullet.text}
              </p>
            </div>
          ))}
        </div>
        <CitationCard
          index={1}
          highlighted
          title="Attention_Is_All_You_Need.pdf § p.3"
          documentSlug="attention-is-all-you-need"
          match="97% Match"
          matchHighlighted
          expanded={chunk3Open}
          onToggle={() => setChunk3Open((open) => !open)}
          chunkLabel="EQUATION 1 RETRIEVAL EXTRACT"
          chunkMeta="Cosine: 0.974"
          excerpt={'"Attention(Q, K, V) = softmax((Q K^T) / sqrt(d_k)) V"'}
          excerptClassName="font-body-sm text-body-sm text-on-surface-variant italic font-label-md"
        />
        <div className="flex items-center justify-between pt-1 text-on-surface-variant">
          <span className="font-label-sm text-label-sm">
            Reciprocal Rank Fusion · Top 1 of 12 chunks
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-surface-container active:scale-90 transition-transform">
              <MaterialSymbol name="bookmark_add" className="text-[16px]" />
            </button>
            <button className="p-1 rounded hover:bg-surface-container active:scale-90 transition-transform">
              <MaterialSymbol name="share" className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
