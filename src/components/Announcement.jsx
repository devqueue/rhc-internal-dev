import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Announcement = ({ announcements }) => {
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
      className="w-full overflow-hidden bg-[#ffffff] relative rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex gap-[40px] shrink-0 py-[40px] pl-[40px] pr-[40px] transition-transform ${
          isTransitioning ? "duration-500" : "duration-0"
        }`}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${
            currentIndex * 40
          }px))`,
        }}
      >
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`w-full justify-center flex flex-wrap flex-shrink-0 rounded-lg gap-[60px] items-center self-stretch content-center`}
            style={{ backgroundColor: "#ffffff" }}
          >
            <div
              className="lg:w-[550px] lg:h-[400px] w-[50vw] h-[37vw] bg-slate-300 rounded-lg overflow-hidden shrink-0"
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${announcement.fields.image_name}')`,
                backgroundSize: "100%",
                backgroundPosition: "center center",
              }}
            ></div>

            {/* <div className="flex justify-between gap-[60px] items-end sm:items-center sm:flex-row flex-col">
              <div className="text-black flex flex-col gap-[20px] items-start">
                <h1 className="sm:text-[24px] text-[16px] font-light">
                  {announcement.fields.Title}
                </h1>
                <p className="sm:text-[16px] text-justify	 text-[11px] font-light xxl:w-[20vw] w-auto">
                  {announcement.fields.preview_en}
                </p>
                <p className="sm:text-[16px] text-[11px] font-light xxl:w-[20vw] w-auto">
                  Date: &nbsp;
                  { 
                  new Date(announcement.fields.date).toLocaleString("en-AU", 
                    {
                      // dateStyle: "short",
                      // timeZone: "Asia/Riyadh",
                      timeZone: "Asia/Riyadh",
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit"
                    })      
                  }
                </p>
               <Link
                  className="m:sm:text-[14px] text-[9px] px-[10px] py-[5px] border-[1px] border-black md:rounded-[8px] rounded-md"
                  to={`/announcement/${announcement.id}`}
                  state={{ announcement, moreAnnouncements: announcements }}
                >
                  Read More
                </Link> 
              </div>

              <img
                className="sm:w-[200px] lg:w-[100px]"
                src="/images/HeroPattern.png"
                alt=""
              />
            </div> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-gray-200 to-transparent"></div>
    </div>
  );
};

export default Announcement;
