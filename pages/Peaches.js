import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5 text-greenText">
            {" "}
            Peaches
          </h1>
          <p> 4.8 | 48 Reviews - 261 N 200, Brigham City, UT 84302</p>
        </section>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <Image alt="peaches" src="/images/Peaches.png" classname="px-8" />
          </div>
          <div className="basis-1/4">
            <Image
              alt="peaches"
              src="/images/littlePeaches.png"
              classname="px-8"
            />
          </div>
          <div className="basis-1/4">
            <Image alt="peaches" src="/images/treePeaches.png" classname="px-8" />
          </div>
          <PricingCard></PricingCard>
        </div>
      </main>
    </div>
  );
}
