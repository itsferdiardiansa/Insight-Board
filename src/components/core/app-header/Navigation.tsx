import { type ReactNode, useMemo } from 'react'
import Link from 'next/link'
import {
  FiAward,
  FiBriefcase,
  FiBook,
  FiServer,
  FiDollarSign,
} from 'react-icons/fi'

type NavigationMenuProps = {
  showIcon?: boolean
  onCloseDrawer?: () => void
}

type MenuItem = {
  link: string
  icon: ReactNode
  title: string
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  showIcon = false,
  onCloseDrawer = () => {},
}) => {
  const menuItems = useMemo<MenuItem[]>(
    () => [
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
    ],
    []
  )

  return (
    <div className="flex flex-1 shrink md:justify-center">
      <nav className="flex flex-col md:flex-row justify-stretch items-stretch font-semibold text-neutral-800">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            className="group py-2 md:px-6 flex items-center gap-2 duration-300 cursor-pointer"
            href={item.link}
            onClick={() => onCloseDrawer()}
          >
            {showIcon && (
              <span className="w-5 h-5 flex items-center justify-center">
                {item.icon}
              </span>
            )}

            {/* Slot Machine Text Animation */}
            <span className="relative overflow-hidden h-[1.4em]">
              <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-[50%]">
                <span className="block">{item.title}</span>
                <span className="block">{item.title}</span>
              </span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
