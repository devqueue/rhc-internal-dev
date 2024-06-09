import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({ userImg }) => {

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  const [isHovered, setIsHovered] = useState(false);

  // Sample user data
  // const user = {
  //   name: "John Doe",
  //   email: "johndoe@example.com"
  // };

  return (
    <div className="w-full bg-white flex justify-between sm:px-[30px] px-[5vw] py-[20px]">
      <Link to="https://shamil.riyadhholding.sa/">
        <img className="sm:w-[200px] w-[35vw]" src="/icons/rhclogo1.png" alt="" />
      </Link>
      <div className="flex gap-3">
      <div
        className="flex items-end justify-end ml-auto mr-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="rounded-full cursor-pointer"
          src={userImg? userImg : "/images/user.svg"}
          alt="User Profile"
          style={{ width: "30px", height: "30px" }}
        />
        {isHovered && (
          <div className="absolute top-[60px] right-0 bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <p className="text-gray-800">{user.displayName}</p>
            <p className="text-gray-800">{user.jobTitle}</p>
          </div>
        )}
      </div>
      {/* <a className="text-[#3B729C]" href="/ar">العربية</a> */}
      <div
        className="flex items-end justify-end  mr-4"
        onClick={() => (window.location.href = "/ar")}
      >
        <img
          className=" cursor-pointer"
          src="/images/arabic.svg"
          alt="User Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      </div>
    </div>
  );
};

export default Nav;
