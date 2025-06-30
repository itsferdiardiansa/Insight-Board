import Link from 'next/link'

type NavLink = {
  text: string
  href: string
}

type FooterNavColumnProps = {
  title: string
  links: NavLink[]
}

export const FooterNavColumn: React.FC<FooterNavColumnProps> = ({
  title,
  links,
}) => {
  return (
    <nav className="my-auto">
      <h3 className="text-lg font-semibold text-slate-800 xl:text-right">
        {title}
      </h3>
      <ul className="flex flex-col xl:items-end mt-3 text-base rounded-none text-slate-500">
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
