import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Flipbook from './dflip';
const KnowledgeBase = ({ pdfs }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPdf(null);
  };

  if(pdfs.length === 0) return null;

  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden pb-10 shadow-md">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          Documents
        </h1>

        {/* <Link
          to="/all-documents"
          className="sm:text-[14px] text-[9px] font-light rounded-[4px] text-[#3B729C] px-[10px] bg-white"
        >
          View All
        </Link> */}
      </div>

      {pdfs.map((pdf, index) => (
        <a
        target='_blank'
        href = "/pdf"
          key={index}
          className="flex self-stretch p-[12px] px-[20px] mx-[20px] items-center gap-[10px] rounded-[8px] border border-[#595959] cursor-pointer"
          // onClick={() => handlePdfClick(pdf)}
        >
          <img src="/icons/WebinarIcon.svg" alt="" />

          <div>
            <h1 className="sm:text-[14px] text-[9px] font-medium self-stretch">
              {pdf.fields.Title}
            </h1>
            <h3 className="text-[12px] font-light self-stretch">Documents</h3>
          </div>
        </a>
      ))}

      {isPopupOpen && selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[90%] h-[90%] ">
            <button
              className="absolute top-2 right-2 text-[24px] font-bold text-gray-700"
              onClick={closePopup}
            >
              &times;
            </button>
            <Flipbook source={`https://riyadhholding.sharepoint.com/sites/Shamil/Assets/${selectedPdf.fields.document_name}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
