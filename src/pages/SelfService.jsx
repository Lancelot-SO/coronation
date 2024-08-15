import React from 'react'

import servicebg from "../assets/service/serviceBg.png"
import servicePay from "../assets/service/servicePay.png"
// import icon1 from "../assets/service/serviceIcon1.png"
// import icon2 from "../assets/service/serviceIcon2.png"
// import icon3 from "../assets/service/serviceIcon3.png"
import icon4 from "../assets/service/serviceIcon4.png"
import icon5 from "../assets/service/serviceIcon5.png"
// import icon6 from "../assets/service/serviceIcon6.png"
// import serviceImage1 from "../assets/service/serviceImage1.png"
// import serviceImage2 from "../assets/service/serviceImage2.png"
import bg from "../assets/bg.png"

import Banner from '../components/Banner'
import Footer from '../components/Footer'


import { Link } from 'react-router-dom'
// import { FaLongArrowAltRight } from 'react-icons/fa'

const SelfService = () => {
    return (
        <div>
            <div>
                <img src={servicebg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] left-[160px] w-[745px] h-[164px] bg-[rgba(0,0,0,0.8)] p-10'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Self Service</h2>
                    <p className='w-[686px] h-[128px] text-[18px] leading-[25px] text-white font-light'>
                        Choose the service you would<br />
                        like to access
                    </p>
                </div>
                <div className='absolute top-[281px] left-[1000px]'>
                    <img src={servicePay} alt='print' className='relative' />
                    <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? Let's talk</p>
                    </div>
                    <Link to="https://coronation.ng/contact-us/" target="_blank" rel="noopener noreferrer" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Contact Us</button>
                    </Link>
                </div>
                <div className='w-[660px] h-[7px] bg-[#B580D1] absolute bottom-0 3xl:top-[722px]'>
                </div>
            </div>

            {/*<section>
                <div className='flex w-full h-[759px] items-center justify-center'>
                    <div className='h-[699px] w-[1000px] flex flex-col items-center'>
                        <h2 className='w-[1110px] h-[44px] text-[40px] leading-[44px] font-light text-center mt-[130px]'>Coronation Registrars</h2>

                        <div className='w-[934px] h-[415px] mt-[50px] flex gap-2'>
                            <div className='flex flex-col w-[305px] h-[415px] bg-white rounded p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-card'>
                                <img src={icon1} alt='icon' className='w-[100px] h-[100px] mx-[30%] mt-4' />

                                <div className='mt-[40px]'>
                                    <h4 className='w-[306px] h-[48px] font-normal text-[18px] leading-[24px] text-customPurple'>
                                        Coronation<br />
                                        ShareholderLive
                                    </h4>
                                    <p className='w-[291px] h-[103px] font-normal text-[16px] leading-[24px] mt-2'>
                                        Easy and secure way to access a range of information about your shareholdings, valuation of your portfolio, indicative share prices and dividend information.
                                    </p>
                                </div>

                                <Link to="https://shareholderlive.coronationregistrars.com/" target='_blank' rel="noopener noreferrer">
                                    <button className='w-[44px] h-[20px] mt-10 text-customPurple'>Login</button>
                                </Link>
                            </div>
                            <div className='flex flex-col w-[305px] h-[415px] bg-white rounded p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-card'>
                                <img src={icon2} alt='icon' className='w-[100px] h-[100px] mx-[30%] mt-4' />

                                <div className='mt-[40px]'>
                                    <h4 className='w-[306px] h-[48px] font-normal text-[18px] leading-[24px] text-customPurple'>
                                        Coronation Registrars<br /> Self-Service Forms
                                    </h4>
                                    <p className='w-[234px] h-[96px] font-normal text-[16px] leading-[24px] mt-2'>
                                        Make a request to your favourite Registrar by filling out an easy-to-use web form. Our SLAs are sacrosanct.

                                    </p>
                                </div>

                                <Link to="https://coronationregistrars.cloud.processmaker.net/webentry/7/node_9?general_enquiries" target='_blank' rel="noopener noreferrer">
                                    <button className='w-[106px] h-[30px] mt-10 text-start text-customPurple'>Click here</button>
                                </Link>
                            </div>
                            <div className='flex flex-col w-[305px] h-[415px] bg-white rounded p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-card'>
                                <img src={icon3} alt='icon' className='w-[100px] h-[100px] mx-[30%] mt-4' />

                                <div className='mt-[40px]'>
                                    <h4 className='w-[306px] h-[48px] font-normal text-[18px] leading-[24px] text-customPurple'>
                                        Coronation<br />
                                        StockbrokerLive
                                    </h4>
                                    <p className='w-[291px] h-[103px] font-normal text-[16px] leading-[24px] mt-2'>
                                        Designed to provide stockbrokers with the convenience of processing share dematerialization, probate, and e-mandate from anywhere, without the need to visit our office.                                    </p>
                                </div>

                                <Link to="https://stockbrokerlive.coronation.ng/" target='_blank' rel="noopener noreferrer">
                                    <button className='w-[106px] h-[30px] mt-10 text-start text-customPurple'>Click here</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>*/}

            <section>
                <div className='flex w-full h-[659px] items-center justify-center'>
                    <div className='h-[699px] w-[1000px] flex flex-col items-center'>
                        <h2 className='w-[1110px] h-[44px] text-[40px] leading-[44px] font-light text-center mt-[60px]'>Coronation Insurance Ghana Ltd</h2>

                        <div className='w-[934px] h-[415px] mt-[50px] flex items-center justify-center gap-6'>
                            <div className='flex flex-col items-center justify-center w-[305px] h-[415px] bg-iconBg rounded p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-card'>
                                <img src={icon4} alt='icon' className='w-[80px] h-[80px]' />
                                <h4 className='flex items-center justify-center w-[306px] h-[48px] font-normal text-[24px] leading-[24px] mt-8'>
                                    File a Claim
                                </h4>
                                <Link to="https://claims-gh.coronation.ng/" target='_blank' rel="noopener noreferrer">
                                    <button className='w-[154px] h-[20px] mt-10 text-customPurple'>File a Claim</button>
                                </Link>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[305px] h-[415px] bg-iconBg rounded p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105 shadow-card'>
                                <img src={icon5} alt='icon' className='w-[80px] h-[80px]' />
                                <h4 className='flex items-center justify-center w-[231px] h-[48px] font-normal text-[24px] leading-[24px] mt-8'>
                                    Buy Insurance
                                </h4>
                                <Link to="https://ecoronation.com/index" target='_blank' rel="noopener noreferrer">
                                    <button className='w-[154px] h-[20px] mt-10 text-customPurple'>Buy Insurance</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div class="relative max-w-4xl mx-auto my-8">
                    <img src={serviceImage1} alt="Business meeting" class="w-[592px] h-[359px] object-cover" />
                    <div class="absolute top-1/2 left-[600px] transform -translate-x-1/4 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 class="text-gray-800 font-semibold mb-2">CORONATION SECURITIES</h2>
                        <p class="text-gray-600 mb-4">A full-service platform that allows clients take advantage of market opportunities & access structured products, bonds and alternative investments.</p>
                        <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Sign In <FaLongArrowAltRight /></button>
                        </Link>
                    </div>
                </div>
            </section>*/}

            {/*<section>
                <div class="flex flex-col items-center justify-center md:flex-row mt-[130px]">
                    <div class="p-10 h-[227px] w-[492px] rounded shadow-lastCard">
                        <h2 class="text-[#475569] font-bold text-xl mb-2">CORONATION ASSET MANAGEMENT</h2>
                        <p>Coronation Investment Management</p>
                        <p>Portal</p>
                        <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 text-customPurple'>Sign In <FaLongArrowAltRight /></button>
                        </Link>
                    </div>
                    <div class="md:w-1/2">
                        <img src={serviceImage2} alt="Investment Management" class="w-[592px] h-[359px] object-cover" />
                    </div>
                </div>
            </section>*/}


            <section className='mb-[120px]'>
                <div className='relative'>
                    <img src={bg} alt='bg' className='absolute w-[1120px] h-[177px]  top-0 left-[190px] object-cover' />
                    <div className='relative z-10 flex flex-row ml-[300px]'>
                        <div className='text-left mt-10'>
                            <h2 className='text-white w-[480px] h-[43px] text-[36px] leading-[43px] font-light mb-4'>We are affiliated to the Group</h2>
                            <p className='text-white opacity-50 w-[332px] h-[28px] text-[16px] leading-[19px] font-light'>We are affiliated to our mother company in Nigeria</p>
                        </div>
                        <Link className='flex items-center justify-center font-normal text-[13px] text-black mt-[70px] ml-[60px] w-[263px] h-[45px] bg-white' to="/contact">Connect with us</Link>
                    </div>
                </div>

            </section>

            <Banner />
            <Footer />

        </div>
    )
}

export default SelfService