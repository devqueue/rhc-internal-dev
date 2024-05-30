import React from "react";

const Announcement = ({announcements}) => {
  if (!announcements || announcements.length === 0 ) {
    return null 
  }
  const { Title, preview_en } = announcements[0].fields;
  return (
    <div className="w-full justify-center bg-[#50917F] p-[20px] flex flex-wrap rounded-lg gap-[30px] items-center">
      <div className="w-[460px] h-[320px] bg-slate-300 rounded-lg overflow-hidden"></div>
      <div className="w-[401px] text-white">
        <h1 className="text-[24px] font-light mb-[10px]">{Title}</h1>
        <p className="text-[16px] font-light mb-[30px]">{preview_en}</p>
        <a
          className="text-[14px] px-[10px] py-[5px] border-[1px] border-white rounded-md"
          href=""
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default Announcement;
