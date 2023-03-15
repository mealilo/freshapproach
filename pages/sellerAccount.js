import Head from "next/head";
import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import SubscribeButton from "../components/SubscribeButton";
//const prisma = new PrismaClient();
import {useSession, signIn, signOut} from "next-auth/react";




export default function Home({listings, profile}) {
const {data: session} = useSession();
if (session){
  return (
<>
Signed in</>
  );
}
return (
  <>
 You are not signed in! So you cannot see this page!
</>
)
}

