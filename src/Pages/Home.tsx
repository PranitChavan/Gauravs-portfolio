import Container from '@/Components/UI/container';
import ImageMasonary from '@/Components/UI/Masonary';
import Main from '@/Components/Main';
import { ImageTypes } from '@/enums/enums';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = `gaurav dal`;
  }, []);

  return (
    <>
      <Container>
        <Main />
      </Container>
      <ImageMasonary imageType={ImageTypes.ALL} />
    </>
  );
}

export default Home;
