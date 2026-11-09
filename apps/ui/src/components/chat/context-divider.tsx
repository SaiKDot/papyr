import MaterialSymbol from "@/components/material-symbol";

export default function ContextDivider() {
  return (
    <div className="relative py-1">
      <div className="flex items-center justify-center">
        <span className="bg-surface-container px-space-md py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 shadow-sm">
          <MaterialSymbol
            name="sync_alt"
            className="text-[14px] text-secondary"
          />
          Switched Attention Context: <strong>Attention_Is_All_You_Need.pdf</strong>
        </span>
      </div>
    </div>
  );
}
