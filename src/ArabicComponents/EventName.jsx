import React, { useEffect, useState } from "react";

const EventName = ({ events }) => {
  const [nearestEvent, setNearestEvent] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const getNearestEvent = (events) => {
    const now = new Date();
    const upcomingEvents = events.filter(
      (event) =>
        new Date(`${event.month} ${event.day}, 2024 ${event.starttime}`) > now
    );
    const sortedEvents = upcomingEvents.sort(
      (a, b) =>
        new Date(`${a.month} ${a.day}, 2024 ${a.starttime}`) -
        new Date(`${b.month} ${b.day}, 2024 ${b.starttime}`)
    );
    return sortedEvents[0];
  };

  const calculateCountdown = (eventDate) => {
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    return { days, hours, minutes };
  };

  useEffect(() => {
    if (events.length > 0) {
      const nearestEvent = getNearestEvent(events);
      setNearestEvent(nearestEvent);
      const eventDate = new Date(
        `${nearestEvent.month} ${nearestEvent.day}, 2024 ${nearestEvent.starttime}`
      );

      const updateCountdown = () => {
        const newCountdown = calculateCountdown(eventDate);
        setCountdown(newCountdown);
      };

      updateCountdown();
      const intervalId = setInterval(updateCountdown, 60000); // Update every minute

      return () => clearInterval(intervalId);
    }
  }, [events]);

  if(events.length === 0) return null;

  return (
    <div className="py-[30px] px-[20px] bg-[#3B729C] flex flex-col justify-center items-center gap-[24px] text-white rounded-[8px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="sm:text-[20px] text-[12px] font-light ">
          {nearestEvent ? nearestEvent.name : "No Event"}
        </h1>
        <h2 className="sm:text-[16px] text-[11px] font-light ">Starting In</h2>
      </div>

      <div className="flex flex-wrap gap-[12px] justify-center">
        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="sm:text-[24px] text-[16px]">{countdown.days}</h1>
          <h2 className="text-[12px]">DAYS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="sm:text-[24px] text-[16px]">{countdown.hours}</h1>
          <h2 className="text-[12px]">HOURS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="sm:text-[24px] text-[16px]">{countdown.minutes}</h1>
          <h2 className="text-[12px]">MINUTES</h2>
        </div>
      </div>

      <p className="text-[13px] font-light text-center">
        {nearestEvent ? nearestEvent.bodyPreview : "No upcoming events"}
      </p>
    </div>
  );
};

export default EventName;
