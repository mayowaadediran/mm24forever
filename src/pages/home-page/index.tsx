"use client"

import { renderer } from '@/components/counter/counter';
import Image from 'next/image';
import Countdown from 'react-countdown';
import HomeImage from './../../../public/assets/img/9S2A2665-Recovered.jpg'
import Link from 'next/link';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';


const HomePage = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });


  return (
    <div className="min-h-screen pt-5 md:pt-20 pb-20 lg:flex lg:justify-between container">
      <motion.div
        initial={{ opacity: '0' }}
        animate={isInView ? {
          opacity: 1, transition: {
            type: 'tween',
            duration: 2,
            staggerChildren: 1
          }
        } : {}}
        className='mb-10 flex-col lg:content-center lg:w-[50%]'
        ref={ref}
      >
        <motion.div
          className='text-center'
          initial={{ opacity: '0' }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <p className='font-montaga text-xl text-primary'>Please join us to celebrate</p>
          <h1 className='font-sans text-5xl text-extrabold text-primary'> Mosimiloluwa & Mayowa</h1>
          <p className='font-montaga text-primary'>October 24, 2024 - Ibadan, Nigeria</p>
        </motion.div>
        <motion.div
          initial={{ opacity: '0' }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <Countdown
            renderer={renderer}
            date={"2024-10-24T18:30:00+0500"}
            intervalDelay={0}
          />
        </motion.div>
        <div className='flex gap-3 justify-between max-w-[20%] my-0 mx-auto'>
          <Link href={"rsvp"} className='font-montaga text-primary underline text-x'>RSVP</Link>
          <Link href={"gifts"} className='font-montaga text-primary underline text-x'>GIFTS</Link>
        </div>
      </motion.div>
      <div className='lg:pl-10 lg:w-[50%] flex justify-center'>
        <div className='lg:w-[100%] xl:w-[70%]'>

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
  )
}

export default HomePage