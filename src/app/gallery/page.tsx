"use client"

import PageHead from '@/components/page-head'
import { imageGallery } from '@/constants'
import Image from 'next/image'
import React from 'react'


const Gallery = () => {
  return (
    <div className='container'>
      <PageHead title='Gallery' />
      <div className='columns-2 sm:columns-3 lg:columns-4 space-y-4 pb-10'>

        {imageGallery.map((image, i) => {
          return (
            <div className='rounded-md' key={i}>
              <Image
                src={image}
                alt=''
                width={1000}
                height={1000}
                className='h-full w-full'
              />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Gallery