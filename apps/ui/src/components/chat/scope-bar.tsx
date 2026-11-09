"use client";

import { useState } from "react";
import Link from "next/link";
import MaterialSymbol from "@/components/material-symbol";

const sources = [
  {
    name: "Q3_Financial_Summary.pdf",
    slug: "q3-financial-summary",
    meta: "34pg · 92% rel",
  },
  {
    name: "Attention_Is_All_You_Need.pdf",
    slug: "attention-is-all-you-need",
    meta: "15pg · 88% rel",
  },
  {
    name: "SaaS_Enterprise_Metrics_2024.pdf",
    slug: "saas-enterprise-metrics-2024",
    meta: "48pg · 54% rel",
  },
];

export default function ScopeBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="px-margin py-space-sm bg-surface-container-low/80 backdrop-blur-md sticky top-[calc(4rem+env(safe-area-inset-top))] z-30 flex items-center justify-between">
        <button
          className="inline-flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm active:scale-95 transition-all text-left"
          onClick={() => setDrawerOpen((open) => !open)}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-headline-sm text-headline-sm">3 PDFs Active</span>
          <span className="px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
            84 Chunks
          </span>
          <MaterialSymbol
            name="expand_more"
            className="text-[16px] text-on-surface-variant ml-0.5"
          />
        </button>
        <div className="flex items-center gap-1.5">
          <button
            className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm active:scale-90 transition-transform"
            title="Retriever Config"
          >
            <MaterialSymbol name="tune" className="text-[18px]" />
          </button>
          <button
            className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm active:scale-90 transition-transform"
            title="Clear History"
          >
            <MaterialSymbol name="restart_alt" className="text-[18px]" />
          </button>
        </div>
      </div>
      {drawerOpen && (
        <div className="mx-margin my-space-sm p-space-md bg-surface-container-lowest rounded-lg shadow-md transition-all">
          <div className="flex items-center justify-between pb-space-sm">
            <div className="flex items-center gap-space-xs">
              <MaterialSymbol
                name="library_books"
                className="text-secondary text-[20px]"
              />
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Grounding Source Corpus
              </span>
            </div>
            <button
              className="text-on-surface-variant hover:text-on-surface"
              onClick={() => setDrawerOpen(false)}
            >
              <MaterialSymbol name="close" className="text-[20px]" />
            </button>
          </div>
          <div className="flex flex-col gap-space-xs">
            {sources.map((source) => (
              <Link
                key={source.slug}
                href={`/documents/${source.slug}`}
                className="flex items-center justify-between p-space-sm bg-surface-container-low rounded"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <MaterialSymbol
                    name="picture_as_pdf"
                    className="text-secondary text-[18px]"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface truncate">
                    {source.name}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">
                  {source.meta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
