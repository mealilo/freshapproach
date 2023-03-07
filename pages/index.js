import Head from "next/head";
import Banner from "../components/Banner";
import FindingLocalSection from "../components/FindingLocalSection";
import MainContent from "../components/MainContent";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <MainContent />
      <FindingLocalSection />
    </div>
  );
}

/*Sign in and out stuff if we want it later {!session && (
        <>
        Not signed in
        <button onClick={signIn}> Sign In </button> 
        </>
      )}
      {session && (<> Signed in as {session.user.email} <br/> 
      <div> You can now access our super secret pages</div>
      <button> <Link href="/secret"> To the secret </Link></button>
      <button onClick={signOut}> Sign out</button></>)}*/
