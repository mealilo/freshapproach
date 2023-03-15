import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import SubscribeButton from "../components/SubscribeButton";

export default function Home({listings, profile}) {
const {data: session} = useSession();
if (session){
  return (
<> seller account
Signed in as {session.user.email} <br />
 <button onClick={() => signOut()}>Sign out</button>
</>

  );
}
return (
  <>
 You are not signed in! So you cannot see this page!
</>
)
}

