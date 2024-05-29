import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div class="bg-black text-white h-[423px]">
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='ml-[250px] text-2xl font-bold'>CORONATION</h1>
                    <ul className='bg-customPurple flex w-[885px] h-[89px] items-center text-[16px] pl-20 font-semibold gap-[50px]'>
                        <li>MAIN SERVICE</li>
                        <li className='ml-10 mr-4'>SELF SERVICE</li>
                        <li>INVESTOR
                            RELATIONS</li>
                    </ul>
                </div>
                <div className='flex items-center justify-between mt-8'>
                    <div className='ml-[250px] mb-8'>
                        <p className='w-[240px] h-[72px] leading-[18px] text-[12px] font-medium'>
                            We are a leading financial service partner that helps build enduring legacies that lead to sustainable wealth creation in Africa.
                        </p>
                        <ul className='flex gap-4'>
                            <Link><li><FaInstagram /></li></Link>
                            <Link><li><FaFacebook /></li></Link>
                            <Link><li><FaTwitter /></li></Link>
                            <Link><li><FaLinkedin /></li></Link>
                        </ul>
                    </div>
                    <div className='flex w-[885px] items-center text-[16px] pl-20 font-semibold gap-[50px]'>
                        <ul className=''>
                            <Link><li className='mb-[10px]'>Insurance</li></Link>
                            <Link><li className='mb-[10px]'>Private Banking</li></Link>
                            <Link><li className='mb-[10px]'>Wealth Mangement</li></Link>
                            <Link><li className=''>
                                Securities Trading and<br />
                                Brokerage
                            </li></Link>
                        </ul>
                        <ul className='mb-[100px] flex flex-col gap-4 mr-12'>
                            <Link><li className=''>Login</li></Link>
                            <Link><li>Claims</li></Link>

                        </ul>
                        <Link className='mb-[100px] mr-4'>Investor Information</Link>
                        <Link className='mb-[100px]'>Coronation Nigeria</Link>
                    </div>
                </div>
            </div>
            <hr className='w-full h-[1px] bg-slate-300 mt-[80px]' />
            <p className='ml-[250px] mt-4 flex items-center text-[12px] leading-[30px] font-medium '>© 2024 Coronation. All right reserved. Privacy Policy</p>
        </div>
    )
}

export default Footer