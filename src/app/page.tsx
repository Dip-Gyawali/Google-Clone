import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] bg-gray-900">
      <HomeHeader />
      {/* Home Section */}
        <HomeSearch />
    </div>
  );
}
