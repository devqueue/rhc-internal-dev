import React from "react";
import Nav from "../components/Nav";
import PollCard from "../components/PollCard";
import { useState } from "react";


const PollsAr = () => {
    const [events, setEvents] = useState([
        {
            "question": "Do you think you have all the tools and equipment you need to carry out your daily tasks?",
            "option": [
              { "label": "Yes, I have all the tools and equipment", "value": "option1" },
              { "label": "No...I need tools and equipment", "value": "option2" },
              { "label": "Some are available", "value": "option3" }
            ]
          },
          {
            "question": "Are you satisfied with the current work-from-home arrangements?",
            "option": [
              { "label": "Yes, I am satisfied", "value": "option1" },
              { "label": "No, I prefer working from the office", "value": "option2" },
              { "label": "I have no preference", "value": "option3" }
            ]
          },
          {
            "question": "How would you rate the support from the IT department?",
            "option": [
              { "label": "Excellent", "value": "option1" },
              { "label": "Good", "value": "option2" },
              { "label": "Average", "value": "option3" },
              { "label": "Poor", "value": "option4" }
            ]
          },
          {
            "question": "Do you think you have all the tools and equipment you need to carry out your daily tasks?",
            "option": [
              { "label": "Yes, I have all the tools and equipment", "value": "option1" },
              { "label": "No...I need tools and equipment", "value": "option2" },
              { "label": "Some are available", "value": "option3" }
            ]
          },
          {
            "question": "Are you satisfied with the current work-from-home arrangements?",
            "option": [
              { "label": "Yes, I am satisfied", "value": "option1" },
              { "label": "No, I prefer working from the office", "value": "option2" },
              { "label": "I have no preference", "value": "option3" }
            ]
          },
          {
            "question": "How would you rate the support from the IT department?",
            "option": [
              { "label": "Excellent", "value": "option1" },
              { "label": "Good", "value": "option2" },
              { "label": "Average", "value": "option3" },
              { "label": "Poor", "value": "option4" }
            ]
          },
          {
            "question": "How would you rate the support from the IT department?",
            "option": [
              { "label": "Excellent", "value": "option1" },
              { "label": "Good", "value": "option2" },
              { "label": "Average", "value": "option3" },
              { "label": "Poor", "value": "option4" }
            ]
          },
          {
            "question": "How would you rate the support from the IT department?",
            "option": [
              { "label": "Excellent", "value": "option1" },
              { "label": "Good", "value": "option2" },
              { "label": "Average", "value": "option3" },
              { "label": "Poor", "value": "option4" }
            ]
          }
    ]);
  return (
    <div className="overflow-hidden w-full bg-[#F4F8FB]"  style={{direction: "rtl"}}>
      <Nav />
      <div className="w-full pt-[30px] min-h-[424px] bg-[#F4F8FB] overflow-hidden shadow-md">
        <div className="bg-[#50917F] w-full h-[64px] flex rounded-[8px] rounded-bl-none rounded-br-none justify-between items-center px-[30px] py-[20px] text-white mb-[30px]">
          <h1 className="sm:text-[20px] text-[12px]">Poll</h1>
        </div>
        <div className="p-6 flex flex-wrap lg:justify-start md:gap-8 lg:gap-[30px] lg:mx-9 md:mx-9 sm:mx-28 xs:mx-18 xs:justify-center">
            {events.map((event, index) => (
                <PollCard
                key={index}
                question={event.question}
                option={event.options}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PollsAr;
