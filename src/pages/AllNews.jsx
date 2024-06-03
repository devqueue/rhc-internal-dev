import { useState } from "react"; // Import useState to manage state
import Nav from "../components/Nav";
import NewsCard from "../components/NewsCard";

const AllNews = () => {
  // Define some dummy events for demonstration
  const [events, setEvents] = useState([
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },
    { 
        img : "/icons/1.png",
        title: "Annual General Meeting",
        subheading: "Lorem Ipsum is simply dummy text of the printing."
    },

  ]);

  return (
    <>
      <div className="overflow-hidden w-full">
        <Nav />
        <div className="py-[30px] bg-[#F4F8FB] overflow-hidden w-full shadow-md ">
          <div className="px-[10px] py-[16px]  mb-[20px] flex items-center rounded-[8px] rounded-bl-none rounded-br-none justify-between gap-[10px] self-stretch flex-wrap bg-[#C2AB80] text-[white]">
            <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
              Corporate News
            </h1>
            
          </div>
          <div className="lg:p-0 p-8 flex flex-wrap justify-start gap-6 md:gap-8 lg:gap-[22px] lg:mx-9 md:mx-12 sm:mx-28 xs:mx-56">
            {events.map((event, index) => (
              <NewsCard
              key={index}
                img={event.img}
                title={event.title}
                subheading={event.subheading}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;
