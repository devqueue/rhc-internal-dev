import { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav"
import EmployeeCard from "../components/EmployeeCard"

const EmployeeDirectory = () => {
    const location = useLocation();
    console.log("location", location); 
    const employees = location.state ? location.state : [];
    const displayedEmployees = employees ? employees.slice(0, 9) : [];
  return (
    <>
    <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
      <div className="w-full pt-[30px] min-h-[424px] bg-[#F4F8FB] overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] rounded-[8px] rounded-bl-none rounded-br-none flex justify-between items-center px-[30px] py-[20px] text-[white] mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">Employee Directory</h1>
      </div>

      <div className="w-full flex flex-col items-start gap-[20px]">
        <div className="flex items-center bg-white border border-[#50917F] rounded-lg p-2 w-[92%] mx-auto">
          <div className="flex items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#888888] ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.222-5.222"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search For Employee"
            className="flex-grow px-4 py-2"
            // value={searchQuery}
          />
        </div>

        <div className="px-14 mx-auto flex flex-wrap gap-[60px] md:gap-8 lg:gap-[60px] justify-between">
        {employees && displayedEmployees.map((employee, index) => (
              <EmployeeCard
                key={index}
                img={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${employee.fields.photo_name}`}
                title={employee.fields.Title}
                jobTitle={employee.fields.jobTitle}
                number={employee.fields.number}
                email={employee.fields.email}
              />
            ))}
        </div>
    </div>
        
    </div>
    </div>
    </>
  )
}

export default EmployeeDirectory