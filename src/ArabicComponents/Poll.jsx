import { useEffect, useState } from "react";

const Poll = ({ polls }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [voteCasted, setVoteCasted] = useState(false);
  const [optionIdCasted,setOptionIdCasted] = useState('');
  const [poll, setPoll] = useState({});
  const [globalPoll, setGlobalPoll] = useState({});

  const getGlobalPoll = async (poll_id) => {
    try {
      const response = await fetch(`https://api.pollsapi.com/v1/get/poll/${poll_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'HTXCR5N6J1M6YNQYWZH2SW0A3G47',
        },
      });
      const globalPollData = await response.json();
      // setGlobalPoll(globalPollData.data);
      // console.log(globalPollData)
    } catch (error) {
      console.error("Error fetching global poll data:", error);
    }
  };

  const getPollByIdentifier = async (poll_id) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(`https://api.pollsapi.com/v1/get/votes-with-identifier/${user.mail}?offset=0&limit=25`, {
        headers: { 'api-key': 'HTXCR5N6J1M6YNQYWZH2SW0A3G47' },
      });
      if (response.ok) {
        const pollsData = await response.json();
        pollsData.data.docs.forEach((element) => {
          if (element.poll_id === poll_id) {
            // console.log(element.option_id)
            setOptionIdCasted(element.option_id)
            setVoteCasted(true);
          }
        });
      }
    } catch (error) {
      console.error("Error checking user vote:", error);
    }
  };

  useEffect(() => {
    if (polls.length > 0) {
      polls.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
      const latestPoll = polls[0].fields;
      setPoll(latestPoll);
      getGlobalPoll(latestPoll.poll_id);
      getPollByIdentifier(latestPoll.poll_id);
    }
  }, [polls]);

  const vote = async () => {
    const selectedOptionObj = globalPoll.options.find(o => o.text === selectedOption);
    const user = JSON.parse(localStorage.getItem('user'));

    try {
      const response = await fetch('https://api.pollsapi.com/v1/create/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'HTXCR5N6J1M6YNQYWZH2SW0A3G47',
        },
        body: JSON.stringify({
          poll_id: poll.poll_id,
          option_id: selectedOptionObj.id,
          identifier: user.mail,
        }),
      });

      if (response.ok) {
        setVoteCasted(true);
        getGlobalPoll(poll.poll_id);  // Refresh poll data after voting
        getPollByIdentifier();
      }
    } catch (error) {
      console.error("Error casting vote:", error);
    }
  };

  const options = [
    { label: poll.option1_ar, value: poll.option1_en },
    { label: poll.option2_ar, value: poll.option2_en },
    { label: poll.option3_ar, value: poll.option3_en },
  ];

  const handleOptionChange = (value) => {
    if (!voteCasted) {
      setSelectedOption(value);
    }
  };

  const handleVote = () => {
    if (selectedOption) {
      vote();
    }
  };

  if (!poll || options.length === 0) return null;

  const totalVotes = globalPoll.options ? globalPoll.options.reduce((total, option) => total + option.votes_count, 0) : 0;

  return (
    <div className="w-full min-h-[424px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-[#50917F] w-full h-[64px] flex justify-between items-center px-[30px] py-[20px] text-white mb-[30px]">
        <h1 className="sm:text-[20px] text-[12px]">استطلاع رأي</h1>
      </div>

      <div className="w-full px-[30px]">
        <p className="mb-[30px] sm:text-base text-[10.5px]">
          {poll.question_ar}
        </p>

        {!voteCasted ? (
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
                    className={`w-[60%] h-[60%] bg-[#3B729C] rounded-full ${selectedOption === option.value ? "opacity-100" : "opacity-0"}`}
                  ></span>
                </span>

                <label className={`sm:text-[16px] text-[11px] ${voteCasted ? 'cursor-not-allowed' : 'cursor-pointer'}`} htmlFor={option.value}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-[16px]">
            {globalPoll.options && globalPoll.options.map((option,i) => {
              const percentage = totalVotes > 0 ? ((option.votes_count / totalVotes) * 100).toFixed(2) : 0;
              return (
                <div key={option.id} className="w-full">
                  <div className="flex justify-between">
                    <span>{options[i].label}</span>
                    <span>{parseInt(percentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-[24px]">
                    {percentage>0 && <div className={`${option.id===optionIdCasted?'bg-[#50917F]':'bg-[#8f9b97]'} h-[24px] rounded-full flex justify-end pl-1`} style={{ width: `${parseInt(percentage)}%`,alignItems:'center' }}>

                      {option.id===optionIdCasted && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                        </svg>}

                    </div>}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!voteCasted && (
          <button
            onClick={handleVote}
            className={`h-[48px] bg-[#50917F] w-full my-[30px] flex justify-center items-center rounded-lg text-white ${voteCasted ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={voteCasted}
          >
            تصويت
          </button>
        )}
        {/* {voteCasted && (
          <p className="text-center text-[#50917F] mt-4">
            Thank you for voting!
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Poll;
