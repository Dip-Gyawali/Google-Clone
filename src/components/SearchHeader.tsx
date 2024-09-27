import Image from 'next/image'
import React from 'react'
import SearchBox from './SearchBox'
import ProfileImage from '../public/images/profilePic.jpg'
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function SearchHeader() {
  return (
    <div className='flex justify-between items-center p-3 bg-gray-900'>
      <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
      alt ='google logo'
      width={150}
      height={150}/>

      <SearchBox/>
      <div className='flex gap-3 items-center'>
      <BsFillGrid3X3GapFill className="text-white text-xl cursor-pointer"/>
      <Image  src={ProfileImage} alt="profile pic" className="h-[40px] w-[40px] rounded-full"/>
      </div>
    </div>
  )
}
