import Image from 'next/image'
import DashboardCapture from '@/assets/dahsboard-capture.png'

export const BannerImage: React.FC = () => {
  return (
    <div className="relative">
      <Image
        className="object-contain self-stretch w-full scale-[1.2] max-md:max-w-full"
        src={DashboardCapture}
        alt="Insight Board Dashboard"
      />
    </div>
  )
}
