import Image from "next/image";
function Banner() {
  return (
    // <div className="relative w-auto h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[450px] 2xl:h-[450px] p-0">
    //   <Image
    //     alt="BannerPhoto"
    //     src="/images/HeaderImage.png"
    //     priority
    //     fill
    //     style={{ objectFit: "cover", objectPosition: "center" }}
    //   />
    //   <h1 className="flex flex-wrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl 
    //   sm:text-4xl lg:text-6xl xl:text-7xl font-medium whitespace-nowrap">
    //     Eat fresh. Sell local. Prevent waste.
    //   </h1>
    // </div>
     <div class="relative w-auto h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[450px] 2xl:h-[450px] p-0">
      <Image alt="BannerPhoto" src="/images/HeaderImage.png" priority
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}/>
        <h1 class="absolute text-7xl font-medium w-1/2 text-white  p-10 top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
            Eat fresh. Sell local. Save money.</h1>
    </div>
  );
}
export default Banner;
/* */ 
