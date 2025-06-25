import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  FiAward,
  FiBriefcase,
  FiBook,
  FiServer,
  FiDollarSign,
} from 'react-icons/fi'

type NavigationMenuProps = {
  onCloseDrawer?: () => void
}

type MenuItem = {
  link: string
  icon: ReactNode
  title: string
}

const menuItems: MenuItem[] = [
  {
    link: '/features',
    icon: <FiAward />,
    title: 'Features',
  },
  {
    link: '/solutions',
    icon: <FiBriefcase />,
    title: 'Solutions',
  },
  {
    link: '/resources',
    icon: <FiBook />,
    title: 'Resources',
  },
  {
    link: '/enterprise',
    icon: <FiServer />,
    title: 'Enterprise',
  },
  {
    link: '/pricing',
    icon: <FiDollarSign />,
    title: 'Pricing',
  },
]

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  onCloseDrawer = () => {},
}) => {
  return (
    <nav className="flex flex-col lg:flex-row font-semibold text-neutral-800 max-lg:text-xl">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className="w-full group py-2 lg:px-6 flex items-center gap-2 duration-300 cursor-pointer"
          href={item.link}
          onClick={() => onCloseDrawer()}
        >
          <span className="relative overflow-hidden h-[1.4em]">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-[50%]">
              <span className="block">{item.title}</span>
              <span className="block">{item.title}</span>
            </span>
          </span>
        </Link>
      ))}
    </nav>
  )
}
