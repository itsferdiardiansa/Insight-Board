import type { SubscriptionPlan } from '@/constants/subscription-plans'

export const getPlanDifferences = (
  previous: SubscriptionPlan,
  current: SubscriptionPlan
): string[] => {
  const differences: string[] = []

  current.features.forEach(currentGroup => {
    const prevGroup = previous.features.find(
      g => g.group === currentGroup.group
    )

    currentGroup.items.forEach(item => {
      const prevItem = prevGroup?.items.find(i => i.name === item.name)

      if (!prevItem || prevItem.value !== item.value) {
        if (item.value === false) return
        const formatted =
          typeof item.value === 'boolean' ? item.name : item.value
        differences.push(formatted)
      }
    })
  })

  return differences
}

export const getFeatureValue = (
  plan: SubscriptionPlan,
  group: string,
  item: string
) => {
  const foundGroup = plan.features.find(f => f.group === group)
  return foundGroup?.items.find(i => i.name === item)?.value ?? false
}
