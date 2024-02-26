import { getImageUrls } from '@/Utils/utils';
import { Fade } from 'react-awesome-reveal';
import { ImageTypes } from '@/enums/enums';
import Masonry from 'react-masonry-css';

type ImageMasonaryProps = {
  className?: string;
  imageType: ImageTypes;
  lowImageQuantity?: boolean;
};

export default function ImageMasonary(props: ImageMasonaryProps) {
  const breakpointColumnsObj = {
    default: 3,
    640: 1,
    768: 2,
    1024: 2,
    1280: 3,
  };

  return (
    <>
      <section className="mx-3">
        <Masonry breakpointCols={breakpointColumnsObj} className={`flex w-auto ${props.className} md:gap-5`} columnClassName="!w-full">
          {getImageUrls(props.imageType).map((img, index) => {
            return (
              <Fade direction="up" cascade triggerOnce={true} key={index} className="mt-5 first:mt-0">
                <img srcSet={`${img}?w=162&auto=format&dpr=2 2x`} src={`${img}?w=162&auto=format`} loading="lazy" />;
              </Fade>
            );
          })}
        </Masonry>
      </section>
    </>
  );
}
