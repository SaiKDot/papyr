export default function StreamingIndicator() {
  return (
    <div className="flex items-center gap-2 px-space-sm py-1 text-on-surface-variant">
      <div className="flex gap-1 items-center">
        <span
          className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <span className="font-label-sm text-label-sm text-secondary">
        Retrieving grounded vectors...
      </span>
    </div>
  );
}
