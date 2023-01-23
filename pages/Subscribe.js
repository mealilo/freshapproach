
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header'
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="">
     <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
    <Header/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5 text-center text-greenText"> Subscribe Page</h2>
      </section>
   
    </main>
    <Footer />
    </div>
  );
}


