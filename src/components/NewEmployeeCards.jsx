import React from "react";
import NewEmployeeDirectory from "./NewEmployeeDirectory";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const NewEmployeeCards = () => {
  return (
    <div className=" w-full rounded-lg overflow-hidden shadow-xl shadow-black border-[0.5px] drop-shadow-md">
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">LinkedIn</h1>
        {/* <Link
          to="/all-employees"
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md "
        >
          View All
        </Link> */}
      </div>

      <div className="flex gap-[41.88px] flex-wrap sm:h-[800px] h-[960px] bg-white">
        <iframe
        className=""
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25421759"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>

        {/* <NewEmployeeDirectory/> */}
      </div>
    </div>
  );
};

export default NewEmployeeCards;
