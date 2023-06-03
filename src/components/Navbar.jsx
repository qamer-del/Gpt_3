import { useState } from "react";
import { logo ,close, menue } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full p-5 mt-5 bg-primary  text-white">
      <div className=" container mx-auto h-full flex justify-between items-center  text-sm font-medium">
      <div className="flex items-center">
      <img src={logo} alt="logo" className=" w-[62.56px] h-[16.02px] mr-20 " />
           <ul className="list-none  justify-end items-center md:flex hidden  gap-5 font-medium text-lg text-white">
           {navLinks.map((nav, index) => (<li      
              className={` cursor-pointer  ${
                active === nav.title ? "text-btn  border-b-4 border-btn" : ""}`}
           key={nav.id}onClick={() => setActive(nav.title)}><a href={`#${nav.id}`}>{nav.title}</a></li>))}
           </ul>
      </div>
      <div className='hidden  md:flex'>
           <button className='flex bg-transparent items-center justify-between px-6 gap-2 text-white'>Sign in</button>
           <button className=' p-3 px-10 rounded-[5px] bg-btn text-white font-medium text-base'>Sign Up</button>
      </div>
        <img src={toggle ? close : menue}alt="menue"className="md:hidden flex w-[28px] h-[28px] object-contain "onClick={() => setToggle(!toggle)}/>
      <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  text-white absolute z-[1] top-10 right-0 w-full rounded-xl md:hidden bg-parimary navani `}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col hover:rounded-md bg-primary">
            {navLinks.map((nav) => (
              <li className="p-2 hover:bg-font w-[50%] m-auto duration-1000   "   onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button  className="w-[50%]  p-2 m-auto rounded-md bg-gray-700 mt-3 ">Login</button>
           <button className=" w-[50%] bg-btn p-2 m-auto rounded-md mt-2 hover:bg-font duration-1000 " >Sign Up</button>
          </ul>
          
        </div>
 
     
     </div>
    </nav>
  );
};
export default Navbar;