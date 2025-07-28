import CitibanamexLogo from '@/assets/logo/partners/citibanamex.svg'
import AmazonLogo from '@/assets/logo/partners/amazon.svg'
import SpotifyLogo from '@/assets/logo/partners/spotify.svg'
import TNTSportsLogo from '@/assets/logo/partners/tnt-sports.svg'
import VodafoneLogo from '@/assets/logo/partners/vodafone.svg'
import ToyotaLogo from '@/assets/logo/partners/toyota.svg'
import FramerLogo from '@/assets/logo/partners/framer.svg'
import BehanceLogo from '@/assets/logo/partners/behance.svg'
import PaypalLogo from '@/assets/logo/partners/paypal.svg'
import ZapierLogo from '@/assets/logo/partners/zapier.svg'
import DigitalOceanLogo from '@/assets/logo/partners/digital-ocean.svg'
import RedditLogo from '@/assets/logo/partners/reddit.svg'

const partners = [
  { name: 'Amazon', logo: AmazonLogo },
  {
    name: 'Citibanamex',
    logo: CitibanamexLogo,
  },
  {
    name: 'Spotify',
    logo: SpotifyLogo,
  },
  {
    name: 'TNT Sports',
    logo: TNTSportsLogo,
  },
  {
    name: 'Vodafone',
    logo: VodafoneLogo,
  },
  { name: 'Toyota', logo: ToyotaLogo },
  { name: 'Framer', logo: FramerLogo },
  { name: 'Behance', logo: BehanceLogo },
  { name: 'Reddit', logo: RedditLogo },
  { name: 'Paypal', logo: PaypalLogo },
  { name: 'Zapier', logo: ZapierLogo },
  {
    name: 'DigitalOcean',
    logo: DigitalOceanLogo,
  },
]

export const firstGroup = partners.slice(0, 6)
export const secondGroup = partners.slice(6)
