import React, { useContext } from "react";

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
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isHovered } = useContext(HoverContext);

  //   ${isHovered ? 'bg-blue-500' : 'bg-red-500'}

  return (
    <div>
      <nav className="w-full">
        <div
          className={`flex justify-between w-full h-[100px] text-white items-center  ${isHovered === "left" ? "text-primary bg-black" : "text-secondary bg-black"
            }`}
        >
          <h1
            className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
              } text-2xl font-bold ml-[40px]`}
          >
            Coronation
          </h1>
          <div
            className={`w-[1199px] h-[68px] flex gap-5 items-center justify-evenly ${isHovered === "left" ? "text-customPurple" : "text-secondary"
              }`}
          >
            <div className="flex items-center gap-4">
              <div className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}>
                <CiClock2 className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                  }`} />
              </div>
              <div className="flex flex-col">
                <small>Monday-Friday</small>
                <small>Saturday-Sunday Closed</small>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}>
                <TfiEmail className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                  }`} />
              </div>
              <div className={`flex flex-col`}>
                <small>Email</small>
                <small>contact@coronation.com</small>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className={`rounded-full border border-1 ${isHovered === "left" ? "border-customPurple" : "border-secondary"
                } border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center`}>
                <FaPhoneAlt className={`${isHovered === "left" ? "text-customPurple" : "text-secondary"
                  }`} />
              </div>
              <div className="flex flex-col">
                <small>Call us</small>
                <small>(00) 112 365 489</small>
              </div>
            </div>
          </div>

          <div
            className={`navbar w-full h-[78px] flex items-center justify-center absolute top-[100px] z-50  ${isHovered === "left" ? "bg-primary text-black text-customPurple" : "bg-secondary"
              }  opacity-90`}
          >
            <div className="w-full h-full flex items-center justify-between px-[200px]">
              {/* left side */}
              <ul className="flex justify-evenly text-white w-[700px]">
                <li className="border-r p-1 flex">
                  <Link to="/about">ABOUT</Link>
                </li>
                <li className="border-r p-1 flex">
                  <Link to="/products">PRODUCTS & SOLUTIONS</Link>
                </li>
                <li className="border-r p-1 flex">
                  <Link to="/insights">INSIGHTS</Link>
                </li>
                <li className="border-r p-1 flex">
                  <Link to="/careers">CAREERS</Link>
                </li>
                <li className="p-1 flex">
                  <Link to="/contact">CONTACT US</Link>
                </li>
              </ul>

              {/* right side */}
              <ul className={`flex gap-4 text-white items-center  `}>
                <li>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="bg-white text-black px-4 py-2 rounded">
                  <Link to="/">Self Services</Link>
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
