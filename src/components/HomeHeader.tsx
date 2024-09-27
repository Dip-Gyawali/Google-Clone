import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";
import '../app/globals.css';
import Image from "next/image";
import ProfileImage from '../public/images/profilePic.jpg'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
  
  export default function HomeHeader() {
    return (
      <header className="bg-gray-900 p-5 shadow-md flex justify-end">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-5">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://mail.google.com"
                className="text-white text-xl hover:underline"
              >
                Gmail
              </NavigationMenuLink>
            </NavigationMenuItem>
  
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://images.google.com"
                className="text-white text-xl hover:underline"
              >
                Images
              </NavigationMenuLink>
            </NavigationMenuItem>

            <BsFillGrid3X3GapFill className="text-white text-xl cursor-pointer"/>
            <Image  src={ProfileImage} alt="profile pic" className="h-[40px] w-[40px] rounded-full"/>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    );
  }
  