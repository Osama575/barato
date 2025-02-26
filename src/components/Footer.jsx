import React from 'react'
import twitter from '/src/assets/x.svg'
import instagram from '/src/assets/ig.svg'
import facebook from '/src/assets/fb.svg'
import line from '/src/assets/Line.svg'

function Footer() {
  return (
    <div className='w-screen h-[400px] mt-60'>

      {/* first section bg-red */}

      <div className='bg-primary h-[86%] px-10 text-white flex items-center justify-between '>
        <div className='flex flex-col gap-4  w-1/3'>
         <h1 className='text-6xl font-bold text-secondary '>LOGO</h1>
         <h1 className='text-lg'>Shop Smart,shop more</h1>
         <p className='text-sm '>Find everything you need, from groceries to household essentials, all in one place – delivered straight to your doorstep!</p>
        </div>
        <div className='flex justify-between items-start  w-2/3 mx-64'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-[20px]'>PAGES</h1>
            <img src={line} alt="" className='w-[35px] ' />
            <a href='#' className='text-sm'>Home</a>
            <a href='#' className='text-sm'>About</a>
            <a href='#' className='text-sm'>Shop</a>
            <a href='#' className='text-sm'>FAQ</a>
            <a href='#' className='text-sm'>Contact</a>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-[20px]'>LINKS</h1>
            <img src={line} alt="" className='w-[35px] ' />
            <a href='#' className='text-sm'>Terms & Conditions</a>
            <a href='#' className='text-sm'>Shipping & Delivery</a>
            <a href='#' className='text-sm'>Privacy Policy</a>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-[20px]'>SOCIALS</h1>
            <img src={line} alt="" className='w-[35px] ' />
            <div className='flex gap-4 w-5 h-5 '>
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* second section bg-black */}

      <div className='h-[14%] bg-black text-white flex justify-center items-center font-semibold text-[20px]'>
        Copyright c 2025. All rights reserved 
      </div>
    </div>
  )
}

export default Footer