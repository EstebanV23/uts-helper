import { Message } from "cohere-ai/api";
import { create } from "zustand";

interface ChatHistoryStore {
  chatHistory: Message[];
  addChatHistory: (chatHistory: Message[]) => void;
  clearChatHistory: () => void;
  setChatHistory: (chatHistory: Message[]) => void;
  loadingChatHistory: boolean;
  setLoadingChatHistory: (loadingChatHistory: boolean) => void;
}

export const useChatHistoryStore = create<ChatHistoryStore>((set) => ({
  chatHistory: [],
  addChatHistory: (chatHistory) => set((oldChatHistory) => ({ chatHistory: [...oldChatHistory.chatHistory, ...chatHistory] })),
  clearChatHistory: () => set({ chatHistory: [] }),
  setChatHistory: (chatHistory) => set({ chatHistory }),
  loadingChatHistory: false,
  setLoadingChatHistory: (loadingChatHistory) => set({ loadingChatHistory }),
}));