import MaterialSymbol from "@/components/material-symbol";

type AssistantHeaderProps = {
  meta: string;
  metaClassName?: string;
};

export default function AssistantHeader({
  meta,
  metaClassName = "font-label-sm text-label-sm text-on-surface-variant",
}: AssistantHeaderProps) {
  return (
    <div className="flex items-center gap-space-xs text-on-surface-variant">
      <div className="w-5 h-5 rounded-full bg-secondary-fixed flex items-center justify-center">
        <MaterialSymbol
          name="auto_awesome"
          className="text-secondary text-[14px]"
        />
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface">
        Papyr Synthesizer
      </span>
      <span className={metaClassName}>{meta}</span>
    </div>
  );
}
