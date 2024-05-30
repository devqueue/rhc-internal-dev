const Planner = () => {
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
          <div className="px-[30px] flex gap-[15px] w-full">
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
                <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0 ">
                  <h1 className="text-[24px] font-medium">TE</h1>
                </div>

                <div className="px-[30px] py-[12px] flex-1 flex items-center">
                  <div>
                    <h1 className="text-[16px]  w-[100%]">
                      Planner Title Comes Here
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[30px] flex gap-[15px] w-full ">
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex items-stretch border-[1px] border-[#50917F] rounded-lg">
                <div className="px-[25px] border-l-[1px] border-l-[#50917F] flex flex-col justify-center flex-grow-0">
                  <h1 className="text-[24px] font-medium">TE</h1>
                </div>

                <div className="px-[30px] py-[12px] flex-1 flex items-center">
                  <div>
                    <h1 className="text-[16px]  w-[100%]">
                      Planner Title Comes Here
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planner;
