import { useCheckout } from '@/context/checkout/CheckoutContext'
import { PlanOptions } from '@/features/checkout/components/plan-options'

export const PlanSelection: React.FC = () => {
  const {
    plan: { id, setId },
  } = useCheckout()

  return (
    <div className="m-auto flex flex-col gap-(--space-xl)">
      <PlanOptions selectedId={id} onPlanChange={(id: number) => setId(id)} />
    </div>
  )
}
