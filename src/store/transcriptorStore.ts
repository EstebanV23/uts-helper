import { create } from "zustand";

interface TranscriptorStore {
  transcription: string | null;
  setTranscription: (transcription: string | null) => void;
}

export const useTranscriptorStore = create<TranscriptorStore>((set) => ({
  transcription: null,
  setTranscription: (transcription) => set({ transcription }),
}));