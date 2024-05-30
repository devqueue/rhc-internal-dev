import React, { useState, useEffect } from "react";

const EventName = ({ events }) => {

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });


  useEffect(() => {
    // Find the event with the nearest or newest date
    const nearestEvent = events.reduce((nearest, current) => {
      const currentDate = new Date();
      const currentEventDate = new Date(`${current.month} ${current.day}, ${current.starttime}`);

      if (!nearest || currentEventDate < nearest.date) {
        return { event: current, date: currentEventDate };
      } else {
        return nearest;
      }
    }, null);

    // Calculate the countdown
    const currentDate = new Date();
    const eventDate = nearestEvent.date;
    const difference = eventDate.getTime() - currentDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    setCountdown({ days, hours, minutes });

    // Update countdown every minute
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = eventDate.getTime() - currentDate.getTime();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setCountdown({ days, hours, minutes });
    }, 60000);

    return () => clearInterval(intervalId);
  }, [events]);

  if(events.length === 0) return null;


  return (
    <div className="py-[30px] px-[20px] bg-[#3B729C] flex flex-col justify-center items-center gap-[24px] text-white rounded-[8px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[20px] font-light">{countdown.event ? countdown.event.name : "No Events"}</h1>
        <h2 className="text-[16px] font-light">Starting In</h2>
      </div>

      <div className="flex flex-wrap gap-[12px] justify-center">
        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">{countdown.days}</h1>
          <h2 className="text-[12px]">DAYS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">{countdown.hours}</h1>
          <h2 className="text-[12px]">HOURS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">{countdown.minutes}</h1>
          <h2 className="text-[12px]">MINUTES</h2>
        </div>
      </div>

      <p className="text-[13px] font-light text-center">
        {countdown.event ? countdown.event.bodyPreview : "No Events"}
      </p>
    </div>
  );
};

export default EventName;
