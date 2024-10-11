import PageHead from '@/components/page-head'
import RSVPPage from '@/components/pages/rsvp-page'
import React from 'react'


const Itinerary = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='Itinerary'
      />
      <div>
        <h3 className={`font-montaga text-primary mb-2`}>Venue</h3>
        <h4 className={`font-montaga font-bold text-xl text-primary mb-2`}>IITA Hospitality Resort</h4>

        <p className={`font-montaga text-primary`}>PMB 5320, Oyo Road, Ibadan</p>
        <p className={`font-montaga text-primary`}>Oyo State, Nigeria</p>

      </div>
    </div>
  )
}

export default Itinerary