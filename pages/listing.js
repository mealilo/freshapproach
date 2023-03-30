import React from "react";
import prisma from '../lib/prisma';
import { makeSerializable } from '../lib/util';
import { useRouter } from "next/router";
import SVG from "../public/icons/svg";
import Image from "next/image";
import SubscribeButton from "../components/SubscribeButton";


export const getServerSideProps = async (context) => {
  const { query } = context;
  const listing_id = parseInt(query.id);

  const listing = await prisma.listing.findUnique({
    where: {
      listing_ID: listing_id,
    },
    include: {
      listing_picture: true,
    },  
  });

  const seller = await prisma.producer.findUnique({
    where: {
      producer_ID: listing.producer_ID,
    },
    include: {
      person: true,
    }
  });

  return {
      props: { listing: makeSerializable(listing), seller: makeSerializable(seller) },
  }
}

const Listing = (props) => {
  const { description, is_available, listing_picture, price, quantity_available, title, unit_type, city, zipcode } = props.listing;
  const { first_name, last_name, profile_picture_link } = props.seller.person;
  const { phone_number } = props.seller;
  const [buttonVisible, setButtonVisible] = React.useState(true);

  const handleClick = () => {
    setButtonVisible(!buttonVisible);
  };

  return (
    <div className="text-left bg-gray-50 text-gray-800 py-16 px-16">
      <div class="pb-12">
        <h1 className="text-7xl font-bold mt-0 mb-6 text-Orange">{title}</h1>
      </div>
      <div class="flex w-full">
        <div class="flex flex-col flex-wrap w-1/5 mr-8 rounded-lg shadow-lg bg-white overflow-hidden">
          {listing_picture.map(pic => (
            <img className="block w-full h-full object-cover rounded-lg" src={pic.picture_link} key={pic.listing_picture_ID} alt="gallery"/>
          ))}
        </div>
        <div class="flex justify-center items-center w-2/5 mr-8 p-6 rounded-lg shadow-lg bg-white">
          <div class="flex flex-row">
            <div className="flex pr-5 justify-center items-center">
              <div className="rounded-full h-24 w-24 overflow-hidden">
                <img src={profile_picture_link} class="block object-cover rounded-full" alt=""/>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="text-base font-medium">{first_name} {last_name}</p>
              <p class="text-base">I’m a new gardener, and got a lot of veggies this season. Just wanting to get rid of my extra produce!</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-wrap w-2/5 justify-between p-6 rounded-lg shadow-lg bg-white">
          <div>
            <h5 class="text-Orange text-4xl leading-tight font-medium mb-2">${price} per {unit_type}</h5>
            <p class="pb-2 border-b-2">
              {description}
            </p>
            <p class="text-gray-700 text-base mb-2 pt-4">
              OPEN HOURS: Saturdays, 10 - 2 PM
            </p>
            <p class="text-gray-700 text-base mb-2">
              AVAILABILITY: {quantity_available}
            </p>
            <p className={`${buttonVisible ? 'hidden': ''}`}>
              PHONE NUMBER: {phone_number}
            </p>
            <p class="text-gray-700 text-base mb-2 pt-4">
              City: {city}
            </p>
            <p class="text-gray-700 text-base mb-2 pt-4">
              Zipcode: {zipcode}
            </p>  
          </div>
          <button type="button" onClick={handleClick} className={`${buttonVisible ? '': 'hidden'} w-full px-6 py-2.5 text-white font-medium text-sm leading-tight uppercase 
          rounded shadow-md bg-Sage hover:bg-sageAnimate focus:bg-sageAnimate active:bg-sageAnimate hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out`}>
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
