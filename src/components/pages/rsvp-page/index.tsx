"use client"

import PageHead from '@/components/page-head'
import React from 'react'

const RSVPPage = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='RSVP'
        description="We are really excited to see you, and hope you can join us for our special day without any hesitation"
      />
      <div>
        <div className='mb-20'>
          <h3 className='font-montaga text-lg font-medium lg:text-lg text-primary mb-6'>
            Please let us know if you plan to attend our special day.
          </h3>
          <p className='font-montaga text-base font-medium text-primary'>Toyin - 0802 318 0107</p>
          <p className='font-montaga text-base font-medium text-primary'>Fisayo - 0708 823 6524</p>
        </div>
        {/* <div className=''>
          <div className='inline-block min-w-[200px]'>
            <label htmlFor="" className="font-montaga text-sm block">
              Name
            </label>
            <input className="w-full border-primary/50 border rounded-sm	focus:border-primary outline-none h-[45px] pl-2 " />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RSVPPage