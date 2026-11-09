"use client";

import { useEffect, useRef, useState } from "react";
import MaterialSymbol from "@/components/material-symbol";

type ReindexState = "idle" | "working" | "done";
type ChatState = "idle" | "starting" | "ready";

export default function ActionBar() {
  const [reindex, setReindex] = useState<ReindexState>("idle");
  const [chat, setChat] = useState<ChatState>("idle");
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timeouts.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const triggerReindex = () => {
    if (reindex !== "idle") return;
    setReindex("working");
    timeouts.current.push(
      setTimeout(() => {
        setReindex("done");
        timeouts.current.push(setTimeout(() => setReindex("idle"), 1800));
      }, 1200)
    );
  };

  const launchChat = () => {
    if (chat !== "idle") return;
    setChat("starting");
    timeouts.current.push(setTimeout(() => setChat("ready"), 600));
  };

  const reindexActive = reindex !== "idle";

  return (
    <div className="flex flex-col gap-2.5 pt-2">
      <button
        className={`w-full h-13 py-3 px-4 rounded-full ${
          reindexActive
            ? "bg-secondary-fixed text-on-secondary-fixed"
            : "bg-surface-container text-on-surface"
        } font-headline-sm text-headline-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:bg-surface-container-high`}
        onClick={triggerReindex}
      >
        <MaterialSymbol
          name="cached"
          className={`text-[20px] ${reindex === "working" ? "animate-spin" : ""}`}
        />
        <span>
          {reindex === "idle"
            ? "Re-index Document"
            : reindex === "working"
              ? "Tokenizing & Embedding..."
              : "Vector Index Updated!"}
        </span>
      </button>
      <button
        className="w-full h-13 py-3.5 px-4 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all hover:opacity-90"
        onClick={launchChat}
      >
        {chat === "idle" ? (
          <>
            <MaterialSymbol
              name="smart_toy"
              className="text-secondary-fixed text-[20px]"
            />
            <span>Chat with this PDF</span>
          </>
        ) : chat === "starting" ? (
          <>
            <MaterialSymbol
              name="auto_awesome"
              className="text-secondary-fixed text-[20px] animate-pulse"
            />
            <span>Starting RAG Session...</span>
          </>
        ) : (
          <>
            <MaterialSymbol
              name="check"
              className="text-secondary-fixed text-[20px]"
            />
            <span>Ready to synthesize!</span>
          </>
        )}
      </button>
    </div>
  );
}
