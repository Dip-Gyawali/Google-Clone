import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";

export default function HomeFooter() {
  return (
    <div className="bg-gray-950 text-white shadow-md flex flex-col gap-2 p-5">
        {/* coutnry name */}
      <div>
       <h1>Nepal</h1>
      </div>
      {/* links */}
      <div className="flex justify-between cursor-pointer">
        {/* left footer link */}
            <NavigationMenu >
                <NavigationMenuList className="flex items-center gap-4">

                    <NavigationMenuItem>
                        <NavigationMenuList className="text-white hover:underline">
                            About
                        </NavigationMenuList>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuList className="text-white hover:underline">
                            Advertising
                        </NavigationMenuList>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuList className="text-white hover:underline">
                            Business
                        </NavigationMenuList>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuList className="text-white hover:underline">
                            How Search works
                        </NavigationMenuList>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>

         {/* right footer link */}
            
            <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-4">

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-white hover:underline">
                            Privacy
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-white hover:underline">
                            Terms
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-white hover:underline">
                            Setting
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

      </div>

    </div>
  )
}
