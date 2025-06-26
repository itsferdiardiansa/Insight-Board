import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const getLayerFill = (index: number) => {
  const opacities = ['0.08', '0.06', '0.04']
  return `rgba(255,255,255,${opacities[index]})`
}

export const FabricLayer = () => {
  const pathRefs = useRef<SVGPathElement[]>([])

  useEffect(() => {
    pathRefs.current.forEach((path, index) => {
      const alternate = generateAltPath(index)

      gsap.to(path, {
        duration: 6 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        attr: { d: alternate },
        delay: index * 0.5,
      })
    })
  }, [])

  const generateAltPath = (i: number) => {
    switch (i) {
      case 0:
        return `M0,120 C200,30 300,190 500,80 L500,0 L0,0 Z`
      case 1:
        return `M0,100 C180,220 320,20 500,110 L500,0 L0,0 Z`
      case 2:
        return `M0,90 C160,40 340,160 500,90 L500,0 L0,0 Z`
      default:
        return `M0,100 C250,0 250,200 500,100 L500,0 L0,0 Z`
    }
  }

  return (
    <div className="fabric-illustrations">
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 500 200"
        preserveAspectRatio="none"
      >
        {[0, 1, 2].map((_, i) => (
          <path
            key={i}
            ref={el => {
              if (el) pathRefs.current[i] = el
            }}
            d="M0,100 C250,0 250,200 500,100 L500,0 L0,0 Z"
            fill={getLayerFill(i)}
            className="fabric-path"
          />
        ))}
      </svg>
    </div>
  )
}
