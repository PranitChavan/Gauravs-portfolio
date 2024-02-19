import ImageMasonary from '@/Components/UI/Masonary';
import { ImageTypes } from '@/enums/enums';

export default function Backgrounds() {
  return (
    <>
      <div className="lg:container">
        <ImageMasonary className="mt-14 lg:mt-28" imageType={ImageTypes.BACKGROUNDS} lowImageQuantity={true} />
      </div>
    </>
  );
}
