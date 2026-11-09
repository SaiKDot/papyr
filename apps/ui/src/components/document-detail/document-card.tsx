import MaterialSymbol from "@/components/material-symbol";

type DocumentCardProps = {
  chunkCount: number;
  chunkCountPulsing?: boolean;
};

export default function DocumentCard({
  chunkCount,
  chunkCountPulsing = false,
}: DocumentCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-surface-container-lowest p-space-md border border-outline-variant">
      <div className="flex items-start gap-space-md">
        <div className="w-16 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-surface-container relative">
          <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
            <MaterialSymbol
              name="description"
              className="text-outline text-[24px]"
            />
          </div>
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
            <MaterialSymbol
              name="picture_as_pdf"
              className="text-surface-container-lowest text-[22px]"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant uppercase tracking-wider">
              Transformer Classic
            </span>
            <span className="font-label-sm text-label-sm text-outline">
              v1.3
            </span>
          </div>
          <p className="font-headline-sm text-headline-sm text-on-surface truncate">
            Attention Is All You Need
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Vaswani et al. · Cornell arXiv 2017
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 pt-4 bg-surface-container-low/60 rounded-xl p-3">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <MaterialSymbol name="folder" className="text-[12px]" />
            Size
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
            1.2 MB
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <MaterialSymbol name="layers" className="text-[12px]" />
            Pages
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
            15
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
            <MaterialSymbol name="notes" className="text-[12px]" />
            Chars
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface mt-1">
            48.2k
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
            <MaterialSymbol name="scatter_plot" className="text-[12px]" />
            Chunks
          </span>
          <span
            className={`font-headline-sm text-headline-sm text-secondary mt-1 transition-transform ${
              chunkCountPulsing ? "scale-110" : ""
            }`}
          >
            {chunkCount}
          </span>
        </div>
      </div>
    </div>
  );
}
