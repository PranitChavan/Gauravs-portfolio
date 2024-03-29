import ImageMasonary from '@/Components/Masonary';
import { ImageTypes } from '@/enums/enums';
import { useEffect } from 'react';

export default function Backgrounds() {
  useEffect(() => {
    document.title = 'Backgrounds';
  }, []);

  return (
    <>
      <div className="lg:container">
        <ImageMasonary className="mt-14 lg:mt-28 justify-center" imageType={ImageTypes.BACKGROUNDS} lowImageQuantity={true} />
      </div>
    </>
  );
}
