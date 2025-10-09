type StatisticCardProps = {
  title: string
  subtitle: string
  value: string
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  subtitle,
  value,
}) => {
  return (
    <article className="w-full max-md:max-w-full flex gap-space-md justify-between items-center p-space-sm bg-primary rounded-lg">
      <div className="flex flex-col rounded-none w-[180px]">
        <h2 className="text-heading-xl whitespace-nowrap">{title}</h2>
        <p className="self-start text-body-md text-subtle">{subtitle}</p>
      </div>
      <p className="text-heading-2xl font-black! text-accent-violet">{value}</p>
    </article>
  )
}
