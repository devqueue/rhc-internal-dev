import React, { useState } from "react";
import { Link } from "react-router-dom";

const KnowledgeBaseUpdatedAr = () => {
  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">Knowledge Base</h1>
        <Link
          to="/all-employees"
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md"
        >
          View All
        </Link>
      </div>

      <div className="w-full h-[360px] flex flex-col items-start gap-[20px] p-[20px] overflow-y-auto">
        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[10px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-normal">
            Play Video
          </button>
        </div>

        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[16px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-light text-[#1E1E1E]">
            Play Video
          </button>
        </div>

        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[16px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-normal">
            Play Video
          </button>
        </div>

        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[16px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-normal">
            Play Video
          </button>
        </div>

        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[16px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-normal">
            Play Video
          </button>
        </div>

        <div className="min-h-[61px] lg:h-[61px] flex justify-between gap-[16px] self-stretch rounded-lg border-[0.5px] border-[#595959] py-[12px] px-[20px]">
          <div className="flex gap-[20px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M35.6541 6.57837H9.34592C4.18431 6.57837 0 10.7627 0 15.9243V29.0756C0 34.2372 4.18431 38.4215 9.34592 38.4215H35.6541C40.8157 38.4215 45 34.2372 45 29.0756V15.9243C45 10.7627 40.8157 6.57837 35.6541 6.57837ZM29.3335 23.1398L17.0283 29.0086C16.7004 29.165 16.3217 28.9259 16.3217 28.5627V16.4582C16.3217 16.0898 16.7104 15.8511 17.039 16.0176L29.3441 22.2533C29.71 22.4386 29.7036 22.9633 29.3335 23.1398Z"
                fill="#585858"
              />
            </svg>

            <h2 className="text-[#1E1E1E] text-[14px] font-semibold">
              Webinar - June Notebook
            </h2>
          </div>

          <button className="underline text-[14px] font-normal">
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseUpdatedAr;
