import Link from 'next/link'
import React from 'react'


export const links = [
  {
    link: "/",
    name: "Home"
  },
  {
    link: "/our-story",
    name: "Home"
  },
  {
    link: "/",
    name: "Home"
  },
  {
    link: "/",
    name: "Home"
  },
  {
    link: "/",
    name: "Home"
  }
]



const Nav = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Our Story</Link>
      <Link href={"/"}>Gallery</Link>
      <Link href={"/"}>Itinerary</Link>
      <Link href={"/"}>Registry</Link>
      <Link href={"/"}>RSVP</Link>
    </nav>
  )
}

export default Nav