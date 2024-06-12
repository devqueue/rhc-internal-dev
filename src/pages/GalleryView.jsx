import React from "react";
import Nav from "../components/Nav";
import { useLocation } from "react-router-dom";

const galleryview = () => {
  const location = useLocation();
  console.log("location", location);
  const { gallery } = location.state || {};
  return (
    <>
      <div className="overflow-hidden w-full h-auto px-[30px]">
        <Nav />
        <div className="py-[18px] overflow-hidden w-full shadow-md"></div>
        <div className="px-[20px] py-[16px] mxmb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white]">
          <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
            Event Gallery
          </h1>
        </div>
        <div className="flex carousel bg-[#F4F8FB] rounded-box w-full justify-center items-center flex-col">
          <div className="carousel-item sm:w-[40vw] w-[70vw] py-[40px] ">
            <img src="/images/gallery.png" alt="img" />
          </div>

          <div className="lg:w-full md:w-full p-[40px] h-auto text-center">
            <h1 className="font-figtree font-semibold text-4xl leading-[48px]">
              {gallery.fields.Title}
            </h1>

            <p className="font-inter font-normal text-base leading-[28px]">
              {gallery.fields.subtitle_en}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default galleryview;
