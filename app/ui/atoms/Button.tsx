import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  text: string;
}

export default function Button({
  disabled,
  onClick,
  className,
  text,
}: IButton) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {text}
    </button>
  );
}
