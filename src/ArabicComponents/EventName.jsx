import React, { useEffect, useState } from "react";
import { DateTime } from 'luxon';

const EventName = ({ events }) => {

  const [nearestEvent, setNearestEvent] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const getNearestEvent = (events) => {
    const now = DateTime.now().setZone('Asia/Riyadh');
  
    const upcomingEvents = events
      .filter(event => event.startDateTime && event.startDateTime.dateTime)
      .map(event => {
        const eventDateTime = DateTime.fromISO(event.startDateTime.dateTime, { zone: event.startDateTime.timeZone });
        return { ...event, eventDateTime };
      })
      .filter(event => event.eventDateTime > now)
      .sort((a, b) => a.eventDateTime - b.eventDateTime);
  
    return upcomingEvents[0];
  };

  const calculateCountdown = (eventDateTime) => {
    const now = DateTime.now().setZone('Asia/Riyadh');
    const diff = eventDateTime.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject();
    return {
      days: diff.days,
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: diff.seconds,
    };
  };
  

  useEffect(() => {
    if (events.length > 0) {
      const nearestEvent = getNearestEvent(events);
      setNearestEvent(nearestEvent);
      if (!nearestEvent) {
        return;
      }

      const updateCountdown = () => {
        const newCountdown = calculateCountdown(nearestEvent.eventDateTime);
        setCountdown(newCountdown);
      };

      updateCountdown();
      const intervalId = setInterval(updateCountdown, 60000); // Update every minute

      return () => clearInterval(intervalId);
    }
  }, [events]);

  if(events.length === 0 || !nearestEvent){
    return(
      <div className="py-[30px] px-[20px] bg-[#3B729C] flex flex-col justify-center items-center gap-[24px] text-white rounded-[8px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="sm:text-[20px] text-[12px] font-light ">
        &nbsp;
        </h1>
        <h2 className="sm:text-[16px] text-[11px] font-light ">لا يوجد حدث</h2>
      </div>

      <p className="text-[13px] font-light text-center">
        &nbsp;
      </p>
    </div>
    )
  };

  return (
    <div className="py-[30px] px-[20px] bg-[#3B729C] flex flex-col justify-center items-center gap-[24px] text-white rounded-[8px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="sm:text-[20px] text-[12px] font-light ">
          {nearestEvent ? nearestEvent.subject : "No Event"}
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
