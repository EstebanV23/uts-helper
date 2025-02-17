'use client'

import useChat from "@/hooks/useChat"
import { IconSend, IconTrash } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import MessageChat from "./MessageChat"
import { useTranscriptorStore } from "@/store/transcriptorStore"
import RecordingButton from "./RecordingButton"
import toast from "react-hot-toast"

export default function Chat() {
  const { loadingChatHistory, setMessageToAi, chatHistory, clearChatHistory } = useChat()
  const tempTranscription = useTranscriptorStore(state => state.tempTranscription)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage((oldMessage) => oldMessage + ' ' + tempTranscription)
  }, [tempTranscription])

  return (
    <div className="h-[70vh]">
      <section className="flex flex-col gap-2 h-[80%] overflow-y-auto p-2 my-3">
        {
          chatHistory.map((chat, index) => (
            <MessageChat 
              key={index + 'chat'}
              message={chat}
            />
          ))
        }
        {
          chatHistory.length > 0 && (
            <button
              className="w-full px-5 py-2 bg-red-100 border-2 border-red-400 text-red-500 rounded-lg transition-colors flex items-center gap-1 justify-center hover:bg-red-200"
              onClick={() => {
                toast.custom((t) => (
                  <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col gap-2">
                    <div className="text-lg">¿Estás seguro de eliminar el chat?</div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => {
                          clearChatHistory()
                          toast.dismiss(t.id)
                        }}
                        className="bg-red-500 text-white px-5 py-2 rounded-md"
                      >
                        Sí, eliminar
                      </button>
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="bg-green-500 text-white px-5 py-2 rounded-md"
                      >
                        No, cancelar
                      </button>
                    </div>
                  </div>
                ))
              }}
            >
              <IconTrash size={20} strokeWidth={1.5} />
              Eliminar chat
            </button>

          )
        }
      </section>
      <div className="h-[20%] relative">
        <textarea 
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          disabled={loadingChatHistory}
          className="w-full h-full pe-44 border py-2 ps-3 focus:outline-none rounded-lg resize-none"
        />
        <div className="absolute right-2 bottom-2 flex gap-1">
          <button
            className="bg-white-500 text-green-500 border-green-500 border transition-colors hover:bg-green-50 ps-3 pe-5 py-2 rounded-md flex items-center gap-2"
            onClick={() => setMessageToAi(message)}
            disabled={loadingChatHistory}
          >
            <IconSend size={20} />
            {loadingChatHistory ? 'Enviando...' : 'Enviar'}
          </button>
          <RecordingButton
            onlyIcon
            setRecording={false}
            showModal={false}
          />
        </div>
      </div>
    </div>
  )
}