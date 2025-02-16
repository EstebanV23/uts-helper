'use client'
import { useState } from "react";
import RecordingButton from "./RecordingButton";

export default function RecordConversation() {
  const [transcription, setTranscription] = useState<string>('')

  return (
    <RecordingButton
      setTranscription={setTranscription}
    />
  )
}