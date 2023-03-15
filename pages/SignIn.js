import Head from "next/head";
import React from "react";
import {useSession, signIn, signOut} from "next-auth/react";
import SubscribeButton from "../components/SubscribeButton";

export default function Home() {
  const {data: session} = useSession();
  if (session) {
  return (
    <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
  );
}
return (
  <div className="">
   
  <main className="max-w-7xl mx-auto px-8 sm:px-16">
    <section className="pt-6"></section>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-5 rounded-md shadow-xl p-5 columns-2 border-t-8 border-teal-800">
          <h2 className=" text-left text-5xl font-normal tracking-tight text-gray-900">
            Vendor Sign In
          </h2>
        </div>
    
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
              placeholder="Enter your password"
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
            <SubscribeButton white text="Cancel" type="submit" style="group relative flex w-full justify-center !text-black" />
          </div>
          <div>
            <SubscribeButton green text="Sign In" type="submit" onClick={signIn()} style="group relative flex w-full justify-center" />
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
)
}

/* import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] }
  }
}
*/ 