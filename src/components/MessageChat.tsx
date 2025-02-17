import { Message } from "cohere-ai/api";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function MessageChat({
  message
}: {
  message: Message
}) {
  const { role, message: messageText } = message as Message & { message: string }

  return role === 'USER' 
    ? <MessageChatUser 
        message={messageText}
      />
    : <MessageChatBot
        message={messageText}
      />
}


function MessageChatUser({ message }: { message: string }) {
  return (
    <div className="w-fit max-w-[75%] ml-auto text-wrap text-justify break-words p-2 border rounded-lg border-green-600 bg-green-100 text-sm text-green-600">
      <p className="text-lg">Tú</p>
      <Markdown remarkPlugins={[remarkGfm]} className="">{message}</Markdown>
    </div>
  )
}

function MessageChatBot({ message }: { message: string }) {
  return (
    <div className="w-fit max-w-[75%] text-wrap text-justify break-words p-2 border rounded-lg text-sm text-gray-500">
      <p className="text-gray-400 text-lg">Chatbot</p>
      <Markdown remarkPlugins={[remarkGfm]} className="">{message}</Markdown>
    </div>
  )
}