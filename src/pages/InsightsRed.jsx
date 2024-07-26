import React from 'react'
import { Link } from 'react-router-dom'

import insightPay from "../assets/insight/insightPay.png"
import ProjectsRed from './ProjectsRed'
import Banner from '../components/Banner'
import FooterRed from '../components/FooterRed'

const InsightsRed = () => {
    return (
        <div>
            <div className='relative w-full h-[629px] bg-black'>
                <div className='absolute top-[343px] left-[160px] w-[560px] h-[263px]'>
                    <h2 className='mb-4 text-[35px] leading-[42px] text-white font-normal w-[452px] h-[84px]'>Our content provides research and
                        insights that enables you navigate
                        Africa&#39;s unique challenges.</h2>
                    {/* <div className='flex mt-8 gap-4'>
                        <Link>
                            <p className='flex items-center justify-center w-[170px] h-[52px] rounded-[34px] bg-transparent border border-white text-white'>Motor</p>
                        </Link>
                        <Link>
                            <p className='flex items-center justify-center w-[170px] h-[52px] rounded-[34px] bg-white'>Travel</p>
                        </Link>
                        <Link>
                            <p className='flex items-center justify-center w-[170px] h-[52px] rounded-[34px] bg-white'>Home</p>
                        </Link>
                    </div>*/}
                </div>
                <div className='absolute top-[181px] left-[1000px] 3xl:ml-[230px]'>
                    <img src={insightPay} alt='print' className='relative w-[300px] h-[400px]' />
                    <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services?<br /> Let's talk</p>
                    </div>
                    <Link to="/" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-white ml-[20px] justify-center text-black rounded-[30px]'>Contact Us</button>
                    </Link>
                </div>
                <div className='w-[660px] h-[7px] bg-gradient-to-r from-red-600 to-orange-500 absolute bottom-0'></div>
            </div>

            <section>
                <div className='w-full flex items-center justify-center mb-10'>
                    <div className='w-[1120px] h-[100px] flex flex-col'>
                        <h2 className='text-[40px] leading-[52px] font-light text-center mt-10 mb-4 tracking-[-1px]'>
                            READ ALL OUR ARTICLES
                        </h2>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div><ProjectsRed /></div>
                </div>
            </section>

            <Banner />
            <FooterRed />
        </div>
    )
}

export default InsightsRed