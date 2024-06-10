import React, { useState } from "react";
import { Link } from "react-router-dom";

const KnowledgeBaseUpdated = () => {
  const [videoPopUp, setVideoPopUp] = useState(false);

  const handleVideo = () => {
    setVideoPopUp(!videoPopUp);
  };

  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md relative">
      <div className="bg-[#3B729C] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-[white]">
        <h1 className="sm:text-[20px] text-[12px]">Knowledge Base</h1>
        {/* <Link
          to="/all-employees"
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-md"
        >
          View All
        </Link> */}
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
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

          <button
            className="underline text-[14px] font-normal"
            onClick={handleVideo}
          >
            Play Video
          </button>
        </div>
      </div>

      {videoPopUp && (
        <div className="flex justify-center items-center w-full h-full bg-white absolute top-0 z-30">
          Play Video
          <div
            className="absolute top-[20px] right-[20px] cursor-pointer"
            onClick={handleVideo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z"
                fill="#1C1A27"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBaseUpdated;
