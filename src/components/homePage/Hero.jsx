import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { carouselData } from '@/lib/carouselData'
import Autoplay from "embla-carousel-autoplay";
import { Button } from '../ui/button';


const Hero = () => {
  return (
        <Carousel opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]} className='w-full mb-10'>
            <CarouselContent>
                {carouselData.map((item, index) => (
                    <CarouselItem key={index}>
                        <div style={{backgroundImage: `url(${item.image})`}} className='w-full lg:h-[450px] h-[400px] relative bg-cover bg-no-repeat'>
                            {/* <img src={item.image} className='w-full lg:h-full h-[500px] lg:object-cover object-contain bg-no-repeat' /> */}
                            <div className='absolute z-10 lg:top-1/4 lg:right-5 inset-0 text-right flex flex-col lg:items-end items-center justify-center lg:justify-start lg:gap-4 gap-4 backdrop-blur-md backdrop-opacity-60 lg:backdrop-opacity-0  bg-black/60 lg:bg-transparent'>

                                <h1 className='text-primary lg:text-4xl text-3xl font-semibold lg:text-right text-center drop-shadow-lg'>{item.title}</h1>
                                <p className='w-[350px] lg:text-right text-center text-lg text-white lg:text-black'>{item.subText}</p>
                                <Button className='text-white'> 
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
  )
}

export default Hero