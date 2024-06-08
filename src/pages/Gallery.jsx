import React from "react";
import Nav from "../components/Nav";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Gallery = () => {
    const location = useLocation();
    console.log("location", location);
    const gallery = location.state? location.state:[];
  return (
    <>
      <div className="overflow-hidden w-full">
        <Nav />
        <div className="py-[30px] px-[30px] bg-[#F4F8FB] overflow-hidden w-full rounded-lg shadow-md ">
          <div className="overflow-hidden w-full h-full shadow-md rounded-lg">
            <div className="px-[20px] py-[16px] mb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white] ">
              <h1 className="text-[28px] font-semibold self-stretch min-w-[100px] mt-1">
                Gallery
              </h1>
          </div>
          <div className="flex gap-[41.88px] lg:flex-nowrap flex-wrap">
        {gallery.map(
          (
            item,
            index //slice(0,3)
          ) => (
            <div
              key={index}
              className="w-[404px] mb-6 min-h-[355px] bg-white rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-[180px] bg-slate-300">
                  <img
                    src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${item.fields.image_name}`}
                    alt={item.Title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-[27.88px] mt-[20px] min-h-[130px] flex flex-col justify-between">
                  <div>
                    <h1 className="sm:text-[16px] text-[11px] mb-[5px]">
                      {item.fields.Title}
                    </h1>
                    <p className="sm:text-[14px] text-[9px] font-light text-[#888888]">
                      {item.fields.subtitle_en}
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                 to={`/galleryview/${item.id}`}
                 state={{ gallery: item }}
                 className="mx-[27.88px] my-[16px] sm:text-[14px] text-[9px] text-white font-light px-[20px] py-[10px] bg-[#3B729C] rounded-md w-[120px]">
                View Gallery

              </Link>
            </div>
          )
        )}
      </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
