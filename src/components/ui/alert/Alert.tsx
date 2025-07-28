'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/tailwind'
import { AiOutlineClose } from 'react-icons/ai'
import { variantMap, VariantType } from '../_utils/variants'

export interface AlertProps {
  message: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  action?: React.ReactNode
  variant?: VariantType
  showIcon?: boolean
  banner?: boolean
  closable?: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
  afterClose?: () => void
  className?: string
}

export const Alert: React.FC<AlertProps> = ({
  message,
  description,
  icon,
  action,
  variant = 'primary',
  showIcon = false,
  banner = false,
  closable = false,
  onClose,
  afterClose,
  className,
}) => {
  const [visible, setVisible] = useState(true)

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(false)
    onClose?.(e)
    setTimeout(() => {
      afterClose?.()
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      className={cn(
        'flex items-start p-4 rounded-md relative',
        banner && 'w-full',
        variantMap[variant],
        className
      )}
      role="alert"
    >
      {showIcon && icon && <div className="mr-3 text-xl">{icon}</div>}
      <div className="flex-1">
        <div className="font-semibold">{message}</div>
        {description && (
          <div className="text-sm opacity-90 mt-1">{description}</div>
        )}
      </div>
      {action && <div className="ml-4">{action}</div>}
      {closable && (
        <button
          className="ml-3 text-xl opacity-70 hover:opacity-100 transition"
          onClick={handleClose}
        >
          <AiOutlineClose />
        </button>
      )}
    </div>
  )
}
