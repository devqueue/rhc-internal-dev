const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full object-cover scale-x-[-1]"
        src="/images/bannerar.jpeg"
        alt=""
      />
      <div className="absolute xl:top-[0px] lg:top-[40px] sm:top-0 top-[50%] right-0 w-[30%]">
        {/* <img src="/images/HeroImgPattern.png" alt="" /> */}
      </div>

      <div
        className="absolute top-[200px] lg:left-[44px] left-[5vw] lg:text-[2.3vw] sm:text-[24px] text-[16px] font-bold"
        style={{ fontFamily: "SomarBold" }}
      >
        <h1 className="text-white">
          Advanced internal portal (Shamil  +)
          {/* <span
            className="text-['SomarLight'] font-extralight"
            style={{ fontFamily: "SomarLight" }}
          >
            need in one place!
          </span> */}
        </h1>
        {/* <h1 className="text-white">Discover the new internal portal </h1>
        <h1 className="text-white">(Shamil) that will change the </h1>
        <h1 className="text-white">way you work and communicate</h1> */}
      </div>
    </div>
  );
};

export default Banner;
