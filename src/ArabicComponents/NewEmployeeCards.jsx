import React from "react";
import NewEmployeeDirectory from "./NewEmployeeDirectory";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import NewEmployeeDirectoryAr from "./NewEmployeeDirectory";

const NewEmployeeCardsAr = () => {
  return (
    <div className="pb-[40px] w-full bg-[#F9f9f9] rounded-lg overflow-hidden">
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">لينكد إن</h1>
        {/* <Link
          to="/all-employees"
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md"
        >
          View All
        </Link> */}
      </div>

      <div className="flex gap-[41.88px] flex-wrap sm:h-[800px] h-[960px] bg-white ">
      <iframe
        className=""
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25421759"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>
      </div>
    </div>
  );
};

export default NewEmployeeCardsAr;
