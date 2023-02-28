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


          </div>
        </div>
      </main>
    </div>
  );
}