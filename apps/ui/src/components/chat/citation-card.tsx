"use client";

import Link from "next/link";
import MaterialSymbol from "@/components/material-symbol";

type CitationCardProps = {
  index: number;
  highlighted: boolean;
  title: string;
  documentSlug: string;
  subtitle?: string;
  match: string;
  matchHighlighted: boolean;
  showVisibility?: boolean;
  expanded: boolean;
  onToggle: () => void;
  chunkLabel: string;
  chunkMeta: string;
  excerpt: string;
  excerptClassName?: string;
  cardRef?: React.Ref<HTMLDivElement>;
};

export default function CitationCard({
  index,
  highlighted,
  title,
  documentSlug,
  subtitle,
  match,
  matchHighlighted,
  showVisibility = false,
  expanded,
  onToggle,
  chunkLabel,
  chunkMeta,
  excerpt,
  excerptClassName = "font-body-sm text-body-sm text-on-surface-variant italic",
  cardRef,
}: CitationCardProps) {
  const indexBadge = (
    <span
      className={`w-5 h-5 rounded font-label-sm text-label-sm flex items-center justify-center shrink-0 ${
        highlighted
          ? "bg-secondary-container text-on-secondary-container font-bold"
          : "bg-surface-container-highest text-on-surface-variant"
      }`}
    >
      {index}
    </span>
  );

  const matchBadge = (
    <span
      className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${
        matchHighlighted
          ? "bg-accent-tint text-accent font-semibold"
          : "bg-surface-container-highest text-on-surface-variant"
      }`}
    >
      {match}
    </span>
  );

  const titleLink = (
    <Link
      href={`/documents/${documentSlug}`}
      className="font-headline-sm text-headline-sm text-on-surface truncate block"
      onClick={(event) => event.stopPropagation()}
    >
      {title}
    </Link>
  );

  const chunkPeek = expanded && (
    <div className="mt-space-sm pt-space-sm bg-surface-container-lowest p-space-sm rounded text-on-surface">
      <div className="flex items-center justify-between pb-1">
        <span className="font-label-sm text-label-sm text-secondary">
          {chunkLabel}
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {chunkMeta}
        </span>
      </div>
      <p className={excerptClassName}>{excerpt}</p>
    </div>
  );

  if (!subtitle) {
    return (
      <div
        ref={cardRef}
        className="bg-surface-container-low hover:bg-surface-container p-space-sm rounded transition-all cursor-pointer shadow-sm"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            {indexBadge}
            {titleLink}
          </div>
          {matchBadge}
        </div>
        {chunkPeek}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="group relative bg-surface-container-low hover:bg-surface-container p-space-sm rounded transition-all cursor-pointer shadow-sm active:scale-[0.99]"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {indexBadge}
          <div className="min-w-0">
            {titleLink}
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {subtitle}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {matchBadge}
          {showVisibility && (
            <MaterialSymbol
              name="visibility"
              className="text-[16px] text-on-surface-variant group-hover:text-secondary transition-colors"
            />
          )}
        </div>
      </div>
      {chunkPeek}
    </div>
  );
}
