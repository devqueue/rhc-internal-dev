import React from "react";

const AnnouncementCard = () => {
  return (
    <div className="overflow-hidden w-full border-b-[1px] border-white p-4 ">
      <img
        src="/images/announcement1.svg"
        alt="announcement"
        className="w-full object-cover rounded-[8px] overflow-hidden"
      />
      <div className="flex flex-row justify-between items-center mt-4">
        <h1 className=" font-figtree text-[20px] font-medium text-white leading-6">RHC goes public</h1>
        <a href="link-to-more-info" className="flex items-center text-blue-500">
          <img
            src="/icons/link-icon.svg"
            alt="Read more icon"
            className="w-]24.4px] h-[24.4px] object-cover overflow-hidden"
          />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementCard;
