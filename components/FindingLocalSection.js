import SubscribeButton from "../components/SubscribeButton";
import Link from "next/link"
import {TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb";
function FindingLocalSection(){
    return(
        <div className="flex-grow grid grid-cols-3 h-50 text-white text-center text-2xl font-Poppins">
        <div className="bg-blueGreenCustom place-content-center py-32 px-8">
        <p> Finding Local Produce is Easy</p>
        </div>
        <div className="grid grid-rows-3 bg-Orange py-20 px-12">
          <div>
        <TbCircle1 className="float-left"/>
        <p className="">  Sign Up   </p>
        </div>
        <div>
        <TbCircle2 className="float-left "/>
        <p className=""> Select Preferences</p>
        </div>
        <div>
        <TbCircle3 className="float-left"/>
        <p className=""> Enjoy Produce</p>
        </div>
        </div>
        <div className="bg-anotherGreen py-20 px-8 "> <p> Every week you get alerted about new available produce, based on your preferences, sent right to your inbox.</p>
        <div> </div>
        <Link href="/Subscribe" >
        <SubscribeButton/>
        </Link>
      </div>
      </div>
    );
}
export default FindingLocalSection

/* 2.Select Preferences 3.Enjoy Produce*/ 