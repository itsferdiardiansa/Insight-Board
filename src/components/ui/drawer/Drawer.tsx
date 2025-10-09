import { ReactNode, useEffect, useRef, useState } from 'react'
import * as Portal from '@radix-ui/react-portal'
import { FiX } from 'react-icons/fi'
import { getPositionStyles, getTransformStyles } from './utils'
import { cn } from '@/utils/tailwind'

type DrawerProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  position?: 'left' | 'right' | 'bottom' | 'top'
  size?: string | number
  duration?: number
  overlayOpacity?: number
  title?: string
  showCloseButton?: boolean
  closeIcon?: ReactNode
  fullScreen?: boolean
}

type DrawerSubcomponents = {
  Head: React.FC<{ children: React.ReactNode }>
  Content: React.FC<{
    children: React.ReactNode
    className?: string
    position?: 'left' | 'right' | 'bottom' | 'top'
  }>
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
  closeIcon,
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

  return (
    <Portal.Root className="fixed inset-0 z-[9999]">
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
        className="absolute bg-default shadow-2xl flex flex-col"
        style={{
          ...getPositionStyles(position, fullScreen),
          ...getTransformStyles(position, isVisible),
          transition: `transform ${duration}ms cubic-bezier(0.32, 0.72, 0, 1)`,
          overflow: 'hidden',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center gap-2 p-4 border-b border-default">
            {showCloseButton && (
              <button
                onClick={onClose}
                className="rounded-full hover:bg-accent-gray-hovered transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                {closeIcon ? closeIcon : <FiX className="w-5 h-5" />}
              </button>
            )}
            {title && (
              <h1 className="text-heading-lg font-semibold text-default">
                {title}
              </h1>
            )}
          </div>
        )}

        {children}
      </div>
    </Portal.Root>
  )
}

const DrawerHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-space-md border-b">{children}</div>
)

const DrawerContent: React.FC<{
  children: React.ReactNode
  className?: string
  position?: 'left' | 'right' | 'bottom' | 'top'
}> = ({ children, className, position }) => {
  const widthClasses = cn(
    'flex-1 overflow-auto p-space-md',
    className,
    position === 'left' || position === 'right' ? 'w-[80%] md:w-[378px]' : ''
  )

  return <div className={widthClasses}>{children}</div>
}

Drawer.Head = DrawerHead
Drawer.Content = DrawerContent

export default Drawer
