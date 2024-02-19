import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './navigation-menu';
import { Link } from 'react-router-dom';

export default function NavItems() {
  return (
    <>
      <NavigationMenu className="md:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>ILLUSTRATION</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4">
                <Link to="/portraits">
                  <li className="leading-7 inline font-semibold cursor-pointer hover:border-b border-white">PORTRAITS</li>
                </Link>
                <Link to="/backgrounds">
                  <li className="leading-7 font-semibold cursor-pointer hover:border-b border-white">BACKGROUNDS</li>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer`}>ABOUT</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
