import Image from 'next/image'
import ClientDashboardIllustration from '@/assets/illustrations/client-dashboard.png'

export const HomeBannerImage: React.FC = () => {
  return (
    <Image
      className="w-full object-contain self-stretch scale-[1.1]"
      src={ClientDashboardIllustration}
      alt="InsightBoard Dashboard"
    />
  )
}
