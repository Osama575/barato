import React from 'react'
import call from '/src/assets/call.svg'
import account from '/src/assets/account.svg'
import search from '/src/assets/search.svg'
import cart from '/src/assets/cart.svg'

function Header() {
  return (
    <div className='w-screen font-poppins' >
       {/* first section bg-white*/}
      <div className='bg-[#F2F2F5] h-[45px] w-full flex justify-between items-center px-10 text-[13px]'>
        <div className='flex justify-center items-center gap-3 '>
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
          <h1 className='text-5xl font-bold text-secondary '>LOGO</h1>
          <p className='text-xs text-secondary'>Shop smart, shop more!</p>
        </div>

        <div>
          </div>
          <div className='h-[50px] flex items-center justify-center'>
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
            <div className='flex flex-col text-sm'>
              <p>SHOPPING CART</p>
              <p className='text-sm'>$0.00 USD</p>
            </div>
          </div>
      </div>

      {/* third section bg-tertiary */}

      <div className='bg-tertiary h-[51px]'>
        <div className='bg-secondary  '>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header