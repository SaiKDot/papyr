import MaterialSymbol from "@/components/material-symbol";

type UserMessageProps = {
  text: string;
  time: string;
  statusIcon?: string;
};

export default function UserMessage({
  text,
  time,
  statusIcon = "done_all",
}: UserMessageProps) {
  return (
    <div className="flex justify-end pl-8">
      <div className="bg-primary text-on-primary px-space-md py-space-sm rounded-2xl rounded-br-sm shadow-sm max-w-[90%]">
        <p className="font-body-md text-body-md leading-relaxed">{text}</p>
        <div className="flex items-center justify-end gap-1 mt-1 opacity-70">
          <span className="font-label-sm text-label-sm text-on-primary">
            {time}
          </span>
          <MaterialSymbol
            name={statusIcon}
            className="text-[13px] text-on-primary"
          />
        </div>
      </div>
    </div>
  );
}
