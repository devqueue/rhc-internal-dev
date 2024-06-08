import React from "react";
import Nav from "../components/Nav";
import AnnouncementCard from "../components/AnnouncementCard";
import { useLocation } from 'react-router-dom';

const AnnouncementDetail = () => {
  const location = useLocation();
  console.log("location", location);
  const { announcement, moreAnnouncements = [] } = location.state || {};

  if (!announcement) {
    return <div>Announcement not found</div>;
  }

  return (
    <>
      <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
        <div className="lg:flex pt-[30px] bg-[#F4F8FB] overflow-hidden">
          <div className="lg:w-3/4 md:w-full p-[60px] bg-white">
            <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-left">
              {announcement.fields.Title}
            </h1>
            <div className="flex items-center gap-[20px] mt-[40px] mb-[40px]">
              <img
                src="/images/announcement.svg"
                alt="announcement"
                className="w-full h-[456px] object-cover rounded-[8px]"
              />
            </div>

            <p className="font-somar font-normal text-base leading-[32.52px]">
              {announcement.fields.Full_Text_en}
            </p>
            <div className="mt-6">
            <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-[#6D6D6D] text-left">Attachments</h1>
          </div>
          </div>
          
          <div className="lg:w-1/4 p-[60px] bg-[#50917F]">
            <h1 className="font-figtree font-semibold lg:text-4xl md:text-4xl sm:text-4xl xs:text-xl leading-[48px] text-white">
              More Announcements
            </h1>
            {moreAnnouncements.map((event, index) => (
              <AnnouncementCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementDetail;
