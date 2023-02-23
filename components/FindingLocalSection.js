import SubscribeButton from "../components/SubscribeButton";
import Link from "next/link";
import { TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb";
function FindingLocalSection() {
  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 h-50 text-white text-center text-2xl font-Poppins">
      <div className="bg-blueGreenCustom place-content-center py-8 md:py-32 px-4 md:px-8">
        <p> Finding Local Produce is Easy</p>
      </div>
      <div className="grid grid-rows-3 bg-Orange py-8 md:py-20 px-4 md:px-36 whitespace-nowrap">
        <div className="flex items-center">
          <TbCircle1 className="float-left" />
          <p className=""> Sign Up </p>
        </div>
        <div className="flex items-center">
          <TbCircle2 className="float-left " />
          <p className=""> Select Preferences</p>
        </div>
        <div className="flex items-center">
          <TbCircle3 className="float-left" />
          <p className=""> Enjoy Produce</p>
        </div>
      </div>
      <div className="bg-anotherGreen py-8 md:py-20 px-4 md:px-8 ">
        <p>
          Every week you get alerted about new available produce, based on your
          preferences, sent right to your inbox.
        </p>
        <div> </div>
        <Link href="/Subscribe">
          <SubscribeButton />
        </Link>
      </div>
    </div>
  );
}

export default FindingLocalSection;

/* 2.Select Preferences 3.Enjoy Produce*/
