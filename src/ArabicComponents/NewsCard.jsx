import React, { useState } from "react";

const NewsCard = ({ img, title, subheading, fulltext}) => {
  const [showModal, setShowModal] = useState(false);

  const showPopup = () => {
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <div className="h-[360px] lg:w-[273px] md:w-[273px] xs:w-[222px] bg-white rounded-[8px] mb-4 flex flex-col justify-between" dir="rtl">
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

        <div
          className="flex justify-between items-end mt-auto cursor-pointer"
          onClick={showPopup}
        >
          <p className="font-figtree font-light lg:text-[15px] md:text-[15px] leading-[15.6px] border-b-2 border-current xs:text-[12px] xs:leading-[12px]">
          المزيد
          </p>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="min-h-[724px] w-[80%] lg:w-[60%] p-[20px] bg-white rounded-lg overflow-hidden shadow-md max-h-screen overflow-y-auto" style={{ scrollbarWidth: "8px" }}>
              <div className="relative bg-white w-full h-auto flex flex-col justify-start items-start px-8 sm:px-[30px] text-black">
                <button
                  className="absolute top-4 left-4 text-black text-4xl font-bold" // Changed to left
                  onClick={closePopup}
                >
                  &times;
                </button>
                <h1 className="mt-12 text-SomarBold text-[35px] leading-[48px] text-right"> {/* Changed to text-right */}
                  {title}
                </h1>
              </div>
              <div className="p-[20px]" style={{ scrollbarWidth: "8px" }}>
                <div className="flex items-center gap-[20px] mb-[20px]">
                  <img
                    src= {img}
                    alt="announcement"
                    className="w-full h-[400px] object-cover rounded-[8px]"
                  />
                </div>
                <p className=" text-Somar text-base leading-[32.52px] text-right"> {/* Changed to text-right */}
                {fulltext}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
