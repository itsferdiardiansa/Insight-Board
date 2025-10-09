export const variantMap = {
  primary: 'bg-primary-intense text-inverse',
  outlinePrimary: 'outline text-primary',
  secondary: 'bg-secondary-intense-pressed text-inverse',
  outlineSecondary: 'outline',
  success: 'bg-success-intense text-inverse',
  outlineSuccess: 'outline text-success',
  info: 'bg-info-intense text-inverse',
  outlineInfo: 'outline text-info',
  warning: 'bg-warning-intense text-warning-inverse',
  outlineWarning: 'outline text-warning',
  destructive: 'bg-destructive-intense text-inverse',
  outlineDestructive: 'outline text-destructive',
  light: 'bg-default text-secondary',
  outlineLight: 'outline outline-disabled',
  ghost: 'text-secondary',
} as const

export const roundedMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  full: 'rounded-full',
} as const

export const sizeMap = {
  xs: 'p-1.5 text-xs leading-2',
  sm: 'px-2.5 py-1.5 text-sm leading-3',
  md: 'px-3.5 py-2.5 text-base leading-4',
  lg: 'px-4.5 py-3.5 text-lg leading-5',
} as const

export const variantMapKeys = Object.keys(variantMap)
export const roundedMapKeys = Object.keys(roundedMap)
export const sizeMapKeys = Object.keys(sizeMap)

export type VariantType = keyof typeof variantMap
export type RoundedType = keyof typeof roundedMap
export type SizeType = keyof typeof sizeMap
