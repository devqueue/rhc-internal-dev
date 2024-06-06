import React from "react";
import { Link } from "react-router-dom";

const Planner = ({ tasks }) => {
  //{ tasks }
  // const tasks = [
  //   {
  //     title: "Task 1",
  //     dueDate: "2024-06-10",
  //     url: "https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/#/task1",
  //   },
  //   {
  //     title: "Task 2",
  //     dueDate: "2024-06-11",
  //     url: "https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/#/task2",
  //   },
  //   {
  //     title: "Task 3",
  //     dueDate: "2024-06-12",
  //     url: "https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/#/task3",
  //   },
  //   {
  //     title: "Task 4",
  //     dueDate: "2024-06-11",
  //     url: "https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/#/task4",
  //   },
  //   {
  //     title: "Task 5",
  //     dueDate: null,
  //     url: "https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/#/task5",
  //   },
  // ];
  const sortedTasks = tasks.sort((a, b) => {
    if (a.dueDate === null) return 1;
    if (b.dueDate === null) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  if (tasks.length === 0){
    return(
      <div className="w-full h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white] mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">List From Planner</h1>
        <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#3B729C] rounded-md"
          to="https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/"
          target="_blank"
        >
          View All
        </Link>
      </div>

      <div className=" h-full overflow-y-auto p-7 pt-0">
      No tasks in planner
      </div>
    </div>
    )
  }
  return (
    <div className="w-full h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white] mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">List From Planner</h1>
        <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#3B729C] rounded-md"
          to="https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/"
          target="_blank"
        >
          View All
        </Link>
      </div>

      <div className=" h-full overflow-y-auto pb-24 pt-[30px]">
        <div className="w-full flex flex-col gap-[15px] pb-10">
          {sortedTasks.map((task, index) => (
            <div key={index} className="px-[30px] flex gap-[15px] w-full">
              <div className="flex flex-col gap-[10px] w-full">
                <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
                  <div className="px-[25px] border-r-[1px] border-r-[#50917F] flex flex-col justify-center flex-grow-0">
                    <h1 className="sm:text-[24px] text-[16px] font-medium">
                      {task.title[0]}
                    </h1>
                  </div>

                  <div className="px-[30px] py-[12px] flex-1 flex items-center w-full">
                    <div>
                      <h1 className="sm:text-[16px] text-[11px] w-[100%]">
                        {task.title}
                      </h1>
                      <h2 className="sm:text-[14px] text-[9px] text-[#888888]">
                        Due Date: {task.dueDate}
                      </h2>
                      <a
                        className="sm:text-[14px] text-[9px] text-[#3B729C]"
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Task
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planner;
