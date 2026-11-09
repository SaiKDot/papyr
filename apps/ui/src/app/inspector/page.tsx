import type { Metadata } from "next";
import RagExplainerCard from "@/components/inspector/rag-explainer-card";
import QueryInspector from "@/components/inspector/query-inspector";
import RetrievedChunks from "@/components/inspector/retrieved-chunks";
import TestQueryButton from "@/components/inspector/test-query-button";

export const metadata: Metadata = {
  title: "Chunk Inspector & Retrieval Explorer",
};

export default function InspectorPage() {
  return (
    <div className="flex flex-col w-full px-gutter pb-8 gap-space-lg">
      <RagExplainerCard />
      <QueryInspector />
      <RetrievedChunks />
      <TestQueryButton />
    </div>
  );
}
