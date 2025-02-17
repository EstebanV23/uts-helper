'use client'

import { speaker, stopSpeaker } from "@/helpers/speaker";
import { ReactNode, useEffect } from "react";

export default function Card({
  children,
  title,
  subtitle,
  footer,
  description,
  icon,
  startSpeaker
}: {
  children?: ReactNode
  title: string
  subtitle?: string,
  footer?: ReactNode
  description?: string
  icon?: ReactNode
  startSpeaker?: boolean
}) {
  function onClick() {
    stopSpeaker()
    speaker(`${title}. ${subtitle || ''}. ${description || ''}`)
  }

  useEffect(() => {
    if (startSpeaker) {
      onClick()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="bg-white rounded-md h-full max-h-72 p-4 flex flex-col gap-4 border cursor-pointer hover:scale-[1.01] transition-transform"
      onClick={onClick}
    >
      <header className="flex flex-col">
        <aside className="flex items-center gap-2">
          {icon}
          <h2 className="text-2xl font-bold">{title}</h2>
        </aside>
        {subtitle && <p className="text-sm font-semibold text-gray-500">{subtitle}</p>}
      </header>
      {description && <textarea className={`cursor-pointer w-full ${description.length > 300 ? 'h-screen' : 'h-28'} p-1 bg-transparent resize-none focus:outline-none`} readOnly defaultValue={description}></textarea>}
      {children}
      {footer && <footer>{footer}</footer>}
    </div>
  )
}