import React from 'react';

const Calendar = ({ events }) => {
  
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const renderEvents = (events, title) => (
    <div className="px-[30px] my-[20px]">
      <h1 className="text-[16px] pb-[10px]">{title}</h1>
      <div className="flex flex-col gap-[10px]">
        {events.map((event, index) => (
          <div key={index} className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
            <div className="px-[25px] border-r-[1px] border-r-[#50917F] flex flex-col justify-center flex-grow-0">
              <h1 className="text-[24px] font-medium">{event.day}</h1>
              <h1 className="text-[12px] font-medium">{event.month}</h1>
            </div>
            <div className="px-[30px] py-[12px] flex-1 flex items-center">
              <div>
                <h1 className="text-[16px] w-[100%]">{event.name}</h1>
                <h2 className="text-[14px] text-[#888888]">
                  {event.starttime} - {event.endtime}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // const todayEvents = events.filter(event => new Date(event.starttime).getDate() === today);
  // const weekEvents = events.filter(event => new Date(event.starttime).getDate() !== today);
  const todayEvents = events.filter(event => {
    return event.day === todayDay;
});
  const weekEvents = events.filter(event => {
    return event.day !== todayDay;
  });

  console.log('Today Events:', todayEvents);
  console.log('Week Events:', weekEvents);

  if(!events || events.length === 0) return null

  return (
    <div className="w-full h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="text-[20px]">Calendar</h1>
        <a className="text-[14px] px-[10px] py-[5px] bg-white rounded-md text-[#3B729C]" href="">
          View All
        </a>
      </div>
      <div className="h-full overflow-y-auto pb-16">
        {todayEvents.length > 0? renderEvents(todayEvents, 'Today'):null}
        <hr />
        {weekEvents.length > 0 ?renderEvents(weekEvents, 'This Week'):null}
      </div>
    </div>
  );
};

export default Calendar;
