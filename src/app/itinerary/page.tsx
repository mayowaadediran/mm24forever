import PageHead from '@/components/page-head'
import { itineraryDetailsDayOne, itineraryDetailsDayTwo } from '@/constants'
import IITAImage from "./../../../public/assets/img/IITA.jpg"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
      <div>

      </div>
      <div className=''>

        <div className='pb-20 flex flex-col lg:flex-row gap-5'>

          <div className='text-montaga__primary mb-10 '>

            <h4 className={`font-bold text-xl mb-2`}>IITA Hospitality Resort</h4>
            <h5 className='mb-3'>A not-for-profit unit dedicated to providing Hospitality and Travel Services to guest and staff of the IITA campuses in Nigeria.</h5>
            <p>Address</p>
            <p className={``}>PMB 5320, Oyo Road, Ibadan</p>
            <p className={``}>Oyo State, Nigeria</p>
            <button>View Map</button>
          </div>
          <div>

            <div className='rounded-xl'>
              <Image
                src={IITAImage}
                alt='IITA Image'
                className='rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-2 flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-[30%]'>
          <h3 className='text-montaga__primary text-xl font-semibold'>
            Wednesday, October 23
          </h3>
        </div>
        <div className='lg:w-[70%]'>
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
      </div>
      <div className='mb-10 flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-[30%]'>
          <h3 className='text-montaga__primary text-xl font-semibold'>
            Thursday, October 24
          </h3>
        </div>
        <div className='lg:w-[70%]'>
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
      </div>

      <div className='pb-20'>
        <h3 className={`font-montaga text-primary mb-2`}>Where to stay</h3>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
          <div className='flex-1 mb-10'>
            <h4 className={`font-montaga font-bold text-xl text-primary mb-2`}>IITA Hospitality Resort</h4>
            <p className='text-montaga__primary mb-5'>We’re pleased to inform you that our wedding venue offers accommodation that you can book directly. If you&apos;re interested, please reach out to the venue for details! </p>
            <p className={`font-montaga text-primary`}>
              iita-reservations@cgiar.org</p>
            <p className={`font-montaga text-primary`}>PMB 5320, Oyo Road, Ibadan</p>
            <p className={`font-montaga text-primary`}>Oyo State, Nigeria</p>
          </div>
          <div className='flex-1'>
            <h4 className={`font-montaga font-bold text-xl text-primary mb-2`}>Oxygene Orbis Resort</h4>
            <p className='text-montaga__primary mb-5'>We&apos;re happy to share that a nearby hotel is offering a discount for our wedding! If you&apos;re traveling from out of town, you can book directly to secure this rate.</p>
            <p className='text-montaga__primary'>0806 064 8413</p>
            <p className={`font-montaga text-primary`}>11 Aare Onibon Rd, Moniya,</p>
            <p className={`font-montaga text-primary`}> Mawniya 200136, Oyo</p>
          </div>
        </div>
      </div>

      <div className='pb-20'>
        <h3 className={`font-montaga text-primary mb-2`}>Travel</h3>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
          <div className='flex-1 mb-10'>
            <h4 className={`font-montaga font-bold text-xl text-primary mb-2`}>Train</h4>
            <p className='text-montaga__primary mb-5'>For those traveling from Lagos to Ibadan, we recommend taking the 8 AM train to  Obafemi Awolowo Station Moniya. Please book your tickets ahead of time to secure your spot. You can find the train timetable and book <Link href="https://nrc.gsds.ng/register" className='underline' target='_blank'>here</Link></p>
            <p className='text-montaga__primary mb-5'>A bus will be waiting at the Ibadan station to pick you up, but this service is only available for the 8 AM train.</p>

          </div>
          {/* <div className='flex-1'>
            <h4 className={`font-montaga font-bold text-xl text-primary mb-2`}>Oxygene Orbis Resort</h4>
            <p className='text-montaga__primary mb-5'>We&apos;re happy to share that a nearby hotel is offering a discount for our wedding! If you&apos;re traveling from out of town, you can book directly to secure this rate.</p>
            <p className='text-montaga__primary'>0806 064 8413</p>
            <p className={`font-montaga text-primary`}>11 Aare Onibon Rd, Moniya,</p>
            <p className={`font-montaga text-primary`}> Mawniya 200136, Oyo</p>
          </div> */}
        </div>
      </div>

    </div >
  )
}

export default Itinerary