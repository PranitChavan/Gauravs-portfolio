import MobileDrawer from './Drawer';
import NavItems from './UI/nav-items';

export default function Navbar() {
  return (
    <>
      <nav className="flex pt-10 gap-5 items-center">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight flex-1 md:text-4xl">gaurav dal</h2>
        <NavItems />
        <span className="md:hidden block">
          <MobileDrawer />
        </span>
      </nav>
    </>
  );
}
