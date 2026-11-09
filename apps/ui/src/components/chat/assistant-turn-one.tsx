"use client";

import { useRef, useState } from "react";
import MaterialSymbol from "@/components/material-symbol";
import AssistantHeader from "@/components/chat/assistant-header";
import CitationCard from "@/components/chat/citation-card";

export default function AssistantTurnOne() {
  const [chunk1Open, setChunk1Open] = useState(false);
  const [chunk2Open, setChunk2Open] = useState(false);
  const card1Ref = useRef<HTMLDivElement>(null);

  const openInspector = () => {
    setChunk1Open((open) => !open);
    requestAnimationFrame(() => {
      card1Ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  return (
    <div className="flex flex-col gap-space-sm pr-2">
      <AssistantHeader meta="· 2 sources grounded" />
      <div className="bg-surface-container-lowest p-space-md rounded-2xl rounded-tl-sm shadow-sm space-y-space-md text-on-surface">
        <p className="font-body-md text-body-md leading-relaxed text-on-surface">
          According to{" "}
          <button
            className="inline-flex items-baseline px-1.5 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md font-medium hover:bg-secondary hover:text-on-secondary transition-colors"
            onClick={openInspector}
          >
            Q3_Financial_Summary.pdf (Page 4)
          </button>
          , the primary revenue growth was driven by enterprise subscription
          renewals (
          <strong className="font-semibold text-primary">up 34% YoY</strong>)
          and cross-selling AI add-on tiers to installed customers.
        </p>
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider flex items-center gap-1">
              <MaterialSymbol
                name="database"
                className="text-[13px] text-secondary"
              />
              Grounding Citations
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Cosine Top-K
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <CitationCard
              cardRef={card1Ref}
              index={1}
              highlighted
              title="Q3_Financial_Summary.pdf"
              documentSlug="q3-financial-summary"
              subtitle="Section 4.1 · Page 4"
              match="92% Match"
              matchHighlighted
              showVisibility
              expanded={chunk1Open}
              onToggle={() => setChunk1Open((open) => !open)}
              chunkLabel="EMBEDDING VECTOR CHUNK #1084"
              chunkMeta="Tokens: 142"
              excerpt={
                '"...enterprise ARR crossed $42.1M driven by high net dollar retention (124%), predominantly propelled by tier migration toward autonomous intelligence licenses..."'
              }
            />
            <CitationCard
              index={2}
              highlighted={false}
              title="Attention_Is_All_You_Need.pdf"
              documentSlug="attention-is-all-you-need"
              subtitle="Background § Page 2"
              match="64% Match"
              matchHighlighted={false}
              showVisibility
              expanded={chunk2Open}
              onToggle={() => setChunk2Open((open) => !open)}
              chunkLabel="EMBEDDING VECTOR CHUNK #0492"
              chunkMeta="Tokens: 98"
              excerpt={
                '"...recurrent models typically factor computation along the symbol positions of the input and output sequences..."'
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 text-on-surface-variant">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm">
            <span>Hybrid Dense Search</span>
            <span>·</span>
            <span>340ms latency</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              className="p-1 rounded hover:bg-surface-container active:scale-90 transition-transform"
              title="Copy Answer"
            >
              <MaterialSymbol name="content_copy" className="text-[16px]" />
            </button>
            <button
              className="p-1 rounded hover:bg-surface-container active:scale-90 transition-transform"
              title="Good Response"
            >
              <MaterialSymbol name="thumb_up" className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
