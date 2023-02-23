import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
const BUCKET_URL = "https://freshapproach.s3.us-east-2.amazonaws.com/";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


// On load, load these categories
export const getServerSideProps = async ({req}) =>
{
  const categories = await prisma.product_sub_category.findMany();
  return {props: {categories}}
}

export default function Home({categories}) {

  // need to append date to make name unique
  const currentTime = new Date().toLocaleTimeString();

  const [file, setFile] = useState();
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    

    // add image to html so they can see it
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  const uploadFile = async () => {
    let { data } = await axios.post("/api/s3/uploadFile", {
      name: file.name + currentTime ,
      type: file.type,
    });

    console.log(data);
    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + file.name + currentTime);
    setUploadingStatus("");
    setFile(null);
  };


// Your submit handler function in JavaScript
const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  fetch("/api/AddListing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if(response.message === 'Success'){
        alert("Sucessfully added to your Listings!")
        //redirect to wherever need to change to "Your Listings" or something like that
        window.location = "/";
      }
      else{
        alert("Error: Please fill out form again")
      }
      

    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl space-y-8">
              <h2 className=" text-left text-5xl font-normal tracking-tight text-green-600 space-y-5 rounded-md  p-5 columns-2">
                Add a Listing
              </h2>

            
            <form onSubmit={submitHandler} type="POST" className=" flex flex-row  mt-8 p-10 space-y-6 rounded-md shadow drop-shadow-md  bg-red-50">
           
                <div className="flex flex-col">
                 <div className="flex flex-col  drop-shadow-md space-y-2">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the listing title"
                    />
                </div>

                <div className="flex flex-col space-y-2  drop-shadow-md">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="textarea"
                        autoComplete="description"
                        required
                        className=" h-24 relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the listing description"
                    />
                </div>

                <div className="flex flex-col space-y-2  drop-shadow-md">
                    <label htmlFor="product_sub_category_ID">Category</label>
                    <select required name="product_sub_category_ID" id="product_sub_category_ID" className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option  default disabled value="kg">Choose Category</option>


                        {categories.map(item => (
                            <option value={item.product_sub_category_ID}>{item.sub_category_name}</option>
                        ))}
                    </select>
                </div>



                <div className="flex flex-col space-y-2  drop-shadow-md">
                    <label htmlFor="price">Price ($)</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        autoComplete="price"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the price per quantity"
                    />
                </div>

                {/* It makes sense for me to do "preferred contact method" in their user bio */}
                <div className="flex flex-row space-y-4  drop-shadow-md">
                    <label className="space-y-4" htmlFor="quantity_available">Quantity Available</label>
                    <input
                        id="quantity_available"
                        name="quantity_available"
                        type="number"
                        autoComplete="quantity_available"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter how much is available"
                    />

<                   label htmlFor="unit_type">Unit</label>

                    <select required name="unit_type" id="unit_type" className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option default disabled value="">Choose Unit Type</option>
                        <option value="kg">Kilogram</option>
                        <option value="lb">Pound</option>
                        <option value="bushel">Bushel</option>
                    </select>
                </div> 

                </div>

                <div class="flex items-center justify-center m-6 w-60">
                        <label required htmlFor="dropzone-file" class="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 shadow drop-shadow-md  rounded-lg cursor-pointer bg-white">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-20 h-20 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-black text-lg">ADD A PHOTO</p>
                                <p class="mb-2 text-sm text-black"><span class="font-semibold">Click to upload</span> a PNG or JPG</p>
                            </div>
                            <input id="dropzone-file" type="file" onChange={(e) => selectFile(e)} multiple class="hidden" />
                            {file && ( <p>Selected file: {file.name}</p>)}

                        </label>


                        <p><img id="output" width="200" /></p>

                        {uploadedFile && <img src={uploadedFile} />}
                </div> 

                <button
                        onClick={uploadFile}
                        type="submit"
                        class="font-Poppins inline-block px-6 py-2.5 bg-Sage text-white font-medium text-xs leading-tight uppercase rounded
                         shadow-md hover:bg-cyan-900 hover:shadow-lg focus:bg-cyan-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800
                          active:shadow-lg transition duration-150 ease-in-out h6">
                            Add Listing
                </button>

            </form>       
          </div>
        </div>
      </main>
    </div>
  );
}
