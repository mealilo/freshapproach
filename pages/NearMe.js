import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import SubscribeButton from "../components/SubscribeButton";
const prisma = new PrismaClient();

export const getServerSideProps = async (context) => {
  const { query } = context;
  const producer_ID = parseInt(query.id);
  

  // get listings based on 
  let listings = await prisma.listing.findMany({
    where: {
        producer_ID: 4 ,
    }
  ,
  include: {
    listing_picture: true,
  },
  });

  prisma.$disconnect();
  listings = JSON.parse(JSON.stringify(listings));
  return {props: {listings}}
}




//delete listing



//Update Profile
const handleUpdateProfile = async (event) => {
  //collect correct listing to send to delete

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  await fetch('/api/SellerProfileCRUD?functionName=updateProfile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      console.log('Profile Updated');
      window.reload(true);
    } else {
      console.error('Failed to update Profile Please try again');
    }
  })
  .catch(error => {
    console.error(error);
  });
}



const handleSearchZip = async (codes) => {
    await  fetch('/api/ListingSearch?functionName=searchZip', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(codes),
  })
  .then(result => {
    let producerData = result.producers;
    console.log(producerData);
  })
  .catch(error => {
    console.error(error);
  })


}

// call api with zip code
let fetchData = async (zip) => {
  //call api with passed in paramaters
  let response = await axios.get('https://app.zipcodebase.com/api/v1/radius', {
    params: {
      apikey: '8e627b60-cd03-11ed-9cbc-a586dd8a1425',
      code: zip,
      radius: '25',
      country: 'us',
      unit: 'miles',
    }
  });
  let obj = response.data.results;
  //map over the array and return the code property to add to an array
  let codes = obj.map(item => item.code);
  alert(codes);
  // call handleSearchZip with the array of zip codes to query prisma
  await handleSearchZip(codes);
}
// call api with zip code for testing
let fetchDataTest = async () => {

  let codes = ['84601', '84606', '84604', '84603', '84058', '84097', '84057', '84663', '84042', '84059', '84605', '84664', '84660', '84602', '84062', '84003', '84651', '84082', '84045', '84043'];;
  // call handleSearchZip with the array of zip codes to query prisma
  let items = await handleSearchZip(codes);
  alert(items);

}
//this function is called until a length of 5 is reached
let handleChange = (event) => {
  let value = event.target.value;
  setInputValue(value);
  if (value.length === 5) {
  alert(`You are searching for ${value}`);

  //rename variable
  let zip = value;
  
  //comment out to save requests
  //fetchData(zip);
  fetchDataTest();
  }
}
let [inputValue, setInputValue] = useState('Enter a Zip Code!');

export default function Home({listings}) {

  // if(session){
    return (
   <div className="flex items-center">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" strokeLinejoin="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={inputValue} onChange={handleChange}   type="number" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
            </input>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>     
  </div>
    );
  // };


}