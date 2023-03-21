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
        <div className="grid grid-cols-7 sm:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 gap-1 sm:gap-5 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-10">
          <div className="flex items-center "></div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="none">
                <Image
                  className="rounded-t-lg w-12 sm:w-15 md:w-32 lg:w-48 xl:w-52 2xl:w-56"
                  src="/images/Fruit.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center mb-2">Fruit</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-12 sm:w-15 md:w-32 lg:w-48 xl:w-52 2xl:w-56"
                  src="/images/Veggies.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center mb-2">Veggies</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-12 sm:w-15 md:w-32 lg:w-48 xl:w-52 2xl:w-56"
                  src="/images/Nuts.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center mb-2">Nuts</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-12 sm:w-15 md:w-32 lg:w-48 xl:w-52 2xl:w-56"
                  src="/images/Honey.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center mb-2">Honey</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image
                  className="rounded-t-lg w-12 sm:w-20 md:w-32 lg:w-48 xl:w-52 2xl:w-56"
                  src="/images/Eggs.png"
                  alt=""
                  width="100"
                  height="100"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center mb-2">Eggs</h5>
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
