import { MutableRefObject } from "react";
import { create } from "zustand";

interface TranscriptorStore {
  transcription: string | null;
  setTranscription: (transcription: string | null) => void;
  openTranscriptor: () => void;
  closeTranscriptor: () => void;
  isOpen: boolean;
  setIsRecordingTranscription: (isRecording: boolean) => void;
  isRecordingTranscription: boolean;
  setTempTranscription: (transcription: string) => void;
  tempTranscription: string;
  clearTempTranscription: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition: MutableRefObject<any>;
  setRecognition: (recognition: MutableRefObject<null>) => void;
}

export const useTranscriptorStore = create<TranscriptorStore>((set) => ({
  transcription: null,
  setTranscription: (transcription) => set({ transcription }),
  openTranscriptor: () => set({ isOpen: true }),
  closeTranscriptor: () => set({ isOpen: false }),
  isOpen: false,
  isRecordingTranscription: false,
  setIsRecordingTranscription: (isRecordingTranscription) => set({ isRecordingTranscription }),
  setTempTranscription: (tempTranscription) => set((oldTranscription) => ({ tempTranscription: oldTranscription.tempTranscription + ' ' + tempTranscription })),
  clearTempTranscription: () => set({ tempTranscription: '' }),
  tempTranscription: '',
  recognition: {
    current: null,
  },
  setRecognition: (recognition) => set({ recognition }),
}));