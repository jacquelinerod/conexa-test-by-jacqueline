import { IMessage } from "@/app/lib/definitions/common";

export default function Message({ text }: IMessage) {
  return <strong className="flex justify-center mt-8">{text}</strong>;
}
