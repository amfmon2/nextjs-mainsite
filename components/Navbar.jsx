import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? "fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100]" : "fixed w-full h-20 bg-[#ecf0f3] z-[100]" }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/' >
            <Image
            src="/assets/navLogo.png"
            alt="/"
            width="50"
            height="50"
            />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/navLogo.png"
                width="35"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-5">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py4 text-sm">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full">
              <div className="">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
