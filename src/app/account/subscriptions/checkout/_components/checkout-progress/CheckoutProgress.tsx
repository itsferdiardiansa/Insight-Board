import { useCheckout } from '@/context/checkout/CheckoutContext'
import { Fragment } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { cn } from '@/utils/tailwind'

export const CheckoutProgress: React.FC = () => {
  const { step } = useCheckout()

  const handleStepClick = (index: number) => {
    if (index <= step.current) {
      console.log('INDEX: ', index)
      step.set(index)
    }
  }

  return (
    <div className="flex items-center gap-(--space-sm)">
      {step.list.map((item, index) => {
        const isActive = index === step.current
        const isCompleted = index < step.current
        const isFuture = index > step.current

        const stepClass = cn(
          'text-lg transition-colors',
          isActive && 'text-black font-bold',
          isCompleted &&
            'text-black font-bold hover:underline hover:text-(--primary) cursor-pointer',
          isFuture && 'text-neutral-400 cursor-default'
        )

        return (
          <Fragment key={index}>
            <div
              className="flex items-center"
              onClick={() => handleStepClick(index)}
            >
              <p className={stepClass}>
                <span>{index + 1}. </span>
                <span>{item.label}</span>
              </p>
            </div>

            {index !== step.list.length - 1 && (
              <BiChevronRight className="text-2xl text-neutral-400" />
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
