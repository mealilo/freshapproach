import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
     <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-center text-greenText"> Discover Local Produce</h2>
          {/* pull some data from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"></div>
        </section>
      </main>
    </div>
  );
}


