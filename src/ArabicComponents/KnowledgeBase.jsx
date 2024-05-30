const KnowledgeBase = () => {
  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden  shadow-md">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="text-[20px] font-light self-stretch min-w-[100px]">
        Knowledge Base
        </h1>

        <a
          href=""
          className="text-[14px] font-light rounded-[4px] px-[10px] border-[1px]"
        >
          عرض الكل
        </a>
      </div>

      <div className="flex flex-col gap-[20px] items-start px-[16px] ">
        <h1 className="text-[16px]">Some Title Goes Here</h1>
        <p className="text-[16px] font-light pb-[30px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </div>
  );
};

export default KnowledgeBase;
