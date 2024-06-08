import React from "react";

const AnnouncementCard = ({ title, image, link }) => {
  return (
    <div className="overflow-hidden w-full p-4 mb-4">
      <div className="w-full border-b-[1px] border-white">
        <img
          src="/images/announcement1.svg"
          alt="announcement"
          className="w-full object-cover rounded-[8px] overflow-hidden"
        />
        <div className="flex flex-row justify-between items-center mt-4 mb-3">
          <h1 className=" font-figtree md:text-[20px] lg:text-[20px] xs:text-[18px] font-medium text-white leading-6">
          {title}
          </h1>
          <a
            href={link}
            className="flex items-center text-blue-500"
          >
            <img
              src="/icons/link-icon.svg"
              alt="Read more icon"
              className="w-]27.4px] h-[27.4px] lg:w-[24.4px] lg:h-[24.4px] sm:w-[20.4px] sm:h-[20.4px] sm:mr-1 object-cover overflow-hidden"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
