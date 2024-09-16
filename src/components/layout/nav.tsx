"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../../../public/assets/img/logo.png'
import Image from 'next/image'
import { motion } from "framer-motion";
import { navLinks } from '@/constants';
import Link from 'next/link';



const Nav = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    open && document.body.classList.add('overflow-y-hidden')

    return () => {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [open])


  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };


  return (
    <nav className='container pt-3'>
      <div className='h-full flex justify-between items-center'>
        <Image
          src={Logo}
          alt='logo'
          style={{
            maxWidth: "50px"
          }}
        />

        <div className=''>
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-primary rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-primary rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-primary rounded origin-left"
            ></motion.div>
          </button>
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-[#A36BAD] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {navLinks.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url} className='font-montaga' onClick={() => setOpen((prev) => !prev)}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav