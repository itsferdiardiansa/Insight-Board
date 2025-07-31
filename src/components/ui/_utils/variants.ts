export const variantMap = {
  primary: 'bg-(--primary) text-neutral-100',
  outlinePrimary: 'outline outline-(--primary) text-(--primary)',
  secondary: 'bg-(--secondary) text-neutral-100',
  outlineSecondary: 'outline outline-(--secondary)',
  success: 'bg-(--success) text-neutral-100',
  outlineSuccess: 'outline outline-(--success) text-(--success)',
  info: 'bg-(--info) text-neutral-100',
  outlineInfo: 'outline outline-(--info) text-(--info)',
  warning: 'bg-(--warning) text-neutral-700',
  outlineWarning: 'outline outline-(--warning) text-(--warning)',
  destructive: 'bg-(--destructive) text-neutral-100',
  outlineDestructive: 'outline outline-(--destructive) text-(--destructive)',
  light: 'bg-white text-(--secondary)',
  outlineLight: 'outline outline-gray-300',
  ghost: 'text-(--secondary)',
} as const

export const roundedMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  full: 'rounded-full',
} as const

export const sizeMap = {
  xs: 'p-1 text-xs leading-2',
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
