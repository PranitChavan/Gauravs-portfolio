import { getImageUrls } from '@/Utils/utils';
import { Fade } from 'react-awesome-reveal';
import { ImageTypes } from '@/enums/enums';

type ImageMasonaryProps = {
  className?: string;
  imageType: ImageTypes;
};

export default function ImageMasonary(props: ImageMasonaryProps) {
  return (
    <>
      <section className="mx-3">
        <div className={`columns-2 gap-2 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 ${props.className}`}>
          {getImageUrls(props.imageType).map((img, index) => {
            return (
              <Fade direction="up" cascade triggerOnce={true} key={index}>
                <img srcSet={`${img}?w=162&auto=format&dpr=2 2x`} src={`${img}?w=162&auto=format`} className="mb-2" loading="lazy" />;
              </Fade>
            );
          })}
        </div>
      </section>
    </>
  );
}
