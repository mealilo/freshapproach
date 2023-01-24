import Head from 'next/head'
import Header from '../components/Header'
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import FindingLocalSection from "../components/FindingLocalSection"
import MainContent from "../components/MainContent"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <Header/>
    <Banner/>
    <MainContent/>
    <FindingLocalSection/>
    <Footer />
    </div>
  );
}


