import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './navigation-menu';

export default function NavItems() {
  return (
    <>
      <NavigationMenu className="md:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>ILLUSTRATION</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-5">
                <a>
                  <li className="leading-7 font-semibold cursor-pointer pb-2 ">BACKGROUNDS</li>
                </a>
                <a>
                  <li className="leading-7 font-semibold cursor-pointer">PORTRAITS</li>
                </a>
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
