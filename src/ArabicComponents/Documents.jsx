import { Link } from "react-router-dom";

const KnowledgeBase = () => {
  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden  shadow-md pb-10">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
        الملفات
        </h1>

        {/* <Link
          href=""
          className="sm:text-[14px] text-[9px] font-light rounded-[4px] px-[10px] bg-white text-[#3B729C]"
        >
          عرض الكل
        </Link> */}
      </div>

      <a href="/pdf" target="_blank" className="flex self-stretch p-[12px] px-[20px] mx-[20px] items-center gap-[10px] rounded-[8px] border border-[#595959]">
        <img src="/icons/newdoc.svg" alt="" />

        <div>
          <h1 className="sm:text-[14px] text-[9px] font-medium self-stretch">
          دليل الموظف الإرشادي          
          </h1>
          <h3 className="text-[12px] font-light self-stretch">ملفات</h3>
        </div>
      </a>
    </div>
  );
};

export default KnowledgeBase;
