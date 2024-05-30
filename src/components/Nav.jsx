import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='w-full bg-white flex justify-between px-[30px] py-[20px]'>
      
      <img className="w-[200px]" src="/icons/rhclogo1.png" alt="" />

      <Link className="text-[#3B729C]" to="/ar">العربية</Link>
    </div>
  )
}

export default Nav
