import Head from "next/head";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import SubscribeButton from "../components/SubscribeButton";

const BUCKET_URL = "https://freshapproach.s3.us-east-2.amazonaws.com/";
const prisma = new PrismaClient();

// On load, load these categories
export const getServerSideProps = async (context) => {
  const { query } = context;
  const person_ID = parseInt(query.id);
  const subcategories = await prisma.product_sub_category.findMany({
    orderBy: {
      sub_category_name: 'asc',
    },
  });
  const categories = await prisma.product_category.findMany({
    orderBy: {
      category_name: 'asc',
    },
  });
  const producerData = await prisma.producer.findUnique({
    where: {
      person_ID: person_ID,
    }
  });
  prisma.$disconnect();
  return {props: { categories, subcategories, producer: producerData }}
}

export default function Home({categories, subcategories, producer}) {
  // need to append date to make name unique
  const currentTime = new Date().toLocaleTimeString();

  const [file, setFile] = useState();
  const [uploadingStatus, setUploadingStatus] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  //select file for displaying on the page
  const selectFile = (e) => {
    setFile(e.target.files[0]);
    // add image to html so they can see it
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  //upload file to AWS
  const uploadFile = async () => {
    setUploadingStatus("Uploading images...");

    //send data to s3 upload
    let { data } = await axios.post("/api/s3/uploadFile", {
      title: file.name ,
      type: file.type,
    });

    const url = data.url;
    let { data: newData } = await axios.put(url, file, {
      headers: {
        "Content-type": file.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadedFile(BUCKET_URL + file.name);
    setUploadingStatus("");
    setFile(null);
  };

  // Your submit handler function in JavaScript
  const submitHandler = async (event) => {
    event.preventDefault();

    await uploadFile();

    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    data.producer_ID = producer.producer_ID;

    fetch("/api/AddListing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(async (response) => {
      if(response.message === 'Success'){
        try{
          // get id of newly created listing and then create a listing picture
          const id = response.id;
          await createListingPicture(id);
          alert("Sucessfully added to your Listings!")
        }
        catch{
          alert("Error Occured, please try again");
        }
        //redirect to home
        window.location = "/";
      }
      else{
        alert("Error: Please fill out form again")
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }

// create listing picrture
const createListingPicture = async (listingID) => {
  // create needed data
  const data = {
      listing: listingID,
      listing_picture: BUCKET_URL + file.name
  }
  //call api to  add a listing picture
  fetch("/api/AddListingPicture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div className="">
      {/* <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className= "w-full max-w-3xl space-y-8">
            <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className="text-left text-5xl font-normal tracking-tight text-gray-900">
                Add A Listing
              </h2>
            </div>
            <form onSubmit={submitHandler} type="POST" id="addlisting" className="mt-8 space-y-6">
              
              <div className="rounded-md space-y-2 shadow-xl p-8 border-t-8 border-orange-400 flex flex-row justify-center items-center align-middle">

               
                <div className="flex w-80 px-5 flex-col">
                <h4 className="text-xl font-medium">Enter Information </h4>
                 <div className="flex flex-col  drop-shadow-md  py-2">
                      <label htmlFor="title">Title</label>
                      <input
                          id="title"
                          name="title"
                          type="text"
                          autoComplete="title"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="What is your product? (e.g. Apples)"
                      />
                  </div>

                  <div className="flex flex-col  py-2  drop-shadow-md">
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

                  <div className="flex flex-col  py-2  drop-shadow-md">
                      <label htmlFor="product_sub_category_ID">Category</label>
                      <select required name="product_sub_category_ID" id="product_sub_category_ID" className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          <option  default disabled value="kg">Choose Category</option>


                          {categories.map(item => (
                              <option key={item.product_category_ID.toString()} value={item.product_category_ID}>{item.category_name}</option>
                          ))}
                      </select>
                  </div>

                  <div className="flex flex-col  py-2  drop-shadow-md">
                      <label htmlFor="product_sub_category_ID">Subcategory</label>
                      <select required name="product_sub_category_ID" id="product_sub_category_ID" className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          <option  default disabled value="kg">Choose a Subcategory</option>


                          {subcategories.map(item => (
                              <option key={item.product_sub_category_ID.toString()} value={item.product_sub_category_ID}>{item.sub_category_name}</option>
                          ))}
                      </select>
                  </div>

                  <div className="flex flex-col  py-2  drop-shadow-md">
                      <label htmlFor="price">Price ($)</label>
                      <input
                          id="price"
                          name="price"
                          type="number"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter the price per quantity"
                      />
                  </div>

                  {/* It makes sense for me to do "preferred contact method" in their user bio */}
                  <div className="flex flex-col  py-2  drop-shadow-md">
                      <label  htmlFor="quantity_available"> Available</label>
                      <input
                          id="quantity_available"
                          name="quantity_available"
                          type="number"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter how much is available"
                      />
                  </div> 

                      
                  <div className="flex flex-col py-  drop-shadow-md">
                      <label htmlFor="unit_type">Unit</label>
                      <select required name="unit_type" id="unit_type" className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value="kg">Kilogram</option>
                          <option value="lb">Pound</option>
                          <option value="bushel">Bushel</option>
                          <option value="each"> Each</option>
                          <option value="each"> Crate</option>
                          <option value="each"> Basket</option>
                          <option value="each"> Box </option>
                          <option value="each"> Bag </option>
                          <option value="each"> Tray </option>
                          <option value="each"> Dozen </option>
                          <option value="each"> Piece </option>
                          <option value="each"> Bundle</option>
                          <option value="each"> Bunch</option>
                      </select>
                  </div> 

                </div>
                {/* Image Upload */}
                  {/* <div class="flex items-center justify-center m-6">
                    <div class="flex flex-col items-center">
                      <p><img id="output" width="250" /></p>
                      {file && ( <p className="text-xs pt-1">Selected file: {file.name}</p>)}
                      {uploadingStatus && <p>{uploadingStatus}</p>} 
                      {file === undefined ? (
                        <label required name="photo" htmlFor="dropzone-file" class="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 shadow drop-shadow-md  rounded-lg cursor-pointer bg-white">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-20 h-20 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-black text-lg">Add A Photo</p>
                            <p class="mb-2 text-sm text-black"><span class="font-semibold">Click to upload</span> a PNG or JPG</p>
                          </div>
                          <input name="photo" id="dropzone-file" type="file" onChange={(e) => selectFile(e)} multiple class="hidden" required />
                        </label>
                      ) : null} 
                      {file !== undefined ? (
                        <label required name="photo" htmlFor="dropzone-file" class="flex flex-col items-center justify-center py-1 px-4 mt-2 border-2 border-gray-300 shadow drop-shadow-md rounded-lg cursor-pointer bg-white hover:bg-slate-50 transition duration-200 ease-in-out">
                          <div class="flex flex-col items-center justify-center">
                            <p class="text-sm text-black"><span class="font-semibold">Change photo</span> (.png or .jpg)</p>
                          </div>
                          <input name="lilia" id="dropzone-file" type="file" onChange={(e) => selectFile(e)} multiple class="hidden" required />
                        </label>
                      ) : null}
                    </div> */}

                <div class="flex items-center justify-center m-6  ">
                  <div class="flex flex-col items-center">
                    <label required htmlFor="dropzone-file" class="flex flex-col items-center justify-center w-80 h-64 border-2 border-gray-300 shadow drop-shadow-md  rounded-lg cursor-pointer bg-white">
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg class="w-20 h-20 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                  <p class="mb-2 text-sm text-black text-lg">ADD A PHOTO</p>
                                  <p class="mb-2 text-sm text-black"><span class="font-semibold">Click to upload</span> a PNG or JPG</p>
                              </div>
                              <input id="dropzone-file" type="file" onChange={(e) => selectFile(e)} multiple class="hidden" required />

                          </label>
                          {file && ( <p>Selected file: {file.name}</p>)}
                          <p><img id="output" width="250" /></p>
                        {uploadingStatus && <p>{uploadingStatus}</p>}   
                  </div>
              </div>
              </div>
              <div className="columns-2">
                <div>
                  <SubscribeButton white type="button" text="Cancel" style="group relative flex w-full justify-center !text-black" onClick={() => {
                        const confirmBox = window.confirm(
                          "Are you sure you want to cancel? All data will be lost"
                        )
                        if (confirmBox === true) {
                          window.location = "/";
                        }
                      }}
                  />
                </div>
                <div>
                  <SubscribeButton green text="Post Listing" type="submit" style="group relative flex w-full justify-center" /> 
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
