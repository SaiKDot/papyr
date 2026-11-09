import MaterialSymbol from "@/components/material-symbol";
import UploadDropzone from "@/components/library/upload-dropzone";
import DocumentList from "@/components/library/document-list";

export default function Home() {
  return (
    <div className="flex flex-col w-full px-gutter pb-8 space-y-space-md">
      <div className="flex items-center justify-between pt-space-xs">
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Knowledge Vault
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Active corpus for contextual synthesis
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-label-sm text-label-sm text-on-surface tracking-tight">
            3 Indexed Docs
          </span>
        </div>
      </div>
      <UploadDropzone />
      <DocumentList />
      <div className="pt-2 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-sm">
          <MaterialSymbol name="memory" className="text-secondary text-[18px]" />
          <span className="font-label-md text-label-md text-on-surface">
            Total:{" "}
            <strong className="font-semibold text-secondary">131 chunks</strong>{" "}
            in vector index
          </span>
          <span className="text-outline-variant font-label-sm">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            dim: 1536
          </span>
        </div>
      </div>
    </div>
  );
}
