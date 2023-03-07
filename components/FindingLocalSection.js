import SubscribeButton from "../components/SubscribeButton";
import Link from "next/link";
import { TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb";
function FindingLocalSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-white text-center text-2xl">
      <div className="flex flex-col justify-center h-700 items-center bg-blueGreenCustom place-content-center py-8 md:py-32 px-4 md:px-8">
        <p className="text-6xl"> Finding Local Produce is Easy</p>
      </div>
      <div className="grid grid-rows-3 justify-center items-center bg-Orange py-8 md:py-20 px-4 md:px-36 whitespace-nowrap">
        <div className="flex items-center my-4">
          {/* <TbCircle1 className="float-left" /> */}
          <div className="flex justify-center items-center bg-white w-20 h-20 rounded-full text-black mr-6">
            <p className="text-4xl">1.</p>
          </div>
          <p className="text-3xl"> Sign Up </p>
        </div>
        <div className="flex items-center my-4">
          <div className="flex justify-center items-center bg-white w-20 h-20 rounded-full text-black mr-6">
            <p className="text-4xl">2.</p>
          </div>
          <p className="text-3xl"> Select Preferences</p>
        </div>
        <div className="flex items-center my-4">
          <div className="flex justify-center items-center bg-white w-20 h-20 rounded-full text-black mr-6">
            <p className="text-4xl">3.</p>
          </div>
          <p className="text-3xl"> Enjoy Produce</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-anotherGreen py-8 md:py-20 px-4 md:px-8 ">
        <p className="text-3xl mb-6">
          Every week you get alerted about new available produce, based on your
          preferences, sent right to your inbox.
        </p>
        <Link href="/Subscribe">
          <SubscribeButton />
        </Link>
      </div>
    </div>
  );
}

export default FindingLocalSection;

