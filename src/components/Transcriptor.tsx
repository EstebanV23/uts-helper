'use client'
import { useTranscriptorStore } from "@/store/transcriptorStore"
import RecordingButton from "./RecordingButton"

export default function Transcriptor() {
  const { tempTranscription, isOpen, closeTranscriptor, openTranscriptor, isRecordingTranscription } = useTranscriptorStore(state => state)
  
  return (
    <>
      <section className={`${isOpen ? 'scale-100' : 'scale-0'} transition-transform flex flex-col items-center justify-center h-full w-full fixed z-50 top-0 left-0 bg-green-900 bg-opacity-90 text-white`}>
        <div className="text-center max-w-3xl max-h-[80vh]">
          <p className="text-4xl font-light p-2">{tempTranscription}</p>
        </div>
        <div className="flex gap-3 items-center w-fit mt-3" >
          <button
            onClick={closeTranscriptor}
            className="bg-red-500 text-white px-5 py-3 rounded-md text-nowrap"
          >
            Cerrar Modal
          </button>
          <RecordingButton />
        </div>
      </section>
      <button
        onClick={openTranscriptor}
        className={`bg-green-500 text-white px-5 py-3 rounded-md mt-5 z-10 fixed bottom-5 right-1/2 transform translate-x-1/2 ${isRecordingTranscription ? 'scale-100' : 'scale-0'} transition-transform`}
      >
        Abrir Modal
      </button>
    </>
  )
}