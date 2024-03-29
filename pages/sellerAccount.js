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
        producer_ID: parseInt(producer_ID) ,
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

const handleDeleteProfile = async (event) => {

  //gather up data
  let formData = {};
  formData["personID"] = document.getElementById('personID').value;
  

  await fetch('/api/SellerProfileCRUD?functionName=deleteProfile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      console.log('Profile deleted');
      signOut();
      window.location("index.js")
      
    } else {
      console.error('Failed to delete profile');
    }
  })
  .catch(error => {
    console.error(error);
  });
}


//delete listing
const handleDeleteListing = async (listing_ID) => {
  //collect correct listing to send to delete
  let formData = {};
  formData["listing_ID"] = listing_ID;

  await fetch('/api/SellerProfileCRUD?functionName=deleteListing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      alert("Listing Deleted Sucessfully")
      window.location = `/sellerAccount?id=${session?.user.id}`;
    } else {
      console.error('Failed to delete listing. Please try again');
    }
  })
  .catch(error => {
    console.error(error);
  });
}


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

export default function Home({listings}) {
  const { data: session } = useSession();
  // if(session){
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
              <div className="space-y-5 rounded-md shadow-xl p-5  border-t-8 border-teal-800">
              <div className="flex justify-between"> 
                              <h2 className=" text-left text-4xl font-normal tracking-tight text-gray-900">
                                Account Information 
                              </h2>                               
                                      <svg  onClick={ async () => {
                                        const confirmBox = window.confirm(
                                          "Are you sure you want to delete your profile? This action is unrecoverable! All items will be deleted"
                                        )
                                        if (confirmBox) {
                                          try {
                                            await handleDeleteProfile();
                                            alert("Successfully deleted");
                                            window.location = "/sellerAccount";
                                          }
                                          catch{
                                            alert("Unable to delete profile. Please try again later");
                                          }
                                        }
                                      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 cursor-pointer mx-2 ">
                                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                                      </svg>
     
                          </div>
              </div>

                            {/* Listing Stuffs */}
                            <div className="space-y-5 rounded-md shadow-xl p-8 border-t-8 border-orange-400">
                <div className="flex flex-wrap">
                  <h3 className="text-xl font-light leading-6 text-gray-700 tracking-wider">
                    Your Listings
                  </h3>
                </div>
                <div className="flex flex-col">
                          {listings.map(item => (
                  <div className="flex  m-5 shadow-md rounded-md  justify-between "  key={item.listing_ID}>
                    <div className="flex ">
                              {item.listing_picture && item.listing_picture[0] && item.listing_picture[0].picture_link ?
                              <img className="rounded-md object-cover  h-40 w-60" src={item.listing_picture[0].picture_link} alt="Listing picture" />
                              :
                              <img className="rounded-md   h-40 w-60" src="https://freshapproach.s3.us-east-2.amazonaws.com/img-placeholder.png" alt="Broken image" />
                            }
                            <div className=" ml-6 mt-4">
                                <h1 className=" text-2xl font-normal text-black">{item.title}</h1>
                                <h3 className="my-1">{item.description}</h3>
                                <h3 className="text-gray-500 my-1">${item.price}/{item.unit_type}</h3>
                            </div>
                    </div>
                    
                    
                    <div className="flex p-4">
                            {/* <div className="cursor-pointer mx-2"> 
                              <svg 
                              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                              </svg>
                            </div> */}
                          <div className="cursor-pointer mx-2"
                              onClick={ async () => {
                                const confirmBox = window.confirm("Are you sure you want to delete? All data will be lost");
                                if (confirmBox === true) {
                                  await handleDeleteListing(item.listing_ID);
                                  window.location.reload(true);
                                }
                                else {
                                  alert("Delete Cancelled.");
                                }
                              }}> 
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                              </svg>
                          </div>
                    </div>
                 
                  </div>
                ))}
                </div>
              </div>


              {/* Personal Information */}
                <div className="rounded-md space-y-2 shadow-xl p-8 border-t-8 border-orange-400">
                          <h4 className="text-xl font-medium">Account Information</h4>
                  <form  id="profile"  onSubmit={(e) => handleUpdateProfile(e)} className="mt-8 space-y-6">
                  
                  <div className="columns-2">
                  <input
                          hidden
                          id="personID"
                          name="personID"
                          defaultValue={session?.user.person_ID}
                        />


                        <input
                          hidden
                          id="id"
                          name="id"
                          defaultValue={session?.user.producer.producer_ID}
                        />
                    <div>
                      <div>
                        <label>First Name</label>
                        <input
                          id="fname"
                          name="fname"
                          type="text"
                          required
                          className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue={session?.user.first_name}
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
                          defaultValue={session?.user.email}
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
                        defaultValue={session?.user.last_name}
    
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
                              defaultValue={session?.user.password}
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
                              }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
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
                        defaultValue={session?.user.producer.phone_number}
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
                          className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue={session?.user.producer.address}
                                  
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
                          defaultValue={session?.user.producer.zip_code}
                        />
                        <div className="pt-5"></div>
                      </div>
                    </div>
                  </div>

                        <div className="flex items-center justify-center   py-8">
                      <div className="flex items-center justify-center px-6 " onClick={() => {
                            const confirmBox = window.confirm(
                              "Are you sure you want to cancel? All current data will be lost"
                            )
                            if (confirmBox) {
                              window.location = "/";
                            }
                          }}>
        
                          <p className=" cursor-pointer text-center px-6 w-60 py-2.5 text-black font-medium text-sm leading-tight uppercase rounded-md shadow-md bg-white text-black border border-grey-700 hover:bg-slate-50 focus:bg-slate-100">cancel</p>
                      </div>
                      <SubscribeButton orange text="Save Changes"  type="submit" style="group relative flex w-full justify-center w-60 "/>
                      <div>
                      
                      </div>
                    </div>
                  
                  </form>
                </div>
            
              
            
  
  

          
              {/* </form> */}
            </div>
          </div>
        </main>
      </div>
    );
  // };

  // return (
  //   <>
  //  You are not signed in! So you cannot see this page!
  // </>
  // )
  
}