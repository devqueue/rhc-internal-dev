import React, { useState } from "react";
import Nav from "../components/Nav";
import AnnouncementCard from "../components/AnnouncementCard";

const Annoucement = () => {
  const [events, setEvents] = useState([
    { 
      title: 'Annual General Meeting', 
      imgSrc: '/images/announcement1.svg', 
      link: '/icons/link-icon.svg' 
    },
    { 
      title: 'Quarterly Results Announced', 
      imgSrc: '/images/announcement1.svg', 
      link: '/icons/link-icon.svg' 
    },
    { 
      title: 'New Product Launch', 
      imgSrc: '/images/announcement1.svg', 
      link: '/icons/link-icon.svg' 
    },
  ]);

  return (
    <>
      <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
        <div className="flex h-[1553px] pt-[30px] bg-[#F4F8FB] overflow-hidden">
          <div className="w-3/4 p-[60px] bg-white">
            <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-left">
              Europe Expansion in July 2024
            </h1>
            <div className="flex items-center gap-[20px] mt-[40px] mb-[40px]">
              <img
                src="/images/annoucement.svg"
                alt="announcement"
                className="w-full h-[456px] object-cover rounded-[8px]"
              />
            </div>

            <p className="font-inter font-normal text-base leading-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. 
              
              <br />
              Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. 
              
              <br />
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
              Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
          <div className="w-1/4 p-[60px] bg-[#50917F]">
            <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-white">
              More Announcements
            </h1>
            {events.map((event, index) => (
              <AnnouncementCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Annoucement;
