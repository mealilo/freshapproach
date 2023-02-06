import SubscribeButton from "../components/SubscribeButton";
import Link from "next/link"
import {TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb";
function FindingLocalSection(){
    return(
        <div className="flex-grow grid grid-cols-3 h-50 text-white text-center text-2xl font-Poppins">
        <div className="bg-blueGreenCustom place-content-center py-52 ">
        <p> Finding Local Produce is Easy</p>
        </div>
        <div className="bg-Orange py-52 ">
        
        <TbCircle1 className="inline"/>
        <p> Sign Up   </p>
        <TbCircle2 className="inline"/>
        
        <p> Select Preferences</p>
        <TbCircle3 className="inline-block"/>
      
        <p> Enjoy Produce</p>
        </div>
        <div className="bg-anotherGreen py-52"> <p> Every week you get alerted about new available produce, based on your preferences, sent right to your inbox.</p>
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