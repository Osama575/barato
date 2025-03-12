import React, { useState } from 'react'
import call from '/src/assets/call.svg'
import account from '/src/assets/account.svg'
import search from '/src/assets/search.svg'
import cart from '/src/assets/cart.svg'
import { FiSearch } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import logo from '../assets/barato-logo-white.svg';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className='w-screen font-poppins' >
       {/* first section bg-white*/}
      <div className='bg-[#F2F2F5] h-[45px] w-full flex justify-between items-center px-10 text-[13px]'>
        <div className='hidden lg:flex justify-center items-center gap-3 '>
          <img src={call} alt="" />
          <p>CALL US:</p>
          <p>123-456-7890</p>
        </div>
        <div className='flex justify-between items-center gap-8'>
          <p>USD</p>
          <p>LANGUAGE </p>
          <div className='flex justify-center items-center gap-2'>
            <img src={account} alt="" />
            <p>MY ACCOUNT </p>
          </div>
        </div>
      </div>

        {/* second section bg-red */}

      <div className='bg-primary h-[127px] w-full flex justify-between items-center px-10'>
        <div className='flex flex-col'>
          <img src={logo} className='w-36  object-contain ' />
          <p className='text-xs text-secondary'>Shop smart, shop more!</p>
        </div>

      
          <div className='h-[50px] hidden lg:flex items-center justify-center'>
            <input type="text" placeholder='Search products..' className='pl-4 border-y border-l w-[600px] rounded-l-lg border-secondary text-secondary h-full placeholder-white placeholder:text-xs' />
            <button className='bg-black text-white flex items-center justify-center rounded-r-lg h-full gap-3 px-6 text-sm'>
              <img src={search} alt=""  className='w-4 h-4'/>
              SEARCH
            </button>
          </div>

          <div className='flex text-secondary gap-3'>
            <div className='relative'>
              <img src={cart} alt="" className='w-9 h-9' />
              <p className='absolute bg-secondary text-tertiary text-xs -top-3 -right-2 px-2 py-1 rounded-full'>2</p>
            </div>
            <div className='hidden lg:flex flex-col text-sm'>
              <p>SHOPPING CART</p>
              <p className='text-sm'>$0.00 USD</p>
            </div>
          </div>
      </div>

      {/* third section bg-tertiary */}

      <div className='w-full bg-tertiary h-[51px] lg:px-10 px-5 flex items-center lg:justify-normal justify-between lg:gap-30'>
        <div className='bg-[#F2F2F5] w-[300px] hidden lg:flex items-center justify-center font-semibold text-lg h-full'>
          ALL DEPARTMENTS
        </div>

        <div className='h-[40px] w-2/3  lg:hidden flex items-center justify-start relative'>
            <input type="text" placeholder='Search products..' className='pl-4 w-full rounded-lg bg-white text-black h-full placeholder-black/40 placeholder:text-xs outline-none ring-0' />
            <FiSearch className='w-4 h-4 absolute top-3 right-3 text-black'/>
        </div>

        <RiMenu3Line onClick={() => setOpenMenu(!openMenu)} className='w-7 h-7 text-white lg:hidden' />

        <nav className='hidden lg:flex'>
          <ul className='flex gap-16 text-[16px] text-white items-center justify-center'>
            <li className='text-primary'>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>FAQ</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>

      <Sheet open={openMenu} onOpenChange={setOpenMenu} >
        <SheetContent side='left'>
            <ul className='flex flex-col gap-6 text-[16px] text-black items-start justify-start px-5 py-5'>
              <li className='text-primary'>HOME</li>
              <li>SHOP</li>
              <li>ABOUT</li>
              <li>FAQ</li>
              <li>CONTACT</li>
            </ul>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default Header