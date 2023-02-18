import Head from 'next/head'
import Banner from "../components/Banner"
import FindingLocalSection from "../components/FindingLocalSection"
import MainContent from "../components/MainContent"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Banner/>
      <MainContent/>
      <FindingLocalSection/>
    </div>
  );
}


