import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewAnnouncement = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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
      className="w-full rounded-[8px] overflow-hidden bg-[#ffffff] relative shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              className="lg:w-full lg:h-[500px] w-[40vw] h-[30vw] bg-slate-300 rounded-lg overflow-hidden shrink-0"
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${announcement.fields.image_name}')`,
                backgroundSize: "100%",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-gray-200 to-transparent"></div>
    </div>
  );
};

export default NewAnnouncement;

const Banner = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className="w-full h-full object-cover scale-x-[-1]"
        src="/images/bannerar.jpeg"
        alt=""
      />
    </div>
  );
};

// export default Banner;
