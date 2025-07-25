export type MaskToken = '9' | 'A' | '*' | string
export type MaskPattern = string

const isDigit = (c: string) => /\d/.test(c)
const isLetter = (c: string) => /[A-Za-z]/.test(c)
const isAlnum = (c: string) => /[A-Za-z0-9]/.test(c)

export interface ApplyMaskOptions {
  mask: MaskPattern
  value: string
  placeholderChar?: string
}

export const isToken = (m: string) => m === '9' || m === 'A' || m === '*'

function matchesToken(token: string, ch: string): boolean {
  switch (token) {
    case '9':
      return isDigit(ch)
    case 'A':
      return isLetter(ch)
    case '*':
      return isAlnum(ch)
    default:
      return false
  }
}

export function maskTokenCapacity(mask: MaskPattern): number {
  let count = 0
  for (const ch of mask) {
    if (isToken(ch)) count++
  }
  return count
}

export function extractRawForMask(mask: MaskPattern, input: string): string {
  const out: string[] = []
  let tokenIdx = 0

  const tokens = [...mask].filter(ch => isToken(ch))

  for (const ch of input) {
    if (tokenIdx >= tokens.length) break
    const t = tokens[tokenIdx]
    if (matchesToken(t, ch)) {
      out.push(ch)
      tokenIdx++
    }
  }

  return out.join('')
}

export function extractRawChars(input: string): string {
  return input.replace(/[^0-9A-Za-z]/g, '')
}

export function formatWithMask(mask: MaskPattern, raw: string): string {
  if (!mask) return raw
  const chars = raw.split('')
  let ci = 0
  let out = ''

  for (let mi = 0; mi < mask.length; mi++) {
    const m = mask[mi]

    if (isToken(m)) {
      const next = chars[ci]
      if (!next) break
      if (matchesToken(m, next)) {
        out += next
        ci++
      } else {
        ci++
        mi--
      }
    } else {
      if ((mi === 0 && chars.length > 0) || ci > 0) {
        out += m
      }
    }
  }

  return out
}

export function buildMaskIndexMap(mask: MaskPattern, masked: string) {
  const rawToMasked: number[] = []
  const maskedToRaw: number[] = []
  let rawIdx = 0

  for (let i = 0; i < masked.length; i++) {
    const m = mask[i]
    if (isToken(m ?? '')) {
      rawToMasked[rawIdx] = i
      maskedToRaw[i] = rawIdx
      rawIdx++
    } else {
      maskedToRaw[i] = -1
    }
  }

  return { rawToMasked, maskedToRaw }
}

function matchToken(token: MaskToken, ch: string) {
  switch (token) {
    case '9':
      return isDigit(ch)
    case 'A':
      return isLetter(ch)
    case '*':
      return isAlnum(ch)
    default:
      return ch === token
  }
}

export function stripToMaskChars(mask: MaskPattern, raw: string): string {
  const allowed: string[] = []
  for (const ch of raw) {
    if (/\d/.test(ch) || /[A-Za-z]/.test(ch)) allowed.push(ch)
  }
  return allowed.join('')
}

export function applyMask({
  mask,
  value,
  placeholderChar = '',
}: ApplyMaskOptions): string {
  const chars = value.split('')
  let out = ''
  let ci = 0

  for (let mi = 0; mi < mask.length; mi++) {
    const m = mask[mi] as MaskToken
    if (m === '9' || m === 'A' || m === '*') {
      const next = chars[ci]
      if (next && matchToken(m, next)) {
        out += next
        ci++
      } else {
        if (placeholderChar) out += placeholderChar
      }
    } else {
      out += m
    }
  }
  return out
}

export function unmaskToRaw(mask: MaskPattern, masked: string): string {
  const raw: string[] = []
  for (let i = 0; i < mask.length && i < masked.length; i++) {
    const m = mask[i]
    const ch = masked[i]
    switch (m) {
      case '9':
        if (isDigit(ch)) raw.push(ch)
        break
      case 'A':
        if (isLetter(ch)) raw.push(ch)
        break
      case '*':
        if (isAlnum(ch)) raw.push(ch)
        break
      default:
        break
    }
  }
  return raw.join('')
}

export function unmask(masked: string): string {
  return extractRawChars(masked)
}
