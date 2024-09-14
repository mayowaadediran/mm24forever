"use client"

import { renderer } from '@/components/counter/counter';
import Image from 'next/image';
import Countdown from 'react-countdown';
import HomeImage from './../../public/assets/img/9S2A2665-Recovered.jpg'

export default function Home() {
  return (
    <div className="min-h-svh pt-10">
      <div className='flex justify-center'>
        <div className=''>
          <Image
            src={HomeImage}
            style={{
              borderRadius: "10px"
            }}
            alt=''
          />
        </div>
      </div>
      <div>
        <div className='text-center'>
          <p className='font-montaga text-xl'>Please join us to celebrate</p>
          <h1 className='font-sans text-5xl text-extrabold'> Mosimiloluwa & Mayowa</h1>
          <p className='font-montaga '>October 24, 2024 - Ibadan, Nigeria</p>
        </div>
        <Countdown
          renderer={renderer}
          date={"2024-10-24T18:30:00+0500"}
          intervalDelay={0}
        />

      </div>
    </div>
  );
}
