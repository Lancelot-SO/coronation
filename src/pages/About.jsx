import React from 'react'
import { Link } from 'react-router-dom'

import aboutbg from "../assets/aboutheadbg.png"
import aboutPrint from "../assets/aboutus.png"
import history from "../assets/history.png"
import bg from "../assets/bg.png"
import board from "../assets/board1.png"
import board1 from "../assets/board2.png"
import board2 from "../assets/board3.png"
import board3 from "../assets/board4.png"
import board4 from "../assets/board5.png"
import board5 from "../assets/board6.png"
import board6 from "../assets/board7.png"

import offer from "../assets/about-offer.jpeg"
import offer1 from "../assets/about-offer1.jpeg"




// import Slider from '../components/Slider'

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


import Banner from '../components/Banner'
import Footer from '../components/Footer'
// import { slider } from '../data'

const About = () => {
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // }
    return (
        <div className='overflow-hidden'>
            <div>
                <img src={aboutbg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute lg:top-[403px] top-[30%] lg:left-[160px] left-4 lg:w-[745px] w-[350px] h-[350px] lg:h-[236px] bg-[rgba(0,0,0,0.8)] p-10'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>About Us</h2>
                    <p className='lg:w-[686px] w-[300px] h-[128px] text-[18px] leading-[25px] text-white font-light'>
                        We are a leading Ghanaian insurance company offering a diverse range of products and services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </p>
                </div>
                <div className='hidden lg:flex absolute top-[281px] left-[1000px] 3xl:ml-[230px]'>
                    <img src={aboutPrint} alt='print' className='relative' />
                    <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? <br />Let's talk</p>
                    </div>
                    <Link to="/contact" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Contact Us</button>
                    </Link>
                </div>
                <div className='lg:w-[660px] w-[300px] h-[7px] bg-[#B580D1] absolute bottom-[18px] 3xl:top-[722px] large:top-[722px]'>
                </div>
            </div>

            {/* <section>
                <div className='w-full h-[128px] bg-[#F1F5F9] flex items-center justify-center'>
                    <div className=' w-[1100px] h-[30px] flex items-center justify-evenly'>
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />

                    </div>
                </div>
            </section>*/}

            <section>
                <div className='w-full flex items-center justify-center bg-slate-100'>
                    <div className='w-[1120px] lg:h-[1300px] flex flex-col'>
                        <h2 className='lg:text-[40px] text-[24px] lg:leading-[52px] lg:font-light font-normal text-center mt-10 mb-4'>ABOUT CORONATION INSURANCE GHANA LTD</h2>
                        <div className='lg:w-[1111px] pb-2 lg:pb-0 px-2 lg:px-0 lg:text-[22px] font-light mb-10'>
                            Having established a 30-year record of achievements in financial services across Africa and
                            beyond, our founders established a Pan-African platform focused on building a better financial
                            future for Africa. We understand the need to protect the interests of individuals and businesses,
                            therefore we ventured into insurance, to provide risk advisory, risk management and risk transfer
                            solutions for all.
                        </div>
                        <div className="mb-28 flex lg:flex-row flex-col lg:h-[400px]">
                            <div className="flex-none lg:w-1/3 px-4 lg:px-0">
                                <img src={offer} alt="offer" className="h-full object-cover shadow-md" />
                            </div>
                            <div className="flex-grow flex flex-col justify-center lg:px-8 px-4">
                                <h2 className="text-[40px] leading-[52px] lg:font-light font-normal lg:text-start text-center lg:mb-4 mb-2 mt-4 lg:mt-0">What we do</h2>
                                <p className="lg:text-[22px] lg:leading-[32px] font-light">
                                    We are an insurance company in Ghana offering a variety of coverage options for individuals and businesses. We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind. Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily.
                                </p>
                            </div>
                        </div>

                        <div className="mb-28 flex lg:flex-row flex-col-reverse lg:h-[400px]">
                            <div className="flex-1 flex flex-col justify-center lg:px-8 px-4">
                                <h2 className='text-[40px] leading-[52px] lg:font-light font-normal lg:text-start text-center lg:mb-4 mb-2 mt-4'>Our Offering</h2>
                                <p className='lg:text-[22px] lg:leading-[32px] font-light'>
                                    We offer a range of financial solutions to professionals, institutions, and individuals in Ghana.
                                    We design our policies to be affordable and comprehensive, protecting your assets and providing peace of mind.
                                    Our local expertise and use of technology make it convenient to get the insurance you need and manage your policies easily. Our aim is to help more and more people attain financial well-being and prosperity.
                                </p>
                            </div>
                            <div className="flex-none lg:w-1/3 px-4 lg:px-0">
                                <img src={offer1} alt="offer" className="h-full object-cover" />
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F1F5F9] w-full min-h-screen flex flex-col items-center md:flex-row md:py-0">
                    <div className="w-full max-w-[1300px] h-auto flex flex-col md:flex-row md:gap-4">
                        <div className="relative flex items-center justify-center w-full md:w-auto">
                            <div className="hidden md:block bg-black w-[800px] h-[286px]"></div>
                            <img src={history} alt="history" className="w-full h-auto md:w-[560px] md:h-[552px] object-cover md:absolute md:top--10 md:left-[24%] px-4 md:px-0" />
                        </div>
                        <div className="flex flex-col lg:items-start mt-6 md:mt-0 md:ml-4">
                            <h2 className="text-[32px] text-center md:text-[40px] leading-[40px] md:leading-[52px] lg:font-light font-normal mb-4">History</h2>
                            <p className="w-full md:w-[500px] flex lg:items-center items-start md:leading-[32px] md:text-[24px] font-light px-4 lg:px-0">
                                Having established a 30-year record of achievements in financial services across Africa and
                                beyond, our founders established a Pan-African platform focused on building a better financial
                                future for Africa. We understand the need to protect the interests of individuals and businesses,
                                therefore we ventured into insurance, to provide risk advisory, risk management and risk transfer
                                solutions for all.
                            </p>
                        </div>
                    </div>
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

            <section>
                <div>
                    <div className='flex flex-col lg:items-center justify-center'>
                        <h2 className='md:w-[409px] h-[52px] leading-[52px] text-[40px] md:font-light font-normal mb-4 ml-8 md:ml-0'>Board of Directors</h2>
                        <p className='lg:w-[1123px] h-[64px] md:leading-[32px] lg:text-[24px] font-light px-4'>
                            Our board consists of highly accomplished financial services experts with a combined wealth of experience
                            spanning over a century.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-3 place-items-center lg:px-[150px] py-[40px] gap-4 lg:gap-0'>
                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 flex flex-col items-center justify-center'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mr. Frank Beecham</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Board Chairman</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr.
                                            Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board1} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaLinkedin size={24} />
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mr. Olusegun Ogbonnewo</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non-Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mr. Olusegun Ogbonnewo is a Director in TenGen Holdings Limited with over 27 years’ professional experience in the financial service industry cutting across banking, human capital development, operations, payment systems and financial technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board2} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[17px] leading-[22px] font-normal pr-4'>Mrs. Peggy Onwu</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non-Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mrs. Peggy Onwu has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden mt-[20px]'>
                                <img src={board3} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[17px] leading-[22px] font-normal'>Mr. Richard Osei - Anim</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non-Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mr. Richard Osei-Anim is an Associate and Chartered Insurance Practitioner of the Associate Chartered Insurance Institute of London, UK. He has over 15 years’ experience in insurance and risk management and has worked in the past with Burrows Keith Group, CGU Insurance and broking giants like Aon and Miller Insurance Group.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] mt-4 relative overflow-hidden'>
                                <img src={board6} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 flex flex-col items-center justify-center'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mr. Olamide Olajolo</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non -  Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mr. Olamide Olajolo has about twenty-two (22) years’ experience in the Insurance industry cutting across insurance underwriting and sales. Mr. Olamide Olajolo was formerly the Managing Director/Chief Executive Officer of the Nigeria Liability Insurance Pool and the Vice President Business Development at Heirs Insurance Limited/Heirs Assurance Limited.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board5} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 flex flex-col items-center justify-center'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mrs. Vesta Nunoo</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non -  Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mrs. Vesta Nunoo has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden mt-[20px]'>
                                <img src={board4} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-customPurple w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-customPurple text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[17px] leading-[22px] font-normal'>Dr. Yaw Adom - Boateng</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Managing Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Dr. Yaw Adom-Boateng is a Fellow of the Chartered Insurance Institute of Ghana (FCIIG) and the Chartered Insurance Institute of UK (FCII-UK). He is a seasoned insurance professional with over 22 years of experience in the insurance industry.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </section>

            {/*<section>
                <div className='flex items-center justify-center'>
                    <div className='w-[1123px] h-[480px] mt-[100px] mb-[50px]'>
                        <Carousel
                            swipeable
                            draggable
                            showDots
                            responsive={responsive}
                            ssr // means to render carousel on server-side.
                            containerClass='carousel-container'
                            itemClass='carousel-item-padding-40-px'
                        >
                            {slider.map((item) => (
                                <div key={item.id} className='flex items-center justify-center h-full'>
                                    <Slider item={item} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>*/}

            <Banner />
            <Footer />

        </div>

    )
}

export default About