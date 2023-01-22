
import Image from "next/image";
import Head from 'next/head'
import Header from '../components/Header'
import Banner from "../components/Banner"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Fresh Approach</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    
    <Header/>
    <Banner/>
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5 text-center text-cyan-800"> Explore Produce </h2>
          {/* pull some data from a server */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition
        transform duration-200 ease-out">
         <img alt="fruit" src="/images/Fruit.png" className="w-36"/>
         <div> Fruit </div>
         </div>
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
      </section>
   
    </main>
    <Footer />
    </div>
  );
}


