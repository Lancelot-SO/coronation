import React, { useContext, useEffect } from "react";
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
} from "react-icons/fa";

import logo from "../assets/corologo.png";

const Navbar = () => {
  const { isHovered, fromRight, setFromRight } = useContext(HoverContext);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    if (isLandingPage) {
      setFromRight(false);
    }
  }, [isLandingPage, setFromRight]);

  return (
    <div>
      <nav className="w-full">
        <div
          className={`flex justify-between w-full h-[100px] text-white items-center ${isHovered === "left"
            ? "text-primary bg-black"
            : "text-secondary bg-black"
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
                className={`rounded-full border border-1 ${isHovered === "left"
                  ? "border-customPurple"
                  : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}
              >
                <CiClock2
                  className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                    }`}
                />
              </div>
              <div className="flex flex-col text-white">
                <small>Mon - Fri 8:00 - 5:00</small>
                <small>Saturday-Sunday Closed</small>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`rounded-full border border-1 ${isHovered === "left"
                  ? "border-customPurple"
                  : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}
              >
                <TfiEmail
                  className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                    }`}
                />
              </div>
              <div className="flex flex-col text-white">
                <small>Email</small>
                <small>infoghana@coronationinsurance.com.ng</small>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`rounded-full border border-1 ${isHovered === "left"
                  ? "border-customPurple"
                  : "border-secondary"
                  } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}
              >
                <FaPhoneAlt
                  className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                    }`}
                />
              </div>
              <div className="flex flex-col text-white">
                <small>Call us</small>
                <small>(00) 112 365 489</small>
              </div>
            </div>
          </div>

          <div
            className={`navbar w-full h-[78px] flex items-center justify-center absolute top-[100px] z-50 ${isHovered === "left" ? "bg-primary text-customPurple" : "bg-secondary"
              } opacity-70`}
          >
            <div className="w-full h-full flex items-center justify-between px-[200px]">
              {/* left side */}
              <ul className="flex justify-evenly text-white w-[700px]">
                <li className="p-1 flex">
                  <NavLink to={fromRight ? "/aboutred" : "/about"} className={isLandingPage ? "pointer-events-none opacity-100" : ""}>ABOUT</NavLink>
                </li>
                <li className="p-1 flex">
                  <NavLink to={fromRight ? "/productred" : "/products"} className={isLandingPage ? "pointer-events-none opacity-100" : ""}>PRODUCTS & SOLUTIONS</NavLink>
                </li>
                <li className="p-1 flex">
                  <NavLink to={fromRight ? "/insightsred" : "/insights"} className={isLandingPage ? "pointer-events-none opacity-100" : ""}>INSIGHTS</NavLink>
                </li>
                <li className="p-1 flex">
                  <NavLink to={fromRight ? "/careerred" : "/career"} className={isLandingPage ? "pointer-events-none opacity-100" : ""}>CAREERS</NavLink>
                </li>
                <li className="p-1 flex">
                  <NavLink to={fromRight ? "/contactred" : "/contact"} className={isLandingPage ? "pointer-events-none opacity-100" : ""}>CONTACT US</NavLink>
                </li>
              </ul>

              {/* right side */}
              <ul className="flex gap-4 text-white items-center">
                <li>
                  <a href="https://www.instagram.com/coronationng/" target="_blank" rel="noopener noreferrer" className="opacity-100">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/coronationng/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/coronation_ng" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/coronationgrp/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="bg-white text-black px-4 py-2 rounded">
                  <NavLink to={fromRight ? "/selfservicered" : "/selfservice"} activeClassName="underline">Self Services</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
