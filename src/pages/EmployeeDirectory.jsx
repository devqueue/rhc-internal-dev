import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import EmployeeCard from "../components/EmployeeCard";
import { useLocation } from "react-router-dom";

const EmployeeDirectory = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const token = location.state ? location.state : "";
  const [alert, setAlert] = useState(false);

  // Fetch employees when the component mounts
  useEffect(() => {
    const fetchEmployee = async () => {
      if (!token) return; // Ensure we only fetch if a token exists
      try {
        const response = await fetch(`https://graph.microsoft.com/v1.0/users`, {
          headers: { Authorization: "Bearer " + token },
        });
        const json = await response.json();
        setEvents(json.value);
        console.log('fetchEmployee', json);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployee();
  }, [token, setEvents]);

  const filteredEvents = events.filter((event) =>
    event.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
        {alert && 
        <div className="max-w-xs fixed bottom-7 mx-auto right-7 bg-white border border-gray-200 rounded-xl shadow-lg" role="alert">
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg className="flex-shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg>
          </div>
          <div className="ms-3">
            <p className="text-sm text-gray-700 dark:text-neutral-400">
              {alert}
            </p>
          </div>
        </div>
      </div>
      }
        <div className="w-full pt-[30px] min-h-[424px] bg-[#F4F8FB] overflow-hidden shadow-md px-[40px]">
          <div className="bg-[#50917F] w-full h-[64px] rounded-[8px] rounded-bl-none rounded-br-none flex justify-between items-center px-[30px] py-[20px] text-[white] mb-[30px]">
            <h1 className="sm:text-[20px] xs:text-[16px] text-[12px]">Employee Directory</h1>
          </div>

          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="flex items-center bg-white border border-[#50917F] rounded-lg p-2 w-[92%] mx-auto">
              <div className="flex items-center px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#888888] ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5.222-5.222"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search For Employee"
                className="flex-grow px-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-[80px] lg:mx-16 md:mx-16 sm:mx-12 xs:justify-center xs:mx-4">
              {filteredEvents.map((event, index) => (
                <EmployeeCard
                  bg={'#50917F'}
                  fg={'white'}
                  key={index}
                  token={token}
                  setAlert={setAlert}
                  id={event.id}
                  title={event.displayName}
                  jobTitle={event.jobTitle || "Not Found"}
                  number={event.businessPhones ? event.businessPhones[0] : "Not Found"}
                  email={event.mail || "Not Found"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDirectory;
