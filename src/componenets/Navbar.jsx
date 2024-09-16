import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";


import logo from '../../public/logo.png'
const Navbar = () => {
  return (
    <div className=" flex justify-between px-6 py-3 items-center ">
      <div className=" flex items-center space-x-5">
<GiHamburgerMenu  className="text-2xl "/>
<img src={logo} alt=""  className="w-12"/>
      </div>
      <div className="flex border border-black space-x-3 radius-5 px-4 py-2 items-center w-[35%] ">
<div className="w-[100%] border rounded-l-full  ">
<input type="text" placeholder="search" className="" />
</div>   
<button className="px-4 py-2 border rounded-r-full"><FaSearch /></button> 
    <FaMicrophone />


      </div>
      <div className="">
        3
      </div> 
    </div>
  )
}

export default Navbar