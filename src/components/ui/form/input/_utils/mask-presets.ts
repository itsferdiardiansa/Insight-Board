export const maskPresets = {
  card16: '9999 9999 9999 9999',
  card19: '9999 9999 9999 9999 999',
  expiryMMYY: '99/99',
  cvc3: '999',
  cvc4: '9999',
  phoneUS: '(999) 999-9999',
  phoneIntlLite: '+99 999-999-999',
  npwp: '99.999.999.9-999.999',
} as const

export type MaskPresetKey = keyof typeof maskPresets

export const getMaskFromPreset = (k: MaskPresetKey) => maskPresets[k]
