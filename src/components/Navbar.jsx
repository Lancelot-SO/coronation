import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { HoverContext } from "../contexts/HoverContext";
import { CiClock2 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/corologo.png";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const { isHovered, fromRight, setFromRight } = useContext(HoverContext);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (isLandingPage) {
      setFromRight(false);
    }
  }, [isLandingPage, setFromRight]);

  return (
    <div>
      <nav className="w-full">
        {/* top */}
        <div
          className={`lg:flex hidden justify-between w-full h-[100px] text-white items-center ${isHovered === "left" ? "text-primary bg-black" : "text-secondary bg-black"
            }`}
        >
          <Link to="/">
            <img src={logo} alt="logo" className="ml-[80px]" />
          </Link>
          <div
            className={`w-[1199px] h-[68px] flex gap-5 items-center justify-evenly ${isHovered === "left" ? "text-customPurple" : "text-secondary"
              }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[43px] h-[43px] items-center justify-center`}
              >
                <CiClock2 className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"}`} />
              </div>
              <div className="flex flex-col text-white">
                <small>Working Hours</small>
                <small>Mon - Fri 8:00am - 5:00pm</small>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[43px] h-[43px] items-center justify-center`}
              >
                <TfiEmail className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"}`} />
              </div>
              <div className="flex flex-col text-white">
                <small>Email</small>
                <small>infoghana@coronationinsurance.com.ng</small>
                <small>contactcentregh@coronationinsurance.com.ng</small>

              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[43px] h-[43px] items-center justify-center`}
              >
                <FaPhoneAlt className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"}`} />
              </div>
              <div className="flex flex-col text-white">
                <small>Call us</small>
                <small>0302772606 / 0308249068</small>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className={`navbar w-full h-[78px] lg:flex items-center justify-center absolute top-[100px] z-50 ${isHovered === "left" ? "bg-customPurple text-customPurple" : "bg-secondary"
            } opacity-70 hidden lg:flex`}
        >
          <div className="w-full h-full flex items-center justify-between px-[200px]">
            <ul className={`flex justify-evenly text-white w-[700px]`}>
              <li className="p-1 flex">
                <NavLink to={fromRight ? "/aboutred" : "/about"} className={`${isLandingPage ? "opacity-100 text-[18px] font-bold" : ""} text-[18px] font-bold`}>ABOUT</NavLink>
              </li>
              <li className="p-1 flex">
                <NavLink to={fromRight ? "/productred" : "/products"} className={`${isLandingPage ? "opacity-100 text-[18px] font-bold" : ""} text-[18px] font-bold`}>PRODUCTS & SOLUTIONS</NavLink>
              </li>
              <li className="p-1 flex">
                <NavLink to={fromRight ? "/insightsred" : "/insights"} className={`${isLandingPage ? "opacity-100 text-[18px] font-bold" : ""} text-[18px] font-bold`}>INSIGHTS</NavLink>
              </li>
              <li className="p-1 flex">
                <NavLink to={fromRight ? "/careerred" : "/career"} className={`${isLandingPage ? "opacity-100 text-[18px] font-bold" : ""} text-[18px] font-bold`}>CAREERS</NavLink>
              </li>
              <li className="p-1 flex">
                <NavLink to={fromRight ? "/contactred" : "/contact"} className={`${isLandingPage ? "opacity-100 text-[18px] font-bold" : ""} text-[18px] font-bold`}>CONTACT US</NavLink>
              </li>
            </ul>

            <ul className="flex gap-4 text-white items-center">
              <li>
                <a href="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer" className="opacity-100">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/coronationghana/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/coronation-insurance-ghana/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="bg-white text-black px-4 py-2 rounded">
                <NavLink to={fromRight ? "/selfservicered" : "/selfservice"} activeClassName="underline">Self Services</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile menu button */}
        <div onClick={() => setNav(!nav)} className='lg:hidden flex z-[1000] fixed text-black m-4'>
          {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
        </div>

        {/* Mobile menu */}
        {nav && (
          <div className='fixed top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center z-50'>
            <ul className='flex flex-col gap-8 text-white'>
              <li className='text-xl'>
                <Link to={fromRight ? "/aboutred" : "/about"} onClick={() => setNav(false)}>
                  About
                </Link>
              </li>
              <li className='text-xl'>
                <Link to={fromRight ? "/productred" : "/products"} onClick={() => setNav(false)}>
                  Product & Solution
                </Link>
              </li>
              <li className='text-xl'>
                <Link to={fromRight ? "/insightsred" : "/insights"} onClick={() => setNav(false)}>
                  Insights
                </Link>
              </li>
              <li className='text-xl'>
                <Link to={fromRight ? "/careerred" : "/career"} onClick={() => setNav(false)}>
                  Career
                </Link>
              </li>
              <li className='text-xl'>
                <Link to={fromRight ? "/contactred" : "/contact"} onClick={() => setNav(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
