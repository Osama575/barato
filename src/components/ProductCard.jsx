import React from 'react'
import soy from '../assets/soy.png'
import favourite from '../assets/favourite.svg'
import addCart from '../assets/addCart.svg'
import view from '../assets/view.svg'

const ProductCard = () => {
  return (
    <div className='lg:w-[242px] h-[307.26px] bg-white border-[1px] border-black/30 drop-shadow-md relative group '>
        <div className='w-full h-[230px]'>
            <img src={soy} className='w-full h-full object-contain' />
        </div>
        <div className='w-full text-center'>
            <h1 className='font-semibold'>Low Sodium Soy Sause</h1>
            <p className='text-sm'>$40.00 <span className='text-primary line-through'>$50.00</span></p>
        </div>
        <div className='lg:opacity-0 flex-col gap-1 absolute  top-16 group-hover:lg:right-3 lg:-right-3 right-3 group-hover:opacity-100 duration-500 ease-out '>
            <img src={addCart} className='w-10' />
            <img src={favourite} className='w-10' />
            <img src={view} className='w-10' />
        </div>
    </div>
  )
}

export default ProductCard