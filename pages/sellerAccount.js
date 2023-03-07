import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const prisma = new PrismaClient();

export const getServerSideProps = async ({req}) =>
{
  let listings = await prisma.listing.findMany({
    where: {
        producer_ID: 1,
    }
  ,
  include: {
    listing_picture: true,
  },
  });
  // return profile based on producerID
  let profile = await prisma.person.findUnique({
    where: {
      person_ID: 1,
    },
    // include producer info
    include: {
      producer: true,
    }
  });
  prisma.$disconnect();
  profile.created_on = profile.created_on.toISOString();
  listings = JSON.parse(JSON.stringify(listings));
  profile = JSON.parse(JSON.stringify(profile));
  return {props: {listings, profile}}
}


export default function Home({listings, profile}) {
  const { data: session } = useSession();
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-2">
          <div className="w-full  space-y-8">
            <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className=" text-left text-4xl font-normal tracking-tight text-gray-900">
                Account Information 
              </h2>
            </div>
            <form  type="POST" className="mt-8 space-y-6">
              <h1 className="text-4xl"></h1>
              <div className="rounded-md space-y-2 shadow-xl p-8 border-t-8 border-orange-400">
                <h4 className="text-xl font-medium">Account Information</h4>
                <div className="columns-2">
                  <div>
                    <div>
                      <label htmlFor="fname">First Name</label>
                      <input
                        id="fname"
                        name="fname"
                        type="text"
                        autoComplete="fname"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={profile.first_name}
                      />
                      <div className="pt-5"></div>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                        value={profile.email}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      autoComplete="lname"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      value={profile.last_name}
  
                    />
                    <div className="pt-5" />
                  </div>
                  <div className="flex flex-col align-middle">
                    <label htmlFor="password">Password </label>
                      <div className="flex  align-middle	">
                      <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            value={profile.password}
                          />
                          <span className="cursor-pointer ml-2 align-middle">    
                            <svg
                            onClick={() => {
                              var x = document.getElementById("password");
                              if (x.type === "password") {
                                x.type = "text";
                              } else {
                                x.type = "password";
                              }
                            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                            </svg>
                          </span>
                      </div>
                  </div>
                </div>
                <h4 className="text-xl font-medium">Public Details</h4>
                <span className="text-xs text-gray-600">Details will be public to all users.</span>
                <div className="columns-2">
                  <div className="flex flex-col ">
                    <label htmlFor="zip" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      autoComplete="phone"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      value={profile.producer.phone_number}
                    />
                  </div>
                  <div className="columns-2">
                    <div className="flex flex-col ">
                      <div>
                        <label htmlFor="city">City</label><label className="text-sm text-gray-300 italic"> (optional)</label>
                      </div>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="city"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={profile.producer.address}
                                
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        autoComplete="zip"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={profile.producer.zip_code}
                      />
                      <div className="pt-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns-3 p-8">
              <div>
                <button
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Are you sure you want to cancel? All data will be lost"
                    )
                    if (confirmBox === true) {
                      window.location = "/";
                    }
                  }}
                  className="group relative flex w-full justify-center rounded-md border border-grey-700 bg-white-600 py-2 px-4 text-sm font-medium shadow-lg text-grey hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "Are you sure you want to delete your profile? This action is unrecoverable!"
                    )
                    if (confirmBox === true) {
                      window.location = "/";
                    }
                  }}
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Delete Account
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    alert(
                      "Account Saved. Please add logic to me, Brennan."
                    )
                    window.location = "/";
                  }}
                
                  
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
            </form>
            <div className="space-y-5 rounded-md shadow-xl p-8 border-t-8 border-orange-400">
              <div class="flex flex-wrap">
                <h3 class="text-xl font-light leading-6 text-gray-700 tracking-wider">
                  Your Listings
                </h3>
              </div>
              <div className="flex flex-col">
                        {listings.map(item => (
                <div class="flex  m-5 shadow-md rounded-md  justify-between "  key={item.listing_ID}>
                  <div className="flex ">
                          <img
                          src={item.listing_picture[0].picture_link}
                          alt=""
                          class="rounded-md object-cover  h-40 w-60"
                          />
                          <div className=" ml-6 mt-4">
                              <h1 className=" text-2xl font-normal text-black">{item.title}</h1>
                              <h3 className="my-1">{item.description}</h3>
                              <h3 className="text-gray-500 my-1">${item.price}/{item.unit_type}</h3>
                          </div>
                  </div>
                  <div className="flex p-4">
                          <div className="cursor-pointer mx-2"> 
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                          </div>
                        <div className="cursor-pointer mx-2"
                            onClick={() => {
                              const confirmBox = window.confirm("Are you sure you want to delete? All data will be lost");
                              if (confirmBox === true) {
                                alert("successfully Deleted");
                              }
                              else {
                                alert("Delete Cancelled.");
                              }
                            }}> 
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-6 h-6">
                                  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                            </svg>
                        </div>
                  </div>
               
                </div>
              ))}
              </div>
            </div>
        
            {/* </form> */}
          </div>
        </div>
      </main>
    </div>
  );
}