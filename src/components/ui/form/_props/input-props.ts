export type InputSize = 'sm' | 'md' | 'lg'

export const labelClasses: Record<InputSize, string> = {
  sm: 'text-body-sm translate-x-[13px] translate-y-[6px]',
  md: 'text-body-md translate-x-[13px] translate-y-[10px]',
  lg: 'text-body-lg translate-x-[14px] translate-y-[14px]',
}

export const labelPositions: Record<InputSize, string> = {
  sm: '-translate-y-2!',
  md: '-translate-y-2.5!',
  lg: '-translate-y-3!',
}

export const labelSizes: Record<InputSize, string> = {
  sm: 'text-body-sm',
  md: 'text-body-sm',
  lg: 'text-body-md',
}

export const sizeClasses: Record<InputSize, string> = {
  sm: 'px-2.5 py-1.5 text-body-sm',
  md: 'px-3.5 py-2.5 text-body-md',
  lg: 'px-4.5 py-3.5 text-body-lg',
}

export const inputColors = {
  default: {
    label: 'text-subtlest',
    border: 'border-input',
  },
  focused: {
    label: 'text-primary',
    border: 'border-focused',
  },
  error: {
    label: 'text-destructive',
    border: 'border-error',
    text: 'text-destructive',
  },
}
