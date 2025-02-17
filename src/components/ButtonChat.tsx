'use client'

import { IconMessageCircleQuestion } from "@tabler/icons-react";
import { useModalStore } from "@/store/modalStore";
import { stopSpeaker } from "@/helpers/speaker";

export default function ButtonChat() {
  const setIsOpen = useModalStore(store => store.setIsOpen)

  function onClick() {
    setTimeout(() => {
      stopSpeaker()
    }, 200)
    setIsOpen(true)
  }
  return (
    <>
      <button
        className={`bg-white border border-2 hover:bg-gray-100 transition-colors text-gray-500 px-5 py-3 w-full justify-center rounded-md flex items-center gap-2`}
        onClick={onClick}
      >
        <IconMessageCircleQuestion size={20} />
        Preguntar en chat
      </button>
    </>
  )
}