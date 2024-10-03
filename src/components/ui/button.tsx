"use client"

import React, { ReactNode } from 'react'

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  variant?: "outline" | "solid" | ""
}




const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick} role='button'
      className='bg-primary text-white p-2 font-montaga text-[12px]'

    >
      {children}
    </button>
  )
}

export default Button