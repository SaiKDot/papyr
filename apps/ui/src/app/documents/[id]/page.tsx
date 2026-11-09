import StatusBar from "@/components/document-detail/status-bar";
import DocumentDetailContent from "@/components/document-detail/document-detail-content";

export default function DocumentDetailPage() {
  return (
    <div className="flex flex-col w-full pb-8">
      <StatusBar />
      <DocumentDetailContent />
    </div>
  );
}
