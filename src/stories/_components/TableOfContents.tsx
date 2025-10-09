import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/tailwind'

export interface TOCItem {
  id: string
  label: string
  children?: TOCItem[]
}

interface TableOfContentsProps {
  items: TOCItem[]
  className?: string
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className,
}) => {
  const [activeId, setActiveId] = useState<string>('')
  const [indicatorY, setIndicatorY] = useState(0)
  const [indicatorHeight, setIndicatorHeight] = useState(0)
  const tocRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const flattenIds = (nodes: TOCItem[]): string[] =>
      nodes.flatMap(n => [n.id, ...(n.children ? flattenIds(n.children) : [])])

    const ids = flattenIds(items)
    const headings = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const TOP_OFFSET = 120

    let ticking = false
    const compute = () => {
      ticking = false
      if (!headings.length) return

      let current = headings[0].id
      for (const h of headings) {
        const top = h.getBoundingClientRect().top
        if (top - TOP_OFFSET <= 0) current = h.id
        else break
      }

      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = headings[headings.length - 1].id

      setActiveId(current)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(compute)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    compute()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  useEffect(() => {
    const nav = tocRef.current
    if (!nav) return

    const updateIndicator = () => {
      const activeLink = nav.querySelector<HTMLAnchorElement>(
        `a[href="#${activeId}"]`
      )
      if (!activeLink) return

      const linkRect = activeLink.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()

      setIndicatorY(linkRect.top - navRect.top)
      setIndicatorHeight(linkRect.height)
    }

    updateIndicator()
    nav.addEventListener('scroll', updateIndicator, { passive: true })
    window.addEventListener('resize', updateIndicator)

    return () => {
      nav.removeEventListener('scroll', updateIndicator)
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeId])

  const renderItems = (items: TOCItem[], level = 0) => (
    <ul
      className={cn(
        'list-none! space-y-gap-xs',
        level > 0 ? 'pl-space-sm!' : 'pl-0!'
      )}
    >
      {items.map(item => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            target="_self"
            className={cn(
              'text-default! block text-sm! py-space-xs',
              level === 0 && 'font-semibold',
              level > 0 && 'text-muted-foreground'
            )}
            onClick={e => {
              e.preventDefault()
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: 'smooth' })
              window.parent.location.hash = item.id
            }}
          >
            {item.label}
          </a>
          {item.children && renderItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  )

  return (
    <nav
      ref={tocRef}
      className={cn(
        'relative sticky top-20 right-20 w-[200px] max-h-[calc(100vh-5rem)] px-4 py-3 border-l border-default',
        className
      )}
    >
      <span
        className="absolute left-[-2px] w-[4px] bg-secondary-intense-pressed transition-all duration-200"
        style={{ top: indicatorY, height: indicatorHeight }}
      />
      <h2 className="text-sm! font-bold mb-space-md border-inverse!">
        Contents
      </h2>
      {renderItems(items)}
    </nav>
  )
}
