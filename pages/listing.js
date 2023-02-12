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
      <div class="pb-16">
        <h1 className="text-7xl font-bold mt-0 mb-6 text-Orange">Carrots and Peas</h1> {/** will eventually be replaced with dynamic data*/}
        <div class="flex flex-row">
          <SVG name="star" class="text-Orange w-5" />
          <p className="text-xl pl-2">4.8 | 48 Reviews  —  114 E 1750 S, Perry, UT 84302</p>
        </div>
      </div>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container py-2">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="flex pt-16">
        <div class="flex flex-col grow">
          <div class="flex flex-row py-7 mx-7 border-b">
            <div class="pr-5">
              <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" class="w-20 rounded-full" alt=""/>
            </div>
            <div>
              <p class="text-base font-medium">Seller Name</p>
              <p class="text-base">I’m a new gardener, and got a lot of veggies this season. Just wanting to get rid of my extra produce!</p>
            </div>
          </div>
          <div class="flex flex-row py-7 mx-7">
            <div>
              <p class="text-base font-medium">Want to Join Our SEO?</p>
              <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-Orange text-4xl leading-tight font-medium mb-2">$5 per bunch</h5>
          <p class="text-gray-700 text-base mb-4">
            OPEN HOURS: Saturdays, 10 - 2 PM
          </p>
          <p class="text-gray-700 text-base mb-4">
            AVAILABILITY: We have mainly carrots and peas, but some other produce is available as well on request.
          </p>
          <button type="button" class="w-full px-6 py-2.5 bg-Sage text-white font-medium text-xs leading-tight 
            uppercase rounded shadow-md hover:bg-sageAnimate hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">
              Contact Seller
            </button>
        </div>
      </div>
    </div>
  )
};

export default Listing;