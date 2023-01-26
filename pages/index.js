
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head'
import Header from '../components/Header'
import Banner from "../components/Banner"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
    <Banner/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5 text-center text-cyan-800"> Explore Produce </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <Link href="/fruit"> 
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out" >
         <img alt="fruit" src="/images/Fruit.png" className="w-36"/>
        <div href="/Fruit"> Fruit</div>
         </div>
         </Link>
         <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
         <img alt="veggies" src="/images/Veggies.png" className="w-36"/>
         <div> Veggies</div>
         </div>
         <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
         <img alt="nuts" src="/images/Nuts.png" className="w-36"/>
         <div> Nuts</div>
         </div>
         <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
         <img alt="honey" src="/images/Honey.png" className="w-36"/>
         <div> Honey</div>
         </div>
         <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
         <img alt="eggs" src="/images/Eggs.png" className="w-36"/>
         <div> Eggs</div>
      </div>
   
        </div>
        <Link href="/listings">
        <div class="flex justify-center items-center py-5 ">
         <button type="button" class="inline-block px-6 py-2.5 bg-Orange text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Explore Produce</button>
       </div>
       </Link>
      </section>
   
    </main>
    </div>
  );
}


