import { Message } from "cohere-ai/api"


export function createChatUser(message: string): Message {
  return {
    role: "USER",
    message,
  }
}

export function createChatBot(message: string): Message {
  return {
    role: "CHATBOT",
    message,
  }
}