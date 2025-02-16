'use client'
import { useModalStore } from "@/store/modalStore";
import Modal from "./Modal";
import Chat from "./Chat";

export default function ModalChat() {
  const { isOpen, setIsOpen } = useModalStore(store => store)

  return (
    <Modal
      closeModal={() => setIsOpen(false)}
      open={isOpen}
    >
      <Chat />
    </Modal>
  )
}