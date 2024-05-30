const Calender = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="text-[20px]">تقويم</h1>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-[8px]"
          href=""
        >
          عرض الكل
        </a>
      </div>

      <div>
        <div className="px-[30px] my-[20px]">
          <h1 className="text-[16px] pb-[10px]">Today</h1>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
              <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
                <h1 className="text-[24px] font-medium">13</h1>
                <h1 className="text-[12px] font-medium">May</h1>
              </div>

              <div className="px-[30px] py-[12px] flex-1 flex items-center">
                <div>
                  <h1 className="text-[16px]  w-[100%]">Planner Title Comes Here</h1>
                  <h2 className="text-[14px] text-[#888888]">
                    10:00 AM - 12:00 NOON
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="px-[30px] my-[20px]">
          <h1 className="text-[16px] pb-[10px]">This Week</h1>
          <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
              <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
                <h1 className="text-[24px] font-medium">13</h1>
                <h1 className="text-[12px] font-medium">May</h1>
              </div>

              <div className="px-[30px] py-[12px] flex-1 flex items-center">
                <div>
                  <h1 className="text-[16px]  w-[100%]">Planner Title Comes Here</h1>
                  <h2 className="text-[14px] text-[#888888]">
                    10:00 AM - 12:00 NOON
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
              <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
                <h1 className="text-[24px] font-medium">13</h1>
                <h1 className="text-[12px] font-medium">May</h1>
              </div>

              <div className="px-[30px] py-[12px] flex-1 flex items-center">
                <div>
                  <h1 className="text-[16px]  w-[100%]">Planner Title Comes Here</h1>
                  <h2 className="text-[14px] text-[#888888]">
                    10:00 AM - 12:00 NOON
                  </h2>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
