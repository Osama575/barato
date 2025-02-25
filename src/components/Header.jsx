import React from 'react'
import call from '/src/assets/call.svg'
import account from '/src/assets/account.svg'
import search from '/src/assets/search.svg'
import cart from '/src/assets/cart.svg'

function Header() {
  return (
    <div className='w-screen font-poppins' >
       {/* first section bg-white*/}
      <div className='bg-secondary h-[64px] w-full flex justify-between items-center px-10'>
        <div className='flex justify-center items-centergap-3 text-xl'>
          <img src={call} alt="" />
          <p>CALL US:</p>
          <p>123-456-7890</p>
        </div>
        <div className='flex justify-between items-center gap-8 text-xl'>
          <p>USD</p>
          <p>LANGUAGE </p>
          <div className='flex justify-center items-center gap-2'>
            <img src={account} alt="" />
            <p>MY ACCOUNT </p>
          </div>
        </div>
      </div>

        {/* second section bg-red */}

      <div className='bg-primary h-[157px]  w-full flex justify-between items-center pl-24 pr-14'>
        <div className='flex flex-col'>
          <h1 className='text-7xl font-bold text-secondary '>LOGO</h1>
          <p className='text-xs text-secondary'>Shop smart, shop more!</p>
        </div>

        <div>
          </div>
          <div className='h-[60px] flex items-center justify-center'>
            <input type="text" placeholder='Search products..' className='pl-4 border-y border-l w-[600px] rounded-l-lg border-secondary text-secondary h-full placeholder-white placeholder:text-sm' />
            <button className='bg-tertiary text-secondary flex items-center justify-center rounded-r-lg h-full gap-3 px-6'>
              <img src={search} alt=""  className=''/>
              SEARCH
            </button>
          </div>

          <div className='flex text-secondary gap-3'>
            <div className='relative'>
              <img src={cart} alt="" />
              <p className='absolute bg-secondary text-tertiary text-xs -top-2 -right-2 px-2 py-1 rounded-full'>2</p>
            </div>
            <div className='flex flex-col'>
              <p>SHOPPING CART</p>
              <p>$0.00 USD</p>
            </div>
          </div>
      </div>

      {/* third section bg-tertiary */}

      <div className='bg-tertiary h-[81px]'>
        <div className='bg-secondary '>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header