const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full object-cover"
        src="/images/BannerImg.png"
        alt=""
      />
      <div className="absolute bottom-[-140px] left-0 w-[20vw] scale-x-[-1]">
        <img src="/images/HeroImgPattern.png" alt="" />
      </div>

      <div
        className="absolute top-[100px] lg:right-[44px] right-[5vw] xl:text-[40px] lg:text-[3vw] sm:text-[24px] text-[16px] font-bold"
        style={{ fontFamily: "SomarBold" }}
      >
        <h1 className="text-white">
          40 عاماً{" "}
          <span
            className="text-['SomarLight'] font-extralight"
            style={{ fontFamily: "SomarLight" }}
          >
            في مجال تطوير
          </span>
        </h1>
        <h1 className="text-white">المشاريع التجارية</h1>
        <h1 className="text-white">والخدمية والتجارية </h1>
        <h1 className="text-white">والأسواق العامة</h1>
      </div>
    </div>
  );
};

export default Banner;
