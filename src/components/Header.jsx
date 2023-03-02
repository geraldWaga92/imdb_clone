import React from 'react'
import MenuItems from './MenuItems'
import { AiFillHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'



export default function Header() {
  return (
    <div className=' py-6 max-w-6xl flex justify-between mx-2 sm:mx-auto items-center'>
        <div className="menu flex">
            <MenuItems title="HOME" address="/" Icon={AiFillHome} />
            <MenuItems title="ABOUT" address="/about" Icon={BsInfoCircleFill} />
        </div>
    
        <div className="flex items-center space-x-5">
            <DarkModeSwitch />
            <Link href="/">
                <h2 className='text-2xl'>
                    <span className='mr-1 font-bold bg-amber-500 py-1 px-2 rounded-lg'> IMDb </span>
                    <span className='text-xl hidden sm:inline'> Clone </span>
                </h2>
            </Link>
        </div>  

    </div>
  )
}
