"use client";

import { useState } from "react";
import MaterialSymbol from "@/components/material-symbol";

type ChunkBlockProps = {
  highlighted: boolean;
  id: string;
  tokens: number;
  offset: string;
  text: string;
};

function ChunkBlock({ highlighted, id, tokens, offset, text }: ChunkBlockProps) {
  return (
    <div
      className={`p-2.5 rounded-lg ${
        highlighted ? "bg-secondary-fixed/30" : "bg-surface-container-high"
      } text-on-surface transition-all`}
    >
      <div className="flex items-center justify-between pb-1.5">
        <span
          className={`font-label-sm text-label-sm ${
            highlighted ? "text-secondary" : "text-on-surface"
          } font-semibold uppercase tracking-wider flex items-center gap-1`}
        >
          <MaterialSymbol name="fingerprint" className="text-[13px]" />
          Chunk #{id} · {tokens} tokens
        </span>
        <span className="font-label-sm text-label-sm text-outline">
          Offset {offset}
        </span>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function ChunkInspector() {
  const [page, setPage] = useState<1 | 2>(1);

  const activeTab =
    "px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-xs transition-all";
  const inactiveTab =
    "px-3 py-1 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between pb-2 border-b-2 border-primary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            Interactive Chunk Inspector
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
          Live Simulator
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        See how the semantic vectorizer dices academic prose into retrievable
        chunks with boundary overlaps.
      </p>
      <div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm overflow-hidden">
        <div className="flex items-center justify-between pb-3">
          <div className="inline-flex p-1 rounded-full bg-surface-container">
            <button
              className={page === 1 ? activeTab : inactiveTab}
              onClick={() => setPage(1)}
            >
              Page 1
            </button>
            <button
              className={page === 2 ? activeTab : inactiveTab}
              onClick={() => setPage(2)}
            >
              Page 2
            </button>
          </div>
          <div className="flex items-center gap-3 font-label-sm text-label-sm">
            <span className="flex items-center gap-1 text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-xs bg-secondary/20 border-l-2 border-secondary" />{" "}
              Chunk A
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-xs bg-tertiary-fixed text-on-tertiary-fixed border-l-2 border-primary" />{" "}
              Overlap
            </span>
            <span className="flex items-center gap-1 text-on-surface-variant">
              <span className="w-2.5 h-2.5 rounded-xs bg-surface-container-high border-l-2 border-outline" />{" "}
              Chunk B
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-surface p-4 text-on-surface relative shadow-inner overflow-hidden transition-all duration-300">
          <div className="flex items-center justify-between pb-3 opacity-60">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              arXiv:1706.03762v5 [cs.CL] 6 Dec 2017
            </span>
            <span className="font-label-sm text-label-sm text-outline">
              p. {page === 1 ? "01" : "02"} / 15
            </span>
          </div>
          {page === 1 ? (
            <div className="flex flex-col gap-2.5 font-body-sm text-body-sm leading-relaxed">
              <ChunkBlock
                highlighted
                id="001"
                tokens={498}
                offset="0 - 500"
                text="The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism."
              />
              <div className="p-2 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md flex items-center justify-between shadow-xs">
                <span className="flex items-center gap-1">
                  <MaterialSymbol name="call_split" className="text-[14px]" />{" "}
                  50-char window preserved
                </span>
                <span className="font-label-sm text-label-sm opacity-80">
                  Embedding Safety Cushion
                </span>
              </div>
              <ChunkBlock
                highlighted={false}
                id="002"
                tokens={485}
                offset="450 - 950"
                text="We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality."
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2.5 font-body-sm text-body-sm leading-relaxed">
              <ChunkBlock
                highlighted={false}
                id="003"
                tokens={502}
                offset="950 - 1450"
                text="Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. With a single attention head, averaging inhibits this capacity."
              />
              <div className="p-2 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <MaterialSymbol name="call_split" className="text-[14px]" />{" "}
                  50-char overlap active
                </span>
                <span className="font-label-sm text-label-sm opacity-80">
                  Retains equation context
                </span>
              </div>
              <ChunkBlock
                highlighted
                id="004"
                tokens={510}
                offset="1400 - 1910"
                text="In this work we presented the Transformer, the first sequence transduction model based entirely on attention, replacing the recurrent layers most commonly used in encoder-decoder architectures with multi-headed self-attention."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
