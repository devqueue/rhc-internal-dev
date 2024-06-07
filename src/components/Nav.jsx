import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = ({user}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Sample user data
  // const user = {
  //   name: "John Doe",
  //   email: "johndoe@example.com"
  // };

  
  return (
    <div className='w-full bg-white flex justify-between sm:px-[30px] px-[5vw] py-[20px]'>
      
      <img className="sm:w-[200px] w-[35vw]" src="/icons/rhclogo1.png" alt="" />
      <div 
        className="flex items-end justify-end ml-auto mr-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          className="rounded-full cursor-pointer" 
          src="images/user.png" 
          alt="User Profile" 
          style={{ width: '40px', height: '40px' }}
        />
        {isHovered && (
          <div className="absolute top-[60px] right-0 bg-white border border-gray-300 rounded-lg shadow-md p-4">
            <p className="text-gray-800">{user.displayName}</p>
            <div className="flex flex-wrap gap-[15px] items-center justify-center ">
        <div className="flex flex-row gap-[8px] items-center justify-center border-r-[1px] pr-2">
          <div
            style={{
              backgroundImage: "url('/icons/graduation-cap.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-[15.21px] h-[9.27px] shrink-0"
          ></div>
          <h2 className="text-[14px]  font-figtree font-normal leading-[21.6px]">
            Job Title
          </h2>
        </div>
        <p className="text-[14px] font-figtree font-normal leading-[21.6px]">
            {user.jobTitle? user.jobTitle : "Web Devloper"}
        </p>
      </div>
          </div>
        )}
      </div>
      {/* <a className="text-[#3B729C]" href="/ar">العربية</a> */}
      <div 
        className="flex items-end justify-end  mr-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = "/ar"}
      >
        <img 
          className="rounded-full cursor-pointer" 
          src="images/arabic.png" 
          alt="User Profile" 
          style={{ width: '40px', height: '40px' }}
        />
        </div>
    </div>
  )
}

export default Nav
