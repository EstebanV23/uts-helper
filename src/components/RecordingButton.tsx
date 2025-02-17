'use client'
import { speaker, stopSpeaker } from "@/helpers/speaker";
import useChat from "@/hooks/useChat";
import { useTranscriptorStore } from "@/store/transcriptorStore";
import { IconMicrophone } from "@tabler/icons-react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SpeechRecognition: any;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let SpeechRecognition: any;
}

export default function RecordingButton({
  onlyIcon = false,
  setRecording = true,
  showModal = true
}: {
  onlyIcon?: boolean
  setRecording?: boolean
  showModal?: boolean
}){
  const { setTempTranscription, setIsRecordingTranscription, isRecordingTranscription, tempTranscription, recognition, openTranscriptor } = useTranscriptorStore(state => state)

  const { loadingChatHistory, setMessageToAi } = useChat()

  const [finishedTranscription, setFinishedTranscription] = useState(false)

  useEffect(() => {
    if (finishedTranscription && setRecording) {
      setMessageToAi(tempTranscription)
    }
  }, [finishedTranscription])

  useEffect(() => {
    if (!recognition?.current) recognition.current = (typeof window.webkitSpeechRecognition !== 'undefined' ? new window.webkitSpeechRecognition() : new (window.SpeechRecognition || window.webkitSpeechRecognition)) as typeof SpeechRecognition
    if (recognition.current) {
      recognition.current.continuous = true
      recognition.current.lang = "es-ES"
      
      console.log({
        recognition: recognition.current
      })
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.current.onresult = function(event: any) {
        console.log({
          event
        })
        
        setTempTranscription(event.results[event.results.length - 1][0].transcript)
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.current.onend = function(event: any) {
        console.log({
          event
        })
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.current.onerror = function(event: any) {
        console.error({event})
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startRecording(){
    setTimeout(() => {
      stopSpeaker()
      speaker('Escuchandote')
      setTimeout(() => {
        recognition?.current?.start()
      }, 1000)
    }, 200)
    setFinishedTranscription(false)
    setIsRecordingTranscription(true)
  }
  
  function stopRecording(){
    setTimeout(() => {
      stopSpeaker()
      speaker('Deteniendo grabación')
      recognition?.current?.stop()
      setFinishedTranscription(true)
    }, 200)
    setIsRecordingTranscription(false)
  }

  return (
    <>
      <button
        className={`${isRecordingTranscription ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} transition-colors text-white px-5 py-3 w-full justify-center rounded-md flex items-center gap-2`}
        onClick={() => {
          if (isRecordingTranscription) {
            stopRecording()
            return
          }
          
          if (showModal) openTranscriptor()
          startRecording()
        }}
        disabled={loadingChatHistory}
      >
        <IconMicrophone size={20} />
        {
          !onlyIcon && `${isRecordingTranscription ? 'Detener' : 'Iniciar'} micrófono`
        }
      </button>
    </>
  )
}