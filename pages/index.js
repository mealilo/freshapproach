import Head from "next/head";
import Banner from "../components/Banner";
import FindingLocalSection from "../components/FindingLocalSection";
import MainContent from "../components/MainContent";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      {/* <Head>
        <title> Close Crop</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Banner />
      <MainContent />
      <FindingLocalSection />
    </div>
  );
}


