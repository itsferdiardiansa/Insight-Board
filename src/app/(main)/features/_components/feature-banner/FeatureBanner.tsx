import { Banner } from '@/components/layout/banner'
import PlatformFeaturesIllustration from '@/assets/illustrations/platform-features.png'
import { GiCardboardBoxClosed } from 'react-icons/gi'

export const FeatureBanner: React.FC = () => {
  return (
    <Banner
      className="pb-0!"
      header={{
        title: 'Unleash insights without boundaries',
        subtitle: 'Collaborate in real time and access your data anywhere.',
        textAlign: 'center',
        titleClassName: 'font-black! text-4xl sm:text-8xl!',
        subTitleClassName: 'md:text-3xl!',
        badgeLabel: 'Features',
        badgeIcon: <GiCardboardBoxClosed />,
      }}
      image={{
        imageSrc: PlatformFeaturesIllustration,
        metaDescription: 'Dashboard Feature',
      }}
    />
  )
}
