import React, { useState } from "react";

const EventCard = ({ start_time, end_time, Title, event_location_en }) => {
  
  const [isScheduled, setIsScheduled] = useState(false);

  const toggleReminder = () => {
    setIsScheduled(!isScheduled);
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Define month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the day of the month
    const day = date.getDate();

    // Get the month (0-indexed), so we need to add 1 to it
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    // Format the date
    return { day, monthName };
  };
  const normalizeDateTime = (dateTimeString) => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(dateTimeString).toLocaleString("default", {
      timeStyle: "short",
      timeZone: tz,
    });
  };

  return (
    <div className=" lg:w-[312.5px] md:w-[312.5px] sm:w-[312.5px] xs:w-[280px] bg-white rounded-[8px]">
      <div className=" h-[314px] lg:w-[312.5px] md:w-[312.5px] sm:w-[312.5px] xs:w-[280px] mt-[30px] ">
        <div
          className="w-[108px] h-[108px] mb-[20px] lg:ml-24 md:ml-24 sm:ml-24 xs:ml-20 p-2 grid items-center text-center text-[#444444]"
          style={{
            backgroundImage: `url('/icons/cal.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="font-extrabold text-[#3B729C] text-3xl mt-7">{formatDate(start_time).day}</span>
      <span className="text-xl">{formatDate(start_time).monthName}</span>
        </div>

        <div className="flex flex-col gap-[5px] p-[40px] max-h-[200px] mb-[50px] overflow-hidden">
          <h1 className="lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[16px] font-figtree font-semibold leading-[28.8px] mb-2">
            {Title}
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

            <p className="lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[16px] font-figtree font-normal leading-[28.8px] text-[#444444]">
            {normalizeDateTime(start_time)} -{" "}
                  {normalizeDateTime(end_time)}
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
            <p className="lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[16px] font-figtree font-normal leading-[21.6px] text-[#444444]">
              {event_location_en}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-[312.5px] md:w-[312.5px] sm:w-[312.5px] xs:w-[280px] flex items-center justify-center h-[64px] ${
          isScheduled ? "bg-[#50907F]" : "bg-[#3B729C]"
        } p-[20px_10px] flex gap-[10px] rounded-[8px] rounded-tl-none rounded-tr-none mt-[40px]`}
        onClick={toggleReminder}
      >
        <div
          className={`w-[24px] h-[24px] bg-cover items-center justify-between
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
