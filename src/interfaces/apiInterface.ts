import { Message } from "cohere-ai/api"

export interface ResponseInterface {
  message: string
  status: number
  responseAi: string
}

export interface RequestInterface {
  message: string
  chatHistory: Message[]
}