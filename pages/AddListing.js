import Head from "next/head";
import React, { useState } from "react";
import CreatePerson from "../components/Banner";


export default function Home() {

// Your submit handler function in JavaScript
const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  fetch("/api/CreatePersonAndProducer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if(response.message === 'Success'){
        //redirect to wherever.
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
            <form onSubmit={submitHandler} type="POST" className="mt-8 p-10 space-y-6 rounded-md shadow drop-shadow-md  bg-red-50">
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
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        autoComplete="price"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the listing price"
                    />
                </div>
                <div className="flex flex-col space-y-2  drop-shadow-md">
                    <label htmlFor="category">Category</label>
                    <input
                        id="category"
                        name="category"
                        type="category"
                        autoComplete="price"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the listing category"
                    />
                </div>
                <div className="flex flex-col space-y-2  drop-shadow-md">
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="number"
                        autoComplete="description"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter the listing description"
                    />
                </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
