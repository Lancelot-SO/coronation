import React from 'react'


import { CiClock2 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='w-full'>
                <div className='flex justify-between w-full h-[100px] bg-black text-white items-center'>
                    <h1 className='text-2xl font-bold ml-[40px]'>Coronation</h1>
                    <div className='w-[1199px] h-[68px] flex gap-5 items-center justify-evenly'>
                        <div className='flex items-center gap-4'>
                            <div className='rounded-full border border-1 border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center'>
                                <CiClock2 className='text-customPurple' />
                            </div>
                            <div className='flex flex-col'>
                                <small>Monday-Friday</small>
                                <small>Saturday-Sunday Closed</small>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div className='rounded-full border border-1 border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center'>
                                <TfiEmail className='text-customPurple' />
                            </div>
                            <div className='flex flex-col'>
                                <small>Email</small>
                                <small>contact@coronation.com</small>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div className='rounded-full border border-1 border-customPurple bg-transparent flex p-4 w-[63px] h-[63px] items-center justify-center'>
                                <FaPhoneAlt className='text-customPurple' />
                            </div>
                            <div className='flex flex-col'>
                                <small>Call us</small>
                                <small>(00) 112 365 489</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`navbar w-full h-[78px] flex items-center justify-center absolute top-[100px] z-50 bg-black opacity-50`}>
                    <div className='w-full h-full flex items-center justify-between px-[200px]'>
                        <ul className='flex justify-evenly text-white w-[700px]'>
                            <li className='border-r p-1 flex'>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li className='border-r p-1 flex'>
                                <Link to="/products">PRODUCTS & SOLUTIONS</Link>
                            </li>
                            <li className='border-r p-1 flex'>
                                <Link to="/insights">INSIGHTS</Link>
                            </li>
                            <li className='border-r p-1 flex'>
                                <Link to="/careers">CAREERS</Link>
                            </li>
                            <li className='p-1 flex'>
                                <Link to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                        <ul className='flex gap-4 text-white items-center'>
                            <li>
                                <Link to="#"><FaInstagram /></Link>
                            </li>
                            <li>
                                <Link to="#"><FaFacebookF /></Link>
                            </li>
                            <li>
                                <Link to="#"><FaTwitter /></Link>
                            </li>
                            <li>
                                <Link to="#"><FaLinkedinIn /></Link>
                            </li>
                            <li className='bg-white text-black px-4 py-2 rounded'>
                                <Link to="/">Self Services</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}

export default Navbar;
