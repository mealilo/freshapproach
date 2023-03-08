import React, { useState } from "react";
import Link from "next/link";
import SubscribeButton from "./SubscribeButton";
import { SearchIcon } from "@heroicons/react/solid";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nearBlack px-20 py-1 flex items-center justify-between w-full flex-wrap">
      <div className="font-Sahitya flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="text-4xl tracking-tight">
          Close Crop
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          title="Menu"
          className="flex items-center px-3 py-2 border rounded text-white border-Sage hover:text-white hover:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={` block py-6 justify-center top-0 lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="/listings"
            className="block mt-4 lg:inline-block lg:mt-0 py-4 px-5 text-white hover:text-Sage transition duration-150 ease-in-out text-xl whitespace-nowrap"
          >
            Explore Produce
          </Link>
          <Link
            href="/BecomeVendor"
            className="block mt-4 lg:inline-block lg:mt-0 py-4 px-5 text-white hover:text-Sage transition duration-150 ease-in-out text-xl whitespace-nowrap"
          >
            Become a Vendor
          </Link>
          <Link
            href="SignIn"
            className="block mt-4 lg:inline-block lg:mt-0 py-4 px-5 pr-12 text-white hover:text-Sage transition duration-150 ease-in-out text-xl whitespace-nowrap"
          >
            Sign In
          </Link>
          <Link href="/Subscribe">
            <SubscribeButton green text="Subscribe" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
/**/
