// import type * as React from 'react'

declare global {
  namespace React {
    type CustomComponent<
      /* eslint-disable @typescript-eslint/no-empty-object-type */
      TProps = {},
      TSubComponents extends Record<string, React.ElementType> = {},
    > = React.ForwardRefExoticComponent<
      TProps & React.RefAttributes<HTMLDivElement>
    > &
      TSubComponents
  }
}

export {}
