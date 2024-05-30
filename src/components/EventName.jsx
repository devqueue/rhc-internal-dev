const EventName = ({events}) => {
  console.log(events);
  return (
    <div className="py-[30px] px-[20px] bg-[#3B729C] flex flex-col justify-center items-center gap-[24px] text-white rounded-[8px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[20px] font-light ">Event Name</h1>
        <h2 className="text-[16px] font-light ">Starting In</h2>
      </div>

      <div className="flex flex-wrap gap-[12px] justify-center">
        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">10</h1>
          <h2 className="text-[12px]">DAYS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">08</h1>
          <h2 className="text-[12px]">HOURS</h2>
        </div>

        <div className="w-[80px] h-[64px] flex flex-col justify-center items-center bg-white text-[#3B729C] rounded-md p-[10px]">
          <h1 className="text-[24px]">45</h1>
          <h2 className="text-[12px]">MINUTES</h2>
        </div>
      </div>

      <p className="text-[13px] font-light text-center">
        Lorem Ipsum is simply dummy text of the printing.
      </p>
    </div>
  );
};

export default EventName;
 