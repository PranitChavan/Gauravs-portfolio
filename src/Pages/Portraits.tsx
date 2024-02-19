import ImageMasonary from '@/Components/UI/Masonary';
import Container from '@/Components/UI/container';
import { ImageTypes } from '@/enums/enums';

export default function Portraits() {
  return (
    <>
      <div className="lg:container">
        <ImageMasonary className="mt-14 lg:mt-28" imageType={ImageTypes.PORTRAITS} />
      </div>
    </>
  );
}
