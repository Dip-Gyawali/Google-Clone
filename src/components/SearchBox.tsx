"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
    const searchParam = useSearchParams();
    const router = useRouter()
    const searchTerm = searchParam.get('searchTerm');
    const [term,setTerm]= useState(searchTerm || '');

    function handleSubmit(e: { preventDefault: () => void; }){
       e.preventDefault();
       if(!term.trim()) return;
       router.push(`/search/web?searchTerm=${term}`)
    }

  return (
    <form className='flex items-center gap-3 border-[1px] border-white rounded-full py-2 px-5 w-[30%]' onSubmit={handleSubmit}>
      <Input value={term} onChange={(e)=> setTerm(e.target.value)} type='text' className="border-none outline-none bg-gray-900 text-white focus:outline-none focus:ring-0 focus:border-none"/>
      <RxCross1 className='text-xl text-white' onClick={()=> setTerm('')}/>
      <FaSearch className="text-xl text-white" onClick={handleSubmit} />
      <FaMicrophone className="text-xl text-white" />
    </form>
  )
}
