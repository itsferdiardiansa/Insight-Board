import { Card } from '@/components/ui/card'

export default {
  title: 'Design Tokens/Typography',
  parameters: {
    options: {
      bottomPanelHeight: 0,
    },
  },
}

const textClasses: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
}

export const TextScale = () => (
  <div className="min-w-4xl max-w-7xl">
    <div className="space-y-(--space-md)">
      <div className="space-y-(--space-md)">
        <h1 className="text-5xl font-bold">Typography</h1>

        <div className="space-y-(--space-xs) text-lg">
          <p>
            <span className="font-semibold">Typeface: </span>
            <span>Nunito Sans</span>
          </p>

          <p>
            <span className="font-semibold">Weights: </span>
            <span>400 (regular), 700 (semibold), 800(bold)</span>
          </p>
        </div>
      </div>
      <Card className="bg-gradient-to-bl from-pink-200 via-purple-100 to-pink-50 shadow-md">
        <Card.Content>
          <div className="space-y-4">
            {Object.keys(textClasses).map(size => (
              <div
                key={size}
                className="grid grid-cols-[100px_1fr] items-center"
              >
                <p className="text-lg font-semibold">Text {size}</p>
                <p
                  className={textClasses[size]}
                  style={{
                    lineHeight: `var(--text-${size}-line-height)`,
                  }}
                >
                  Lorem ipsum dolor sit...
                </p>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  </div>
)
