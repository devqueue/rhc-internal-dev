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
import { useState } from 'react';
import { useEffect } from 'react';
import { loginRequest, msalConfig } from '../authConfig';
import { InteractionRequiredAuthError } from '@azure/msal-browser';

import { PublicClientApplication } from '@azure/msal-browser';

const ArabicHome = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [plannerTasks, setPlannerTasks] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [employeeDirectory, setEmployeeDirectory] = useState([]);
  const [news, setNews] = useState([]);
  const [newEmployee, setNewEmployee] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [gallery,setGallery] = useState([]);
  const [accounts, setAccounts] = useState([]);  
  const msalInstance = new PublicClientApplication(msalConfig);

  console.log(accounts)
  useEffect(() => {
    const initializeMsal = async () => {
      await msalInstance.initialize();
      const accounts = msalInstance.getAllAccounts();
      setAccounts(accounts);
    };

    const fetchListItems = async (token, siteId, listId, setStateFunction, name) => {
      try {
        const response = await fetch(`https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?expand=fields`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        console.log(`${name} items:`, data);

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
          fetchCalendarEvents(response.accessToken);
          fetchPlannerTasks(response.accessToken);

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

          lists.forEach(list => {
            fetchListItems(response.accessToken, siteId, list.id, list.setStateFunction, list.name);
          });

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

        const calendar = await fetch(`https://graph.microsoft.com/v1.0/me/calendar/events?$filter=start/dateTime ge '${isoDate}'`, {
          headers: { Authorization: "Bearer " + token, Prefer: 'outlook.timezone="Asia/Kolkata"' },
        });

        const cal_json = await calendar.json();
        console.log('org_cal', cal_json);

        const tz = "Asia/Kolkata";

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
          bodyPreview: events.bodyPreview,
        }));

        setCalendarEvents(cal_eventsjson);
        console.log('cal_eventsjson', cal_eventsjson);
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
        setPlannerTasks(tasks_assigned_json);
        console.log('tasks_assigned_json', tasks_assigned_json);
      } catch (error) {
        console.error("Error fetching planner tasks:", error);
      }
    };

    initializeMsal().then(() => {
      acquireToken();
    });
  }, [accounts, msalInstance]);


  return (
    <div className="overflow-hidden w-full" style={{direction: 'rtl'}}>
    <Nav/>
    <div className="px-[30px] bg-[#F4F8FB] w-full py-[30px]">
      <div className="flex gap-[30px]">
        <div className="w-[66vw]">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <Banner />
          </div>

          <div className="flex gap-[60px] mt-[25px]">
            <Calender events={calendarEvents} />

            <Planner tasks={plannerTasks} />
          </div>

          <div className="mt-[30px] w-full">
            <Announcement announcements={announcements} />
          </div>

          <div className="flex gap-[60px] justify-between mt-[25px]">
            <Poll />

            <News news={news} />
          </div>

          <div className="mt-[30px]">
            <EmployeeDirectory employees={employeeDirectory} />
          </div>
        </div>

        <div className="shadow-md w-[33vw] rounded-[8px]  bg-white">
          <div className="py-[24px] px-[30px]">
            <QuickLinks />
          </div>

          <hr />

          <div className="mt-[21px] mb-[32px] px-[25px]">
            <EventName events={calendarEvents}/>
          </div>

          <hr />

          <div className="px-[30px] my-[25px]">
            <UpcomingEvents events={upcomingEvents} />
          </div>

          <hr />

          <div className="px-[30px] mt-[30px]">
            <NewEmployee newEmployee={newEmployee} />
          </div>

          <div className="px-[30px] mt-[30px]">
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
