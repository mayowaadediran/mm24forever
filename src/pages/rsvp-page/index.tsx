"use client"

import PageHead from '@/components/page-head'
import React from 'react'

const RSVPPage = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='RSVP & Info'
      />
      <div className='flex flex-col lg:flex-row w-full pb-9'>
        <div className='w-[80%] lg:w-[40%] my-0 mx-auto flex-col content-center z-20'>
          <div className={`-mb-16 lg:-mb-0 lg:-mr-16 bg-primary/20 py-5 px-4 md:py-7 md:px-6 rounded-md border border-primary`}>
            <div className='mb-5'>
              <h3 className={`font-montaga font-bold text-lg text-primary  mb-2`}>RSVP</h3>
              <p className={`font-montaga text-primary text-[12px] md:text-base`}>
                Fisayo - 0708 823 6524
              </p>
              <p className={`font-montaga text-primary text-[12px] md:text-base`}>
                Toyin - 0802 318 0107
              </p>
            </div>
            <div className='mb-5'>
              <h3 className={`font-montaga font-bold text-lg text-primary  mb-2`}>When</h3>
              <p className={`font-montaga text-primary text-[12px] md:text-base`}>Thursday, 24th October, 2024</p>
              <p className={`font-montaga text-primary  text-[12px] md:text-base`}>8:00am - 4:00pm</p>
            </div>
            <div className='mb-5'>
              <h3 className={`font-montaga font-bold text-lg text-primary mb-2`}>Where</h3>
              <p className={`font-montaga text-primary  text-[12px] md:text-base`}>
                IITA Hospitality.
              </p>
              <p className={`font-montaga text-primary text-[12px] md:text-base`}>
                Ibadan, Oyo State.
              </p>
            </div>
            <div className='mb-5'>
              <h3 className={`font-montaga font-bold text-lg text-primary mb-2`}>Color of the day</h3>
              <p className={`font-montaga text-primary text-[12px] md:text-base`}>
                White
              </p>
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

export default RSVPPage