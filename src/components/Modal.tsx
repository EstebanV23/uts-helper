'use client'

import { IconCircleDashedX } from "@tabler/icons-react";

export default function Modal({
  children,
  closeModal,
  open
}: {
  children: React.ReactNode
  closeModal: () => void
  open: boolean
}) {

  if (!open) return null

  return (
    <div className="fixed bg-black bg-opacity-50 top-0 left-0 flex items-center justify-center w-screen h-screen z-50">
      <div className="bg-white rounded-md max-h-[90vh] h-max p-4 max-w-4xl w-full">
        <div 
          className="p-2 bg-red-100 cursor-pointer rounded-full w-fit text-red-500 ms-auto"
          onClick={closeModal}
        >
          <IconCircleDashedX
            size={24}
          />
        </div>
        {children}
      </div>
    </div>
  )
}