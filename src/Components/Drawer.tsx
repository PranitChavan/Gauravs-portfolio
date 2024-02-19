import CustomAccordion from './Accordion';
import { Drawer, DrawerContent, DrawerTrigger } from './UI/drawer';

export default function MobileDrawer() {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col items-center p-2">
            <CustomAccordion />
            <div className="my-2 font-medium text-1xl">ABOUT</div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
