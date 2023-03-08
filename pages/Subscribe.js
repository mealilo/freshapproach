import Head from "next/head";
import SubscribeForm from "../components/SubscribeForm";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title> Close Crop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <SubscribeForm />
      </main>
    </div>
  );
}
