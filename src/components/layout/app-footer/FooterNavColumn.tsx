import Link from 'next/link'
import * as React from 'react'

interface NavLink {
  text: string
  href: string
}

interface FooterNavColumnProps {
  title: string
  links: NavLink[]
}

export const FooterNavColumn: React.FC<FooterNavColumnProps> = ({
  title,
  links,
}) => {
  return (
    <nav className="self-stretch my-auto">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <ul className="flex flex-col items-start mt-3 text-base rounded-none text-slate-500">
        {links.map((link, index) => (
          <li key={index} className={`${index > 0 ? 'mt-3' : ''}`}>
            <Link
              href={link.href}
              className="hover:text-slate-700 transition-colors"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
