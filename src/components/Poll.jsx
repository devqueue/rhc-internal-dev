import { useState } from "react";
import { Link } from "react-router-dom";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [voteCasted, setVoteCasted] = useState(false);

  const options = [
    { label: "Excellent", value: "option1" },
    { label: "Good", value: "option2" },
    { label: "Acceptable", value: "option3" },
  ];

  const handleOptionChange = (value) => {
    if (!voteCasted) {
      setSelectedOption(value);
    }
  };

  const handleVote = () => {
    if (selectedOption) {
      setVoteCasted(true);
    }
  };

  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-white mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">Poll</h1>
        {/* <Link
          className="sm:text-[14px] text-[9px] px-[10px] py-[5px] bg-white text-[#50917F] rounded-[8px]"
          to="#" //"/all-polls"
        >
          View All
        </Link> */}
      </div>

      <div className="w-full px-[30px]">
        <p className="mb-[30px] sm:text-base text-[10.5px]">
          What is your assesment of the user interface design for the new portal
        </p>

        <div className="flex flex-col gap-[16px]">
          {options.map((option) => (
            <div
              key={option.value}
              className={`w-full px-[33px] py-[17px] border-[1px] border-[#50917F] rounded-lg flex items-center gap-[16px] cursor-pointer ${voteCasted ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                disabled={voteCasted}
              />
              <span className="w-[33px] h-[33px] border-[1px] border-[#888888] rounded-full flex items-center justify-center shrink-0">
                <span
                  className={`w-[60%] h-[60%] bg-[#3B729C] rounded-full ${
                    selectedOption === option.value
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                ></span>
              </span>

              <label
                className={`sm:text-[16px] text-[11px] ${voteCasted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                htmlFor={option.value}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleVote}
          className={`h-[48px] bg-[#50917F] w-full my-[30px] flex justify-center items-center rounded-lg text-white ${voteCasted ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={voteCasted}
        >
          Vote
        </button>
        {voteCasted && (
          <p className="text-center text-[#50917F] mt-4">
            Thank you for voting!
          </p>
        )}
      </div>
    </div>
  );
};

export default Poll;
