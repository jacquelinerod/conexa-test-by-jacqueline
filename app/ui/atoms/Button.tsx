import { IButton } from "@/app/lib/definitions/common";

export default function Button({
  disabled,
  className,
  text,
  onClick,
}: IButton) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {text}
    </button>
  );
}
