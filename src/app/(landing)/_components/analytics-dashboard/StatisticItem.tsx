import * as React from 'react'

interface StatisticItemProps {
  value: string
  label: string
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  label,
}) => {
  return (
    <article className="flex gap-3 items-center">
      <strong className="self-stretch my-auto text-3xl font-semibold leading-none min-w-[70px] text-neutral-800">
        {value}
      </strong>
      <p className="self-stretch my-auto text-base leading-6 text-neutral-500">
        {label}
      </p>
    </article>
  )
}
