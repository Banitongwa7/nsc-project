import React from "react";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type Social = {
  id: number;
  name: string;
  url: string;
  icon: React.JSX.Element;
}[];

export default function Footer() {
  const socials: Social = [
    {
      id: 1,
      name: "Tiktok",
      url: "https://www.tiktok.com/",
      icon: <FaTiktok className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: <BsInstagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="w-full bg-[var(--palette-1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <Link href="/" className="flex justify-center">
            <Image
              src="/assets/logo/Logo_white.svg"
              alt="logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <Link
                href="#"
                className="text-white hover:text-[var(--palette-4)]"
              >
                Accueil
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link
                href="#"
                className="text-white hover:text-[var(--palette-4)]"
              >
                Nos articles
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-[var(--palette-4)]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 sm:justify-center">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                title={social.name}
                className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-[var(--palette-4)] transition-all duration-300 text-[var(--palette-4)] hover:text-[var(--palette-1)]"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-[var(--palette-4)]">
              © Nyota Skincare {new Date().getFullYear()}, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
