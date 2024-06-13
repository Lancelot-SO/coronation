import React from 'react'
import coporateRedBg from "../assets/home/corporateRedBg.png"
import corporatePay from "../assets/home/corporatePay.png"
import hero2 from "../assets/heroRed2.png"
import hero3 from "../assets/heroRed3.png"
import insight1 from "../assets/insight1.png"
import insight2 from "../assets/insight2.png"
import insight3 from "../assets/insight3.png"
import bg from "../assets/bg.png"




import { FaFingerprint, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'
import FooterRed from '../components/FooterRed'


const HeroRed = () => {
    return (
        <div>
            <div>
                <img src={coporateRedBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] left-[160px] w-[745px] h-[164px] bg-[rgba(0,0,0,0.8)] p-10'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-medium'>Coronation</h2>
                    <p className='w-[685px] h-[45px] text-[19px] leading-[25px] text-white font-light'>We are a leading African financial services partner that helps build financial
                        independence and enduring legacies that lead to sustainable wealth creation in Africa.</p>
                </div>
                <div className='absolute top-[281px] left-[1000px]'>
                    <img src={corporatePay} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-secondary ml-[20px] justify-center text-white rounded-[30px]'>Request & Pay <FaFingerprint /></button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-secondary absolute bottom-0 3xl:top-[722px] large:top-[722px]'>
                </div>
            </div>
            <section>
                <div className='relative'>
                    <img src={hero2} alt='hero2' className='w-[666px] h-[531px] mt-[100px] ml-[280px] 3xl:ml-[370px]' />
                    <div className='w-[420px] h-[420px] bg-black absolute top-[55px] px-[40px] right-[300px] 3xl:right-[350px] large:right-[422px] text-white flex flex-col items-center justify-center'>
                        <h1 className="w-[329px] h-[90px] text-[37px] leading-[45px] font-light mb-[20px]">Products & Services
                            for corporate</h1>
                        <p className='w-[328px] h-[120px] text-[16px] leading-[25px] font-normal mb-6 p-[10px]'>Our products and services provide self-sufficiency, financial independence,
                            creation and preservation of wealth for the future.</p>
                        <Link to="/productred"><button className='w-[300px] h-[42px] bg-white text-secondary'>VIEW MORE</button></Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="mt-[60px] flex h-[637px] bg-[#F4F5F7]">
                    <img src={hero3} alt='hero3' className='w-[734px] h-[509px] mt-[50px]' />
                    <div className='w-[508px] h-[178px] mt-[230px] ml-[50px] flex flex-col'>
                        <h2 className='text-[40px] mb-2 font-light leading-[48px]'>Our Company Overview</h2>
                        <strong className='text-secondary text-[16px] mb-2 font-normal leading-[24px]'>LIVE YOUR BEST LIFE WITH CORONATION INSURANCE</strong>
                        <span className='text-[13px] text-[#666C89] mb-2 font-medium leading-[20px]'>Make a decision to protect those that matter to you.</span>
                        <div className='flex gap-4 mt-3'>
                            <Link to='/aboutred'>
                                <button className='w-[167px] h-[50px] items-center flex justify-center text-white bg-secondary'>LEARN MORE</button>
                            </Link>
                            <Link to="https://www.coronation.ng/self-service/" target='_blank' rel='noopener noreferrer'>
                                <button className='w-[164px] h-[50px] items-center flex justify-center border-2 border-secondary text-secondary'>MAKE A CLAIM</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-full h-[675px] bg-white flex flex-col items-center justify-center mb-10'>
                    <div className=' w-[1037px] h-[534px] flex flex-col items-center'>
                        <div className='w-[752px] h-[82px] flex flex-col items-center justify-center'>
                            <h1 className='leading-[48px] text-[40px] font-light'>Our  Insights </h1>
                            <span className='leading-[36px] text-[30px] font-light'>Hear the latest trends from our industry experts</span>
                        </div>
                        <div className='w-full h-[422px] mt-[30px] flex gap-[70px]'>
                            <div className='flex flex-col w-[299px] h-[410px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight1} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-secondary'>Maecenas accumsan lacus vel facilisis volutpat est</p>
                                    <p className='w-[222px] h-[57px] text-[16px] leading-[19px] font-normal'>Non consectetur a erat nam at. Sit amet risus nullam eget felis eget nunc lobortis.</p>
                                    <Link to="/insightsred" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col w-[299px] h-[410px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight2} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-secondary'>Maecenas accumsan lacus vel facilisis volutpat est</p>
                                    <p className='w-[222px] h-[57px] text-[16px] leading-[19px] font-normal'>Non consectetur a erat nam at. Sit amet risus nullam eget felis eget nunc lobortis.</p>
                                    <Link to="/insightsred" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col w-[299px] h-[410px] rounded-t-[15px] bg-[#F6F6F6] mt-[10px]'>
                                <img src={insight3} alt='insight' />
                                <div className='flex flex-col p-[30px] gap-[20px] w-full h-[246px]'>
                                    <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-secondary'>Maecenas accumsan lacus vel facilisis volutpat est</p>
                                    <p className='w-[222px] h-[57px] text-[16px] leading-[19px] font-normal'>Non consectetur a erat nam at. Sit amet risus nullam eget felis eget nunc lobortis.</p>
                                    <Link to="/insightsred" className='flex items-center w-[111px] justify-center h-[20px]'>
                                        <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                                        <FaLongArrowAltRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to='/insightsred' className='w-[214px] h-[50px] flex items-center justify-center mt-8 bg-secondary text-white text-[16px] leading-[25px] font-semibold'>VIEW ALL INSIGHTS</Link>
                </div>
            </section>

            <section className='mb-[120px] 3xl:ml-[120px]'>
                <div className='relative'>
                    <img src={bg} alt='bg' className='absolute w-[1120px] h-[177px] rounded-[50px] top-0 left-[190px] object-cover' />
                    <div className='relative z-10 flex flex-row ml-[300px]'>
                        <div className='text-left mt-10'>
                            <h2 className='text-white w-[480px] h-[43px] text-[36px] leading-[43px] font-light mb-4'>We are affiliated to the Group</h2>
                            <p className='text-white opacity-50 w-[332px] h-[28px] text-[16px] leading-[19px] font-light'>We are affiliated to our mother company in Nigeria</p>
                        </div>
                        <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center font-normal text-[13px] text-black mt-[70px] ml-[60px] rounded-[30px] w-[263px] h-[45px] bg-white'>Contact us</Link>
                    </div>
                </div>

            </section>

            <Banner />
            <FooterRed />
        </div>
    )
}

export default HeroRed