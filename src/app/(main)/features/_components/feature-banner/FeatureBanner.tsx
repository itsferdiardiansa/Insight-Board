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
        className: 'pt-0!',
        titleClassName: 'text-display',
        subTitleClassName: 'text-heading-2xl text-subtle',
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
