import { Drawer, DrawerContent, DrawerTrigger } from './UI/drawer';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@/assets/Svgs';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from '@/assets/Svgs';

export default function MobileDrawer() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      setIsExpanded(true);
    }
  }, [pathname]);

  return (
    <>
      <Drawer>
        <DrawerTrigger className="md:hidden">
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4 border-b border-gray-600">
            <button 
              className="flex items-center justify-start gap-2 w-full text-xl" 
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="illustrations-menu"
            >
              <span className="font-bold">ILLUSTRATIONS</span>
              <ChevronDownIcon className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
          <div id="illustrations-menu" className={`flex flex-col ${!isExpanded && 'hidden'} transition`}>
            <Link to="/portraits">
              <span className={`px-4 py-2 hover:bg-gray-700 block text-xl ${pathname === '/portraits' && 'underline underline-offset-4'}`}>Portraits</span>
            </Link>

            <Link to="/backgrounds">
              <span className={`px-4 py-2 hover:bg-gray-700 block text-xl ${pathname === '/backgrounds' && 'underline underline-offset-4'}`}>Backgrounds</span>
            </Link>
          </div>

          <Link to="/about">
            <div className="p-4 border-t border-gray-600 hover:bg-gray-700">
              <span className={`font-bold text-xl ${pathname === '/about' && 'underline underline-offset-4'}`}>ABOUT</span>
            </div>
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
}
