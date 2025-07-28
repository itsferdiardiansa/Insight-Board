'use client'

import Link from 'next/link'
import { menuItems } from './header-nav-links'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/tailwind'

type NavigationMenuProps = {
  onCloseDrawer?: () => void
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  onCloseDrawer = () => {},
}) => {
  const path = usePathname()

  return (
    <nav className="flex flex-col lg:flex-row">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={cn(
            'w-full group py-2 lg:px-6 flex items-center gap-2 duration-300',
            path === item.link ? 'pointer-events-none' : 'cursor-pointer'
          )}
          href={item.link}
          onClick={() => onCloseDrawer()}
        >
          <span className="relative overflow-hidden lg:h-[1.5em]">
            <span
              className={cn(
                'block text-lg max-lg:text-xl text-(--secondary) hover:text-(--primary) transition-transform duration-300 ease-in-out group-hover:-translate-y-[50%]',
                path === item.link
                  ? 'text-(--primary) font-bold'
                  : 'font-semibold text-(--secondary) hover:text-(--primary)'
              )}
            >
              <span className="block">{item.title}</span>
              <span className="hidden lg:block">{item.title}</span>
            </span>
          </span>
        </Link>
      ))}
    </nav>
  )
}
