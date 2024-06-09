const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full object-cover"
        src="/images/BannerImg.png"
        alt=""
      />
      <div className="absolute xl:top-[0px] lg:top-[40px] sm:top-0 top-[50%] left-0 w-[30%] scale-x-[-1]">
        <img src="/images/HeroImgPattern.png" alt="" />
      </div>

      <div
        className="absolute top-[100px] lg:right-[44px] right-[5vw] lg:text-[2.3vw] sm:text-[24px] text-[16px] font-bold"
        style={{ fontFamily: "SomarBold" }}
      >
        <h1 className="text-white">
          كل ما تحتاجه في مكان واحد
          <span
            className="text-['SomarLight'] font-extralight"
            style={{ fontFamily: "SomarLight" }}
          ></span>
        </h1>
        <h1 className="text-white"> تعرّف على البوابة الداخلية</h1>
        <h1 className="text-white"> الجديدة شامل التي ستغير</h1>
        <h1 className="text-white"> طريقة عملك وتواصلك</h1>
      </div>
    </div>
  );
};

export default Banner;
