import React from "react";
import NewEmployeeDirectory from "./NewEmployeeDirectory";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const NewEmployeeCards = () => {
  return (
    <div className="pb-[40px] w-full bg-[#F9f9f9] rounded-lg overflow-hidden">
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">LinkedIn</h1>
        <Link
          to="/all-employees"
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md"
        >
          View All
        </Link>
      </div>

      <div className="flex gap-[41.88px] flex-wrap sm:px-[41px] px-[5vw] pt-[30px] ">
        <NewEmployeeDirectory/>

        <NewEmployeeDirectory/>

        <NewEmployeeDirectory/>

        <NewEmployeeDirectory/>
      </div>
    </div>
  );
};

export default NewEmployeeCards;
