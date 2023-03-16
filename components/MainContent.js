import Link from "next/link";
import Image from "next/image";
import SubscribeButton from "./SubscribeButton";

function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="py-8">
        <h2 className="text-4xl font-semibold pb-12 text-center text-nearBlack">
          {" "}
          Explore Produce{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 space-x-10">
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer "></div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="none">
                <Image
                  className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52"
                  src="/images/Fruit.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Fruit</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52"
                  src="/images/Veggies.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Veggies</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52"
                  src="/images/Nuts.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Nuts</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52"
                  src="/images/Honey.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Honey</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52"
                  src="/images/Eggs.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Eggs</h5>
              </div>
            </div>
          </div>
        </div>
        
        <Link href="/listings">
          <div className="flex justify-center items-center py-5 ">
            <SubscribeButton white text="Explore Produce" style="!text-black" />
          </div>
        </Link>
      </section>
    </main>
  );
}
export default MainContent;
/* */
