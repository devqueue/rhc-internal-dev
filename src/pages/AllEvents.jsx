import { useState } from "react"; // Import useState to manage state
import Nav from "../components/Nav";
import EventCard from "../components/EventCard";
import { useLocation } from "react-router-dom";

const AllEvents = () => {
    const location = useLocation();
    // console.log("location", location);
    const events = location.state ? location.state : [];
    const sortedEvents = events.slice().sort((a, b) => {
      return new Date(a.fields.Start_time) - new Date(b.fields.Start_time);
    });
    
    if (!sortedEvents || sortedEvents.length === 0) {
      return <div>No upcoming events available.</div>;
    }

    return (
      <>
        <div className="overflow-hidden w-full">
          <Nav />
          <div className="py-[30px] overflow-hidden w-full shadow-md px-[30px] flex flex-col items-center">
            <div className="px-[20px] py-[16px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
              <h1 className="text-[18px] font-light self-stretch min-w-[100px] mt-1">
                Upcoming Events
              </h1>
              <a
                href=""
                className="text-[18px] w-[105px] h-[37px] p-[5px_10px] font-light rounded-[4px] text-white bg-[#3B729C] border-[1px] border-white items-center justify-center text-center"
              >
                Filter
              </a>
            </div>
            <div className="flex flex-wrap pt-[20px] lg:justify-start md:justify-start sm:justify-start gap-6 md:gap-8 lg:gap-[60px] ml-[30px] px-[30px] xs:justify-center xs:mx-4 bg-[#F4F8FB] w-full">
              {sortedEvents.map((event, index) => (
                <EventCard
                  key={index}
                  start_time={event.fields.Start_time}
                  end_time={event.fields.end_time}
                  Title={event.fields.Title}
                  event_location_en={event.fields.event_location_en}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default AllEvents;
