import ChristinaWocin from '@/assets/images/leaders/christina-wocin.jpg'
import SarahCorneli from '@/assets/images/leaders/sarah-corneli.jpg'
import JamesCarter from '@/assets/images/leaders/james-carter.jpg'
import ChristianBuehner from '@/assets/images/leaders/christian-buehner.jpg'
import DanielaMoore from '@/assets/images/leaders/daniela-moore.jpg'
import AnthonyWhite from '@/assets/images/leaders/anthony-white.jpg'
import VickyHladynets from '@/assets/images/leaders/vicky-hladynets.jpg'

const testimonials = [
  [
    {
      imageSrc: JamesCarter,
      name: 'James Carter',
      role: 'Senior DevOps Engineer at Amazon',
      isFeatured: false,
      testimonial:
        'InsightBoard cut our deployment times by 40%. The visual dashboards help us spot production issues before they escalate.',
    },
    {
      imageSrc: VickyHladynets,
      name: 'Vicky Hladynets',
      role: 'VP of Growth at Microsoft',
      logoKey: 'microsoft',
      isFeatured: true,
      bgColor: 'bg-blue-500',
      testimonial:
        "We've seen a 30% lift in user activation thanks to the predictive analytics from InsightBoard. It’s a must-have for any growth team.",
    },
  ],
  [
    {
      imageSrc: ChristinaWocin,
      name: 'Lena Whitman',
      role: 'Engineering Director at Notion',
      isFeatured: false,
      testimonial:
        'Our engineering team uses InsightBoard to monitor feature rollouts and performance. It saves us hours of manual tracking.',
    },
    {
      imageSrc: SarahCorneli,
      name: 'Sarah Corneli',
      role: 'Senior Project Manager at Atlassian',
      isFeatured: false,
      testimonial:
        "With InsightBoard, we've streamlined cross-functional collaboration. Projects are more transparent, and our timelines are tighter.",
    },
    {
      imageSrc: DanielaMoore,
      name: 'Daniela Moore',
      role: 'VP of Growth at Zapier',
      isFeatured: false,
      testimonial:
        "InsightBoard exposed bottlenecks in our funnel we didn't know existed. That clarity helped us increase MQLs by 45%.",
    },
  ],
  [
    {
      imageSrc: ChristianBuehner,
      name: 'Christian Buehner',
      role: 'Sr Software Engineer at Amazon',
      logoKey: 'amazon',
      bgColor: 'bg-gray-800',
      isFeatured: true,
      testimonial:
        'Having real-time metrics on deployment and system health directly in our Slack has made debugging incredibly efficient.',
    },
    {
      imageSrc: AnthonyWhite,
      name: 'Anthony White',
      role: 'Operations Manager at Slack',
      isFeatured: false,
      testimonial:
        'InsightBoard helped us align our ops and finance teams. Everyone sees the same data, updated in real time, without extra meetings.',
    },
  ],
]

export default testimonials
