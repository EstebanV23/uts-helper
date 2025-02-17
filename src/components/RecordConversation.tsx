'use client'
import { useEffect } from "react";
import RecordingButton from "./RecordingButton";
import { useTranscriptorStore } from "@/store/transcriptorStore";
import { speaker, stopSpeaker } from "@/helpers/speaker";

export default function RecordConversation() {

  const { openTranscriptor, isRecordingTranscription, transcription, clearTempTranscription } = useTranscriptorStore(state => state)

  useEffect(() => {
    if (isRecordingTranscription) clearTempTranscription()
  }, [isRecordingTranscription, openTranscriptor, clearTempTranscription])

  useEffect(() => {
    console.log({ transcription })
    if (transcription) setTimeout(() => {
      stopSpeaker()
      speaker(transcription)
    }, 200)
  }, [transcription])

  return (
    <RecordingButton />
  )
}