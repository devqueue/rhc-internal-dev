import React, { useState, useEffect } from 'react';

const Announcement = () => {
  return (
    <div className="w-full justify-center bg-[#50917F] p-[20px] flex flex-wrap rounded-lg gap-[30px] items-center">
      <div className="w-[460px] h-[320px] bg-slate-300 rounded-lg overflow-hidden"></div>
      <div className="w-[401px] text-white">
        <h1 className="text-[24px] font-light mb-[10px]">Announcement Title Comes Here</h1>
        <p className="text-[16px] font-light mb-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
