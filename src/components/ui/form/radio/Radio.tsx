'use client'

import React from 'react'
import { useRadioGroup } from './RadioGroup'
import { cn } from '@/utils/tailwind'

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string | React.ReactNode
}

export const Radio: React.FC<RadioProps> = ({ label, value, ...props }) => {
  const group = useRadioGroup()
  const id = props.id || value?.toString()

  const checked = group.value === value

  const handleChange = () => {
    group.onChange?.(value as string)
  }

  return (
    <div className="inline-flex items-center">
      <label htmlFor={id} className="relative flex items-center cursor-pointer">
        <input
          id={id}
          type="radio"
          value={value}
          checked={checked}
          name={group.name}
          onChange={handleChange}
          className={cn(
            'peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-(--primary) transition-all'
          )}
          {...props}
        />
        <span className="absolute bg-(--primary) w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </label>
      <label
        htmlFor={id}
        className="ml-2 text-slate-600 cursor-pointer font-bold"
      >
        {label}
      </label>
    </div>
  )
}
