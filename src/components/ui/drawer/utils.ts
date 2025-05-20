export const getPositionStyles = (
  position: 'left' | 'right' | 'bottom' | 'top',
  fullScreen: boolean
): React.CSSProperties => {
  const base = {
    width: ['left', 'right'].includes(position)
      ? fullScreen
        ? '100vw'
        : 'auto'
      : '100vw',
    height: ['top', 'bottom'].includes(position)
      ? fullScreen
        ? '100%'
        : 'auto'
      : '100%',
  }

  switch (position) {
    case 'left':
      return { ...base, top: 0, left: 0 }
    case 'right':
      return { ...base, top: 0, right: 0 }
    case 'top':
      return { ...base, top: 0, left: 0 }
    case 'bottom':
      return { ...base, bottom: 0, left: 0 }
  }
}

export const getTransformStyles = (
  position: 'left' | 'right' | 'bottom' | 'top',
  isVisible: boolean
): { transform: string } => {
  if (isVisible) return { transform: 'translate(0, 0)' }

  switch (position) {
    case 'left':
      return { transform: 'translateX(-100%)' }
    case 'right':
      return { transform: 'translateX(100%)' }
    case 'top':
      return { transform: 'translateY(-100%)' }
    case 'bottom':
      return { transform: 'translateY(100%)' }
  }
}
