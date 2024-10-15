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
      onClick={onClick}
      className='text-montaga__primary p-2 text-[12px] border-primary border'

    >
      {children}
    </button>
  )
}

export default Button