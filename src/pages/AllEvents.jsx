import { useState } from "react"; // Import useState to manage state
import Nav from "../components/Nav";
import EventCard from "../components/EventCard";

const AllEvents = () => {
  // Define some dummy events for demonstration
  const [events, setEvents] = useState([
    {
      start_time: "11:00 AM",
      end_time: "2:00 PM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "10:00 AM",
      end_time: "1:00 PM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "9:00 AM",
      end_time: "12:00 PM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "8:00 AM",
      end_time: "11:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "7:00 AM",
      end_time: "10:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "6:00 AM",
      end_time: "9:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "5:00 AM",
      end_time: "8:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "4:00 AM",
      end_time: "7:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "3:00 AM",
      end_time: "6:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "2:00 AM",
      end_time: "5:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "1:00 AM",
      end_time: "4:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },

    {
      start_time: "12:00 AM",
      end_time: "3:00 AM",
      Title: "Annual General Meeting",
      event_location_en: "The Company`s Auditorium",
    },
  ]);

  return (
    <>
      <div className="overflow-hidden w-full">
        <Nav />
        <div className="py-[30px] bg-[#F4F8FB] overflow-hidden w-full h-[1603px] shadow-md ">
          <div className="px-[20px] py-[16px]  mb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white] ">
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
          <div className="flex flex-wrap justify-left gap-6 md:gap-8 lg:gap-auto lg:mx-9 md:mx-12 sm:mx-28 xs:justify-center">
            {events.map((event, index) => (
              <EventCard
                key={index}
                start_time={event.start_time}
                end_time={event.end_time}
                Title={event.Title}
                event_location_en={event.event_location_en}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvents;
