import { useCallback, useMemo, useState } from 'react'


export type UseModal = {
  isVisible: boolean
  show: () => void
  hide: () => void
}


export function useModal(isVisible: boolean = false): UseModal {


  const [isOpen, setIsOpen] = useState(isVisible)


  const show = useCallback(() => {
    setIsOpen(true)
  }, [])

  const hide = useCallback(() => {
    setIsOpen(false)
  }, [])

  const modal = useMemo<UseModal>(() => {
    return {
      isVisible: isOpen,
      show,
      hide,
    }
  }, [isOpen, show, hide])


  return modal
}
