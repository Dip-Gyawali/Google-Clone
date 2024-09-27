"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!input.trim) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function RandomWord(){
     const res = await fetch('https://random-word-api.herokuapp.com/word');
     if(!res.ok){
        console.log("error")
     }
     const data = await res.json();
     router.push(`/search/web?searchTerm=${data}`)
  }

  return (
    <div className="flex gap-5 items-center justify-center flex-col mt-[25vh]">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        alt="google logo"
        width={300}
        height={300}
      />

      <form
        className="flex items-center gap-3 border-[1px] border-white rounded-full py-2 px-5 w-[50%]"
        onSubmit={handleSubmit}
      >
        <FaSearch className="text-xl text-white" />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Google Search"
          className="border-none outline-none bg-gray-900 text-white focus:outline-none focus:ring-0 focus:border-none"
        />
        <FaMicrophone className="text-xl text-white" />
        <SiGooglelens className="text-xl text-white" />
      </form>
      <div className="flex gap-2 items-center justify-center">
        <Button variant="mystyle" onClick={handleSubmit}>
          Google Search
        </Button>
        <Button variant="mystyle" onClick={RandomWord}>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}
