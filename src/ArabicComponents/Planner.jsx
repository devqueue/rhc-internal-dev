const Planner = ({tasks}) => {
  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="bg-[#3B729C] w-full min-h-[64px] gap-[10px] flex justify-between items-center flex-wrap px-[30px] py-[20px] text-[white] mb-[30px]">
          <h1 className="text-[20px]">بلانر</h1>
          <a
            className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-[8px]"
            href=""
          >
            عرض الكل
          </a>
        </div>

        <div className="w-full flex flex-col gap-[15px]">
        {tasks.map((task, index) => (
          <div key={index} className="px-[30px] flex gap-[15px] w-full">
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
                <div className="px-[25px] border-r-[1px] border-r-[#50917F] flex flex-col justify-center flex-grow-0">
                  <h1 className="text-[24px] font-medium">{task.title[0]}</h1>
                </div>

                <div className="px-[30px] py-[12px] flex-1 flex items-center">
                  <div>
                    <h1 className="text-[16px] w-[100%]">{task.title}</h1>
                    <h2 className="text-[14px] text-[#888888]">
                      Due Date: {task.dueDate}
                    </h2>
                    <a className="text-[14px] text-[#3B729C]" href={task.url} target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

export default Planner;
