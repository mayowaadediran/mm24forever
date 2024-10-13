import PageHead from '@/components/page-head'
import Image from 'next/image'
import React from 'react'


const Gallery = () => {
  return (
    <div className='container'>
      <PageHead title='Gallery' />
      <div className='columns-2 sm:columns-3 lg:columns-4 space-y-4 pb-10'>
        <div className='rounded-md'>
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634750/9S2A2426-Recovered-min_he33t9.jpg"}
            alt=''
            width={1000}
            height={1000}
            className='h-full w-full'
          />
        </div>
        {/* <div>
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634751/9S2A2665-Recovered-min_u90inp.jpg"}
            alt=''
          />
        </div>
        <div>
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634752/9S2A2604-Recovered-min_fkl4qw.jpg"}
            alt=''
          />
        </div>
        <div>
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2330-Recovered-min_kaul0k.jpg"}
            alt=''
          />
        </div>
        <div>
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634750/9S2A2530-Recovered-min_z91qxp.jpg"}
            alt=''
          />
        </div>
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2039-Recovered-min_cs4gvm.jpg"}
          alt=''
        />
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2328-Recovered-min_uhur2s.jpg"}
          alt=''
        />
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2236-Recovered-min_vnryjp.jpg"}
          alt=''
        />
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634751/9S2A2551-Recovered-min_xsbh7o.jpg"}
          alt=''
        />
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2053-Recovered-min_pmdivh.jpg"}
          alt=''
        />
        <Image
          src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728634749/9S2A2251-Recovered-min_d7ngfn.jpg"}
          alt=''
        /> */}

      </div>
    </div>
  )
}

export default Gallery