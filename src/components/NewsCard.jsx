import React from "react";

const NewsCard = ({ img, title, subheading }) => {
  return (
    <div className="h-[321px] lg:w-[273px] md:w-[273px] xs:w-[222px] gap-[40px] bg-white rounded-[8px] mb-4">
      <div className="m-[25px]">
        <div
          className="h-[137px] w-full flex items-center justify-center mb-[25px] rounded-[8px]"
          style={{
            backgroundImage: `url('/images/Rectangle.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex flex-col gap-[5px] mb-[20px]">
          <h1 className="font-figtree font-semibold text-[16px] leading-[19.2px] mb-[10px] xs:text-[14px] sm:leading-[17px]">
            News Title Here
          </h1>
          <div className="flex gap-[15px] items-start ">
            <p className="text-[18px] font-figtree font-normal leading-[21.6px] xs:text-[12px] sm:leading-[18px]">
              {subheading}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-figtree font-light text-[15px] leading-[15.6px] border-b-2 border-current xs:text-[12px] xs:leading-[12px]">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
