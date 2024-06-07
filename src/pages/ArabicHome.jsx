import Announcement from "../ArabicComponents/Announcement";
import Banner from "../ArabicComponents/Banner";
import Calender from "../ArabicComponents/Calender";
import EmployeeDirectory from "../ArabicComponents/EmployeeDirectory";
import EventName from "../ArabicComponents/EventName";
import Gallery from "../ArabicComponents/Gallery";
import KnowledgeBase from "../ArabicComponents/KnowledgeBase";
import Nav from "../ArabicComponents/Nav";
import NewEmployee from "../ArabicComponents/NewEmployee";
import News from "../ArabicComponents/News";
import Planner from "../ArabicComponents/Planner";
import Poll from "../ArabicComponents/Poll";
import QuickLinks from "../ArabicComponents/QuickLinks";
import UpcomingEvents from "../ArabicComponents/UpcomingEvents";
import { useMsal } from '@azure/msal-react';
import { useState, useEffect } from 'react';
import { loginRequest, msalConfig } from '../authConfig';
import { InteractionRequiredAuthError, PublicClientApplication } from '@azure/msal-browser';

const msalInstance = new PublicClientApplication(msalConfig);

const ArabicHome = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [plannerTasks, setPlannerTasks] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [employeeDirectory, setEmployeeDirectory] = useState([]);
  const [news, setNews] = useState([]);
  const [newEmployee, setNewEmployee] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeMsal = async () => {
      await msalInstance.initialize();
      const accounts = msalInstance.getAllAccounts();
      setAccounts(accounts);
    };

    initializeMsal();
  }, []);

  useEffect(() => {
    const fetchListItems = async (token, siteId, listId, setStateFunction, name) => {
      try {
        const response = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?expand=fields`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        // console.log(`${name} items:`, data);

        if (data.value) {
          setStateFunction(data.value);
        } else {
          console.error(`No items found in ${listId}`);
        }
      } catch (error) {
        console.error(`Error fetching items from ${listId}:`, error);
      }
    };

    const acquireToken = async () => {
      if (accounts.length > 0) {
        const request = {
          ...loginRequest,
          account: accounts[0],
        };

        try {
          const response = await msalInstance.acquireTokenSilent(request);
          setAccessToken(response.accessToken);
          await fetchCalendarEvents(response.accessToken);
          await fetchPlannerTasks(response.accessToken);

          const userResponse = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: { Authorization: `Bearer ${response.accessToken}` }
          });
          const userJson = await userResponse.json();
          console.log('User details:', userJson);
          setUser(userJson);

          const response2 = await fetch('https://graph.microsoft.com/v1.0/sites/riyadhholding.sharepoint.com:/sites/Shamil/', {
            headers: { Authorization: `Bearer ${response.accessToken}` }
          });
          const resJson = await response2.json();
          const siteId = resJson.id;

          const lists = [
            { name: 'Announcements', id: '8123ed29-3809-4573-bd24-70b60e752aa1', setStateFunction: setAnnouncements },
            { name: 'Employee Directory', id: '50e093d8-d366-4994-a9d8-ac460cb6e18a', setStateFunction: setEmployeeDirectory },
            { name: 'News', id: '0304b663-8abb-414e-a03c-2d7f00cff357', setStateFunction: setNews },
            { name: 'New Employee', id: 'cc29e416-2bf1-4462-8d41-d2b437357776', setStateFunction: setNewEmployee },
            { name: 'Upcoming events', id: 'fd974e0a-d601-4921-804c-10ff956619e2', setStateFunction: setUpcomingEvents },
            { name: 'Gallery', id: '9505ceb4-ece5-447d-99fa-b383a324dcd9', setStateFunction: setGallery },
          ];

          const fetchPromises = lists.map(list => 
            fetchListItems(response.accessToken, siteId, list.id, list.setStateFunction, list.name)
          );

          await Promise.all(fetchPromises);
          setLoading(false); // Set loading to false after all data is fetched
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            msalInstance.acquireTokenRedirect(request);
          } else {
            console.error(error);
          }
        }
      }
    };

    const fetchCalendarEvents = async (token) => {
      try {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const isoDate = now.toISOString();
        const dateAfterSevenDays = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        const isoDateAfterSevenDays = dateAfterSevenDays.toISOString();

        let calendar = await fetch(`https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${isoDate}&endDateTime=${isoDateAfterSevenDays}`, {
          headers: { Authorization: "Bearer " + token, Prefer: 'outlook.timezone="Asia/Riyadh"' },
        });

        const cal_json = await calendar.json();
        // console.log('org_cal', cal_json);

        const tz = "Asia/Riyadh";

        const cal_eventsjson = cal_json.value.map((events) => ({
          name: events.subject,
          month: new Date(events.start.dateTime).toLocaleString("default", { month: "short" }),
          day: new Date(events.start.dateTime).getDate(),
          starttime: new Date(events.start.dateTime).toLocaleString("default", {
            timeStyle: "short",
            timeZone: tz,
          }),
          endtime: new Date(events.end.dateTime).toLocaleString("default", {
            timeStyle: "short",
            timeZone: tz,
          }),
          bodyPreview: events.description_ar,
        }));

        setCalendarEvents(cal_eventsjson);
        // console.log('cal_eventsjson', cal_eventsjson);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    const fetchPlannerTasks = async (token) => {
      try {
        const tasks_planner = await fetch("https://graph.microsoft.com/v1.0/me/planner/tasks/", {
          headers: { Authorization: "Bearer " + token },
        });
        const tasks_json = await tasks_planner.json();
        const tasks_filter_json = tasks_json.value.filter((obj) => !obj.completedBy);
        const tasks_assigned_json = tasks_filter_json.map((tasks) => ({
          title: tasks.title,
          id: tasks.id,
          url: `https://tasks.office.com/arhc.com.sa/Home/Task/${tasks.id}`,
          dueDate: new Date(tasks.dueDateTime).getFullYear() !== 1970
            ? `${new Date(tasks.dueDateTime).getDate()}/${new Date(tasks.dueDateTime).getMonth() + 1}/${new Date(tasks.dueDateTime).getFullYear()}`
            : "No Due Date",
        }));
        const stasks_assigned_json = tasks_assigned_json.sort((a, b) => {
          // Split the dueDate string and parse it as a Date object
          const datePartsA = a.dueDate.split('/');
          const datePartsB = b.dueDate.split('/');
          
          // Create Date objects with year, month (zero-based), and day
          const dateA = new Date(datePartsA[2], datePartsA[0] - 1, datePartsA[1]);
          const dateB = new Date(datePartsB[2], datePartsB[0] - 1, datePartsB[1]);
          
          return dateA - dateB;
        });
        setPlannerTasks(stasks_assigned_json);
        // console.log('tasks_assigned_json', tasks_assigned_json);
      } catch (error) {
        console.error("Error fetching planner tasks:", error);
      }
    };

    if (accounts.length > 0) {
      acquireToken();
    }
  }, [accounts]);

  if (loading) {
    return (
      <div class="grid min-h-[100vh] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <svg class="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
    xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path
      d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path
      d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
      stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
    </path>
  </svg>
</div>  
    );
  }

  return (
    <div className="overflow-hidden w-full" style={{ direction: 'rtl' }}>
      <Nav user = {user} />
      <div className="xl:px-[30px] px-[2vw] bg-[#F4F8FB] w-full py-[30px]">
        <div className="flex lg:flex-row flex-col xl:gap-[30px] gap-[2vw]">
          <div className="lg:w-[63vw] w-full">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <Banner />
            </div>

            <div className="flex lg:flex-row flex-col gap-[60px] mt-[25px]">
              <Calender events={calendarEvents} />

              <Planner tasks={plannerTasks} />
            </div>

            <div className="mt-[30px] w-full">
              <Announcement announcements={announcements} />
            </div>

            <div className="flex lg:flex-row flex-col gap-[60px] justify-between mt-[25px]">
              <Poll />

              <News news={news} />
            </div>

            <div className="mt-[30px]">
              {/* <EmployeeDirectory employees={employeeDirectory} /> */}
            </div>
          </div>

          <div className="shadow-md lg:w-[30vw] w-full rounded-[8px] bg-white">
            <div className="py-[24px] sm:px-[30px] px-[5vw]">
              <QuickLinks />
            </div>

            <hr />

            <div className="mt-[21px] mb-[32px] sm:px-[25px] px-[5vw]">
              <EventName events={calendarEvents} />
            </div>

            <hr />

            <div className="sm:px-[30px] px-[5vw] my-[25px]">
              <UpcomingEvents events={upcomingEvents} />
            </div>

            <hr />

            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <NewEmployee newEmployee={newEmployee} />
            </div>

            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <KnowledgeBase />
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg overflow-hidden mt-[65px]">
          <Gallery gallery={gallery} />
        </div>
      </div>
    </div>
  );
};

export default ArabicHome;
