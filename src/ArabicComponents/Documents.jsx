import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FlipbookArabic from './dflip';

const KnowledgeBase = ({ pdfs }) => {
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

  const filteredPdfs = pdfs.filter(pdf =>
    pdf.fields.title_ar.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter ? pdf.fields.Category_ar === categoryFilter : true)
  );

  const categories = Array.from(new Set(pdfs.map(pdf => pdf.fields.Category_ar).filter(Boolean)));

  if (pdfs.length === 0) return null;

  return (
    <div className="flex flex-col items-start gap-[40px] w-full rounded-[8px] overflow-hidden pb-10 shadow-md" style={{ direction: "rtl" }}>
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          الملفات
        </h1>
        
      </div>
      <div className="flex w-[90%] m-auto bg-slate-100 overflow-hidden  rounded-md">
          <input
            type="text"
            placeholder="بحث بالاسم"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-[12px] p-[5px] w-full rounded-l-md bg-transparent text-gray-800"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-[12px] p-[5px] rounded-r-md bg-gray-200 text-gray-800"
          >
            <option value="">جميع الفئات</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
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
              {pdf.fields.title_ar}
            </h1>
            <h3 className="text-[12px] font-light self-stretch">
              {pdf.fields.Category_ar}
            </h3>
          </div>
        </div>
      ))}

      {isPopupOpen && selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[90%] h-auto">
            <button
              className="absolute top-2 right-2 text-[24px] font-bold text-gray-700"
              onClick={closePopup}
            >
              &times;
            </button>
            <FlipbookArabic source={`/${selectedPdf.fields.document_name}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
