import React from 'react'
import soy from '../assets/soy.png'
import favourite from '../assets/favourite.svg'
import addCart from '../assets/addCart.svg'
import view from '../assets/view.svg'
import { Link } from 'react-router'

const ProductCard = ({productImage, productName, productPrice, discountedPrice, productDescription}) => {
  return (
    <div className='w-full md:w-[242px] lg:h-[307.26px] h-[330px] bg-white border-[1px] border-black/30 drop-shadow-md relative group'>
    <Link to={`/shop/${productName}`} >
        <div className='w-full h-[230px]'>
            <img src={productImage} className='w-full h-full object-contain' />
        </div>
        <div className='w-full text-center'>
            <h1 className='font-semibold'>{productName}</h1>
            <p className='text-sm'>${productPrice.toFixed(2)} <span className='text-primary line-through'>${(productPrice + discountedPrice).toFixed(2)}</span></p>
        </div>
        <div className='lg:opacity-0 flex-col gap-1 absolute  top-16 group-hover:lg:right-3 lg:-right-3 right-3 group-hover:opacity-100 duration-500 ease-out '>
            <img src={addCart} className='w-10' />
            <img src={favourite} className='w-10' />
            <img src={view} className='w-10' />
        </div>
    </Link>
  </div>
  )
}

export default ProductCard