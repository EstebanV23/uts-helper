'use client'
import { speaker, stopSpeaker } from "@/helpers/speaker";
import { IconMicrophone } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export default function RecordingButton({
  setTranscription
}: {
  setTranscription: (transcription: string) => void
}){
  const [isRecording, setIsRecording] = useState(false)
  const [tempText, setTemptext] = useState('');
  const recognition = useRef(null)

  useEffect(() => {
    recognition.current = new webkitSpeechRecognition() || new SpeechRecognition()
    recognition.current.continuous = true
    recognition.current.lang = "es-ES"
    

    console.log({
      recognition: recognition.current
    })
    
    recognition.current.onresult = function(event) {
      console.log({
        event
      })
      console.log(event.results[event.results.length - 1][0].transcript, event.results.length - 1)
      setTemptext((oldTransciption) => oldTransciption + ' ' + event.results[event.results.length - 1][0].transcript)
    }

    recognition.current.onend = function(event) {
      console.log({
        event
      })
      setTranscription(tempText)
    }

    recognition.current.onerror = function(event) {
      console.error({event})
    }
  }, []);

  function startRecording(){
    setTimeout(() => {
      stopSpeaker()
      speaker('Escuchandote')
    }, 200)
    recognition.current.start()
    setIsRecording(true)
  }
  
  function stopRecording(){
    setTimeout(() => {
      stopSpeaker()
      speaker('Deteniendo grabación')
    }, 200)
    recognition.current.stop()
    setIsRecording(false)
  }

  return (
    <>
      <button
        className={`${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} transition-colors text-white px-5 py-3 w-full justify-center rounded-md flex items-center gap-2`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        <IconMicrophone size={20} />
        {isRecording ? 'Detener' : 'Iniciar'} micrófono
      </button>
      <p>{tempText}</p>
    </>
  )
}