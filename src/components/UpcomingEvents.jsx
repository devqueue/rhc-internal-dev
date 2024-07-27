import { Link } from "react-router-dom";
import { DateTime } from "luxon";

const UpcomingEvents = ({ events }) => {
  // Sort events by start date in ascending order
  const sortedEvents = events.slice().sort((a, b) => {
    return new Date(a.fields.start_dt_time) - new Date(b.fields.start_dt_time);
  });

  if (!sortedEvents || sortedEvents.length === 0) {
    return (
      <div>
        <div>No upcoming events available</div>
      </div>
    );
  }

  const formatDate = (timestamp) => {
    const date = DateTime.fromISO(timestamp, { zone: "UTC" })
      .minus({ hours: 10 })
      .setZone("Asia/Riyadh");

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
    const day = date.day;

    // Get the month (0-indexed), so we need to add 1 to it
    const monthIndex = date.month - 1;
    const monthName = monthNames[monthIndex];

    // Format the date
    return { day, monthName };
  };

  const normalizeDateTime = (dateTimeString) => {
    const dateTime = DateTime.fromISO(dateTimeString, { zone: "UTC" })
      .minus({ hours: 10 })
      .setZone("Asia/Riyadh");
    return dateTime.toLocaleString(DateTime.TIME_SIMPLE);
  };

  return (
    <div className="rounded-[8px] overflow-hidden w-full h-[530px] shadow-md">
      <div className="px-[20px] py-[16px] flex items-center justify-between gap-[10px] self-stretch flex-wrap bg-[#3B729C] text-[white]">
        <h1 className="sm:text-[20px] text-[12px] font-light self-stretch min-w-[100px]">
          Upcoming Events
        </h1>

        {/* commented view all button */}
        {/* <Link
          to="/all-events" // Changed from href to to for Link component
          className="sm:text-[14px] text-[9px] font-light rounded-[4px] px-[10px] text-[#3B729C] bg-white"
          state={events}
        >
          View All
        </Link> */}
      </div>

      <div className="h-full overflow-y-auto xl:pb-24 pb-32">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="flex p-[20px] gap-[20px] items-start content-start self-stretch lg:flex-nowrap flex-wrap border-b-[1px] border-b-[#888888]"
          >
            <div
              className="w-[72px] h-[72px] flex items-end pb-1 justify-center text-sm text-center shrink-0"
              style={{
                backgroundImage: `url('/icons/cal.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {formatDate(event.fields.start_dt_time).day}
              <br /> {formatDate(event.fields.start_dt_time).monthName}
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1 className="sm:text-[16px] text-[11px] font-[400px] xl:w-[15vw]">
                {event.fields.Title}
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
                <p
                  className="text-[12px] font-[400px]"
                  style={{ direction: "ltr" }}
                >
                  {normalizeDateTime(event.fields.start_dt_time)} -{" "}
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
