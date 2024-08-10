"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Unbounded, Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change 50 to the number of pixels where the background change should occur
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 pt-8 left-0 w-full bg-customBG flex items-center lg:flex lg:justify-between lg:pt-4 lg:gap-10 lg:px-52 z-50 transition-colors duration-300 ${
        isScrolled ? "lg:bg-customBG" : "lg:bg-transparent"
      }`}
    >
      <div className="navbar-start flex justify-between w-full lg:w-fit">
        <a className="btn btn-ghost text-xl">
          <Image src="/images/Logo.png" alt="Logo" width={100} height={100} />
        </a>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border rounded-full p-1 border-green-800"
            >
              <path
                d="M5.96484 8.9624H29.9648"
                stroke="#0B7373"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 18H30"
                stroke="#0B7373"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.96484 26.9624H29.9648"
                stroke="#0B7373"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] right-4 top-12 h-screen w-screen p-2 shadow flex flex-col justify-center items-end gap-4 text-customGreen"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Customize Your Trip</a>
            </li>
            <li>
              <a>Destination</a>
            </li>
            <li>
              <a>Article</a>
            </li>
            <li
              className={`rounded-full border border-customGreen p-2 hover:cursor-pointer font-bold ${albertSans.className}`}
            >
              <a className="hover:border-b-2 border-customGreen">
                Need Assistance?
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex lg:w-full">
        <ul
          className={`px-1 lg:flex lg:justify-end lg:w-full lg:gap-36 p-4 items-center ${
            isScrolled ? "text-customGreen" : "text-white"
          }`}
        >
          <li
            className={`hover:cursor-pointer ${
              albertSans.className
            } hover:border-b-2 ${
              isScrolled ? "border-customGreen" : "border-white"
            } font-bold`}
          >
            <a>Homepage</a>
          </li>
          <li
            className={`hover:cursor-pointer ${
              albertSans.className
            } hover:border-b-2 ${
              isScrolled ? "border-customGreen" : "border-white"
            } font-bold`}
          >
            <a>Customize Your Trip</a>
          </li>
          <li
            className={`hover:cursor-pointer ${
              albertSans.className
            } hover:border-b-2 ${
              isScrolled ? "border-customGreen" : "border-white"
            } font-bold`}
          >
            <a>Destination</a>
          </li>
          <li
            className={`hover:cursor-pointer ${
              albertSans.className
            } hover:border-b-2 ${
              isScrolled ? "border-customGreen" : "border-white"
            } font-bold`}
          >
            <a>Article</a>
          </li>
          <li
            className={`rounded-full border ${
              isScrolled
                ? "border-customGreen hover:bg-customGreen hover:text-white"
                : "border-white"
            } p-4 hover:bg-customGreen hover:border-customGreen hover:cursor-pointer font-bold ${
              albertSans.className
            }`}
          >
            <a
              className={`hover:border-b-2 ${
                isScrolled ? "border-white" : "border-white"
              }`}
            >
              Need Assistance?
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
