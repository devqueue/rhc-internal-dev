import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewAnnouncement = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [CarouselPosition, setCarouselPosition] = useState(0);
  const [arrowRightBg, setArrowRightBg] = useState("bg-golden");
  const [arrowleftBg, setArrowleftBg] = useState("bg-disable");

  const handleTimeout = () => {
    setIsTransitioning(false);
    setCarouselPosition(0);
  };

  const MoveRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Moveleft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (announcements.length > 1 && !isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        );
      }, 4300);

      if (currentIndex === announcements.length - 1) {
        setIsTransitioning(false);
      }

      if (currentIndex != announcements.length - 1) {
        setIsTransitioning(true);
      }

      return () => clearInterval(intervalId);
    }
  }, [announcements, currentIndex, isHovered]);

  if (!announcements || announcements.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full overflow-hidden bg-[#ffffff] relative rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-white">
        <h1 className="sm:text-[20px] text-[12px]">التوعية</h1>
      </div>
      <div
        className={`flex gap-[40px] py-[40px] pr-[40px] pl-[40px] transition-transform ${
          isTransitioning ? "duration-500" : "duration-0"
        }`}
        style={{
          transform: `translateX(calc(${currentIndex * 100}% - ${
            currentIndex * 40
          }px )`,
        }}
      >
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`w-full justify-center flex flex-wrap flex-shrink-0 rounded-lg gap-[60px] items-center self-stretch content-center`}
            style={{ backgroundColor: "#ffffff" }}
          >
            <div
              className="w-full h-[37vw] bg-white rounded-lg overflow-hidden shrink-0"
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${announcement.fields.image_name}')`,
                backgroundSize: "auto 100%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 pt-[24px] px-[30px] sm:px-[50px] relative bottom-[20px] lg:right-[0px] justify-end right-[16px] z-50">
        <img
          className="py-3 px-5 z-50 bg-golden"
          src="/icons/ArrowRight.svg"
          alt=""
          onClick={MoveRight}
        />

        <img
          className="py-3 px-5 z-50 bg-golden"
          src="/icons/ArrowLeft.svg"
          alt=""
          onClick={Moveleft}
        />
      </div>
    </div>
  );
};

export default NewAnnouncement;