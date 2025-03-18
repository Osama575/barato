import React, { useState } from 'react'
import shopBanner from '../assets/shopBanner.png';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router';
import RangeSlider from '@/components/RangeSlider';

function Shop() {
 const [PriceRange, setPriceRange] = useState([0,100000])

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max])
  };

  return (
    <div className='w-full h-full'>

        <div className='w-[60%] mx-auto'>
          <img src={shopBanner} className='my-10 mb-20' />
        </div>

        {/* PRODUCTS AREA */}
        <div className='w-full flex items-start gap-5 lg:px-10 mx-auto 2xl:w-[80%]'>
          {/* FILTER AREA */}
          <div className='lg:w-[441px] p-3'>
            <h1>Filters</h1>
            <div className='w-full my-2'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Categories</p>
                <p>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              
              <div className='w-full flex flex-col gap-2 my-2'>
                {[1,2,3,4,5].map((_,i) => (
                  <div key={i} className='w-full flex items-center justify-between'>
                    <p>Spices</p>
                    <input type='checkbox' className='appearance-none bg-gray-200 w-4 h-4' />
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full my-5'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Region</p>
                <p>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              <div className='w-full flex flex-col gap-2 my-2'>
                {[1,2,3,4,5].map((_,i) => (
                  <div key={i} className='w-full flex items-center justify-between'>
                    <p>African</p>
                    <input type='checkbox' className=' bg-gray-200 w-4 h-4' />
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full my-5'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Price Range</p>
                <p>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              <RangeSlider min={0} max={100000} step={1} onChange={handlePriceChange} />
            </div>
          </div>

          {/* MAIN PRODUCT CARD AREA */}
          <div className='lg:w-full flex items-center flex-wrap gap-3 py-6'>
            {[1,2,3,4,5,6,7].map((_, index) => (
              <Link to={`/shop/identification`}>
                <ProductCard key={index} />
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Shop