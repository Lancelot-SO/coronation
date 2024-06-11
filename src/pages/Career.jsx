import React from 'react'
import careerBg from "../assets/career/careerBg.png"
import careerPay from "../assets/career/careerPay.png"
import psInsurance from "../assets/psAssets/p&sInsurance.png"
import culture from "../assets/career/culture.png"
import { Link } from 'react-router-dom'
import CoreCareers from './CoreCareers'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Career = () => {
    return (
        <div>
            <div>
                <img src={careerBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] left-[160px] w-[745px] h-[197px] bg-[rgba(0,0,0,0.8)] p-4'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Careers at Coronation</h2>
                    <p className='w-[686px] h-[128px] text-[18px] leading-[25px] text-white font-light opacity-50'>
                        Taking you where you want to go. We are always on the lookout for best-in-class talent who enjoy a challenge. In exchange, we provide an environment that fosters the actualization of goals, and career fulfillment for our people while providing transformational solutions for Africa’s challenges.                    </p>
                </div>
                <div className='absolute top-[281px] left-[1000px]'>
                    <img src={careerPay} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? Let's talk</p>
                        <Link to="/contact">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-[#B580D1] absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className='h-[801px] w-full flex items-center'>
                    <div className='w-[615px] h-[648px]'>
                        <div className='mt-[60px] flex flex-col ml-[80px]'>
                            <h2 className='h-[156px] w-[394px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4'>
                                INVESTING IN YOU
                                (WE ARE INTERESTED
                                IN YOU)
                            </h2>
                            <p className='h-[32px] w-[338px] text-[24px] leading-[32px] font-light'>CORONATION ACCADAMICS</p>
                            <p className='w-[415px] h-[448px] leading-[32px] text-[24px] font-light'>
                                Coronation Academies seeks to enhance careers, attract top talent, and support key tenets of the firm’s mission and culture by delivering cutting-edge learning resources. Our vision is that the Coronation Academies will be a competitive differentiator to attract and retain the best talent. Whether your desire is in technology, management or strategy, wherever you are; your strengths and interests will influence your career and you have plenty of choice with us. Five Academies, one successful career!
                            </p>
                        </div>
                    </div>
                    <div className='bg-green-600 relative'>
                        <div className='bg-black w-[940px] h-[286px] '></div>
                        <img src={psInsurance} alt='history' className='absolute w-[560px] h-[552px] object-cover top-[-130px] right-[24%]' />
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex items-center '>
                    <div className='w-[1300px] h-[552px] flex relative'>
                        <div className='relative flex items-center'>
                            <div className='bg-black w-[840px] h-[286px]'></div>
                            <img src={culture} alt='history' className='absolute w-[560px] h-[552px] object-cover top-0 left-[24%]' />
                        </div>
                        <div className='mt-[120px] flex flex-col'>
                            <h2 className='h-[52px] text-[40px] leading-[52px] font-light flex items-end justify-end mb-4'>CULTURE</h2>
                            <p className='w-[430px] h-[256px] leading-[32px] text-[24px] ml-1 font-light'>
                                Our culture is what brings us together and enables our people and organization to thrive. We seek to hire people who believe in the pursuit of our standards, known as the Coronation Values & Attributes.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div><CoreCareers /></div>
                </div>
            </section>

            <Banner />
            <Footer />

        </div>
    )
}

export default Career