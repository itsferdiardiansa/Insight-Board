import Image from 'next/image'
import DashboardCapture from '@/assets/images/dashboard-capture.png'

export const BannerImage: React.FC = () => {
  return (
    <div className="relative">
      <Image
        className="object-contain self-stretch w-full max-md:max-w-full"
        src={DashboardCapture}
        alt="InsightBoard Dashboard"
      />
    </div>
  )
}
