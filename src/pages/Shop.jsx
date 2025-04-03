import React, { useEffect, useState } from 'react'
import shopBanner from '../assets/shopBanner.png';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router';
import RangeSlider from '@/components/RangeSlider';
import { dummyProductData } from '@/lib/productsData';
import { useGetCategoriesQuery } from '@/app/features/api/categoriesApiSlice';
import { useGetProductsQuery } from '@/app/features/api/productApiSlice';
import useDebounce from '@/hooks/useDebounce';
import { useGetRegionsQuery } from '@/app/features/api/regionsApiSlice';

function Shop() {
 const [PriceRange, setPriceRange] = useState([0,1000])
 const [cat, setCat] = useState(null)
 const [reg, setReg] = useState(null)
 const {data: categories} = useGetCategoriesQuery({searchTerm: ''})
 const {data: regions} = useGetRegionsQuery({searchTerm: ''})
 const value = useDebounce(PriceRange)
 const {data: products} = useGetProductsQuery({searchTerm: '', category:cat, PriceRange:value, Region:reg})

  const handlePriceChange = (min, max) => {
    setPriceRange([min,max])
  };

// useEffect(() => {
//   console.log(PriceRange[0])
// },[PriceRange])

  return (
    <div className='w-full h-full'>
        <div className='lg:w-[60%] mx-auto px-5'>
          <img src={shopBanner} className='my-10 mb-20' />
        </div>

        {/* PRODUCTS AREA */}
        <div className='w-full 2xl:w-[80%] mx-auto flex items-start gap-5 lg:px-10'>
          {/*  WEB SCREEN FILTER AREA */}
          <div className='lg:w-[441px] hidden lg:flex flex-col p-3'>
            <h1>Filters</h1>
            <div className='w-full my-2'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Categories</p>
                <p onClick={() => setCat(null)}>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              
              <div className='w-full flex flex-col gap-2 my-2'>
                {categories?.map((category) => (
                  <div key={category.id} className='w-full flex items-center justify-between'>
                    <p>{category.categoryName}</p>
                    <input onChange={() => setCat(category.id)} checked={cat === category.id} type='checkbox' className='bg-gray-200 w-4 h-4' />
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full my-5'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Region</p>
                <p onClick={() => setReg(null)}>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              <div className='w-full flex flex-col gap-2 my-2'>
                {regions?.map((region) => (
                  <div key={region.id} className='w-full flex items-center justify-between'>
                    <p>{region.regionName}</p>
                    <input onChange={() => setReg(region.id)} checked={reg === region.id} type='checkbox' className=' bg-gray-200 w-4 h-4' />
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
              <RangeSlider min={0} max={1000} step={1} onChange={handlePriceChange} />
            </div>
          </div>
              
          {/*  MOBILE SCREEN FILTER AREA */}
          <div className='w-[541px] hidden p-3'>
            <h1>Filters</h1>
            <div className='w-full my-2'>
              <div className='w-full flex items-center justify-between text-primary font-semibold'>
                <p>Categories</p>
                <p onClick={() => setCat(null)}>Reset</p>
              </div>
              <hr className='h-[1px] bg-black/70'/>
              
              <div className='w-full flex flex-col gap-2 my-2'>
              {categories?.map((category) => (
                  <div key={category.id} className='w-full flex items-center justify-between'>
                    <p>{category.categoryName}</p>
                    <input onChange={() => setCat(category.id)} checked={cat === category.id} type='checkbox' className='bg-gray-200 w-4 h-4' />
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
          <div className='w-full flex flex-col  md:flex-row items-center lg:flex-wrap gap-3 2xl:gap-8 py-6 px-5 lg:px-0 md:mx-auto'>
            {products?.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Shop