"use client"

import Image from 'next/image';
import Countdown from 'react-countdown';
import HomeImage from '../../../../public/assets/img/9S2A2665-Recovered.jpg'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { renderer } from '@/components/counter';
import Link from 'next/link';


const HomePage = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen pt-4 md:pt-4 pb-20 md:pb-10 lg:flex lg:justify-between lg:gap-3 container">
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
        <div className='flex justify-center gap-3'>
          <Link href={"rsvp"} className='font-montaga text-primary underline text-x'>
            RSVP
          </Link>
          <Link href={"gifts"} className='font-montaga text-primary underline text-x'>
            GIFTS
          </Link>
        </div>
      </motion.div>
      <div className='lg:w-[50%] flex justify-center items-center'>
        <motion.div className='lg:w-[600px] lg:h-[600px]'
          initial={{ opacity: '0' }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <Image
            src={"https://res.cloudinary.com/dt6nqktyo/image/upload/v1728594457/9S2A2251-Recovered_ln76of.jpg"}
            width={500}
            height={300}
            style={{
              borderRadius: "10px",
              verticalAlign: "middle",
              width: "100%",
              height: '100%',
              objectFit: "cover"
            }}
            alt=''
            priority={true}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage