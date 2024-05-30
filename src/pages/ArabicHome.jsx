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

const ArabicHome = () => {
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
            <Calender />

            <Planner />
          </div>

          <div className="mt-[30px] w-full">
            <Announcement />
          </div>

          <div className="flex gap-[60px] justify-between mt-[25px]">
            <Poll />

            <News />
          </div>

          <div className="mt-[30px]">
            <EmployeeDirectory />
          </div>
        </div>

        <div className="shadow-md w-[33vw] rounded-[8px]  bg-white">
          <div className="py-[24px] px-[30px]">
            <QuickLinks />
          </div>

          <hr />

          <div className="mt-[21px] mb-[32px] px-[25px]">
            <EventName />
          </div>

          <hr />

          <div className="px-[30px] my-[25px]">
            <UpcomingEvents />
          </div>

          <hr />

          <div className="px-[30px] mt-[30px]">
            <NewEmployee />
          </div>

          <div className="px-[30px] mt-[30px]">
            <KnowledgeBase />
          </div>


        </div>
      </div>

      <div className="w-full rounded-lg overflow-hidden mt-[65px]">
        <Gallery />
      </div>
    </div>
    </div>
  );
};

export default ArabicHome;
