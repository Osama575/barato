import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import ProductCard from '@/components/ProductCard'
  import Autoplay from "embla-carousel-autoplay";
  import { RiHeartAdd2Line } from "react-icons/ri";
  import delivery from "/src/assets/delivery.svg";
  import group from "/src/assets/Group.svg";
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/features/cartSlice';
import { useGetProductsQuery, useGetSingleProductQuery } from '@/app/features/api/productApiSlice';

function SingleProducts() {
    const params = useParams()
    const dispatch = useDispatch()
    const {data:sp} = useGetSingleProductQuery(parseInt(params.id))
    const {data:products} = useGetProductsQuery({searchTerm: ''})

    const addProduct = (product) => {
        dispatch(addToCart({...product}))
    }
  return (
    <div className='w-full 2xl:w-[70%] mx-auto lg:w-[80%] lg:px-10 px-6 '>
        <div className='flex flex-col items-center justify-center my-18 lg:flex-row gap-24'>
            <div className='border border-black/50 w-full h-[500px] flex items-center justify-center lg:w-[450px] lg:h-[500px] md:w-[600px] md:h-[619px] 2xl:w-[730px] 2xl:h-[619px]'>
                <img src={sp?.productImage} alt="" className='w-full h-full object-cover aspect-auto' />
            </div>
            <div className='flex flex-col justify-center items-start gap-1 md:w-[600px] lg:w-[400px]'>
                <h1 className='font-bold text-2xl'>{sp?.productName}</h1>
                <div className='flex items-center justify-center gap-1'>
                    <p className='text-base'>${sp?.productPrice.toFixed(2)}</p> 
                    <p className='text-primary text-sm line-through'>${(sp?.productPrice + sp?.discountedPrice).toFixed(2)}</p>
                </div> 
                <p className='border-b border-black/50 text-xs pb-2'>{sp?.productDescription}</p>
                <div className='w-full mt-3 flex gap-4 items-center'>
                    {/* <div className='flex items-center justify-center border border-black/50 rounded-xs'>
                        <p className='flex items-center justify-center w-8 h-8 text-xl '>-</p>
                        <p className='border-l border-black/50 flex items-center justify-center w-15 h-8 text-xl'>1</p>
                        <p className='border-l border-black/5 flex items-center justify-center bg-primary w-8 h-8 text-xl  text-white'>+</p>
                    </div> */}
                    <button onClick={() => addProduct(sp)} className='w-full bg-primary px-6 h-9 rounded-sm shadow-md text-white flex items-center justify-center cursor-pointer'>
                       Add to Cart
                    </button>
                    <div className='w-8 h-8 border border-black/50 rounded-xs flex items-center justify-center '>
                     <RiHeartAdd2Line className='w-5 h-5 text-primary' />
                    </div>
                </div>
                <div className='border border-black/50 w-full h-40 rounded-xl mt-6 '>
                    <div className='border-b border-black/50 h-[50%] flex'>
                      <img src={delivery} alt="" className='py-4 px-2' />
                      <div className='flex items-staet justify-center flex-col'>
                        <p className='tet-sm font-semibold'>Door Step Delivery</p>
                        <p className='text-xs font-semibold'>Enter your postal code for Delivery Availability</p>
                      </div>
                    </div>
                    <div className='flex'>
                        <img src={group} alt="" className='p-4' />
                        <div className='flex items-staet justify-center flex-col'>
                            <p className='tet-sm font-semibold'>24 x 7 Service</p>
                            <p className='text-xs font-semibold'>Receive round the clock service on this product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=''>
            <div className='w-full mb-10'>
                <div className='flex gap-3 items-center justify-start mx-4'>
                    <div className='md:h-14 md:w-6 h-9 w-3 bg-primary rounded-xs md:rounded-sm'></div>
                    <h1 className='font-semibold text-primary text-lg lg:text-xl'>Related Items</h1>
                </div>
                
                <div className='w-full my-5 '>
                    <Carousel opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                        delay: 4000,
                        }),
                    ]} className='lg:w-[95%] mb-10 mx-auto'>
                        <CarouselContent>
                            {products?.slice(0,5).map((product, index) => (
                                <CarouselItem key={index} className='basis-2/3 md:basis-1/3 lg:basis-1/4 2xl:basis-2/6 '>
                                    <ProductCard {...product} />        
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className='hidden lg:flex bg-primary text-white' />
                        <CarouselPrevious className='hidden lg:flex bg-primary/80 text-white' />
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProducts