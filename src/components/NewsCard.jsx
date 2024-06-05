import React from "react";

const NewsCard = ({ img, title, subheading }) => {
  return (
    <div className="h-[360px] lg:w-[273px] md:w-[273px] xs:w-[222px] bg-white rounded-[8px] mb-4 flex flex-col justify-between">
      <div className="m-[25px] flex flex-col h-full">
        <div
          className="h-[137px] w-full flex bg-slate-300 items-center justify-center mb-[25px] rounded-[8px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>

        <div className="flex flex-col gap-[5px] mb-[20px] flex-grow">
          <h1 className="line-clamp-2 font-figtree font-semibold text-[16px] leading-[19.2px] mb-[10px] xs:text-[14px] sm:leading-[17px]">
            {title}
          </h1>
          <div className="flex gap-[15px] items-start">
            <p className="line-clamp-3 text-[18px] font-figtree font-normal leading-[21.6px] xs:text-[12px] sm:leading-[18px]">
              {subheading}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto">
          <p className="font-figtree font-light lg:text-[15px] md:text-[15px] leading-[15.6px] border-b-2 border-current xs:text-[12px] xs:leading-[12px]">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
