import ImageMasonary from '@/Components/UI/Masonary';
import { ImageTypes } from '@/enums/enums';
import { useEffect } from 'react';

export default function Portraits() {
  useEffect(() => {
    document.title = 'Portraits';
  }, []);

  return (
    <>
      <div className="lg:container">
        <ImageMasonary className="mt-14 lg:mt-28" imageType={ImageTypes.PORTRAITS} />
      </div>
    </>
  );
}
