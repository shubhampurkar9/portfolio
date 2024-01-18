import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false); 
    const handleClick = () => setNav(!nav);

    return (
      <div className="fixed z-40 w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#0e0e0f] to-[#092140] text-gray-300">
        <div className="cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="Logo" style={{ width: "50px" }} />
          </Link>
        </div>
        {/* menu */}
        <div>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="work" smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center"
          }
        >
          <div className="py-6 text-3xl">
          <li>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          </div>
        </ul>

        {/* social-icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[130px] h-[30px] flex justify-between items-center ml-[-81px] hover:ml-[-5px] duration-300 bg-[#0e0e0f]">
              <a
                className="flex justify-between items-center w-full text-[#20ABD0] font-bold"
                href="https://www.linkedin.com/in/shubham-purkar/"
              >
                LinkedIn <FaLinkedin size={25} className="text-[#20ABD0]"/>{" "}
              </a>
            </li>
            <br/>
            <li className="w-[130px] h-[30px] flex justify-between items-center ml-[-80px] hover:ml-[-3px] duration-300 bg-[#0e0e0f]">
              <a
                className="flex justify-between items-center w-full text-[#ccd6f6] font-bold"
                href="https://github.com/shubhampurkar9"
              >
                Github <FaGithub size={25} className="text-[#ccd6f6]"/>{" "}
              </a>
            </li>
            <br/>
            <li className="w-[130px] h-[30px] flex justify-between items-center ml-[-80px] hover:ml-[-5px] duration-300 bg-[#0e0e0f]">
              <a
                className="flex justify-between items-center w-full text-[#20ABD0] font-bold"
                href="mailto: shubhampurkar9@gmail.com"
              >
                Email <HiOutlineMail size={25} className="text-[#20ABD0]"/>{" "}
              </a>
            </li>
            <br/> 
            <li className="w-[130px] h-[30px] flex justify-between items-center ml-[-80px] hover:ml-[-3px] duration-300 bg-[#0e0e0f]">
              <a
                className="flex justify-between items-center w-full text-[#ccd6f6] font-bold"
                href={require("../assets/files/Shubham-Resume.pdf")}
              >
                Resume <BsFillPersonLinesFill size={25} className="text-[#ccd6f6]"/>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
} 

export default Navbar