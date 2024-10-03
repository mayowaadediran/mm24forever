"use client"

import Button from '@/components/ui/button'
import { styles } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomeImage from '../../../public/assets/img/9S2A2328-Recovered.jpg'

const giftCardStyles = "mb-10 w-full bg-primary/15 p-10"


const GiftRegistry = () => {
  return (
    <div className="min-h-screen container">
      <div className="w-full md:w-[70%] container pt-10 lg:p-32">
        <h1 className={`${styles.heading1} text-center`}>
          Gifts/Registry
        </h1>
        <div className='text-center container mt-10'>
          <p className={`${styles.heading3}`}>
            We're so thankful that you were all able to make it to our big day. The greatest gift to us is you being there on our special day.
          </p>
        </div>
      </div>
      <div className='lg:flex mt-5 w-full container pb-9'>
        <div className='lg:w-[40%] container mt-10 z-10'>
          <div className={`${giftCardStyles} `}>
            <h3 className={`${styles.heading3} mb-2`}>Wedding wishlist</h3>
            <p className={`${styles.paragraph} mb-2`}>We've added a few things to our registry just to give an idea of what we plan to add to our home as we embark on this big adventure. </p>
            <Link href="https://mywishlistng.com/event/wedding/mm24forever" target='_blank'>
              <Button>
                View Our Wishlist
              </Button>
            </Link>
          </div>
          <div className={`${giftCardStyles}`}>
            <h3 className={`${styles.heading3} mb-2`}>Honeymoon fund</h3>
            <p className={`${styles.paragraph} mb-2`}>If you would like, a contribution to our honeymoon fund would be very much appreciated!</p>
            <Button onClick={() => console.log("hi")}>
              Contribute
            </Button>
          </div>
        </div>

        <div className='lg:w-[60%] flex justify-center items-center lg:-ml-32'>
          <div className='lg:w-[100%] lg:h-[600px]'>
            <Image
              src={HomeImage}
              style={{
                borderRadius: "10px",
                verticalAlign: "middle",
                width: "100%",
                height: '100%',
                objectFit: "cover"
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