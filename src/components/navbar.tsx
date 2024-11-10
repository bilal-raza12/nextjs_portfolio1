"use client";
import { useState } from "react";
import { FaTimes , FaBars} from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglenav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" navbar">
       <h1 className="logo">BR</h1>
       <div className="menu-icon">
           <button onClick={()=> setIsOpen(!isOpen)} className="menu-btn" >
             {isOpen ? <FaTimes/> : <FaBars/>}

           </button>
             
           
       </div>
       <ul className="nav-links ">
       <li><Link href={"/"} className="">Home</Link></li>
       <li><Link href={"#about"} className="hover:text-[#f65353]">About</Link></li>
       <li><Link href={"#project"} className="hover:text-[#f65353]">Projects</Link></li>
    
       <li><Link href={"#contact"} className="hover:text-[#f65353]">Contact</Link></li>


      </ul>
      
       {isOpen && (
        <div className="mobile-link ">
          <div className="mobile-link-container">
             
             <ul className="mobile-nav-link">
              <li><Link href={"/"}   onClick={togglenav}>Home</Link></li>
              <li><Link href={"#about"}  onClick={togglenav}>About</Link></li>
              <li><Link href={"#project"}  onClick={togglenav}>Projects</Link></li>
             
              <li><Link href={"#contact"}  onClick={togglenav}>Contact</Link></li>
             </ul>
          </div>
        </div>
       )
       }
    </nav>
  );
};

export default Navbar;

