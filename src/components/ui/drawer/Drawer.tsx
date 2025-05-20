import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { FiX } from 'react-icons/fi'
import { getPositionStyles, getTransformStyles } from './utils'

interface DrawerProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  position?: 'left' | 'right' | 'bottom' | 'top'
  size?: string | number
  duration?: number
  overlayOpacity?: number
  title?: string
  showCloseButton?: boolean
  fullScreen?: boolean
}

interface DrawerSubcomponents {
  Head: React.FC<{ children: React.ReactNode }>
  Content: React.FC<{ children: React.ReactNode }>
}

const Drawer: React.FC<DrawerProps> & DrawerSubcomponents = ({
  open,
  onClose,
  children,
  position = 'right',
  duration = 300,
  overlayOpacity = 0.5,
  title,
  showCloseButton = true,
  fullScreen = false,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setIsMounted(true)
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
    }
  }, [open])

  const handleTransitionEnd = () => {
    if (!open && isMounted) {
      setIsMounted(false)
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!isMounted) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: isVisible ? overlayOpacity : 0,
          transition: `opacity ${duration}ms ease-out`,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      <div
        ref={drawerRef}
        className="absolute bg-white shadow-2xl flex flex-col"
        style={{
          ...getPositionStyles(position, fullScreen),
          ...getTransformStyles(position, isVisible),
          transition: `transform ${duration}ms cubic-bezier(0.32, 0.72, 0, 1)`,
          overflow: 'hidden',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center gap-2 p-4 border-b border-gray-100">
            {showCloseButton && (
              <button
                onClick={onClose}
                className="rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close drawer"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
            {title && (
              <h3 className="text-lg font-semibold text-neutral-800">
                {title}
              </h3>
            )}
          </div>
        )}

        {children}
      </div>
    </div>,
    document.body
  )
}

const DrawerHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
)

const DrawerContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="flex-1 overflow-auto p-4">{children}</div>

Drawer.Head = DrawerHead
Drawer.Content = DrawerContent

export default Drawer
