type MaterialSymbolProps = {
  name: string;
  className?: string;
  title?: string;
};

export default function MaterialSymbol({
  name,
  className,
  title,
}: MaterialSymbolProps) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      title={title}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
