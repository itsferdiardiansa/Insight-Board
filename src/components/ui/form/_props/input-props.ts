export type InputSize = 'sm' | 'md' | 'lg'

export const labelClasses: Record<InputSize, string> = {
  sm: 'text-sm translate-x-[13px] translate-y-[6px]',
  md: 'text-base translate-x-[13px] translate-y-[10px]',
  lg: 'text-lg translate-x-[14px] translate-y-[14px]',
}

export const labelPositions: Record<InputSize, string> = {
  sm: '-top-3',
  md: '-top-5',
  lg: '-top-6.5',
}

export const labelSizes: Record<InputSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export const sizeClasses: Record<InputSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3.5 py-2.5 text-base',
  lg: 'px-4.5 py-3.5 text-lg',
}

export const inputColors = {
  default: {
    label: 'text-gray-400',
    border: 'border-gray-300',
  },
  focused: {
    label: 'text-(--primary)',
    border: 'border-(--primary)',
  },
  error: {
    label: 'text-(--destructive)',
    border: 'border-(--destructive)',
    text: 'text-(--destructive)',
  },
}
