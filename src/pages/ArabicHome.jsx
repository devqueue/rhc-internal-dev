import Announcement from "../ArabicComponents/Announcement";
import NewAnnouncement from "../ArabicComponents/NewAnnouncement";
import Banner from "../ArabicComponents/Banner";
import Calender from "../ArabicComponents/Calender";
import EmployeeDirectory from "../ArabicComponents/EmployeeDirectory";
import EventName from "../ArabicComponents/EventName";
import Gallery from "../ArabicComponents/Gallery";
import KnowledgeBase from "../ArabicComponents/Documents";
import Nav from "../ArabicComponents/Nav";
import NewEmployee from "../ArabicComponents/NewEmployee";
import News from "../ArabicComponents/News";
import Planner from "../ArabicComponents/Planner";
import Poll from "../ArabicComponents/Poll";
import QuickLinks from "../ArabicComponents/QuickLinks";
import UpcomingEvents from "../ArabicComponents/UpcomingEvents";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
import { loginRequest, msalConfig } from "../authConfig";
import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";
import ViewEmployeeDirectoryAr from "../ArabicComponents/ViewEmployeeDirectory";
import NewEmployeeCardsAr from "../ArabicComponents/NewEmployeeCards";
import KnowledgeBaseUpdatedAr from "../ArabicComponents/KnowledgeBaseUpdated";
import { Link } from "react-router-dom";
import NewEmployeeCards from "../components/NewEmployeeCards";

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
  const [pdfs, setPdfs] = useState([]);
  const [polls, setPolls] = useState([]);
  const [knowledge, setKnowledge] = useState([]);

  const [mails, setMails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [siteID, setSiteId] = useState("");
  useEffect(() => {
    const initializeMsal = async () => {
      await msalInstance.initialize();
      const accounts = msalInstance.getAllAccounts();
      setAccounts(accounts);
    };

    initializeMsal();
  }, []);

  useEffect(() => {
    const fetchListItems = async (
      token,
      siteId,
      listId,
      setStateFunction,
      name,
      fields
    ) => {
      try {
        const response = await fetch(
          `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?expand=fields${fields}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        // console.log(`${name} items:`, data);

        if (data.value) {
          const valuesToSet = data.value.filter(
            (item) =>
              item.fields.Status === "Published" ||
              item.fields.status === "Published" ||
              item.fields.Status === "Development" ||
              item.fields.status === "Development"
          );
          setStateFunction(valuesToSet);
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
          localStorage.setItem("userAuthToken", response.accessToken);

          await fetchCalendarEvents(response.accessToken);
          await fetchPlannerTasks(response.accessToken);
          await fetchMailInbox(response.accessToken);

          const userResponse = await fetch(
            "https://graph.microsoft.com/v1.0/me",
            {
              headers: { Authorization: `Bearer ${response.accessToken}` },
            }
          );
          const userJson = await userResponse.json();
          localStorage.setItem("user", JSON.stringify(userJson));

          const userImgResponse = await fetch(
            "https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
            {
              headers: { Authorization: `Bearer ${response.accessToken}` },
            }
          );

          const userImgBlob = await userImgResponse.blob();
          localStorage.setItem("userImg", URL.createObjectURL(userImgBlob));

          const response2 = await fetch(
            "https://graph.microsoft.com/v1.0/sites/riyadhholding.sharepoint.com:/sites/Shamil/",
            {
              headers: { Authorization: `Bearer ${response.accessToken}` },
            }
          );
          const resJson = await response2.json();
          const siteId = resJson.id;
          setSiteId(siteId);
          const lists = [
            {
              name: "Announcements",
              id: "8123ed29-3809-4573-bd24-70b60e752aa1",
              fields: "",
              setStateFunction: setAnnouncements,
            },
            {
              name: "Employee Directory",
              id: "50e093d8-d366-4994-a9d8-ac460cb6e18a",
              fields: "",
              setStateFunction: setEmployeeDirectory,
            },
            {
              name: "News",
              id: "0304b663-8abb-414e-a03c-2d7f00cff357",
              fields:
                "(select=Title, preview_en, full_text_en, title_ar, preview_ar, full_text_ar, image_name, status, date_published)",
              setStateFunction: setNews,
            },
            {
              name: "New Employee",
              id: "cc29e416-2bf1-4462-8d41-d2b437357776",
              fields: "",
              setStateFunction: setNewEmployee,
            },
            {
              name: "Upcoming events",
              id: "fd974e0a-d601-4921-804c-10ff956619e2",
              fields: "",
              setStateFunction: setUpcomingEvents,
            },
            {
              name: "Gallery",
              id: "9505ceb4-ece5-447d-99fa-b383a324dcd9",
              fields:
                "(select=Title, event_name_ar, subtitle_en, subtitle_ar, status, image_name, date_published, gallery_images)",
              setStateFunction: setGallery,
            },
            {
              name: "Pdfs",
              id: "ed12e05a-da1c-4407-83d0-85c70fe882b7",
              fields: "",
              setStateFunction: setPdfs,
            },
            {
              name: "Polls",
              id: "9153493d-9dd8-42c6-a342-1f088cf19d47",
              fields: "",
              setStateFunction: setPolls,
            },
            {
              name: "awareness",
              id: "ac2f4398-3022-4114-9955-3e893c6ef09b",
              fields: "",
              setStateFunction: setKnowledge,
            },
          ];

          const fetchPromises = lists.map((list) =>
            fetchListItems(
              response.accessToken,
              siteId,
              list.id,
              list.setStateFunction,
              list.name,
              list.fields
            )
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
        const dateAfterSevenDays = new Date(
          now.getTime() + 7 * 24 * 60 * 60 * 1000
        );
        const isoDateAfterSevenDays = dateAfterSevenDays.toISOString();

        let calendar = await fetch(
          `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${isoDate}&endDateTime=${isoDateAfterSevenDays}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              Prefer: 'outlook.timezone="Asia/Riyadh"',
            },
          }
        );

        const cal_json = await calendar.json();
        // console.log('org_cal', cal_json);

        const tz = "Asia/Riyadh";

        const cal_eventsjson = cal_json.value.map((events) => ({
          name: events.subject,
          month: new Date(events.start.dateTime).toLocaleString("default", {
            month: "short",
          }),
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

    const fetchMailInbox = async (token) => {
      try {
        const response = await fetch(
          `https://graph.microsoft.com/v1.0/me/messages?$filter=receivedDateTime gt 2024-04-30T21:00:00.000Z and microsoft.graph.eventMessage/meetingMessageType ne 'none' and sender/emailAddress/address  eq 'mcenter@riyadhholding.sa'`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );

        const json = await response.json();
        setMails(json.value);
      } catch (error) {
        console.error("Error fetching mail inbox:", error);
      }
    };

    const fetchPlannerTasks = async (token) => {
      try {
        const tasks_planner = await fetch(
          "https://graph.microsoft.com/v1.0/me/planner/tasks/",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        const tasks_json = await tasks_planner.json();
        const tasks_filter_json = tasks_json.value.filter(
          (obj) => !obj.completedBy
        );
        const tasks_assigned_json = tasks_filter_json.map((tasks) => ({
          title: tasks.title,
          id: tasks.id,
          url: `https://tasks.office.com/arhc.com.sa/Home/Task/${tasks.id}`,
          dueDate:
            new Date(tasks.dueDateTime).getFullYear() !== 1970
              ? `${new Date(tasks.dueDateTime).getDate()}/${
                  new Date(tasks.dueDateTime).getMonth() + 1
                }/${new Date(tasks.dueDateTime).getFullYear()}`
              : "No Due Date",
        }));
        const stasks_assigned_json = tasks_assigned_json.sort((a, b) => {
          // Split the dueDate string and parse it as a Date object
          const datePartsA = a.dueDate.split("/");
          const datePartsB = b.dueDate.split("/");

          // Create Date objects with year, month (zero-based), and day
          const dateA = new Date(
            datePartsA[2],
            datePartsA[0] - 1,
            datePartsA[1]
          );
          const dateB = new Date(
            datePartsB[2],
            datePartsB[0] - 1,
            datePartsB[1]
          );

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
        <svg
          class="w-16 h-16 animate-spin text-gray-900/50"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-900"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="overflow-hidden w-full" style={{ direction: "rtl" }}>
      <Nav user={user} />
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
              <Poll polls={polls} />

              <News news={news} />
            </div>

            <div className="mt-[30px] w-full">
              <NewAnnouncement announcements={knowledge} />
            </div>

            {/* <div className="mt-[30px]">
              <KnowledgeBaseUpdatedAr Knowledge={knowledge} />
            </div> */}
          </div>

          <div className="shadow-md lg:w-[30vw] w-full rounded-[8px] bg-white">
            <div className="py-[24px] sm:px-[30px] px-[5vw]">
              <QuickLinks />
            </div>

            <hr />

            <div className="mt-[21px] mb-[32px] sm:px-[25px] px-[5vw]">
              <EventName events={mails} />
            </div>

            <hr />

            <div className="sm:px-[30px] px-[5vw] my-[25px]">
              <UpcomingEvents events={upcomingEvents} />
            </div>

            <hr />

            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <NewEmployee newEmployee={newEmployee} />
            </div>
            <br />
            <hr />
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <Link
                state={accessToken}
                to="/ar/all-employees"
                className="flex w-full p-4 pt-4 pb-4 px-5 items-start content-start gap-2 flex-wrap bg-[#C2AB80] rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="26"
                  viewBox="0 0 50 26"
                  fill="none"
                >
                  <path
                    d="M25 13.8095C28.8135 13.8095 31.9047 10.7181 31.9047 6.90474C31.9047 3.09134 28.8135 0 25 0C21.1866 0 18.0953 3.09134 18.0953 6.90474C18.0953 10.7181 21.1866 13.8095 25 13.8095ZM28.5981 9.32647C28.2567 10.4552 26.7944 11.3038 25.0418 11.3038C23.2891 11.3038 21.8268 10.4552 21.4855 9.32647H28.5981ZM36.6197 20.9524V23.2283C36.6197 23.5657 36.3949 23.9578 36.0867 24.0949C34.8922 24.6264 31.646 25.7141 24.9883 25.7141C18.3307 25.7141 15.102 24.6263 13.9076 24.0949C13.5993 23.9577 13.3804 23.5656 13.3804 23.2283V20.9524C13.3804 17.5417 15.9537 14.7123 19.2672 14.3333C19.3678 14.3217 19.5055 14.3649 19.5875 14.4243C21.1153 15.5303 22.9798 16.1904 25.006 16.1904C27.032 16.1904 28.8995 15.5303 30.4272 14.4243C30.5093 14.3649 30.6336 14.3218 30.7343 14.3333C34.0479 14.7123 36.6197 17.5417 36.6197 20.9524ZM50 14.7813V16.1283C50 16.3279 49.853 16.56 49.6707 16.6411C48.9637 16.9557 47.0355 17.5995 43.0953 17.5995C39.1551 17.5995 37.0893 16.9556 36.3824 16.6411C36.2 16.5601 35.9155 16.3279 35.9155 16.1283V14.7813C35.9155 12.7627 37.5899 11.0882 39.551 10.8639C39.6105 10.8571 39.7677 10.8826 39.8163 10.9178C40.7204 11.5724 41.8618 11.9631 43.0609 11.9631C44.2601 11.9631 45.3843 11.5724 46.2885 10.9178C46.3372 10.8826 46.4341 10.8572 46.4936 10.8639C48.4545 11.0882 50 12.7627 50 14.7813ZM13.6176 16.6412C12.9107 16.9558 10.9138 17.5995 6.97353 17.5995C3.03325 17.5995 1.07075 16.9557 0.363807 16.6412C0.181291 16.56 0 16.3279 0 16.1284V14.7814C0 12.7628 1.53693 11.0882 3.49796 10.864C3.55752 10.8572 3.64592 10.8827 3.69444 10.9178C4.59861 11.5725 5.70564 11.9632 6.90466 11.9632C8.10376 11.9632 9.21078 11.5725 10.115 10.9178C10.1635 10.8826 10.3893 10.8572 10.4489 10.864C12.41 11.0883 14.0844 12.7628 14.0844 14.7814V16.1284C14.0846 16.3279 13.8001 16.56 13.6176 16.6412ZM6.90474 2.38088C4.64788 2.38088 2.81822 4.21046 2.81822 6.4674C2.81822 8.72435 4.64779 10.5539 6.90474 10.5539C9.16168 10.5539 10.9913 8.72435 10.9913 6.4674C10.9913 4.21046 9.16168 2.38088 6.90474 2.38088ZM6.90474 8.95351C5.84624 8.95351 4.96307 8.4411 4.75686 7.75931H9.0527C8.84649 8.4411 7.96332 8.95351 6.90474 8.95351ZM43.0953 2.38088C40.8383 2.38088 39.0087 4.21046 39.0087 6.4674C39.0087 8.72435 40.8383 10.5539 43.0953 10.5539C45.3521 10.5539 47.1818 8.72435 47.1818 6.4674C47.1818 4.21046 45.3521 2.38088 43.0953 2.38088ZM43.0952 8.95351C42.0367 8.95351 41.1534 8.4411 40.9473 7.75931H45.2431C45.0369 8.4411 44.1537 8.95351 43.0952 8.95351Z"
                    fill="white"
                  />
                </svg>

                <h1 className="text-white font-inter text-lg font-semibold">
                  عرض دليل التواصل
                </h1>
              </Link>
            </div>
            <br />
            <hr />
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <Link
                to={"/faq-ar/" + siteID}
                className="flex w-full p-4 pt-4 pb-4 px-5 items-start content-start gap-2 flex-wrap bg-[#50917F] rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M564.15-360.49q18.16 0 31.23-12.67t13.07-31.18q0-18.51-12.92-31.17-12.93-12.66-31.78-12.66-18.45 0-31 12.67-12.55 12.66-12.55 31.18 0 18.51 12.7 31.17t31.25 12.66Zm-29.71-122.05h57.34q-.04-24.43 7.4-39.48 7.45-15.05 27.81-36.75 28.5-28.27 39.35-47.21 10.85-18.94 10.85-45.01 0-48.17-31.9-77.43-31.91-29.26-85.34-29.26-40.83 0-72.46 22.25-31.62 22.26-43.29 61.23l52.25 21.97q9.94-24.81 26.06-38.06 16.12-13.25 37.47-13.25 27.8 0 44.33 14.89 16.53 14.88 16.53 39.16 0 17.66-8.88 32.07-8.89 14.41-29.68 31.48-31.63 29.52-39.74 47.6-8.1 18.08-8.1 55.8ZM299.33-198.42q-39.06 0-67.75-28.9-28.68-28.89-28.68-67.53v-525.11q0-38.79 28.68-67.8 28.69-29.01 67.75-29.01h525.1q38.8 0 67.53 29.01 28.72 29.01 28.72 67.8v525.11q0 38.64-28.72 67.53-28.73 28.9-67.53 28.9h-525.1Zm0-96.43h525.1v-525.11h-525.1v525.11ZM136.23-35.51q-39.22 0-67.73-28.72-28.51-28.73-28.51-67.52v-621.54h96.24v621.54h621.54v96.24H136.23Zm163.1-784.45v525.11-525.11Z" />
                </svg>

                <h1 className="text-white font-inter text-lg font-semibold">
                  الأسئلة الشائعة
                </h1>
              </Link>
            </div>
            <br />
            <hr />
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <KnowledgeBase pdfs={pdfs} />
            </div>
            <br />
          </div>
        </div>

        {/* 
                Hide Linkedin 
        */}
        {/* <div className="w-full rounded-lg overflow-hidden mt-[65px] shadow-md">
          <NewEmployeeCards accessToken = {accessToken} />
        </div> */}

        <div className="w-full rounded-lg overflow-hidden mt-[65px] shadow-md">
          <Gallery gallery={gallery} />
        </div>
      </div>
    </div>
  );
};

export default ArabicHome;
