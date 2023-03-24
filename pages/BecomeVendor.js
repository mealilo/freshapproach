import Head from "next/head";
import React, { useState } from "react";
import CreatePerson from "../components/Banner";
import Link from "next/link";
import SubscribeButton from "../components/SubscribeButton";

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
        if (response.message === "Success") {
          //redirect to wherever.
          window.location = "/";
        } else {
          alert("Error: Please fill out form again");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="">
      {/* <Head>
        <title> Close Crop</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl space-y-8">
          <div class="flex flex-col items-center space-y-5 rounded-md shadow-xl p-5 border-t-8 border-teal-800">
  <h2 class="text-5xl font-normal tracking-tight text-gray-900">Vendor Sign Up</h2>
  <p class="text-center text-sm md:text-base">
    Do you have excess produce you want to sell? Do you want to make some extra money selling fruits and vegetables? You should sign up to become a Fresh Approach vendor! As a vendor on Fresh Approach, you will be able to connect with customers who value locally sourced, fresh, and healthy produce.
  </p>
</div>
            <form
              onSubmit={submitHandler}
              type="POST"
              className="mt-8 space-y-6"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md space-y-2 shadow-xl p-8 border-t-8 border-orange-400">
                <h4 className="text-xl font-medium">Account Information</h4>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 pb-4">
                  <div className="col-start-1">
                    <label htmlFor="fname">First Name</label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your First Name"
                    />
                  </div>
                  <div className="col-start-2">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="col-start-2">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Create your Password"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-medium">Public Details</h4>
                <span className="text-xs text-gray-600">
                  Details will be public to all users.
                </span>
                <div className="columns-2">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="zip"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-content="Top popover"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="phone"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                  <div className="columns-2">
                    <div className="flex flex-col ">
                      <div>
                        <label htmlFor="city">City</label>
                        <label className="text-sm text-gray-300 italic">
                          {" "}
                          (optional)
                        </label>
                      </div>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your City"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your Zip Code"
                      />
                      <div className="pt-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="agreement"
                    title="Please agree to the terms and conditions."
                    name="agreement"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                  />
                  <label
                    htmlFor="i-agree"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I Agree to the Terms and Conditions
                  </label>
                </div>
              </div>
              <div className="columns-2  ">
                <div>
                  <SubscribeButton
                    white
                    text="Cancel"
                    type="submit"
                    style="group relative flex w-full justify-center !text-black"
                  />
                </div>
                <div>
                  <SubscribeButton
                    green
                    text="Sign Up"
                    type="submit"
                    style="group relative flex w-full justify-center"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
