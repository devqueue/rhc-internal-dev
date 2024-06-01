import React, { useState } from 'react';
import { Link } from "react-router-dom";

const EmployeeDirectory = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.fields.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedEmployees = filteredEmployees.slice(0, 10);

  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white] mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">Employee Directory</h1>
        <Link to="/all-employees" className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md">
          View All
        </Link>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full px-[15px] max-h-[500px] overflow-y-auto">
          {displayedEmployees.map((employee, index) => (
            <div
              key={index}
              className="flex gap-[20px] mt-[20px] px-[30px] border-b-[1px] w-full sm:flex-nowrap flex-wrap"
            >
              <div className="w-[80px] h-[80px] bg-slate-300 rounded-lg">
                <img
                  src={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${employee.fields.photo_name}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-[#444444] pb-[6px]">
                <h1 className="sm:text-[16px] text-[11px]">
                  {employee.fields.Title}
                </h1>
                <div className="sm:text-[14px] text-[9px] font-light">
                  <p>Job Title: {employee.fields.jobTitle}</p>
                  <p>Phone: {employee.fields.number}</p>
                  <p>Email: {employee.fields.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
