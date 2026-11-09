"use client";

import { useEffect, useRef, useState } from "react";
import MaterialSymbol from "@/components/material-symbol";
import AssistantHeader from "@/components/chat/assistant-header";
import AssistantTurnOne from "@/components/chat/assistant-turn-one";
import AssistantTurnTwo from "@/components/chat/assistant-turn-two";
import ChatComposer from "@/components/chat/chat-composer";
import ContextDivider from "@/components/chat/context-divider";
import StreamingIndicator from "@/components/chat/streaming-indicator";
import UserMessage from "@/components/chat/user-message";

type SimulatedTurn = {
  id: number;
  query: string;
  answered: boolean;
};

export default function ChatView() {
  const [turns, setTurns] = useState<SimulatedTurn[]>([]);
  const [streaming, setStreaming] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextIdRef = useRef(0);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  };

  const handleSend = (query: string) => {
    const id = nextIdRef.current++;
    setTurns((prev) => [...prev, { id, query, answered: false }]);
    setStreaming(true);
    scrollToBottom();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStreaming(false);
      setTurns((prev) =>
        prev.map((turn) => (turn.id === id ? { ...turn, answered: true } : turn)),
      );
      scrollToBottom();
    }, 1200);
  };

  return (
    <>
      <div className="flex flex-col gap-space-lg px-margin pt-space-md pb-6">
        <UserMessage
          text="What were the primary revenue drivers in Q3 according to the report?"
          time="10:42 AM"
        />
        <AssistantTurnOne />
        <ContextDivider />
        <UserMessage
          text="Can you summarize how self-attention works based on the paper?"
          time="10:44 AM"
        />
        <AssistantTurnTwo />
        {turns.map((turn) => (
          <div key={turn.id} className="contents">
            <UserMessage text={turn.query} time="Just now" statusIcon="schedule" />
            {turn.answered && (
              <div className="flex flex-col gap-space-sm pr-2">
                <AssistantHeader
                  meta="· Vector Match 89%"
                  metaClassName="font-label-sm text-label-sm text-secondary font-medium"
                />
                <div className="bg-surface-container-lowest p-space-md rounded-2xl rounded-tl-sm shadow-sm space-y-space-md text-on-surface">
                  <p className="font-body-md text-body-md leading-relaxed">
                    I examined the selected active scope against your query:{" "}
                    <em>&ldquo;{turn.query}&rdquo;</em>. In
                    Q3_Financial_Summary.pdf § p.7, capital allocation shifted
                    18% toward accelerated GPU inference workloads.
                  </p>
                  <div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-2 truncate">
                      <MaterialSymbol
                        name="description"
                        className="text-secondary text-[16px]"
                      />
                      <span className="font-headline-sm text-headline-sm truncate">
                        Q3_Financial_Summary.pdf § p.7
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-accent font-semibold shrink-0">
                      89% Match
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {streaming && <StreamingIndicator />}
      </div>
      <ChatComposer onSend={handleSend} />
    </>
  );
}
