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
    <div className="w-full overflow-hidden bg-[#50917F] relative rounded-lg" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`flex gap-[40px] p-[40px] transition-transform ${
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
            className={`w-full justify-center flex xl:flex-nowrap flex-wrap flex-shrink-0 rounded-lg gap-[60px] items-center self-stretch content-center`}
            style={{ backgroundColor: "#50917F" }}
          >
            <div
              className="lg:w-[460px] w-[40vw] lg:h-[320px] h-[30vw] bg-slate-300 rounded-lg overflow-hidden shrink-0"
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${announcement.fields.image_name}')`,
                backgroundSize: "100%",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="text-white flex flex-col gap-[20px] items-start">
              <h1 className="sm:text-[24px] text-[16px] font-light">
                {announcement.fields.Title}
              </h1>
              <p className="sm:text-[16px] text-[11px] font-light">
                {announcement.fields.preview_en}
              </p>
              <Link
                  className="m:sm:text-[14px] text-[9px] px-[10px] py-[5px] border-[1px] border-white md:rounded-[8px] rounded-md"
                  to={`/announcement/${announcement.id}`}
                  state={{ announcement }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
