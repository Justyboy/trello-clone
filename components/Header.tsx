"use client";

import Image from 'next/image'
import React from 'react'
import logo from '@/public/trello-logo.png'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Avatar from 'react-avatar'


function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl ">
    <Image
    src={logo}
    alt="Trello Logo"
    width={300}
    height={100}
    className="w-44 md:w-56 pb-10 md:pb-0 object-contain" 
    
    />
  <div className="flex items-center space-x-5 flex-1 justify-end w-full"> 
    {/* Search Box   */}
   <form className="flex flex-1 md:flex-initial items-center space-x-5 bg-white rounded-md p-2 shadow-md">
    <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400"/>
    <input type="text" placeholder="Search" className="outline-none p-2 flex-1"/>
      <button hidden>Search</button>

   </form>
    {/* Avatar   */}
    <Avatar name="Justin Lovett" round color="#0055D1" size="50" />
    </div>
    </div>
 
    <div className="flex items-center justify-center py-2 px-5 md:py-5">
      <p className="flex items-center text-sm pr-5 p-5 font-light shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
        <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
        GPT is gathering your tasks for the day...
      </p>
    </div>
    </header>
  )
}

export default Header