import Link from "next/link";
import Image from "next/image";
import { MenuIcon, UserCircleIcon, SearchIcon } from "@heroicons/react/solid";
import SubscribeButton from "../components/SubscribeButton";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-nearBlack  p-5 md:px-60">
      {/* Left */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Sahitya:&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      ></link>
      <Link href="/">
        <div className="relative flex items-center h-10 cursor-pointer">
          <p className="text-white text-4xl font-Sahitya"> Close Crop </p>
        </div>
      </Link>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm w-64 bg-white">
        <input
          className="flex-grow pl-5 bg-white outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search for Produce"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-Sage text-white rounded-full p-2 cursor-pointer md:mx-2 " />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-10 justify-end">
        <Link href="/BecomeVendor">
          <p className="text-white font-Poppins hover:text-Sage whitespace-nowrap">
            Become a Vendor!
          </p>
        </Link>
        <Link href="listings">
          <p className="text-white font-Poppins hover:text-Sage whitespace-nowrap">
            Explore Produce
          </p>
        </Link>
        <Link href="SignIn">
          <p className="text-white font-Poppins hover:text-Sage whitespace-nowrap">
            Sign In
          </p>
        </Link>
        <Link href="/Subscribe">
          <SubscribeButton />
        </Link>
      </div>
    </header>
  );
}

export default Header;
