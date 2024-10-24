"use client"

import Button from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import PageHead from '@/components/page-head'


const GiftRegistry = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='Gifts/Registry'

      />
      <div className='flex flex-col lg:flex-row w-full pb-9'>
        <div className='w-[80%] lg:w-[40%] my-0 mx-auto flex-col content-center z-20'>
          <div className={"-mb-16 lg:-mb-0 lg:-mr-16 bg-primary/20 py-5 px-4 md:py-7 md:px-6 rounded-md border border-primary"}>
            <div className='mb-10'>
              <h3 className={`text-montaga__primary font-bold text-lg mb-2`}>Wedding wishlist</h3>
              <p className={`text-montaga__primary text-[12px] md:text-base mb-6`}>We&apos;ve added a few things to our registry just to give an idea of what we plan to add to our home as we embark on this big adventure. </p>
              <Link href="https://mywishlistng.com/event/wedding/mm24forever" target='_blank'>
                <Button>
                  View Our Wishlist
                </Button>
              </Link>
            </div>
            <div>
              <h3 className={`text-montaga__primary font-bold text-lg mb-2`}>Monetary gifts</h3>
              <p className={`text-montaga__primary text-[14px] md:text-base mb-6`}>
                If you would like, a contribution to our honeymoon fund would be very much appreciated!
              </p>
              <ul className={`text-montaga__primary text-[14px] md:text-base mb-6`}>
                <li><span className='font-bold'>Bank:</span>Kudabank</li>
                <li><span className='font-bold'>Account Name:</span> Mayowa Adediran</li>
                <li><span className='font-bold'>Account Number:</span> 1100460390</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='lg:w-[60%] flex justify-center items-center'>
          <div className='lg:w-[100%] md:h-[600px] '>

          </div>
        </div>

      </div>
    </div>
  )
}

export default GiftRegistry

// lg:absolute lg: right - 16 lg: top - 0 lg: bottom - 0