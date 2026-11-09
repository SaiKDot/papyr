"use client";

import { useState } from "react";
import MaterialSymbol from "@/components/material-symbol";
import DocumentCard, {
  type LibraryDocument,
} from "@/components/library/document-card";

const documents: LibraryDocument[] = [
  {
    slug: "attention-is-all-you-need",
    fileName: "Attention_Is_All_You_Need.pdf",
    icon: "picture_as_pdf",
    sizeLabel: "1.2 MB",
    pagesLabel: "15 pages",
    chunksLabel: "42 chunks embedded",
    status: "ready",
    footerNote: "cosine-dist: 0.89",
  },
  {
    slug: "q3-financial-summary",
    fileName: "Q3_Financial_Summary.pdf",
    icon: "analytics",
    sizeLabel: "840 KB",
    pagesLabel: "8 pages",
    chunksLabel: "21 chunks embedded",
    status: "ready",
    footerNote: "tables extracted",
  },
  {
    slug: "product-architecture-v2",
    fileName: "Product_Architecture_v2.pdf",
    icon: "refresh",
    sizeLabel: "3.4 MB",
    pagesLabel: "24 pages",
    chunksLabel: "68 chunks total",
    status: "indexing",
    progressPercent: 78,
    progressNote: "53 / 68 vectors committed",
  },
];

export default function DocumentList() {
  const [contextActive, setContextActive] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        documents
          .filter((doc) => doc.status === "ready")
          .map((doc) => [doc.slug, true])
      )
  );

  const activeCount = Object.values(contextActive).filter(Boolean).length;

  return (
    <>
      <div className="flex items-center justify-between pt-2 pb-2 border-b-2 border-primary">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Vectorized Corpora
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant">
            3 Total
          </span>
        </div>
        <button className="font-label-sm text-label-sm text-secondary hover:text-on-secondary-fixed-variant transition-colors flex items-center gap-1">
          <MaterialSymbol name="done_all" className="text-[15px]" />
          Context Active ({activeCount}/3)
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.slug}
            document={doc}
            contextActive={contextActive[doc.slug] ?? false}
            onContextToggle={(active) =>
              setContextActive((prev) => ({ ...prev, [doc.slug]: active }))
            }
          />
        ))}
      </div>
    </>
  );
}
