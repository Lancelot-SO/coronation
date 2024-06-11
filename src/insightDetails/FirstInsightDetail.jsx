import React from 'react'

import brochureUrl from "../assets/insight/Coronation_Wealth_Management_Brochure.pdf"

import insightdetailBg from "../assets/insight/insightdetail1.png"
import brochureImg from "../assets/insight/brochureImg.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FirstInsightDetail = () => {


    return (
        <div>
            <div>
                <img src={insightdetailBg} alt='bg' className='w-full h-[773px]' />
            </div>

            <section>
                <div className='flex items-center justify-center'>
                    <div className=' w-[1123px] h-[1177px] mt-[30px] flex gap-4'>
                        <div>
                            <div className=' w-[664px] h-[143px]'>
                                <h2 className='w-[396px] h-[36px] font-light text-[30px] leading-[36px] text-[#1C1F35]'>Wealth Management Brochure</h2>
                                <p className='w-[664px]  font-normal leading-[24px] text-[16px] text-[#666C89]'>
                                    We deliver world-class wealth management services to discerning clients who seek solutions to Africa's unique challenges.                                </p>
                                <p className='w-[664px]  font-normal leading-[24px] text-[16px] text-[#666C89]'>
                                    Our Founder's entrepreneurial spirit and legacy of outstanding contributions to Banking and Finance in Africa remain our driving force.                                </p>
                            </div>
                            <div className='bg-black mt-8 w-[664px] h-[172px] flex items-center justify-center'>
                                <p className='w-[554px] h-[72px] font-normal text-[20px] text-white italic'>“Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain, and driving a more efficient business.”</p>
                            </div>

                            <div className='w-[664px] mt-4'>
                                <p className='h-[95px] text-[16px] leading-[24px] font-normal text-[#666C89]'>
                                    We have partnered with highly regarded global institutions to build Nigeria's first fully integrated technology-enabled investment platform, thus allowing us to become one of the region's fastest-growing fund managers.

                                </p>

                                <a href={brochureUrl} download className='text-[#08ABDE]'>
                                    Click here to download Brochure
                                </a>
                            </div>

                            <div className='mt-8 w-[664px] flex flex-col'>
                                <img src={brochureImg} alt='brochure' />
                                <p className='text-center text-[#666C89] mt-2'>coronation</p>
                            </div>

                            <p className='w-[664px] h-[168px] font-normal text-[16px] leading-[24px] mt-8'>
                                Insurance companies offer wealth management services to help clients grow and protect their assets. These services typically include investment management, financial planning, and risk management. Wealth management in insurance aims to provide a comprehensive approach to managing a client's financial affairs. By combining insurance products with investment strategies, insurance companies help clients achieve their long-term financial goals. Wealth management in insurance is a valuable service for individuals and families looking to secure their financial future.
                            </p>


                            <div className='flex w-[664px] h-[60px] items-center justify-between mt-[50px] border border-y-2 border-x-0'>
                                <div>
                                    <ul className="flex gap-4 text-black items-center">
                                        <li>
                                            <Link to="https://instagram.com" className="">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://facebook.com">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://twitter.com">
                                                <FaTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://linkedIn.com">
                                                <FaLinkedinIn />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>Category : insurance</div>
                            </div>
                        </div>
                        <div>
                            <div className='min-w-[440px] min-h-[304px] bg-[#F5F5F5]'>
                                <h3>How can we help you?</h3>
                                <p className=''>
                                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec feugiat tempus Phasellus atquam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FirstInsightDetail