
const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <img className="w-full h-full object-cover scale-x-[-1]" src="/images/BannerImg.png" alt="" />
      <div className="absolute bottom-[-140px] right-0 w-[20vw]">
        <img src="/images/HeroImgPattern.png" alt="" />
      </div>

      <div
          className="absolute top-[100px] lg:left-[44px] left-[5vw] xl:text-[40px] lg:text-[3vw] text-[24px] font-bold"
          style={{ fontFamily: "SomarBold" }}
        >
          <h1 className="text-white">
            40 YEARS{" "}
            <span
              className="text-['SomarLight'] font-extralight"
              style={{ fontFamily: "SomarLight" }}
            >
              IN THE FIELD OF
            </span>
          </h1>
          <h1 className="text-white">DEVELOPING COMMERCIAL</h1>
          <h1 className="text-white">SERVICE PROJECTS</h1>
          <h1 className="text-white">& PUBLIC MARKETS.</h1>
        </div>
    </div>
  )
}

export default Banner
