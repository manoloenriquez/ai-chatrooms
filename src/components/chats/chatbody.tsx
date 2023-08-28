import { Input } from "../ui/input";
import MsgBubble from "./msgbubble";

export default function ChatBody() {
  return (
    <div className="flex flex-col h-full">
      {/* chat header */}
      <div className="border-b py-5 px-5">Chat header</div>
      {/* chat body */}
      <div className="flex-1 bg-gray-100 px-3 flex flex-col gap-5 py-5">
        <MsgBubble isSender={false} />
        <MsgBubble isSender={true} />
      </div>

      {/* text box */}

      <div className="mt-auto bg-white border-top flex p-3 gap-3">
        <div>X</div>
        <div className="w-full h-20 border p-2" contentEditable></div>
        <div>X</div>
      </div>
    </div>
  );
}
