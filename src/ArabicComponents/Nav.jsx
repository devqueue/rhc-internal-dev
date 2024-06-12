import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

function signOutClickHandler(instance,account) {
  console.log(account);
  const logoutRequest = {
    account: instance.getAccountByHomeId(account.homeAccountId),
    postLogoutRedirectUri: "/",
  };
  instance.logoutRedirect(logoutRequest);
}

// SignOutButton Component returns a button that invokes a redirect logout when clicked
function SignOutButton() {
  // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
  const { instance,accounts } = useMsal();

  return (
    <p className="text-sm w-full cursor-pointer mt-2" onClick={() => signOutClickHandler(instance,accounts[0])}>تسجيل خروج</p>
  );
}


const Nav = ({  }) => {
  const [isHovered, setIsHovered] = useState(false);
  const userImg = (localStorage.getItem("userImg"));
  const user = JSON.parse(localStorage.getItem("user"));
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
      <Link to="https://shamil.riyadhholding.sa/ar" onClick={handleClickLogo}>
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
          <div className="absolute top-[60px]  bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <p className="text-gray-800">{user.displayName}</p>
            <p className="text-gray-800">{user.jobTitle}</p>
            <SignOutButton/>

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
