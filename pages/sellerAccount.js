import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
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
            <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className=" text-left text-4xl font-normal tracking-tight text-gray-900">
                Account Information
              </h2>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-5 rounded-md shadow-xl p-8  border-t-8 border-orange-400">
              <div class="flex flex-wrap">
                <h3 class="text-xl font-light leading-6 text-gray-700 tracking-wider">
                  Your Info
                </h3>
              </div>

              <div className="flex flex-col justify-end">
                <div>
                  <label htmlFor="fname">Full Name</label>
                  <input
                    id="fname"
                    name="fname"
                    type="fname"
                    required
                    className="relative block w-2/5 shadow-md appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="relative block w-2/5 shadow-md appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-col ">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  required
                  className="relative block w-2/5 shadow-md appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col justify-end">
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="city"
                    required
                    className="relative block w-2/5 shadow-md appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <div>
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    id="zip"
                    name="zip"
                    type="zip"
                    required
                    className="relative block w-2/5 shadow-md appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                    placeholder="Enter your zipcode"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-5 rounded-md shadow-xl p-8 border-t-8 border-orange-400">
              <div class="flex flex-wrap">
                <h3 class="text-xl font-light leading-6 text-gray-700 tracking-wider">
                  Your Listings
                </h3>
              </div>
              <div className="flex flex-col justify-end">
                <div></div>
              </div>

              <div className="flex flex-col"></div>
            </div>

            <div className="flex items-center justify-between"></div>

            <div className="columns-3">
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-grey-700 bg-white-600 py-2 px-4 text-sm font-medium shadow-lg text-grey hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Delete Account
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </main>
    </div>
  );
}
