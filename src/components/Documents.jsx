import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flipbook from "./dflip";

const KnowledgeBase = ({ pdfs, siteID }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPdf(null);
  };

  const filteredPdfs = pdfs.filter(pdf => {
    return (
      pdf.fields.Title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter ? pdf.fields.Category_en === categoryFilter : true)
    );
  });

  const categories = Array.from(new Set(pdfs.map(pdf => pdf.fields.Category_en).filter(Boolean)));

  if (pdfs.length === 0) return null;

  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden pb-10 shadow-md">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          Documents
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-[12px] p-[5px] rounded-l-md text-gray-800"
          />
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-[12px] p-[5px] rounded-r-md text-gray-800"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredPdfs.map((pdf, index) => (
        <div
          key={index}
          className="flex self-stretch p-[12px] px-[20px] mx-[20px] items-center gap-[10px] rounded-[8px] border border-[#595959] cursor-pointer"
          onClick={() => handlePdfClick(pdf)}
        >
          <img src="/icons/newdoc.svg" alt="" />
          <div>
            <h1 className="sm:text-[14px] text-[9px] font-medium self-stretch">
              {pdf.fields.Title}
            </h1>
            <h3 className="text-[12px] font-light self-stretch">{pdf.fields.Category_en}</h3>
          </div>
        </div>
      ))}

      {isPopupOpen && selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[90%] max-w-[800px] h-auto">
            <button
              className="absolute top-2 right-2 text-[24px] font-bold text-gray-700"
              onClick={closePopup}
            >
              &times;
            </button>
            <Flipbook source={`/${selectedPdf.fields.document_name}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
