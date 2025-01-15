"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

type MenuData = {
  id: number;
  name: string;
  url: string;
  subMenu?: MenuData[];
};

export default function Navbar() {
  const menuData: MenuData[] = [
    { id: 1, name: "Acceuil", url: "/" },
    { id: 2, name: "Nos articles", url: "/articles" },
    { id: 3, name: "Contact", url: "/contact" },
  ];

  return (
    <div className="w-full h-[50px] md:h-[80px] bg-[#ffffff] flex items-center justify-between px-8 transition-transform duration-300">
      <p className="logo">
        <Link href="/">
          <Image
            src="/assets/logo/Logo-tp.svg"
            alt="logonsc"
            width={80}
            height={75}
            className="md:w-[120px] md:h-[110px] w-[80px] h-[75px] cursor-pointer"
          />
        </Link>
      </p>

      <ul className="hidden md:flex items-center gap-10 font-medium text-black">
        {menuData?.map((item) => (
          <div key={item.id}>
            {item?.subMenu ? (
              <li className=" cursor-pointer flex items-center gap-2 relative">
                {item.name}
                <BsChevronDown size={14} />
              </li>
            ) : (
              <li className="cursor-pointer hover:text-green-500">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </div>
        ))}
      </ul>

      <div className="flex items-center gap-4 text-black">
        <div className="font-semibold bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer">
          <Link href={"/login"}>Commander un article</Link>
        </div>

        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -mr-2">
          <BiMenuAltRight className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}
