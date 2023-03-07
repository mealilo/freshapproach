import Head from "next/head";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sellerAccount from "./sellerAccount";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  // Your submit handler function in JavaScript
  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);

  //   fetch("/api/CreatePersonAndProducer", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       if (response.message === "Success") {
  //         //redirect to wherever.
  //         window.location = "/";
  //       } else {
  //         alert("Error: Please fill out form again");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"></section>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl space-y-8">
            <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className=" text-left text-5xl font-normal tracking-tight text-gray-900">
                Vendor Sign In
              </h2>
            </div>
            {/* <form
              onSubmit={submitHandler}
              type="POST"
              className="mt-8 space-y-6"
            > */}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-5 rounded-md shadow-xl p-8 columns-2 border-t-8 border-orange-400">
              <div className="flex flex-col justify-end">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Create your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Keep me signed in
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-teal-800 hover:text-teal-600"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="columns-2  ">
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-grey-700 bg-white-600 py-2 px-4 text-sm font-medium shadow-lg text-grey hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Cancel{" "}
                </button>
              </div>
              <div>
                <button
                  onClick={signIn}
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </div>
            </div>
            {/* </form> */}
            <Link href="/sellerAccount">Seller Account</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
