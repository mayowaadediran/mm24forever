"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const NavLink = ({ link }: {
  link: {
    url: string,
    title: string
  }
}) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded p-2 font-montaga text-primary ${pathName === link.url && "bg-[#A36BAD] text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
