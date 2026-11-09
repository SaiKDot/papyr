import MaterialSymbol from "@/components/material-symbol";

export default function StatusBar() {
  return (
    <div className="px-gutter pt-space-sm pb-space-sm bg-surface/90 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 min-w-0">
        <MaterialSymbol
          name="article"
          className="text-secondary text-[18px] shrink-0"
        />
        <span className="font-label-md text-label-md text-on-surface truncate">
          Attention_Is_All_You_Need.pdf
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse" />
        <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
          Indexed
        </span>
      </div>
    </div>
  );
}
