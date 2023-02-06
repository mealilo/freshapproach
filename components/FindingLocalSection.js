import SubscribeButton from "../components/SubscribeButton"

function FindingLocalSection(){
    return(
        <div className="flex-grow grid grid-cols-3 h-50 text-white text-center text-2xl">
        <div className="bg-blueGreenCustom place-content-center py-52 ">
        <p> Finding Local Produce is Easy</p>
        </div>
        <div className="bg-Orange py-52">
        <p>1. Sign Up 2.Select Preferences 3.Enjoy Produce  </p></div>
        <div className="bg-anotherGreen py-52"> <p> Every week you get alerted about new available produce, based on your preferences, sent right to your inbox.</p>
        <div> </div>
        <SubscribeButton className="bg-Sage"/> </div>
      </div>
    );
}
export default FindingLocalSection