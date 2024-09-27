import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { Button } from "@/components/ui/button";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[100vh] bg-gray-900">
      <HomeHeader />
      {/* Home Section */}
      <div className="flex items-center flex-col gap-5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          alt="google logo"
          width={300}
          height={300}
        />
        <div className="flex items-center gap-3 w-[50%] border-[1px] border-white rounded-full py-2 px-5">
          <FaSearch className="text-xl text-white" />
          <Input
            type="text"
            placeholder="Google Search"
            className="border-none outline-none bg-gray-900 text-white focus:outline-none focus:ring-0 focus:border-none"
          />
          <FaMicrophone className="text-xl text-white" />
          <SiGooglelens className="text-xl text-white" />
        </div>
        <div className="flex gap-2">
          <Button variant="mystyle">Google Search</Button>
          <Button variant="mystyle">I'm Feeling Lucky</Button>
        </div>
      </div>
      <div>
        <HomeFooter />
      </div>
    </div>
  );
}
