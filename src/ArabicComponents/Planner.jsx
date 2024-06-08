import { Link } from "react-router-dom";

const Planner = ({ tasks }) => {

  const sortedTasks = tasks.sort((a, b) => {
    // Splitting date components for task A
    const [dayA, monthA, yearA] = a.dueDate ? a.dueDate.split('/') : [null, null, null];
    // Splitting date components for task B
    const [dayB, monthB, yearB] = b.dueDate ? b.dueDate.split('/') : [null, null, null];
  
    // Handle cases where due date is null
    if (!yearA && !yearB) return 0;
    if (!yearA) return 1;
    if (!yearB) return -1;
  
    // Compare years
    if (yearA !== yearB) return parseInt(yearA) - parseInt(yearB);
    
    // Compare months
    if (monthA !== monthB) return parseInt(monthA) - parseInt(monthB);
  
    // Compare days
    if (dayA !== dayB) return parseInt(dayA) - parseInt(dayB);
  
    return 0;
  });
  
  if (tasks.length === 0) {
    return (
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="bg-[#3B729C] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white] mb-[30px]">
          <h1 className="sm:text-[20px] text-[12px]"> (بلانر) المهام</h1>
          <Link
            className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#3B729C] rounded-[8px]"
            to="https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/"
            target="_blank"
          >
            عرض الكل
          </Link>
        </div>

        <div className="w-full flex flex-col gap-[15px] p-7">
          لا توجد مهام في البلانر
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
        <div className="bg-[#3B729C] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white] mb-[30px]">
          <h1 className="sm:text-[20px] text-[12px]">(بلانر) المهام</h1>
          <Link
            className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#3B729C] rounded-[8px]"
            to="https://tasks.office.com/arhc.com.sa/en-US/Home/Planner/"
            target="_blank"
          >
            عرض الكل
          </Link>
        </div>

        <div className=" h-full overflow-y-auto pb-24 pt-[30px]">
          <div className="w-full flex flex-col gap-[15px] pb-10">
            {sortedTasks.map((task, index) => (
              <div key={index} className="px-[30px] flex gap-[15px] w-full">
                <div className="flex flex-col gap-[10px] w-full">
                  <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
                    <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
                      <h1 className="sm:text-[24px] text-[16px] font-medium">
                        {task.title[0]}
                      </h1>
                    </div>

                    <div className="px-[30px] py-[12px] flex-1 flex items-center">
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
    </>
  );
};

export default Planner;
