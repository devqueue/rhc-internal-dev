import React from "react";
import { Link } from "react-router-dom";

const Calender = ({ events }) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));

  const renderEvents = (events, title) => (
    <div className="px-[30px] my-[20px]">
      <h1 className="sm:text-[16px] text-[11px] pb-[10px]">{title}</h1>
      <div className="flex flex-col gap-[10px]">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-stretch border-[1px] border-[#50917F] rounded-lg"
          >
            <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
              <h1 className="sm:text-[24px] text-[16px] font-medium">
                {event.day}
              </h1>
              <h1 className="text-[12px] font-medium">{event.month}</h1>
            </div>
            <div className="px-[30px] py-[12px] flex-1 flex items-center">
              <div>
                <h1 className="sm:text-[16px] text-[11px] w-[100%]">
                  {event.name}
                </h1>
                <h2 className="text-[14px] text-[#888888]" style={{direction: "ltr"}}>
                  {event.starttime} - {event.endtime}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Events for today and this week
  let todayEvents = events.filter((event) => {
    const eventDate = new Date(todayYear, todayMonth, event.day);
    return eventDate.toDateString() === new Date().toDateString();
  });

  todayEvents.sort((a, b) => parseInt(a.day) - parseInt(b.day));

  let weekEvents = events.filter((event) => {
    const todayEvent = new Date(todayYear, todayMonth, todayDay);
    const eventDate = new Date(todayYear, todayMonth, event.day);
    return eventDate > todayEvent && eventDate <= endOfWeek && eventDate.toDateString() !== new Date().toDateString();
  });

  weekEvents.sort((a, b) => parseInt(a.day) - parseInt(b.day));




  // console.log("Today Events:", todayEvents);
  // console.log("Week Events:", weekEvents);

  if (!events || events.length === 0) return null;

  return (
    <div className="w-full h-[424px] bg-white rounded-lg overflow-hidden shadow-md relative">
      <div className="bg-[#3B729C] w-full flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">التقويم</h1>
        <Link
          className="text-[14px] px-[10px] py-[5px] bg-white text-[#3B729C] rounded-[8px]"
          to="https://outlook.office.com/calendar/view/month"
          target="_blank"
        >
          عرض الكل
        </Link>
      </div>
      {todayEvents.length > 0 || weekEvents.length > 0 ? (
        <div className="h-full overflow-y-auto pb-16">
          {todayEvents.length > 0 ? renderEvents(todayEvents, "Today") : null}
          <hr />
          {weekEvents.length > 0 ? renderEvents(weekEvents, "This Week") : null}
        </div>
      ) : (
        <div className=" h-full w-full absolute top-0 left-0 flex justify-center items-center">لا يوجد أحداث في التقويم</div>
      )}
    </div>
  );
};

export default Calender;
