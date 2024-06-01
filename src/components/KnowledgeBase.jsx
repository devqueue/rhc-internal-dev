import { Link } from "react-router-dom";

const KnowledgeBase = () => {
  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden pb-10">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          Knowledge Base
        </h1>

        <Link
          href=""
          className="sm:text-[14px] text-[9px] font-light rounded-[4px] text-[#3B729C] px-[10px] bg-white"
        >
          View All
        </Link>
      </div>

      <div className="flex self-stretch  p-[12px] px-[20px] mx-[20px] items-center gap-[10px] rounded-[8px] border border-[#595959]">
        <img src="/icons/WebinarIcon.svg" alt="" />

        <div>
          <h1 className="sm:text-[14px] text-[9px] font-medium self-stretch">
            Webinar - June Notebook
          </h1>
          <h3 className="text-[12px] font-light self-stretch">Assets</h3>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
