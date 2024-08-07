import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import EmployeeCard from "../components/EmployeeCard";
import { useLocation } from "react-router-dom";

const EmployeeDirectory = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobTitleFilter, setJobTitleFilter] = useState("");
  const location = useLocation();
  const token = location.state ? location.state : "";
  const [alert, setAlert] = useState(false);

  const fetchPhoto = async (id) => {
    try {
      const response = await fetch(
        `https://graph.microsoft.com/v1.0/users/${id}/photo/$value`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        return "";
      }
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!token) return;
      try {
        const response = await fetch(
          `https://graph.microsoft.com/v1.0/users?$filter=endswith(mail,'riyadhholding.sa') and accountEnabled eq true&$count=true&$top=300&$select=businessPhones,displayName,givenName,surname,userPrincipalName,id,jobTitle,mail,department`,
          {
            headers: {
              Authorization: "Bearer " + token,
              ConsistencyLevel: "eventual",
            },
          }
        );
        const json = await response.json();
        const filteredEmployees = json.value.filter(obj => obj.businessPhones.length !== 0);
        
        const updatedEvents = await Promise.all(filteredEmployees.map(async (employee) => {
          const img = await fetchPhoto(employee.id);
          employee['img'] = img;
          return employee;
        }));
  
        setEvents(updatedEvents);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployee();
  }, [token]);

  const filteredEvents = events.filter((event) =>
    event.displayName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (jobTitleFilter ? event.department === jobTitleFilter : true)
  );

  const jobTitles = Array.from(new Set(events.map(event => event.department).filter(Boolean)));

  return (
    <>
      <div className="overflow-hidden w-full bg-[#F4F8FB]">
        <Nav />
        {alert && (
          <div className="max-w-xs fixed bottom-7 mx-auto right-7 bg-white border border-gray-200 rounded-xl shadow-lg" style={{zIndex:'99999'}} role="alert">
            {/* Alert content here */}
          </div>
        )}
        <div className="w-full pt-[30px] min-h-[424px] bg-[#F4F8FB] overflow-hidden shadow-md px-[40px]">
          {/* Header and styling */}
          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="flex flex-col-reverse md:flex-row items-center bg-white border border-[#50917F] rounded-lg p-2 w-[92%] mx-auto">
              <div className="flex items-center px-2">
                {/* Search Icon */}
              </div>
              <input
                type="text"
                placeholder="Search For Employee"
                className="flex-grow px-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                value={jobTitleFilter}
                onChange={(e) => setJobTitleFilter(e.target.value)}
                className="md:ml-4 p-2 rounded-md bg-gray-100 max-w-full"
              >
                <option value="">All Departments</option>
                {jobTitles.map((title, index) => (
                  <option key={index} value={title}>{title}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-[80px] lg:mx-16 md:mx-16 sm:mx-12 xs:justify-center xs:mx-4">
              {filteredEvents.map((event, index) => (
                <EmployeeCard
                  bg={"#50917F"}
                  fg={"white"}
                  key={index}
                  token={token}
                  img={event.img}
                  setAlert={setAlert}
                  id={event.id}
                  title={event.displayName}
                  jobTitle={event.jobTitle || "Not Found"}
                  department={event.department || "Not Found"}
                  number={
                    event.businessPhones ? event.businessPhones[0] : "Not Found"
                  }
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
