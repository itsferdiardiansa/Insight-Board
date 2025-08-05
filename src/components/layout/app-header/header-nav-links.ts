import { ElementType } from 'react'
import { AiOutlineProduct } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import { MdDashboard } from 'react-icons/md'
import { RiUserCommunityFill } from 'react-icons/ri'
import { SiTask, SiWondersharefilmora } from 'react-icons/si'
import { PlatformHighlight } from './highlights/PlatformHighlight'
import { ResourcesHighlight } from './highlights/ResourcesHighglight'

export type SubMenuItem = {
  title?: string
  icon?: IconType
  items?: {
    title: string
    subtitle?: string
    link: string
  }[]
}

export type MenuItem = {
  title: string
  contentHighlight?: ElementType
  link?: string
  items?: SubMenuItem[]
}
export type MenuItems = MenuItems[]

export const menuItems: MenuItem[] = [
  {
    title: 'Platform',
    contentHighlight: PlatformHighlight,
    items: [
      {
        title: 'Product',
        icon: AiOutlineProduct,
        items: [
          {
            title: 'Insight Dashboard',
            subtitle: 'Centralize metrics in one view',
            link: '/features',
          },
          {
            title: 'Data Pipelines',
            subtitle: 'Automate data flow at scale',
            link: '/data-pipelines',
          },
          {
            title: 'User Playback',
            subtitle: 'Replay customer interactions',
            link: '/user-playback',
          },
          {
            title: 'App Integrations',
            subtitle: 'Unify your tech stack',
            link: '/app-integrations',
          },
        ],
      },
      {
        title: 'Use Cases',
        icon: SiTask,
        items: [
          {
            title: 'Marketing Insights',
            subtitle: 'Track campaigns & user intent',
            link: '/use-cases/marketing',
          },
          {
            title: 'Product Teams',
            subtitle: 'Ship features based on real usage',
            link: '/use-cases/product',
          },
          {
            title: 'Customer Success',
            subtitle: 'Understand & support users',
            link: '/use-cases/customer-success',
          },
          {
            title: 'Revenue Teams',
            subtitle: 'Drive retention and upsells',
            link: '/use-cases/revenue',
          },
          {
            title: 'Founders & Execs',
            subtitle: 'Make data-informed decisions',
            link: '/use-cases/executives',
          },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    contentHighlight: ResourcesHighlight,
    items: [
      {
        title: 'Dashboard',
        icon: MdDashboard,
        items: [
          {
            title: 'Docs & Guide',
            subtitle: 'Getting started',
            link: '/docs-guide',
          },
          {
            title: 'Contact Support',
            subtitle: 'Access Personal Help',
            link: '/contact-support',
          },
          {
            title: "What's new",
            subtitle: 'See the latest product update',
            link: '/news',
          },
        ],
      },
      {
        title: 'Community',
        icon: RiUserCommunityFill,
        items: [
          {
            title: 'Blogs',
            subtitle: 'Explore products',
            link: '/article',
          },
          {
            title: 'Event & Webinars',
            subtitle: 'Join us virtually and in person',
            link: '/events',
          },
          {
            title: 'Community',
            subtitle: 'Ask questions and learn',
            link: '/community',
          },
          {
            title: 'Partner Stories',
            subtitle: 'Impact in action',
            link: '/partners',
          },
        ],
      },
      {
        title: 'Partnerships',
        icon: SiWondersharefilmora,
        items: [
          {
            title: 'Become a partner',
            subtitle: 'Partner and grow with us',
            link: '/become-partner',
          },
          {
            title: 'Hire an expert',
            subtitle: 'Get advanced solution support',
            link: '/hire-expert',
          },
        ],
      },
    ],
  },
  {
    link: '/pricing',
    title: 'Pricing',
  },
  {
    link: '/contact',
    title: 'Contact',
  },
]
