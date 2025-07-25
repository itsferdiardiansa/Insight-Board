'use client'

import { forwardRef, useId, useMemo, useState } from 'react'
import type { ChangeEvent, KeyboardEvent, InputHTMLAttributes } from 'react'
import { cn } from '@/utils/tailwind'
import {
  formatWithMask,
  buildMaskIndexMap,
  maskTokenCapacity,
  MaskPattern,
  extractRawForMask,
} from './_utils/mask-format'
import { getMaskFromPreset, MaskPresetKey } from './_utils/mask-presets'
import { InputSize, sizeClasses } from '../_props/input-props'
import { FormInputWrapper } from '../FormInputWrapper'

export interface MaskedInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  mask?: MaskPattern
  maskPreset?: MaskPresetKey
  rawValue?: string
  onRawChange?: (raw: string) => void
  onBlur?: () => void
  fullWidth?: boolean
  inputSize?: InputSize
  hasError?: boolean
  floatLabel?: boolean
  maxRawLength?: number
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      id,
      label,
      mask: maskProp,
      maskPreset,
      // defaultValue,
      rawValue,
      onRawChange,
      onBlur,
      placeholder,
      fullWidth,
      inputSize = 'md',
      floatLabel = true,
      disabled,
      value,
      hasError = false,
      required,
      readOnly,
      maxRawLength,
      ...rest
    },
    ref
  ) => {
    const autoId = useId()
    const inputId = id ?? autoId

    const mask =
      maskProp ?? (maskPreset ? getMaskFromPreset(maskPreset) : undefined)

    const derivedMaxRaw = useMemo(
      () => (mask ? maskTokenCapacity(mask) : undefined),
      [mask]
    )
    const hardMaxRaw = maxRawLength ?? derivedMaxRaw

    const isControlled = rawValue !== undefined
    const [innerRaw, setInnerRaw] = useState<string>((value ?? '') as string)
    const effectiveRaw = isControlled ? rawValue! : innerRaw

    const maskedValue = mask ? formatWithMask(mask, effectiveRaw) : effectiveRaw

    const [focused, setFocused] = useState(false)
    const filled = effectiveRaw.length > 0

    const updateRaw = (nextRaw: string) => {
      if (!isControlled) setInnerRaw(nextRaw)
      onRawChange?.(nextRaw)
    }

    const handleBlur = () => {
      setFocused(false)
      if (onBlur) onBlur()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.target.value
      let raw = mask ? extractRawForMask(mask, inputVal) : inputVal

      if (hardMaxRaw !== undefined && raw.length > hardMaxRaw) {
        raw = raw.slice(0, hardMaxRaw)
      }

      updateRaw(raw)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!mask) return
      if (e.key !== 'Backspace' && e.key !== 'Delete') return

      const inputEl = e.currentTarget
      const { selectionStart, selectionEnd } = inputEl
      const caret = selectionStart ?? maskedValue.length
      const caretEnd = selectionEnd ?? caret

      if (caretEnd > caret) return

      const { maskedToRaw } = buildMaskIndexMap(mask, maskedValue)

      let targetRawIdx: number | undefined

      if (e.key === 'Backspace') {
        let i = caret - 1
        while (i >= 0) {
          const r = maskedToRaw[i]
          if (r >= 0) {
            targetRawIdx = r
            break
          }
          i--
        }
      } else {
        let i = caret
        while (i < maskedValue.length) {
          const r = maskedToRaw[i]
          if (r >= 0) {
            targetRawIdx = r
            break
          }
          i++
        }
      }

      if (targetRawIdx === undefined) return

      const before = effectiveRaw.slice(0, targetRawIdx)
      const after = effectiveRaw.slice(targetRawIdx + 1)
      const nextRaw = before + after

      e.preventDefault()
      updateRaw(nextRaw)

      requestAnimationFrame(() => {
        const newMasked = mask ? formatWithMask(mask, nextRaw) : nextRaw
        const { rawToMasked } = buildMaskIndexMap(mask!, newMasked)
        const pos = rawToMasked[targetRawIdx] ?? newMasked.length
        inputEl.setSelectionRange(pos, pos)
      })
    }

    const inputMaxLength = mask ? mask.length : hardMaxRaw

    return (
      <FormInputWrapper
        id={inputId}
        label={label}
        inputSize={inputSize}
        hasError={hasError}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        focused={focused}
        filled={filled}
        fullWidth={fullWidth}
      >
        <input
          id={inputId}
          ref={ref}
          value={maskedValue}
          disabled={disabled}
          maxLength={inputMaxLength}
          placeholder={
            floatLabel
              ? undefined
              : (placeholder ?? (typeof label === 'string' ? label : undefined))
          }
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          className={cn(
            'peer w-full placeholder-transparent focus:outline-none',
            sizeClasses[inputSize],
            disabled ? 'text-gray-400' : 'text-neutral-900'
          )}
          {...rest}
        />
      </FormInputWrapper>
    )
  }
)

MaskedInput.displayName = 'MaskedInput'
