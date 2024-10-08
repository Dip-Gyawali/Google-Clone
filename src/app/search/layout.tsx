import SearchHeader from "@/components/SearchHeader";
import '../globals.css'

export default function SearchLayout({children}:{children: React.ReactNode}){
    return (
        <>
        <SearchHeader/>
        {children}
        </>
    )
}