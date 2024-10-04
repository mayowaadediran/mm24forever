"use client"

import { CountdownRenderProps } from "react-countdown"


// Random component
const Completionist = () => <span>You are good to go!</span>;

const TimeBox = ({ value, time }: { value: number, time: string }) => {
  return (
    <div className="flex-col justify-items-center p-5 text-primary">
      <p className="font-montaga text-5xl">{value}</p>
      <p className="font-montaga text-[10px] text-center">{time}</p>
    </div>
  )
}


export const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
  if(completed) {

    return <Completionist />;
  } else {

    return (
      <div className="flex justify-center">
        <TimeBox value={days} time="Days" />
        <TimeBox value={hours} time="Hours" />
        <TimeBox value={minutes} time="Minutes" />
        <TimeBox value={seconds} time="Seconds" />
      </div>
    );
  }
};

