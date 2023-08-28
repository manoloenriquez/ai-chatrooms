import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isSender: boolean;
}

export default function MsgBubble({ isSender }: Props) {
  return (
    <div
      className={`rounded-xl max-w-[70%] w-fit py-3 px-5 ${
        isSender ? "bg-blue-400 text-white self-end" : "bg-gray-300"
      }`}
    >
      Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
      IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
      IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
    </div>
  );
}
