
import Image from "next/image";
import {MenuIcon, UserCircleIcon} from '@heroicons/react/solid';
function Header() {
  return (
  <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-60">
        {/* Left */}
        <div className='relative flex items-center h-10 cursor-pointer'>
        <Image alt="closeCropLogo" src="/images/CloseCropLogo.png" fill style={{objectFit:"contain" ,objectPosition:"left"}}/>
        </div>
        {/* Middle */}
        <div></div>
        {/* Right */}
        <div className="flex items-center space-x-4 justify-end">
            <p>Become a Vendor</p>
            <p>Explore Produce</p>
            <p>Sign In/Sign Up</p>
            <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out h6">Subscribe</button>
     <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
     </div>
        </div>
        </header>
  )
}

export default Header