import Head from 'next/head'
import Header from '../components/Header'
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import { productData } from '../components/ProductData'; 
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
      {productData.map(({key, img, description}) => (
        <SmallCard 
        key={key} 
        img={img}
        description={description} />
        ))}
        </div>
      </section>
    </main>
    </div>
  );
}


