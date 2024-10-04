"use client"

import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeImage from '../../../public/assets/img/9S2A2328-Recovered.jpg'


const GiftRegistry = () => {
  return (
    <div className="min-h-screen container">
      <div className={`full md:w-[70%] my-0 mx-auto pt-20 pb-10 lg:pt-32 lg:pb-24`}>
        <h1 className={`font-sans text-3xl lg:text-5xl font-bold text-primary uppercase text-center`}>
          Gifts/Registry
        </h1>
        <div className='text-center mt-10 lg:w-[70%] my-0 mx-auto'>
          <h2 className={`font-montaga text-base font-medium lg:text-lg text-primary`}>
            We&apos;re so thankful that you were all able to make it to our big day. The greatest gift to us is you being there on our special day.
          </h2>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row w-full pb-9'>
        <div className='w-[80%] lg:w-[40%] my-0 mx-auto flex-col content-center z-20'>
          <div className={`-mb-16 lg:-mb-0 lg:-mr-16 bg-primary/70 py-5 px-4 md:py-7 md:px-6 rounded-md`}>
            <div className='mb-10'>
              <h3 className={`font-montaga font-bold text-lg text-white mb-2`}>Wedding wishlist</h3>
              <p className={`font-montaga text-white text-[12px] md:text-base mb-6`}>We&apos;ve added a few things to our registry just to give an idea of what we plan to add to our home as we embark on this big adventure. </p>
              <Link href="https://mywishlistng.com/event/wedding/mm24forever" target='_blank'>
                <Button>
                  View Our Wishlist
                </Button>
              </Link>
            </div>
            <div>
              <h3 className={`font-montaga font-bold text-lg text-white mb-2`}>Honeymoon fund</h3>
              <p className={`font-montaga text-white text-[12px] md:text-base  mb-6`}>If you would like, a contribution to our honeymoon fund would be very much appreciated!</p>
              <Button onClick={() => console.log("hi")}>
                Contribute
              </Button>
            </div>
          </div>
        </div>
        <div className='lg:w-[60%] flex justify-center items-center'>
          <div className='lg:w-[100%] md:h-[600px] '>
            <Image
              src={HomeImage}
              style={{
                borderRadius: "10px",
                verticalAlign: "middle",
                width: "100%",
                height: '100%',
                objectFit: "cover",

              }}
              alt=''
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default GiftRegistry

// lg:absolute lg: right - 16 lg: top - 0 lg: bottom - 0