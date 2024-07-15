import React, { useRef } from "react";
import Announcement from "../components/Announcement";
import NewAnnouncement from "../components/NewAnnouncement";
import Banner from "../components/Banner";
import Calender from "../components/Calender";
import EmployeeDirectory from "../components/EmployeeDirectory";
import EventName from "../components/EventName";
import Gallery from "../components/Gallery";
import KnowledgeBase from "../components/Documents";
import Nav from "../components/Nav";
import NewEmployee from "../components/NewEmployee";
import News from "../components/News";
import Planner from "../components/Planner";
import Poll from "../components/Poll";
import QuickLinks from "../components/QuickLinks";
import UpcomingEvents from "../components/UpcomingEvents";
import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { useEffect } from "react";
import { loginRequest } from "../authConfig";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import KnowledgeBaseUpdated from "../components/KnowledgeBaseUpdated";
import ViewEmployeeDirectory from "../components/ViewEmployeeDirectory";
import NewEmployeeDirectory from "../components/NewEmployeeDirectory";
import NewEmployeeCards from "../components/NewEmployeeCards";
import { Link } from "react-router-dom";

const Home = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [plannerTasks, setPlannerTasks] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [employeeDirectory, setEmployeeDirectory] = useState([]);
  const [news, setNews] = useState([]);
  const [newEmployee, setNewEmployee] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [user, setUser] = useState(null);
  const [userImg, setUserImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mails, setMails] = useState([]);
  const [popupOpened, setPopupOpened] = useState(
    localStorage.getItem("imgFix")
  );
  const [siteID, setSiteID] = useState("");
  const [polls, setPolls] = useState([]);
  const [knowledge, setKnowledge] = useState([]);
  // console.log(accounts)
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
          const response = await instance.acquireTokenSilent(request);
          localStorage.setItem("userAuthToken", response.accessToken);
          setAccessToken(response.accessToken);
          await fetchCalendarEvents(response.accessToken);
          await fetchPlannerTasks(response.accessToken);
          await fetchMailInbox(response.accessToken);
          // Fetching user details
          const userResponse = await fetch(
            "https://graph.microsoft.com/v1.0/me",
            {
              headers: { Authorization: `Bearer ${response.accessToken}` },
            }
          );

          const userJson = await userResponse.json();
          //console.log("User details:", userJson);

          // Store user data in local storage
          localStorage.setItem("user", JSON.stringify(userJson));

          const userImgResponse = await fetch(
            "https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
            {
              headers: { Authorization: `Bearer ${response.accessToken}` },
            }
          );

          const userImgBlob = await userImgResponse.blob();
          //console.log("User image:", userImgBlob);
          localStorage.setItem("userImg", URL.createObjectURL(userImgBlob));

          const response2 = await fetch(
            "https://graph.microsoft.com/v1.0/sites/riyadhholding.sharepoint.com:/sites/Shamil/",
            { headers: { Authorization: `Bearer ${response.accessToken}` } }
          );
          const resJson = await response2.json();
          const siteId = resJson.id;
          setSiteID(siteId);
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
              fields: "(select=*)",
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
              fields: "(select=*)",
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
            instance.acquireTokenRedirect(request);
          } else {
            console.error(error);
          }
        }
      }
    };

    const fetchCalendarEvents = async (token) => {
      try {
        // Get the current date and set time to midnight to include all of today
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

        let cal_json = await calendar.json();
        // console.log('org_cal', cal_json);

        const tz = "Asia/Riyadh"; // Using the correct IANA time zone identifier

        let cal_eventsjson = cal_json.value.map((events) => ({
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
          bodyPreview: events.description_en,
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
        let tasks_planner = await fetch(
          "https://graph.microsoft.com/v1.0/me/planner/tasks/",
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        let tasks_json = await tasks_planner.json();
        let tasks_filter_json = tasks_json.value.filter(
          (obj) => !obj.completedBy
        );
        let tasks_assigned_json = tasks_filter_json.map((tasks) => ({
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
        // console.log('tasks_assigned_json',tasks_assigned_json)
      } catch (error) {
        console.error("Error fetching planner tasks:", error);
      }
    };

    acquireToken();
  }, [instance, accounts]);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (loading || !popupOpened) {
    return (
      <div class="grid min-h-[100vh] w-full h-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        {!popupOpened && (
          <div className="fixed flex items-center justify-center w-full h-full bg-[#0000006b] z-50">
            <div className="bg-white p-[50px] rounded-lg">
              <a
                href="https://riyadhholding.sharepoint.com/sites/Shamil/Assets/DONOTDELETE2.png"
                target="_blank"
                className="bg-[#3B729C] text-white px-4 py-2 rounded"
                onClick={() => {
                  setTimeout(() => {
                    setPopupOpened(false);
                    localStorage.setItem("imgFix", false);
                    window.location.reload();
                  }, 3400);
                }}
              >
                Allow Popup
              </a>
            </div>
          </div>
        )}
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
    ); // Render loading indicator
  }

  return (
    <div className="overflow-hidden w-full">
      <Nav user={user} />

      <div className="xl:px-[30px] px-[2vw] bg-[#F4F8FB] w-full py-[30px]">
        <div className="flex lg:flex-row flex-col xl:gap-[30px] gap-[2vw]">
          <div className="lg:w-[63vw] w-full">
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <Banner />
            </div>
            <div className="flex lg:flex-row flex-col gap-[30px] mt-[25px]">
              <Calender events={calendarEvents} />
              <Planner tasks={plannerTasks} />
            </div>
            <div className="mt-[30px] w-full">
              <Announcement announcements={announcements} />
            </div>
            {/* <div className="w-full  mt-[30px] rounded-lg overflow-hidden">
              <NewAnnouncement announcements={announcements} />
            </div> */}
            <div className="flex lg:flex-row flex-col gap-[30px] justify-between mt-[25px]">
              <Poll polls={polls} />
              <News news={news} />
            </div>
            <div className="mt-[30px] w-full">
              <Announcement announcements={announcements} />
            </div>
            {/* <div className="mt-[30px]">
              <KnowledgeBaseUpdated Knowledge={knowledge} />
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
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <UpcomingEvents events={upcomingEvents} />
            </div>
            <br />
            <hr />
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <NewEmployee newEmployee={newEmployee} />
            </div>
            <br />
            <hr />

            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <Link
                state={accessToken}
                to="/all-employees"
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
                  View Employee Directory
                </h1>
              </Link>
            </div>
            <br />
            <hr />
            {/* documents */}
            <div className="sm:px-[30px] px-[5vw] mt-[30px]">
              <KnowledgeBase siteID={siteID} pdfs={pdfs} />
            </div>
            <br />
          </div>
        </div>

        {/*
        hide linkedin 
        */}

        {/* <div className="w-full rounded-lg overflow-hidden mt-[65px] shadow-md">
          <NewEmployeeCards accessToken = {accessToken} />
        </div>  */}

        <div className="w-full rounded-lg overflow-hidden mt-[65px] shadow-md">
          <Gallery gallery={gallery} />
        </div>
      </div>
    </div>
  );
};

export default Home;
