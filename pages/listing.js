import React from "react";
import { useRouter } from 'next/router';
import SVG from "../public/icons/svg";

const Listing = (data) => {
  const router = useRouter();
  // const data = router.query;
  console.log('HERE', data);

  console.log(data);

  return (
    <div className="text-left bg-gray-50 text-gray-800 py-16 px-16">
      <div className="pb-16">
        <h1 className="text-7xl font-bold mt-0 mb-6 text-Orange">Carrots and Peas</h1> {/** will eventually be replaced with dynamic data*/}
        <div className="flex flex-row">
          <SVG name="star" className="text-Orange w-5" />
          <p className="text-xl pl-2">4.8 | 48 Reviews  —  114 E 1750 S, Perry, UT 84302</p>
        </div>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container py-2">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex pt-16">
        <div className="flex flex-col grow">
          <div className="flex flex-row py-7 mx-7 border-b">
            <div className="pr-5">
              <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="w-20 rounded-full" alt=""/>
            </div>
            <div>
              <p className="text-base font-medium">Seller Name</p>
              <p className="text-base">I’m a new gardener, and got a lot of veggies this season. Just wanting to get rid of my extra produce!</p>
            </div>
          </div>
          <div className="flex flex-row py-7 mx-7">
            <div>
              <p className="text-base font-medium">Want to Join Our SEO?</p>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-Orange text-4xl leading-tight font-medium mb-2">$5 per bunch</h5>
          <p className="text-gray-700 text-base mb-4">
            OPEN HOURS: Saturdays, 10 - 2 PM
          </p>
          <p className="text-gray-700 text-base mb-4">
            AVAILABILITY: We have mainly carrots and peas, but some other produce is available as well on request.
          </p>
          <button type="button" className="w-full px-6 py-2.5 bg-Sage text-white font-medium text-xs leading-tight 
            uppercase rounded shadow-md hover:bg-sageAnimate hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">
              Contact Seller
            </button>
        </div>
      </div>
    </div>
  )
};

export default Listing;