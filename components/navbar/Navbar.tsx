"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import ExternalLinks from "@/data/ExternalLinks";
import { MenuData } from "@/types/types";



export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuData: MenuData[] = [
    { id: 1, name: "Acceuil", url: "/" },
    { id: 2, name: "Nos articles", url: "/articles" },
    { id: 3, name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <div className="w-full h-[50px] md:h-[80px] bg-[#ffffff] flex items-center justify-between px-8 transition-transform duration-300 mt-5">
        <p className="logo">
          <Link href="/">
            <Image
              src="/assets/logo/Logo-tp.svg"
              alt="logonsc"
              width={80}
              height={75}
              className="md:w-[100px] md:h-[90px] w-[80px] h-[75px] cursor-pointer"
            />
          </Link>
        </p>

        <ul className="hidden md:flex items-center gap-10 font-medium ">
          {menuData?.map((item) => (
            <div key={item.id}>
              {item?.subMenu ? (
                <li className=" cursor-pointer flex items-center gap-2 relative">
                  {item.name}
                  <BsChevronDown size={14} />
                </li>
              ) : (
                <li className="cursor-pointer text-[var(--palette-1)] hover:text-black transition-all duration-300 hover:underline">
                  <Link href={item?.url}>{item.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-black">
          <div className="hidden font-semibold bg-[var(--palette-1)] text-white px-4 py-2 rounded-full md:flex items-center gap-2 cursor-pointer hover:bg-[var(--palette-2)] transition-all duration-300">
            <Link href={ExternalLinks.googleform} target="_blank">
              Commander un article
            </Link>
          </div>

          <div className="flex md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -mr-2" onClick={() => setIsOpen(!isOpen)}>
            <BiMenuAltRight className="text-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden w-full mx-auto bg-yellow-900 bg-opacity-20 z-10 flex flex-col justify-center items-center gap-4 text-white mt-5 py-3 transition-all duration-300`}>
        {menuData?.map((item) => (
           <Link
           key={item.id}
           href={item?.url}
           className="cursor-pointer border-b-2 font-bold border-b-yellow-900 hover:border-b-[var(--palette-2)] flex items-center justify-center gap-2 relative text-[var(--palette-1)] px-4 py-1 w-[50%] hover:text-[var(--palette-3)] transition-all duration-300"
         >
           {item.name}
         </Link>
        ))}
        <div className="font-semibold bg-[var(--palette-1)] text-white px-4 py-2 rounded-full md:flex items-center text-center gap-2 cursor-pointer hover:bg-[var(--palette-2)] transition-all duration-300 w-[50%]">
            <Link href={ExternalLinks.googleform} target="_blank">
              Commander un article
            </Link>
          </div>
      </div>
    </>
  );
}
