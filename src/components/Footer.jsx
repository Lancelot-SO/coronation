import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../assets/corologo.png"

const Footer = () => {
    return (
        <div class="bg-black text-white overflow-hidden">
            <div className='hidden lg:flex flex-col'>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt='logo' className='ml-[250px]' />
                    <ul className='bg-customPurple flex w-[885px] h-[89px] items-center text-[16px] pl-20 font-semibold gap-[50px]'>
                        <li className='border-r-2 border-r-white pr-8 h-[40px] flex items-center'>MAIN SERVICE</li>
                        <li className=' border-r-2 border-r-white pr-8 h-[40px] flex items-center'>SELF SERVICE</li>
                        <li className='border-r-2 border-r-white pr-8 h-[40px] flex items-center'>AFFILIATION</li>
                        <li>WHISTLE BLOWING</li>
                    </ul>
                </div>

                <div className='w-full h-[300px]'>
                    <div className='flex'>
                        <div className='w-[calc(100%-885px)] h-[300px] flex flex-col pt-20 pl-[250px]'>
                            <p className='w-[240px] h-[108px] font-medium text-[12px] leading-[18px] mb-2'>
                                At Coronation, we seek to be the most enjoyable company to do business with. Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter. With us, it's not just insurance; it's insurance For EVERYTHING
                            </p>
                            <div className='mt-5'>
                                <ul className='flex gap-4'>
                                    <li>
                                        <Link to="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer" className="opacity-100">
                                            <FaInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.facebook.com/coronationghana/" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/company/coronation-insurance-ghana/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-[885px] h-[300px] flex'>
                            <div className='w-[221px] h-full pt-4'>
                                <ul className='flex flex-col pl-[70px] gap-4'>
                                    <Link><li className=''>Motor Insurance</li></Link>
                                    <Link><li className=''>Marine Insurance</li></Link>
                                    <Link><li className=''>Fire Insurance</li></Link>
                                    <Link><li className=''>
                                        Accident Insurance
                                    </li></Link>
                                    <Link><li className=''>
                                        Engineering
                                    </li></Link>
                                    <Link><li className=''>
                                        Travel Insurance
                                    </li></Link>
                                </ul>
                            </div>
                            <ul className='w-[180px] h-full pl-[60px] pt-4 flex flex-col gap-4'>
                                <Link><li className=''>Login</li></Link>
                                <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer'><li className=''>Claims</li></Link>
                            </ul>
                            <div className='w-[221px] h-full'>
                                <ul className='flex flex-col pl-[20px] pt-4 gap-2'>
                                    <Link><li className=''>Coronation Asset Management</li></Link>
                                    <Link><li className=''>Coronation Insurance PLC</li></Link>
                                    <Link><li className=''>Coronation Life Assurance</li></Link>
                                    <Link><li className=''>Coronation Securities</li></Link>
                                    <Link><li className=''>Coronation Capital</li></Link>
                                    <Link><li className=''>Coronation Registrars</li></Link>
                                    <Link><li className=''>Coronation Trustees</li></Link>
                                    <Link><li className=''>Truim</li></Link>
                                </ul>
                            </div>
                            <ul className=' w-[261px] pl-8 h-full pt-4'>
                                <Link to="https://coronation.ng/whistle-blowing-coronation-insurance-ghana/" target='_blank' rel='noopener noreferrer'><li className=''>Whistle Blowing: Coronation
                                    Insurance Ghana</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='hidden lg:flex w-full h-[1px] bg-slate-300 mt-[20px]' />
            <p className='hidden lg:flex ml-[250px] mt-4 items-center text-[12px] leading-[30px] font-medium '>
                © 2024 Coronation. All right reserved. Privacy Policy
            </p>

            {/*mobile footer */}
            <div className='lg:hidden h-[800px] py-4 px-5'>
                <img src={logo} alt='logo' className='mb-4' />
                <div className='flex flex-col'>
                    <p className='w-[240px] h-[108px] font-medium text-[12px] leading-[18px] mb-2'>
                        At Coronation, we seek to be the most enjoyable company to do business with. Our experienced underwriting and strong risk management expertise developed over the last 16 years has prepared us to serve as your lead underwriter. With us, it's not just insurance; it's insurance For EVERYTHING
                    </p>
                    <div className='mt-5'>
                        <ul className='flex gap-4'>
                            <li>
                                <Link to="https://www.instagram.com/coronationgh/" target="_blank" rel="noopener noreferrer" className="opacity-100">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/coronationghana/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://x.com/coronationghana" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/company/coronation-insurance-ghana/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5 mb-8 flex gap-6'>
                    <div>
                        <Link><p className='font-semibold mb-2 text-customPurple'>MAIN SERVICE</p></Link>
                        <ul className='flex flex-col gap-4 text-xs'>
                            <Link><li className=''>Motor Insurance</li></Link>
                            <Link><li className=''>Marine Insurance</li></Link>
                            <Link><li className=''>Fire Insurance</li></Link>
                            <Link><li className=''>
                                Accident Insurance
                            </li></Link>
                            <Link><li className=''>
                                Engineering
                            </li></Link>
                            <Link><li className=''>
                                Travel Insurance
                            </li></Link>
                        </ul>
                    </div>
                    <div>
                        <Link><p className='font-semibold mb-2 text-customPurple'>SELF SERVICE</p></Link>
                        <ul className='flex flex-col gap-4 text-xs'>
                            <Link><li className=''>Login</li></Link>
                            <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer'><li className=''>Claims</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <Link><p className='font-semibold mb-2 text-customPurple'>MAIN SERVICE</p></Link>
                        <ul className='flex flex-col gap-4 text-xs'>
                            <Link><li className=''>Coronation Asset Management</li></Link>
                            <Link><li className=''>Coronation Insurance PLC</li></Link>
                            <Link><li className=''>Coronation Life Assurance</li></Link>
                            <Link><li className=''>Coronation Securities</li></Link>
                            <Link><li className=''>Coronation Capital</li></Link>
                            <Link><li className=''>Coronation Registrars</li></Link>
                            <Link><li className=''>Coronation Trustees</li></Link>
                            <Link><li className=''>Truim</li></Link>
                        </ul>
                    </div>
                    <div>
                        <Link><p className='font-semibold mb-2 text-customPurple'>WHISTLE BLOWING</p></Link>
                        <ul className='flex flex-col gap-4 text-xs'>
                            <Link to="https://coronation.ng/whistle-blowing-coronation-insurance-ghana/" target='_blank' rel='noopener noreferrer'><li className=''>Whistle Blowing: Coronation
                                Insurance Ghana</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
            <hr className='w-full h-[1px] bg-slate-300 mt-[20px]' />
            <p className='flex items-center text-[12px] leading-[30px] font-medium '>
                © 2024 Coronation. All right reserved. Privacy Policy
            </p>
        </div>
    )
}

export default Footer