import React, { useEffect, useState } from "react";

const EmployeeCard = ({
  title,
  jobTitle,
  number,
  email,
  token,
  id,
  bg,
  fg,
  setAlert,
}) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setAlert("Copied to clipboard " + text);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const [img, setImg] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await fetch(
          `https://graph.microsoft.com/v1.0/users/${id}/photo/$value`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch employee photo");
          return;
        }
        const blob = await response.blob();
        setImg(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching employee photo:", error);
      }
    };

    fetchPhoto();
  }, [token, id]);

  return (
    <div
      className={`w-[280px] h-[381.2px] items-center justify-center gap-[20px] bg-white rounded-[17.6px] p-[27.5px] mb-4`}
    >
      <div
        className="h-[143px] w-[143px] ml-[20%] m-auto mb-[25px] rounded-[8px] bg-[#dbf0f3] text-[#31696c] font-extrabold text-5xl flex items-center justify-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {title.split(" ").map((name, index) => {
          if (index < 2 && !img) return name[0];
        })}
      </div>

      <h1 className="font-figtree flex flex-col items-center justify-center font-semibold text-[22px] leading-[19.2px] mb-[10px]">
        <span
          className="block overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[90%] capitalize cursor-pointer"
          title={title}
        >
          {title}
        </span>
      </h1>
      <div className="flex flex-col gap-[15px] items-start justify-start border-b-[2px] pb-4">
        <div className="flex flex-row gap-[8px]">
          <div className="flex flex-row gap-[8px] items-center border-r-[1px] pr-[16px]">
            <div
              style={{
                backgroundImage: "url('/icons/graduation-cap.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[15.21px] h-[12.27px] shrink-0"
            ></div>
          </div>
          <p
            className="text-[14px] font-figtree font-normal leading-[21.6px] block overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[70%] capitalize cursor-pointer"
            title={jobTitle}
          >
            {jobTitle}
          </p>
        </div>
        <div className="flex flex-row gap-[8px]">
          <div className="flex flex-row gap-[8px] items-center border-r-[1px] pr-[16px]">
            <div
              style={{
                backgroundImage: "url('/icons/job.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[15.21px] h-[12.27px] shrink-0"
            ></div>
          </div>
          <p
            className="text-[14px] font-figtree font-normal leading-[21.6px] block overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[70%] capitalize cursor-pointer"
            title={jobTitle}
          >
            {jobTitle}
          </p>
        </div>
      </div>
      <div className="flex items-center w-[225.5px] h-[24px] gap-[15px] mt-4">
        <div
          style={{
            backgroundImage: "url('/icons/Group.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[12.26px] h-[12.67px] shrink-0"
        ></div>

        <p
          className="font-figtree font-medium text-[13px] leading-[16.5px] block overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[70%] capitalize cursor-pointer"
          title={number}
        >
          {number}
        </p>
        <button onClick={() => handleCopy(number)} className="ml-auto">
          <img
            src="/icons/copy.svg"
            alt="copy icon"
            className="w-[8px] h-[8px] overflow-hidden"
          />
        </button>
      </div>
      <div className="flex items-center w-[225.5px] h-[24px] gap-[15px] mt-2">
        <div
          style={{
            backgroundImage: "url('/icons/email.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[12.67px] h-[8.11px] shrink-0"
        ></div>

        <p
          className="font-figtree font-medium text-[13px] leading-[16.5px] block overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[70%] capitalize cursor-pointer"
          title={email}
        >
          {email}
        </p>
        <button onClick={() => handleCopy(email)} className="ml-auto">
          <img
            src="/icons/copy.svg"
            alt="copy icon"
            className="w-[8px] h-[8px] overflow-hidden"
          />
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
