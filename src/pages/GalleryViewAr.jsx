import React from "react";
import Nav from "../ArabicComponents/Nav";
import { useLocation } from "react-router-dom";

const GalleryviewAr = () => {
  const location = useLocation();
  console.log("location", location);
  const { gallery } = location.state || {};
  return (
    <>
      <div
        className="overflow-hidden w-full h-auto"
        style={{ direction: "rtl" }}
      >
        <Nav />
        <div className="py-[30px] px-[30px] overflow-hidden w-full  shadow-md ">
          <div className="overflow-hidden w-full h-full shadow-md ">
            <div className="px-[20px] py-[16px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white] ">
              <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
                Event Gallery
              </h1>
            </div>
            <div className="flex carousel bg-[#F4F8FB] rounded-box overflow-x-auto pt-[20px]">
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="img" />
              </div>
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="img" />
              </div>
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="Burger" />
              </div>
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="Burger" />
              </div>
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="Burger" />
              </div>
              <div className="carousel-item lg:w-[812px] lg:h-[533px] py-[40px] pl-[40px]">
                <img src="/images/gallery.png" alt="Burger" />
              </div>
            </div>
            <div className="lg:w-full md:w-full p-[40px] bg-[#F4F8FB] h-auto">
              <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-right">
                {gallery.fields.event_name_ar }
              </h1>

              <p className="font-inter font-normal text-base leading-[28px]">
                {gallery.fields.subtitle_ar}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryviewAr;
