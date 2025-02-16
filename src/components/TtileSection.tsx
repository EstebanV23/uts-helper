'use client'
import { speaker, stopSpeaker } from "@/helpers/speaker"

export type Section = {
  title: string
  description: string
}

export default function TitleServicios({
  section
}: {
  section: Section
}) {
  function handleClick(){
    stopSpeaker()
    speaker(`${section.title}. ${section.description}`)
  }

  return (
    <div onClick={handleClick} className="my-10 p-3 hover:bg-green-200 cursor-pointer rounded-md border border-2 border-transparent hover:border-green-300">
      <h3 className="text-4xl font-bold text-center">{section.title}</h3>
      <p className="text-sm text-center text-green-600 font-semibold mt-1">{section.description}</p>
    </div>
  )
}