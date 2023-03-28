import Head from "next/head";
import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import SubscribeButton from "../components/SubscribeButton";

import axios from 'axios';

export default function Home() {

    let [inputValue, setInputValue] = useState('Enter a Zip Code!');



    let [listings, setListings] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          let response = await axios.get('/api/my-endpoint'); // replace with your API endpoint
          let codes = response.data.codes; // assuming your response data has a "codes" field containing an array of zip codes
          let listings = await prisma.listing.findMany({
            where: {
              OR: codes.map((code) => ({ zipCode: code })),
            },
          });
          setListings(listings);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);


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


        console.log(codes);




    }

    let handleChange = (event) => {
        let value = event.target.value;
        setInputValue(value);
        if (value.length === 5) {
        alert(`You are searching for ${value}`);

        //rename variable

        let zip = value;
        fetchData(zip);

        }


    }
  
    return (
      <div className="flex items-center">

        <p>{inputValue}</p>


    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative w-80">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={inputValue} onChange={handleChange}   type="number" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
        </input>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>



        
      </div>
    );
}
