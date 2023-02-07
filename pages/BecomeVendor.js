import Head from "next/head";
import React, { useState } from "react";
import CreatePerson from "../components/Banner";


export default function Home() {
    //const handleSubmit = (event) => {
    //    event.preventDefault();
    //    const fname = event.target.elements.fname.value;
    //    const email = event.target.elements.email.value;
    //    const lname = event.target.elements.lname.value;
    //    const password = event.target.elements.password.value;
    //    const zip = event.target.elements.zip.value;

    //    console.log(email);

    //};


    const [form, setForm] = React.useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        city: '',
        zip: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fromJSON = JSON.stringify(form);
        const endpoint = '/api/CreatePerson'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: fromJSON,

            

        }
        // send response
        const response = await fetch(endpoint, options)
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
        alert(form);

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
            <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
              <h2 className=" text-left text-5xl font-normal tracking-tight text-gray-900">
                Vendor Sign Up
              </h2>
            </div>
            <form onSubmit={handleSubmit} type="POST" className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="space-y-5 rounded-md shadow-xl p-8 columns-2 border-t-8 border-orange-400">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="fname">First Name</label>
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    autoComplete="fname"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your First Name"
                    value={form.fname}
                    onChange={handleChange}

                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    autoComplete="lname"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Enter your Last Name"
                                      value={form.lname}
                                      onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm font"
                                      placeholder="Enter your Email"
                                      value={form.email}
                                      onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Create your Password"
                                      value={form.password}
                                      onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Enter your City"
                                      value={form.city}
                                      onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    autoComplete="zip"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                      placeholder="Enter your Zip Code"
                                      value={form.zip}
                                      onChange={handleChange}


                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="agreement"
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
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
