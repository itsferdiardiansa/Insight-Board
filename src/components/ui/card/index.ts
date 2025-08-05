import { CardComponent, CardContentSlot, CardThumbnailSlot } from './Card'
import type { CardProps } from './Card'

export const Card = CardComponent as React.ForwardRefExoticComponent<
  CardProps & React.RefAttributes<HTMLDivElement>
> & {
  Thumbnail: typeof CardThumbnailSlot
  Content: typeof CardContentSlot
}

Card.Thumbnail = CardThumbnailSlot
Card.Content = CardContentSlot
