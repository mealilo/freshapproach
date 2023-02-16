import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] p-0">
      <Image
        alt="BannerPhoto"
        src="/images/HeaderImage.png"
        fill
        style={{ objectFit: "fill", objectPosition: "center" }}
      />
    </div>
  );
}
export default Banner;
