import React from 'react'
import herobg from "../assets/heroBg.png"
import heroPrint from "../assets/heroPrint.png"
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/hero3.png"


import insight1 from "../assets/insight/insightmain2.png"
import insight2 from "../assets/insight/insightmain44.png"
import insight3 from "../assets/insight/insightmain3.png"


import bg from "../assets/bg.png"

import Footer from "../components/Footer"
import Banner from '../components/Banner'




import { FaFingerprint, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className='overflow-hidden'>
            <div className=''>
                <img src={herobg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] lg:left-[160px] left-0 lg:w-[745px] w-[270px] lg:h-[164px] h-[160px] bg-[rgba(0,0,0,0.8)] lg:p-10 p-2'>
                    <h2 className='lg:mb-4 mb-2 lg:text-[31px] text-[16px] leading-[37px] text-white font-medium'>Coronation</h2>
                    <p className='lg:w-[685px] w-[260px] h-[45px] lg:text-[19px] text-[14px] leading-[25px] text-white font-light'>We are a leading African financial services partner that helps build financial
                        independence and enduring legacies that lead to sustainable wealth creation in Africa.</p>
                </div>
                <div className='absolute top-[281px] left-[1000px] 3xl:ml-[230px] hidden lg:flex'>
                    <img src={heroPrint} alt='print' className='relative' />
                    <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center text-white'></p>
                    </div>
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Request & Pay <FaFingerprint /></button>
                    </Link>
                </div>
                <div className='lg:w-[660px] h-[7px] bg-[#B580D1] absolute top-[622px] w-[300px] 3xl:top-[722px] large:top-[722px]'>
                </div>
            </div>

            <section>
                <div className='relative h-[750px] lg:h-full'>
                    <img src={hero2} alt='hero2' className='lg:w-[666px] w-full lg:h-[531px] lg:mt-[100px] mt-[50px] lg:ml-[280px] 3xl:ml-[370px] object-cover' />
                    <div className='lg:w-[420px] w-full h-[420px] bg-black absolute lg:top-[55px] px-[40px] lg:right-[300px] 3xl:right-[350px] text-white flex flex-col items-center justify-center'>
                        <h1 className="w-[329px] h-[90px] text-[37px] leading-[45px] font-light mb-[20px]">Products & Solutions
                            for the individual</h1>
                        <p className='w-[328px] h-[120px] text-[16px] leading-[25px] font-normal mb-8 p-[10px]'>
                            Get a wide range of financial solutions with Coronation. We offer superior customer service, innovative product solutions, excellent financial advice and more. Let’s be your prosperity partner today.
                        </p>
                        <Link to="/products"><button className='w-[300px] h-[42px] bg-white text-customPurple'>VIEW MORE</button></Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:mt-[60px] mt-0 lg:flex lg:flex-row flex flex-col lg:h-[637px] bg-[#F4F5F7]">
                    <img src={hero3} alt='hero3' className='lg:w-[734px] lg:h-[509px] mt-[50px]' />
                    <div className='w-[508px] h-[178px] lg:mt-[230px] mt-10 lg:ml-[50px] ml-[5px] flex flex-col'>
                        <h2 className='lg:text-[40px] text-[30px] mb-2 font-light leading-[48px]'>Our Company Overview</h2>
                        <strong className='text-customPurple lg:text-[16px] text-[14px] mb-2 font-normal leading-[24px]'>LIVE YOUR BEST LIFE WITH CORONATION INSURANCE</strong>
                        <span className='text-[13px] text-[#666C89] mb-2 font-medium leading-[20px]'>Make a decision to protect those that matter to you.</span>
                        <div className='flex gap-4 mt-3'>
                            <Link to='/about'>
                                <button className='w-[167px] h-[50px] items-center flex justify-center text-white bg-customPurple'>LEARN MORE</button>
                            </Link>
                            <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer'>
                                <button className='w-[164px] h-[50px] items-center flex justify-center border-2 border-customPurple text-customPurple'>MAKE A CLAIM</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full h-auto bg-white flex flex-col items-center justify-center mt-8 lg:mt-0 mb-10'>
                    <div className='w-[1037px] h-auto flex flex-col items-center'>
                        <div className='w-[752px] h-auto flex flex-col items-center justify-center'>
                            <h1 className='leading-[48px] text-[40px] font-light'>Our Insights </h1>
                            <span className='leading-[36px] text-[30px] font-light w-[380px] lg:w-full flex items-center justify-center'>
                                Hear the latest trends from our industry experts
                            </span>
                        </div>
                        <div className=' h-auto mt-[30px] grid lg:grid-cols-3 grid-cols-1 gap-[70px]'>
                            <div className='flex flex-col w-[299px] h-[430px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight1} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-customPurple'>
                                        STAYING AHEAD OF THE STORM
                                    </p>
                                    <p className='w-[222px] h-[127px] text-[16px] leading-[19px] font-normal'>
                                        In today's age of global warming, characterised by a rise in the frequency and severity of floods and fires, the significance of taking preventive measures cannot be overstated.
                                    </p>
                                    <Link to="/first_insight" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col w-[299px] h-[430px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight2} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-customPurple'>
                                        REVOLUTIONISING CUSTOMER EXPERIENCE
                                    </p>
                                    <p className='w-[222px] h-[90px] text-[16px] leading-[19px] font-normal'>
                                        Regardless of industry or sector, almost all businesses today are seeking to digitalise their operations to improve customer experience.
                                    </p>
                                    <Link to="/second_insight" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col w-[299px] h-[430px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight3} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-customPurple'>
                                        A STRATEGY FOR RESILIENCE
                                    </p>
                                    <p className='w-[222px] h-[57px] text-[16px] leading-[19px] font-normal'>
                                        The Role of Insurance in Your Retail Business's Long-Term Plan
                                    </p>
                                    <Link to="/third_insight" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to='/insights' className='w-[214px] h-[50px] flex items-center justify-center mt-8 bg-[#A87DCA] text-white text-[16px] leading-[25px] font-semibold'>
                        VIEW ALL INSIGHTS
                    </Link>
                </div>
            </section>


            <section className='lg:mb-[120px] mb-10 3xl:ml-[120px]'>
                <div className='relative'>
                    <img src={bg} alt='bg' className='absolute lg:w-[1120px] w-full lg:h-[177px] h-[250px] lg:rounded-[50px] top-0 lg:left-[190px] object-cover' />
                    <div className='relative z-10 flex lg:flex-row flex-col lg:ml-[300px] ml-0'>
                        <div className='text-left mt-10 pl-10 lg:pl-0'>
                            <h2 className='text-white lg:w-[480px] w-[300px] h-[43px] lg:text-[36px] text-[20px] leading-[43px] font-light lg:mb-4 mb-2'>We are affiliated to the Group</h2>
                            <p className='text-white opacity-50 w-[332px] h-[28px] text-[16px] leading-[19px] font-light'>We are affiliated to our mother company in Nigeria</p>
                        </div>
                        <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center font-normal text-[13px] text-black mt-[70px] lg:ml-[60px] ml-10 rounded-[30px] w-[263px] h-[45px] bg-white'>Contact us</Link>
                    </div>
                </div>
            </section>

            <Banner />
            <Footer />


        </div>
    )
}

export default Hero