import { createChatBot, createChatUser } from "@/app/utils/createChat";
import { speaker, stopSpeaker } from "@/helpers/speaker";
import { aiService } from "@/services/aiService";
import { useChatHistoryStore } from "@/store/chatHistoryStore";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function useChat() {
  const { chatHistory, setChatHistory, addChatHistory, loadingChatHistory, setLoadingChatHistory, clearChatHistory } = useChatHistoryStore(state => state)

  useEffect(() => {
    const chatHistoryLocal = localStorage.getItem('chatHistory')
    if (chatHistoryLocal) setChatHistory(JSON.parse(chatHistoryLocal))
  }, [setChatHistory])
  
  useEffect(() => {
    if (chatHistory.length === 0) return
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory))
  }, [chatHistory])

  async function setMessageToAi(message: string) {
    if (!message) return toast.error('El mensaje no puede estar vacío')
    setLoadingChatHistory(true)
    const textGeneratedResponse = await toast.promise(aiService({
      message: message,
      chatHistory
    }), {
      loading: 'Enviando mensaje...'
    })

    if (textGeneratedResponse.status !== 200) {
      toast.error('Ha ocurrido un error al enviar el mensaje')
      addChatHistory([createChatUser(message)])
      setLoadingChatHistory(false)
      return
    }

    toast.success('Mensaje enviado correctamente')

    const textGenerated = textGeneratedResponse.responseAi
    addChatHistory([createChatUser(message), createChatBot(textGenerated)])
    setLoadingChatHistory(false)
    stopSpeaker()
    speaker(textGenerated)
  }

  return {
    setMessageToAi,
    loadingChatHistory,
    chatHistory,
    clearChatHistory
  }
}