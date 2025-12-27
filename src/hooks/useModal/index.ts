import { useState } from 'react'


export type UseModal = {
  isVisible: boolean
  show: () => void
  hide: () => void
}


export function useModal(isVisible: boolean = false): UseModal {


  const [isOpen, setIsOpen] = useState(isVisible)


  return {
    isVisible: isOpen,
    show: () => setIsOpen(true),
    hide: () => setIsOpen(false),
  }
}
