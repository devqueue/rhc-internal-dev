import React, { useState, useEffect } from "react";

const NewEmployee = ({ employees }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if(employees.length === 0) return null;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === employees.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [employees]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {employees.map((employee, index) => (
          <div
            key={index}
            className="flex w-full flex-shrink-0 flex-col items-center gap-[30px] bg-[#50917F] py-[30px] rounded-[8px] overflow-hidden"
          >
            <h1 className="text-center text-[20px] text-white font-light h-[28.98px] ">
              New Employee
            </h1>

            <div className="h-[145px] w-[124px] bg-slate-300 rounded-[8px] overflow-hidden"></div>

            <h2 className="text-center text-[16px] text-white h-[22.94px] self-stretch">
              {employee.fields.Title}
            </h2>

            <div className="flex flex-col content-center gap-[5px] pb-[30px] items-center text-center text-white self-stretch border-b-[1px] border-b-[#ffffff57] text-[14px]">
              <h2 className="font-light">{employee.fields.job_title_en}</h2>
              <h2 className="font-medium">{employee.fields.department_en}</h2>
            </div>

            <p className="text-center self-stretch text-[14px] font-light min-h-[41px] text-white">
              {employee.fields.reason_en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewEmployee;
