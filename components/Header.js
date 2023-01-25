
import Link from "next/link"
import Image from "next/image";
import {MenuIcon, UserCircleIcon, SearchIcon} from '@heroicons/react/solid';
import SubscribeButton from '../components/SubscribeButton';
function Header() {
  return (
  <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-60">
        {/* Left */}
        <Link href="/">
        <div className='relative flex items-center h-10 cursor-pointer'>
        <Image alt="closeCropLogo" src="/images/CloseCropLogo.png" fill style={{objectFit:"contain" ,objectPosition:"left"}}/>
        </div>
        </Link>
        {/* Middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm w-64">
        <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Search for Produce"/>
        <SearchIcon className="hidden md:inline-flex h-8 bg-closecropgreen text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4 justify-end">
            <Link href="/BecomeVendor"> 
               <p>Become a Vendor!</p>
            </Link>
            <Link href="ExploreProduce">
               <p>Explore Produce</p>
            </Link>
            <Link href="SignIn">
               <p>Sign In</p>
            </Link>
            <Link href="/Subscribe">
        <SubscribeButton/>
    </Link>
     <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
     </div>
        </div>
        </header>
  )
}

export default Header;