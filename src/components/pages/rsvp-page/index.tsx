"use client"

import PageHead from '@/components/page-head'
import React from 'react'

const RSVPPage = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='RSVP & Info'
      />
      <div className=''>
        <div className='mb-20'>
          <h3 className='font-montaga text-[24px] lg:text-cl text-primary mb-6'>
            Please let us know if you plan to attend our special day. We're really excited to see you!
          </h3>
          <div>
            <h1>RSVP</h1>
            <p className='font-montaga text-base font-medium text-primary'>Toyin - 0802 318 0107</p>
            <p className='font-montaga text-base font-medium text-primary'>Fisayo - 0708 823 6524</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RSVPPage