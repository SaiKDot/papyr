"use client";

import { useRef, useState } from "react";
import MaterialSymbol from "@/components/material-symbol";

const promptChips = [
  {
    icon: "summarize",
    label: "Summarize key points",
    prompt: "Summarize key points of all 3 documents",
  },
  {
    icon: "balance",
    label: "Compare revenue vs expenses",
    prompt: "Compare revenue vs expenses in Q3",
  },
  {
    icon: "neurology",
    label: "Explain methodology",
    prompt: "Explain multi-head attention methodology in plain terms",
  },
  {
    icon: "table_chart",
    label: "Extract tables",
    prompt: "Extract all financial tabular data",
  },
];

type ChatComposerProps = {
  onSend: (query: string) => void;
};

export default function ChatComposer({ onSend }: ChatComposerProps) {
  const [value, setValue] = useState("");
  const [contextEnabled, setContextEnabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const query = value.trim();
    if (!query) return;
    setValue("");
    onSend(query);
  };

  return (
      <div className="sticky bottom-[calc(4rem+env(safe-area-inset-bottom))] bg-surface/95 backdrop-blur-sm px-margin pt-space-xs pb-space-sm space-y-space-sm border-t border-outline-variant z-40">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        {promptChips.map((chip) => (
          <button
            key={chip.label}
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface font-headline-sm text-headline-sm shadow-sm active:scale-95 transition-all"
            onClick={() => {
              setValue(chip.prompt);
              inputRef.current?.focus();
            }}
          >
            <MaterialSymbol
              name={chip.icon}
              className="text-[15px] text-secondary"
            />
            <span>{chip.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-surface-container-lowest rounded-full p-1.5 shadow-md flex items-center gap-2 transition-all">
        <button
          className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0 active:scale-90 transition-transform"
          title="Attach PDF or Vectorize Context"
        >
          <MaterialSymbol name="attach_file" className="text-[20px]" />
        </button>
        <input
          ref={inputRef}
          className="flex-1 bg-transparent border-0 outline-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 px-1 py-1"
          placeholder="Ask anything about your PDFs..."
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") submit();
          }}
        />
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary-fixed/50 shrink-0 transition-colors ${
            contextEnabled ? "text-secondary" : "text-on-surface-variant"
          }`}
          title="Toggle Retrieved Context Mode"
          onClick={() => setContextEnabled((enabled) => !enabled)}
        >
          <MaterialSymbol name="visibility" className="text-[20px]" />
        </button>
        <button
          className="w-9 h-9 rounded-full bg-primary hover:bg-inverse-surface flex items-center justify-center text-on-primary shrink-0 active:scale-95 transition-transform shadow-sm"
          onClick={submit}
        >
          <MaterialSymbol name="arrow_upward" className="text-[18px]" />
        </button>
      </div>
      {contextEnabled && (
        <div className="flex items-center justify-between px-2 pt-0.5 text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Context Inspection Enabled</span>
          </div>
          <span className="text-on-surface-variant font-label-sm text-label-sm">
            Top-k=4 · Temp=0.2
          </span>
        </div>
      )}
    </div>
  );
}
