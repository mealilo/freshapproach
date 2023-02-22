import Image from "next/image";
import Link from "next/link";
function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16 font-Poppins">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5 text-center text-nearBlack font-Poppins">
          {" "}
          Explore Produce{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 space-x-10">
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer "></div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="none">
                <img className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52" src="/images/Fruit.png" alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Fruit</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52" src="/images/Veggies.png" alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Veggies</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52" src="/images/Nuts.png" alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Nuts</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52" src="/images/Honey.png" alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Honey</h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg max-w-sm">
              <a data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg w-18 md:w-32 lg:w-48 xl:w-52" src="/images/Eggs.png" alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl text-center mb-2">Eggs</h5>
              </div>
            </div>
          </div>
        </div>

        <Link href="/listings">
          <div className="flex justify-center items-center py-5 ">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-Orange text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Explore Produce
            </button>
          </div>
        </Link>
      </section>
    </main>
  );
}
export default MainContent;
