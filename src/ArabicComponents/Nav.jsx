import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Nav = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "https://shamil.riyadhholding.sa/";

  const handleClickLogo = () => {
    console.log("Clicked on logo");
    console.log("Is home page:", isHomePage);
    if (isHomePage) {
      window.location.reload(); 
    }
  };

  return (
    <div className="w-full bg-white flex justify-between sm:px-[30px] px-[5vw] py-[20px]">
      <Link to="https://shamil.riyadhholding.sa/" onClick={handleClickLogo}>
        <img
          className="sm:w-[200px] w-[35vw]"
          src="/icons/rhclogo1.png"
          alt=""
        />
      </Link>

      <div className="flex gap-3">
      <div
        className="flex items-end justify-end mr-auto ml-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="rounded-full cursor-pointer"
          src="/images/user.svg"
          alt="User Profile"
          style={{ width: "30px", height: "30px" }}
        />
        {isHovered && (
          <div className="absolute top-[60px] left-0 bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <p className="text-gray-800">{user.displayName}</p>
            <p className="text-gray-800">{user.jobTitle}</p>
          </div>
        )}
      </div>
      {/* <a className="text-[#3B729C]" href="/ar">العربية</a> */}
      <div
        className="flex items-end justify-end  mr-4"
        onClick={() => (window.location.href = "/")}
      >
        <img
          className=" cursor-pointer"
          src="/icons/englishicon.svg"
          alt="User Profile"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      </div>
    </div>
  );
};

export default Nav;
