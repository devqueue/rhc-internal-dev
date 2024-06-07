import React from "react";
import Nav from "../components/Nav";

const galleryview = () => {
  return (
    <>
      <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
        <div className="py-[18px] bg-[#F4F8FB] overflow-hidden w-full shadow-md"></div>
        <div className="px-[20px] py-[16px] mxmb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white]">
          <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
            Event Gallery
          </h1>
        </div>
        <div className="flex carousel bg-white rounded-box overflow-x-auto">
          <div className="carousel-item p-[40px] ">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
          <div className="carousel-item p-[40px]">
            <img src="images/gallery.png" alt="Burger" />
          </div>
        </div>
        <div className="lg:w-full md:w-full p-[40px] bg-white">
          <h1 className="font-figtree font-semibold text-4xl leading-[48px] text-left">
            Announcement Title Comes Here
          </h1>

          <p className="font-inter font-normal text-base leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
            <br/>
             Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </p>
        </div>
      </div>
    </>
  );
};

export default galleryview;
