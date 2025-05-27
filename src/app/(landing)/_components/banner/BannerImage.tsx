import Image from 'next/image'
import MacbookFrame from '@/assets/macbook-frame.png'
import DashboardCapture from '@/assets/dahsboard-capture.png'

export const BannerImage: React.FC = () => {
  return (
    <div className="relative">
      <Image
        className="object-contain self-stretch w-full aspect-[2.38] max-md:max-w-full"
        src={MacbookFrame}
        alt="Macbook Frame"
      />

      <Image
        className="absolute top-0 z-[-1] object-contain self-stretch w-full aspect-[2.38] max-lg:max-w-full"
        src={DashboardCapture}
        alt="Insight Board Dashboard"
      />
    </div>
  )
}
