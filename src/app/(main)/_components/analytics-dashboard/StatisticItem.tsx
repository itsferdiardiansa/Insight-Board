type StatisticItemProps = {
  value: string
  label: string
}

export const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  label,
}) => {
  return (
    <article className="flex gap-space-sm items-center text-body-md md:text-body-lg">
      <p className="min-w-[50px] self-stretch my-auto font-bold leading-none">
        {value}
      </p>
      <p className="self-stretch my-auto text-subtle">{label}</p>
    </article>
  )
}
