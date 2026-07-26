import Image from 'next/image';

interface AboutImageProps {
  alt: string;
  src: string;
}

export const AboutImage = ({
  alt,
  src,
}: AboutImageProps) => (
  <Image
    alt={alt}
    className="mt-5 aspect-[16/8] w-full rounded-2xl object-cover max-sm:aspect-[4/3]"
    height={640}
    sizes="(max-width: 1024px) 100vw, 1024px"
    src={src}
    width={1200}
  />
);
