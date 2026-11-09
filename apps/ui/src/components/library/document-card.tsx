import Link from "next/link";
import MaterialSymbol from "@/components/material-symbol";

export type LibraryDocument = {
  slug: string;
  fileName: string;
  icon: string;
  sizeLabel: string;
  pagesLabel: string;
  chunksLabel: string;
} & (
  | {
      status: "ready";
      footerNote: string;
    }
  | {
      status: "indexing";
      progressPercent: number;
      progressNote: string;
    }
);

type DocumentCardProps = {
  document: LibraryDocument;
  contextActive: boolean;
  onContextToggle: (active: boolean) => void;
};

export default function DocumentCard({
  document,
  contextActive,
  onContextToggle,
}: DocumentCardProps) {
  const isReady = document.status === "ready";

  return (
    <div className="bg-surface-container-lowest rounded border border-outline-variant p-space-sm px-space-md transition-colors duration-200 hover:border-outline relative overflow-hidden group">
      <Link
        href={`/documents/${document.slug}`}
        className="absolute inset-0"
        aria-label={document.fileName}
      />
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
            isReady
              ? "bg-surface-container-low text-on-surface"
              : "bg-secondary/10 text-secondary"
          }`}
        >
          <MaterialSymbol
            name={document.icon}
            className={isReady ? "text-[20px]" : "text-[20px] animate-spin"}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">
              {document.fileName}
            </h3>
            {isReady ? (
              <span
                className="w-2 h-2 rounded-full bg-secondary shrink-0"
                title="Ready in Vector Store"
              ></span>
            ) : (
              <span
                className="w-2 h-2 rounded-full bg-accent shrink-0 animate-pulse"
                title="Embedding in progress"
              ></span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 font-label-sm text-label-sm text-on-surface-variant">
            <span>{document.sizeLabel}</span>
            <span>•</span>
            <span>{document.pagesLabel}</span>
            <span>•</span>
            <span className="text-secondary font-medium">
              {document.chunksLabel}
            </span>
          </div>
        </div>
        {isReady ? (
          <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={contextActive}
              onChange={(e) => onContextToggle(e.target.checked)}
            />
            <div className="w-9 h-5 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
          </label>
        ) : (
          <label className="relative inline-flex items-center opacity-40 cursor-not-allowed shrink-0 mt-0.5">
            <input type="checkbox" className="sr-only peer" disabled />
            <div className="w-9 h-5 bg-surface-container-high rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4"></div>
          </label>
        )}
      </div>
      {document.status === "indexing" && (
        <div className="mt-3.5 space-y-1.5">
          <div className="flex justify-between items-center font-label-sm text-label-sm">
            <span className="text-secondary font-medium flex items-center gap-1">
              <MaterialSymbol name="neurology" className="text-[14px]" />
              Indexing &amp; Vectorizing Chunks
            </span>
            <span className="text-on-surface font-semibold">
              {document.progressPercent}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${document.progressPercent}%` }}
            ></div>
          </div>
        </div>
      )}
      {document.status === "ready" ? (
        <div className="mt-3 pt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
              <MaterialSymbol name="bolt" className="text-[13px]" /> Ready
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {document.footerNote}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="relative px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container font-label-sm text-label-sm text-on-surface flex items-center gap-1 transition-colors">
              <MaterialSymbol name="view_list" className="text-[14px]" />
              <span>View Chunks</span>
            </button>
            <button
              className="relative w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error-container/30 transition-colors"
              title="Delete document"
            >
              <MaterialSymbol name="delete" className="text-[17px]" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 pt-2.5 flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {document.progressNote}
          </span>
          <button
            className="relative w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error-container/30 transition-colors"
            title="Cancel ingestion"
          >
            <MaterialSymbol name="close" className="text-[17px]" />
          </button>
        </div>
      )}
    </div>
  );
}
