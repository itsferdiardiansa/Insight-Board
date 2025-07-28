import Image, { type StaticImageData } from 'next/image'

export type BannerImageProps = {
  imageSrc: StaticImageData
  metaDescription: string
}

export const BannerImage: React.FC<BannerImageProps> = ({
  imageSrc,
  metaDescription,
}) => {
  return (
    <Image
      className="relative -bottom-10 object-contain self-stretch scale-[1.1]"
      src={imageSrc}
      alt={metaDescription}
    />
  )
}
