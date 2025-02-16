'use client'
import { stopSpeaker } from "@/helpers/speaker"
import { IconPlayerPause } from "@tabler/icons-react"

export default function ButtonStopSpeaker() {
  function onClick() {
    stopSpeaker()
  }

  return (
    <button
      className="bg-white p-4 rounded-full shadow-md fixed bottom-4 right-4"
      onClick={onClick}
    >
      <IconPlayerPause size={24} />
    </button>
  )
}