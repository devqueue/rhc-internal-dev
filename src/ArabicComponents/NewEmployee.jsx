import React, { useState, useEffect } from "react";

const NewEmployee = ({ newEmployee }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (newEmployee.length > 1 && !isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newEmployee.length - 1 ? 0 : prevIndex + 1
        );

        if (currentIndex === newEmployee.length - 1) {
          setIsTransitioning(false);
        }

        if (currentIndex != newEmployee.length - 1) {
          setIsTransitioning(true);
        }
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [newEmployee, currentIndex, isHovered]);

  if (newEmployee.length === 0) return null;

  return (
    <div className="overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`flex transition-transform ${
          isTransitioning ? "duration-500" : "duration-0"
        }`}
        style={{ transform: `translateX(${currentIndex * 100}%)` }}
      >
        {newEmployee.map((employee, index) => (
          <div
            key={index}
            className="flex w-full flex-shrink-0 flex-col items-center gap-[30px] bg-[#144566] py-[30px] rounded-[8px] overflow-hidden"
          >
            <h1 className="text-center sm:text-[20px] text-[12px] text-white font-light w-full px-[16px] text-wrap">
              أهلاً بك في عائلة الرياض القابضة
            </h1>

            <div
              className="h-[145px] w-[124px] bg-slate-300 rounded-[8px] overflow-hidden"
              style={{
                backgroundImage: `url('https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${employee.fields.employee_photo}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <h2 className="text-center sm:text-[16px] text-[11px] text-white h-[22.94px] self-stretch">
              {employee.fields.name_ar}
            </h2>

            <div className="flex flex-col content-center gap-[5px] pb-[30px] items-center text-center text-white self-stretch border-b-[1px] border-b-[#ffffff57] sm:text-[14px] text-[9px]">
              <h2 className="font-light">
                {employee.fields.job_title_ar || employee.fields.job_title_en}
              </h2>
              <h2 className="font-medium">{employee.fields.department_ar}</h2>
            </div>

            <p className="text-center self-stretch sm:text-[14px] text-[9px] font-light min-h-[41px] px-[28px] text-white">
              {employee.fields.reason_ar}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewEmployee;
