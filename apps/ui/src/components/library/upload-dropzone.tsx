"use client";

import { useRef, useState, type DragEvent } from "react";
import MaterialSymbol from "@/components/material-symbol";

export default function UploadDropzone() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-lg ${
        isDragOver ? "bg-surface-container-high" : "bg-surface-container-low"
      } p-space-lg transition-all duration-300 hover:bg-surface-container cursor-pointer border border-dashed border-outline`}
      onClick={() => fileInputRef.current?.click()}
      onDragEnter={handleDragOver}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDragEnd}
    >
      <div className="flex flex-col items-center text-center space-y-3 relative z-10">
        <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary group-hover:scale-105 transition-transform duration-200">
          <MaterialSymbol name="upload_file" className="text-[26px]" />
        </div>
        <div className="space-y-1">
          <p className="font-headline-sm text-headline-sm text-on-surface">
            Drop research PDFs here
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            or{" "}
            <span className="text-secondary font-medium underline underline-offset-4 decoration-secondary/30">
              tap to browse
            </span>{" "}
            from local files
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            <MaterialSymbol name="description" className="text-[13px]" /> PDF
            only
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            <MaterialSymbol name="tune" className="text-[13px]" /> Max 25MB
          </span>
        </div>
        <div className="mt-2 flex items-start gap-2.5 bg-surface-container-lowest/80 backdrop-blur-sm p-2.5 rounded text-left max-w-sm w-full shadow-sm">
          <MaterialSymbol
            name="auto_awesome"
            className="text-secondary text-[18px] shrink-0 mt-0.5"
          />
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
            Documents get parsed into semantic passages and encoded into
            continuous vector embeddings for accurate retrieval.
          </p>
        </div>
      </div>
      <input
        ref={fileInputRef}
        accept=".pdf"
        className="hidden"
        multiple
        type="file"
      />
    </div>
  );
}
