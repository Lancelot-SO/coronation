import React from 'react'
import { Link } from 'react-router-dom'

import aboutbg from "../assets/aboutheadbg.png"
import aboutPrint from "../assets/aboutus.png"
import history from "../assets/history.png"
import bg from "../assets/bg.png"
import board from "../assets/director1.png"
import board1 from "../assets/director2.png"
import board2 from "../assets/director3.png"
import board3 from "../assets/director4.png"
import board4 from "../assets/director5.png"
import board5 from "../assets/director6.png"
import board6 from "../assets/director7.png"




import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


import client1 from "../assets/client1.png"
import Banner from '../components/Banner'
import FooterRed from '../components/FooterRed'
import { slider } from '../data'
import Slider from '../components/Slider'

const AboutRed = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }
    return (
        <div>
            <div>
                <img src={aboutbg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] left-[160px] w-[745px] h-[236px] bg-[rgba(0,0,0,0.8)] p-10'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>About Us</h2>
                    <p className='w-[686px] h-[128px] text-[18px] leading-[25px] text-white font-light'>We are a leading Ghanaian insurance company offering a diverse range of products and services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </p>
                </div>
                <div className='absolute top-[281px] left-[1000px] 3xl:ml-[230px]'>
                    <img src={aboutPrint} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? Let's talk</p>
                        <Link to="/contact">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-secondary ml-[20px] justify-center text-white rounded-[30px]'>Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-gradient-to-r from-red-600 to-orange-500 absolute bottom-0 3xl:top-[722px] large:top-[722px]'>
                </div>
            </div>

            <section>
                <div className='w-full h-[128px] bg-[#F1F5F9] flex items-center justify-center'>
                    <div className=' w-[1100px] h-[30px] flex items-center justify-evenly'>
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                        <img src={client1} alt='clients' />
                    </div>
                </div>
            </section>

            <section>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[1120px] h-[792px] flex flex-col'>
                        <h2 className='text-[40px] leading-[52px] font-light text-center mt-10 mb-4'>ABOUT CORONATION INSURANCE</h2>
                        <div className='w-[1111px] h-[426px]'>
                            <p className='font-light text-[16px] leading-[32px]'>
                                Coronation Insurance Ghana LTD is a leading insurance company licensed by the National Insurance Commission (NIC) in 2008 to underwrite general insurance businesses in Ghana. The Company commenced business in 2009 and is positioned to play a central role in the economic transformation of the country and serve as a catalyst for rapid economic development of the country.
                            </p>
                            <p className='font-light text-[16px] leading-[32px]'>
                                Coronation’s mission is to transform into a diversified financial services institution, delivering value in a sustainable manner to her customers and stakeholders while playing a lead role in the transformation of the industry. The Company is a wholly-owned subsidiary of Coronation Insurance Plc which operates in Nigeria.Through a diverse portfolio of products and a commitment to providing the best customer experience possible, Coronation Insurance Ghana Ltd has significantly enhanced its underwriting capacity placing it among the top insurance companies in Ghana by solvency and capital
                            </p>
                            <p className='font-light text-[16px] leading-[32px]'>
                                The Company is well placed as one of the top companies in the insurance industry with the best claims reserves and is committed to providing a one-stop shop solution for all insurance needs.
                            </p>
                        </div>
                        <h2 className='text-[40px] leading-[52px] font-light text-center mb-4'>What we do</h2>
                        <p className='w-[1111px] h-[32px] text-[24px] leading-[32px] font-light'>
                            Our time tested expertise in risk management and actuarial services has positioned us as one of Ghana's fastest growing insurance companies. We provide products and services that are designed to offer value beyond the ambit of traditional insurance services. Our commitment to service is based on a firm belief that total customer satisfaction and excellent customer experience are the hallmarks of real value. Get insured today with our array of products.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex items-center '>
                    <div className='w-[1300px] h-[552px] flex relative'>
                        <div className='relative flex items-center'>
                            <div className='bg-black w-[840px] h-[286px]'></div>
                            <img src={history} alt='history' className='absolute w-[560px] h-[552px] object-cover top-0 left-[24%]' />
                        </div>
                        <div className='mt-[120px] flex flex-col'>
                            <h2 className='h-[52px] text-[40px] leading-[52px] font-light flex items-end justify-end mb-4'>History</h2>
                            <p className='w-[430px] h-[256px] leading-[32px] text-[24px] ml-1 font-light'>
                                Having established a 30-year track record of achievements in banking across Africa and beyond, our founders created the business to help build a better financial future for Africa. Today, we are entrusted with over $1billion of clients assets and are recognized as Nigeria’s fastest growing investment manager.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-[120px] 3xl:ml-[50px]'>
                <div className='relative'>
                    <img src={bg} alt='bg' className='absolute w-[1120px] h-[177px]  top-0 left-[190px] object-cover' />
                    <div className='relative z-10 flex flex-row ml-[300px]'>
                        <div className='text-left mt-10'>
                            <h2 className='text-white w-[480px] h-[43px] text-[36px] leading-[43px] font-light mb-4'>We are affiliated to the Group</h2>
                            <p className='text-white opacity-50 w-[332px] h-[28px] text-[16px] leading-[19px] font-light'>We are affiliated to our mother company in Nigeria</p>
                        </div>
                        <Link to="https://coronation.ng/contact-us/" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center font-normal text-[13px] text-black mt-[70px] ml-[60px] rounded-[30px] w-[263px] h-[45px] bg-white'>Contact us</Link>
                    </div>
                </div>

            </section>

            <section>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='w-[409px] h-[52px] leading-[52px] text-[40px] font-light mb-4'>Board of Directors</h2>
                        <p className='w-[1123px] h-[64px] leading-[32px] text-[24px] font-light'>
                            Our board consists of highly accomplished financial services experts with a combined wealth of experience
                            spanning more than two centuries.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 place-items-center px-[150px] py-[40px]'>
                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 flex flex-col items-center justify-center'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mr. Frank Beecham</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>CEO & Founder</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Born in March 1952, Mr.
                                            Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board1} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaLinkedin size={24} />
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[18px] leading-[22px] font-normal'>Mr. Plusegun Ogbonnewo</p>
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
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                { /*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
                                    <FaTwitter size={24} />
                                    <FaFacebook size={24} />
                                    <FaInstagram size={24} />
                                </div>*/}
                                <div className='w-full h-[104px] text-white bg-black absolute bottom-0 left-0 z-0 flex flex-col transition-all duration-500 group-hover:h-[80%]'>
                                    <div className='w-[275px] h-[67px] mt-8 mb-4 flex flex-col pr-2 items-end justify-end'>
                                        <p className='text-[17px] leading-[22px] font-normal pr-4'>Miss. Peggy Onwu</p>
                                        <small className='text-[16px] leading-[19px] font-normal opacity-50'>Non-Executive Director</small>
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 flex items-center justify-center'>
                                        <p className='w-[268px] h-[233px] text-[18px] leading-[24px] font-normal'>
                                            Mrs. Vesta Nunoo has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden mt-[20px]'>
                                <img src={board3} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
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
                            <div className='w-[338px] h-[500px] relative overflow-hidden mt-[20px]'>
                                <img src={board4} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
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
                                            Mrs. Vesta Nunoo has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='group'>
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board5} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
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
                            <div className='w-[338px] h-[500px] relative overflow-hidden'>
                                <img src={board6} alt="board" className='w-[338px] h-[396px] object-cover transition-all duration-500 group-hover:w-[100px] group-hover:h-[100px] group-hover:translate-x-[250px] group-hover:-translate-y-[48px] group-hover:mt-12' />
                                <div className='absolute bg-secondary w-[250px] h-1 bottom-[103px] left-0 z-10 opacity-0 group-hover:opacity-100 group-hover:bottom-[80%] duration-500'>
                                </div>
                                {/*<div className='socials bg-secondary text-white w-[150px] h-[60px] absolute bottom-[70px] right-0 z-10 flex items-center justify-evenly transition-opacity duration-500 group-hover:opacity-0'>
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


                    </div>


                </div>
            </section>

            <section>
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
            </section>

            <Banner />
            <FooterRed />

        </div>

    )
}

export default AboutRed