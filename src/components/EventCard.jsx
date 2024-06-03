import React, { useState } from "react";

const EventCard = ({ start_time, end_time, Title, event_location_en }) => {
  const [isScheduled, setIsScheduled] = useState(false);

  const toggleReminder = () => {
    setIsScheduled(!isScheduled);
  };

  return (
    <div className=" h-[458px] w-[312.5px] bg-white rounded-[8px]">
      <div className=" h-[314px] w-[312.5px] mt-[30px] ">
        <div
          className="w-[108px] h-[108px] mb-[20px] ml-24 p-2 grid place-items-center text-center text-[#444444]"
          style={{
            backgroundImage: `url('/icons/cal.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="font-extrabold text-[#3B729C] text-3xl mt-7">15</span>
      <span className="text-xl">MAY</span>
        </div>

        <div className="flex flex-col gap-[5px] p-[40px] h-[166px] mb-[72px]">
          <h1 className="sm:text-[24px] text-[16px] font-figtree font-semibold leading-[28.8px] mb-2">
            Annual General Meeting
          </h1>
          <div className="flex items-center w-[244.5px] h-[24px] gap-[15px] mb-2">
            <div
              style={{
                backgroundImage: "url('/icons/clock.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[24px] h-[24px] shrink-0"
            ></div>

            <p className="text-[18px] font-figtree font-normal leading-[28.8px] text-[#444444]">
              11:00 AM - 2:00 PM
            </p>
          </div>
          <div className="flex gap-[15px] items-start ">
            <div
              style={{
                backgroundImage: "url('/icons/location.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[24px] h-[24px] shrink-0"
            ></div>
            <p className="text-[18px] font-figtree font-normal leading-[21.6px] text-[#444444]">
              The Company`s Auditorium
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-[312.5px] h-[64px] ${
          isScheduled ? "bg-[#50907F]" : "bg-[#3B729C]"
        } p-[20px_10px] flex gap-[10px] rounded-[8px] rounded-tl-none rounded-tr-none mt-[50px]`}
        onClick={toggleReminder}
      >
        <div
          className={`w-[24px] h-[24px] bg-cover items-center justify-between ${
            isScheduled ? "ml-10" : "ml-16"
          }`}
          style={{
            backgroundImage: `url('${
              isScheduled ? "/icons/bell_scheduled.svg" : "/icons/bell.svg"
            }')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <p className="font-figtree font-medium text-[18px] leading-[21.6px] text-white text-center">
          {isScheduled ? "Reminder Scheduled" : "Remind Me"}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
