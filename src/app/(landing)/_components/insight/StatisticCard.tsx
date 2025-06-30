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
    <article className="flex gap-10 justify-between items-start p-4 w-full bg-violet-50 rounded-lg max-md:max-w-full">
      <div className="flex flex-col rounded-none w-[180px]">
        <h2 className="text-xl font-semibold text-neutral-800">{title}</h2>
        <p className="self-start mt-2 text-base text-neutral-500">{subtitle}</p>
      </div>
      <p className="text-3xl font-bold text-purple-800">{value}</p>
    </article>
  )
}
