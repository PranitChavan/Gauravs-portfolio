import { getImageUrls } from '@/Utils/utils';

export default function ImageMasonary() {
  return (
    <>
      <section className="mx-3">
        <div className="columns-2 gap-2 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          {getImageUrls().map((img, index) => {
            return <img key={index} srcSet={`${img}?w=162&auto=format&dpr=2 2x`} src={`${img}?w=162&auto=format`} loading="lazy" />;
          })}
        </div>
      </section>
    </>
  );
}
