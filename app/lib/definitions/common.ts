import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface IPagination {
  prev: string | null;
  next: string | null;
  onClick: (prop: any) => void | Dispatch<SetStateAction<string | null>>;
}

export interface IMessage {
  text: string;
}

export interface IButton {
  disabled: boolean;
  className: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
