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
      <h3 className="text-body-md font-bold uppercase xl:text-right">
        {title}
      </h3>
      <ul className="flex flex-col xl:items-end mt-space-sm text-body-md rounded-none">
        {links.map((link, index) => (
          <li key={index} className={`${index > 0 ? 'mt-space-sm' : ''}`}>
            <Link
              href={link.href}
              className="text-inverse/80 hover:text-subtlest transition-colors"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
