"use client";
import { IoIosSettings } from "react-icons/io";

import Image from "next/image";
import Logo from "../../public/images/home-logo.png";
import Settings from "./Settings";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-5">
      {/* Logo  */}
      <div className="">
        <Image src={Logo} width={35} alt="logo" />
      </div>

      <div className="flex gap-10">
        {/* Search bar  START*/}
        <div class="relative">
          <input
            type="text"
            id="hs-leading-icon"
            class="hidden py-3 px-4 ps-11 md:block w-full border  rounded-lg text-sm focus:z-10  focus:outline-none  disabled:opacity-50  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search Hadith"
          />
          <div class="absolute   inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg
              className="flex-shrink-0 size-4  text-gray-700 md:text-gray-300 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        {/* Search bar  end*/}

        <>
          <button
            type="button"
            className="bg-green-800 p-2 rounded"
            data-hs-overlay="#hs-slide-down-animation-modal"
          >
            <IoIosSettings color="white" size={20} />
          </button>
          <div
            id="hs-slide-down-animation-modal"
            className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
          >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    সেটিংস
                  </h3>
                  <button
                    type="button"
                    className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                    data-hs-overlay="#hs-slide-down-animation-modal"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <Settings />
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Navbar;
