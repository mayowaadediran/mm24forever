import PageHead from '@/components/page-head'
import { itineraryDetailsDayOne, itineraryDetailsDayTwo } from '@/constants'
import React from 'react'

type ItineraryDetailsProps = {
  title: string,
  time: string,
  details: string
}

const ItineraryDetails = ({ title, time, details }: ItineraryDetailsProps) => {
  return (
    <div className='mb-10'>
      <div className='mb-5'>
        <h4 className='text-montaga__primary text-xl'>
          {title}
        </h4>
        <p className='text-montaga__primary text-base'>{time}</p>
      </div>
      <p className='text-montaga__primary'>
        {details}
      </p>
    </div>
  )
}


const Itinerary = () => {
  return (
    <div className="min-h-screen container">
      <PageHead
        title='Itinerary'
      />
      <div className='mb-20'>
        <div className='mb-5'>
          <h3 className='text-montaga__primary text-xl font-semibold'>
            Wednesday, October 23
          </h3>
        </div>
        {itineraryDetailsDayOne.map((itinerary, i) => {
          return (
            <ItineraryDetails key={i}
              title={itinerary.title}
              time={itinerary.time}
              details={itinerary.details}
            />
          )
        })}
      </div>
      <div className='mb-10'>
        <div className='mb-5'>
          <h3 className='text-montaga__primary text-xl font-semibold'>
            Thursday, October 24
          </h3>
        </div>
        {itineraryDetailsDayTwo.map((itinerary, i) => {
          return (
            <ItineraryDetails key={i}
              title={itinerary.title}
              time={itinerary.time}
              details={itinerary.details}
            />
          )
        })}
      </div>
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