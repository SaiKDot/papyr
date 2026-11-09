import MaterialSymbol from "@/components/material-symbol";

const steps = [
  { num: 1, title: "Chunk Text", subtitle: "Slicing & Bounds", active: false },
  { num: 2, title: "Vectorize", subtitle: "1536-D Floats", active: true },
  { num: 3, title: "Cosine Match", subtitle: "Top-K Selection", active: false },
];

export default function RagExplainerCard() {
  return (
    <div className="bg-peach-tint/60 rounded-lg p-space-md border border-outline-variant relative overflow-hidden">
      <div className="flex items-center justify-between mb-space-sm">
        <div className="flex items-center gap-space-xs">
          <MaterialSymbol
            name="neurology"
            className="text-secondary text-[20px] [font-variation-settings:'FILL'_1]"
          />
          <h2 className="font-headline-sm text-headline-sm text-on-surface">
            How RAG Works
          </h2>
        </div>
        <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant bg-secondary-fixed px-2 py-0.5 rounded-full font-medium">
          Educational Mode
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
        Retrieval-Augmented Generation slices documents into dense vector
        spaces, fetching exact contextual fragments before synthesizing an
        answer.
      </p>
      <div className="grid grid-cols-3 gap-2 relative">
        {steps.map((step) => (
          <div
            key={step.num}
            className={`flex flex-col items-center text-center p-2.5 rounded shadow-sm transition-all hover:scale-[1.02] ${
              step.active ? "bg-secondary-fixed/50" : "bg-surface-container-lowest"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-label-sm mb-1.5 font-bold ${
                step.active
                  ? "bg-secondary text-on-secondary"
                  : "bg-surface-container text-on-surface font-label-sm"
              }`}
            >
              {step.num}
            </div>
            <span
              className={`font-headline-sm text-[12px] leading-tight ${
                step.active ? "text-secondary" : "text-on-surface"
              }`}
            >
              {step.title}
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">
              {step.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
