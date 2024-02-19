import Container from '@/Components/UI/container';
import Navbar from '@/Components/Navbar';
import ImageMasonary from '@/Components/UI/Masonary';
import { Fade } from 'react-awesome-reveal';
import Main from '@/Components/Main';
import heroImage from '../assets/All/all-4.webp';

function Home() {
  return (
    <>
      <div className="md:h-screen h-dvh bg-no-repeat bg-start bg-cover bg-blend-overlay bg-black/40" style={{ backgroundImage: `url(${heroImage})` }}>
        <Container>
          <Fade delay={500} triggerOnce={true}>
            <Navbar />
          </Fade>
          <Main />
        </Container>

        <ImageMasonary />
      </div>
    </>
  );
}

export default Home;
