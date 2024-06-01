import React, { useState } from "react";

const PollCard = ({questions, option}) => {
  const options = [
    { label: "Yes, I have all the tools and equipment", value: "option1" },
    { label: "No...I need tools and equipment", value: "option2" },
    { label: "Some are available", value: "option3" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [isVoted, setIsVoted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleReminder = () => {
    if(!isVoted){
        setShowModal(true);
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const closeModal = () => {
    setShowModal(false);
    if (selectedOption) {
      setIsVoted(true);
    }
  };

  return (
    <>
      <div
        className={`w-[303px] gap-[40px] ${
          isVoted ? "bg-[#50907F]" : "bg-white"
        } rounded-[8px] `}
      >
        <div className="w-[303px] p-8 border-white border-b-[1px]">
          <p className={`text-[16px] ${isVoted ? "text-white" : "text-black"} font-figtree font-normal leading-[22px] px-2`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type?
          </p>
        </div>
        <div
          className={`w-[303px] h-[64px] bg-[#50907F] p-[20px_10px] flex gap-[10px] rounded-[8px] rounded-tl-none rounded-tr-none`}
          onClick={toggleReminder}
        >
          <div
            className={`w-[24px] h-[24px] bg-cover items-center justify-between ${
              isVoted ? "ml-20" : "ml-14"
            }`}
            style={{
              backgroundImage: `url('${
                isVoted ? "/icons/tick.svg" : "/icons/vote.svg"
              }')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p className="font-figtree font-medium text-[18px] leading-[21.6px] text-white text-center">
            {isVoted ? "VOTED" : "Cast Your Vote"}
          </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="min-h-[424px] w-[90%] sm:w-[400px] bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-white mb-[30px]">
              <h1 className="sm:text-[20px] text-[12px]">Poll</h1>
              <button
                className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-[8px]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>

            <div className="w-full px-[30px]">
              <p className="mb-[30px] sm:text-base text-[10.5px]">
                Do you think you have all the tools and equipment you need to
                carry out your daily tasks?
              </p>

              <div className="flex flex-col gap-[16px]">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={`w-full h-[62px] px-[33px] border-[1px] border-[#50917F] rounded-lg flex items-center gap-[16px]`}
                    onClick={() => handleOptionChange(option.value)}
                  >
                    <input
                      className="hidden"
                      type="radio"
                      id={option.value}
                      name="options"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => handleOptionChange(option.value)}
                    />
                    <span className="w-[33.31px] h-[33px] border-[1px] border-[#888888] rounded-full flex items-center justify-center">
                      <span
                        className={`w-[60%] h-[60%] bg-[#3B729C] rounded-full ${
                          selectedOption === option.value
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      ></span>
                    </span>

                    <label
                      className="sm:text-[16px] text-[11px]"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              <button
                className="h-[48px] w-full bg-[#50917F] flex justify-center items-center rounded-lg text-white my-[30px]"
                onClick={closeModal}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PollCard;
