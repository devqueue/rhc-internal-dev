import { Link } from "react-router-dom";

const UpcomingEvents = ({ events }) => {
  if (!events || events.length === 0) {
    return <div>No upcoming events available.</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Define month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the day of the month
    const day = date.getDate();

    // Get the month (0-indexed), so we need to add 1 to it
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    // Format the date
    return { day, monthName };
  };
  const normalizeDateTime = (dateTimeString) => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(dateTimeString).toLocaleString("default", {
      timeStyle: "short",
      timeZone: tz,
    });
  };
  return (
    <div className="rounded-[8px] overflow-hidden w-full h-[530px] shadow-md">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          احداث القادمة
        </h1>

        <Link
          href=""
          className="sm:text-[14px] text-[9px] font-light rounded-[4px] px-[10px] text-[#3B729C] bg-white"
        >
          عرض الكل
        </Link>
      </div>

      <div className="h-full overflow-y-auto pb-16">
        {events.map((event) => (
          <div className="flex p-[20px] gap-[20px] items-start content-start self-stretch lg:flex-nowrap flex-wrap border-b-[1px] border-b-[#888888]">
            <div
              className="w-[72px] h-[72px] flex items-end pb-1 justify-center text-sm text-center shrink-0"
              style={{
                backgroundImage: `url('/icons/cal.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {formatDate(event.fields.Start_time).day}
              <br /> {formatDate(event.fields.Start_time).monthName}
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="sm:text-[16px] text-[11px] font-[400px] lg:w-[15vw]">
                {event.fields.event_title_ar}
              </h1>
              <div className="flex gap-[10px] items-center">
                <div
                  style={{
                    backgroundImage: "url('/icons/clock.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-[16px] h-[16px] shrink-0"
                ></div>
                <p className="text-[12px] font-[400px]">
                  {normalizeDateTime(event.fields.Start_time)} -{" "}
                  {normalizeDateTime(event.fields.end_time)}
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <div
                  style={{
                    backgroundImage: "url('/icons/location.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-[16px] h-[16px] shrink-0"
                ></div>
                <p className="text-[12px] font-[400px]">
                  {event.fields.event_location_en}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
