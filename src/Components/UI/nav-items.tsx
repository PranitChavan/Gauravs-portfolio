import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './navigation-menu';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavItems() {
  const { pathname } = useLocation();
  const [menuValue, setMenuValue] = useState<string>('');

  // Close menu when route changes
  useEffect(() => {
    setMenuValue('');
  }, [pathname]);

  const handleLinkClick = () => {
    // Close the menu immediately when link is clicked
    setMenuValue('');
  };

  return (
    <>
      <NavigationMenu value={menuValue} onValueChange={setMenuValue} className="md:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem value="illustrations">
            <NavigationMenuTrigger className={`${pathname === '/backgrounds' || pathname === '/portraits' ? 'underline underline-offset-4' : ''}`}>
              ILLUSTRATION
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4">
                <Link to="/portraits" onClick={handleLinkClick}>
                  <li className={`leading-7 inline font-semibold cursor-pointer hover:border-b border-white`}>PORTRAITS</li>
                </Link>
                <Link to="/backgrounds" onClick={handleLinkClick}>
                  <li className={`leading-7 font-semibold cursor-pointer hover:border-b border-white`}>BACKGROUNDS</li>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={`${navigationMenuTriggerStyle()} cursor-pointer ${pathname === '/about' && 'underline underline-offset-4'}`} to="/about">
              ABOUT
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
