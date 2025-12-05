import { getImageUrls } from '@/Utils/utils';
import { Fade } from 'react-awesome-reveal';
import { ImageTypes } from '@/enums/enums';
import Masonry from 'react-masonry-css';
import { useMemo } from 'react';

type ImageMasonaryProps = {
  className?: string;
  imageType: ImageTypes;
};

// Memoize breakpoint config to avoid recreating on every render
const breakpointColumnsObj = {
  default: 3,
  640: 1,
  768: 2,
  1024: 2,
  1280: 3,
};

export default function ImageMasonary({ className, imageType }: ImageMasonaryProps) {
  const images = useMemo(() => getImageUrls(imageType), [imageType]);

  // Generate alt text based on image type
  const getAltText = (index: number) => {
    const typeName = imageType.toLowerCase().replace('_', ' ');
    return `${typeName} illustration ${index + 1}`;
  };

  return (
    <section className="mx-3" aria-label={`${imageType.toLowerCase()} gallery`}>
      <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className={`flex w-auto ${className || ''} md:gap-5`} 
        columnClassName="!w-full"
      >
        {images.map((img, index) => (
          <Fade direction="up" cascade triggerOnce={true} key={img} className="mt-5 first:mt-0">
            <img 
              src={img} 
              alt={getAltText(index)}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </Fade>
        ))}
      </Masonry>
    </section>
  );
}
