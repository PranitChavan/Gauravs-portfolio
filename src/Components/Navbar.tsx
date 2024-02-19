import MobileDrawer from './Drawer';
import NavItems from './UI/nav-items';
import Container from './UI/container';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <Container>
        <Fade delay={500} triggerOnce>
          <nav className="flex pt-10 gap-5 items-center">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight flex-1 lg:text-3xl">
              <Link to="/">gaurav dal</Link>
            </h2>
            <NavItems />
            <span className="md:hidden block">
              <MobileDrawer />
            </span>
          </nav>
        </Fade>
      </Container>
    </>
  );
}
