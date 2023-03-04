import Link from "next/link";
import Image from "next/image";
import { MenuIcon, UserCircleIcon, SearchIcon } from "@heroicons/react/solid";
import SubscribeButton from "../components/SubscribeButton";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 bg-nearBlack  p-5 md:px-60">
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
