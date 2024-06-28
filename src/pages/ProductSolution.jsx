import React from 'react'
import psBg from "../assets/psAssets/p&sBg.png"
import psInAcc from "../assets/psAssets/p&sInAcc.png"
import insurance1 from "../assets/psAssets/insurance1.png"
import insurance2 from "../assets/psAssets/insurance2.png"
import insurance3 from "../assets/psAssets/insurance3.png"

import psInsurance from "../assets/psAssets/p&sInsurance.png"


import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const ProductSolution = () => {
  return (
    <div>
      <div className='relative'>
        <img src={psBg} alt='hero' className='w-full h-[629px] relative object-cover' />
        <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
        <div className='absolute top-[303px] left-[160px] w-[745px] h-[165px] bg-[rgba(0,0,0,0.8)] p-10'>
          <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Individual Insurance</h2>
          <p className='w-[686px] h-[128px] text-[18px] leading-[25px] text-white font-light'>Coronation Insurance Ghana Ltd offers comprehensive insurance for your car, home,
            business and life - with only one telephone call. Find out more & get a quote..
          </p>
        </div>
        <div className='absolute top-[181px] left-[1000px] 3xl:ml-[230px]'>
          <img src={psInAcc} alt='print' className='relative' />
          <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
          <div className='absolute top-[180px] items-center justify-center'>
            <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
            <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? <br />Let's talk</p>
          </div>
          <Link to="https://ecoronation.com/index" target='_blank' rel='noopener noreferrer' className='absolute top-[300px] items-center justify-center'>
            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>GET A QUOTE <FaFingerprint /></button>
          </Link>
        </div>
        <div className='w-[660px] h-[7px] bg-[#B580D1] absolute bottom-0'>
        </div>
      </div>

      <section>
        <div className='w-full flex items-center justify-center mb-10'>
          <div className='w-[1120px] h-[168px] flex flex-col'>
            <h2 className='text-[40px] leading-[52px] font-light text-center mt-10 mb-4 tracking-[-1px]'>LOOKING FOR THE RIGHT INSURANCE FOR YOU?
            </h2>
            <div className='w-[1111px] h-[63px]'>
              <p className='font-light text-[24px] leading-[32px]'>
                Life doesn't wait, neither should your insurance coverage. Coronation Insurance Ghana Ltd offers comprehensive plans for car, home, business, and life. One call, and Total protection. Get a quote now!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='w-full flex items-center justify-center my-[100px]'>
          <div className='w-[1121px] h-[272px] relative flex gap-4'>
            <Link to="/motor">
              <div className='relative group'>
                <img src={insurance1} alt='insure' className='object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale' />
                <div className='absolute top-0 left-0 w-full h-full bg-black cursor-pointer rounded-[25px] opacity-0 transition duration-300 ease-in-out group-hover:opacity-50'></div>
                <div className='absolute top-[40%] left-0 w-full h-full flex flex-col items-center text-white'>
                  <h3 className='w-[259px] h-[29px] font-normal text-[24px] leading-[29px] text-center'>Motor Insurance</h3>
                  <p className='w-[169px] h-[39px] font-normal text-[12px] leading-[19px] text-center'>Our car insurance plans are designed</p>
                </div>
              </div>
            </Link>

            <Link to="/travel">
              <div className='relative group'>
                <img src={insurance2} alt='insure' className='object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale' />
                <div className='absolute top-0 left-0 w-full h-full bg-black cursor-pointer rounded-[25px] opacity-0 transition duration-300 ease-in-out group-hover:opacity-50'></div>
                <div className='absolute top-[40%] left-0 w-full h-full flex flex-col items-center text-white'>
                  <h3 className='w-[259px] h-[29px] font-normal text-[24px] leading-[29px] text-center'>Travel Insurance</h3>
                  <p className='w-[169px] h-[39px] font-normal text-[12px] leading-[19px] text-center'>Our car insurance plans are designed</p>
                </div>
              </div>
            </Link>


            <Link to="/home_insurance">
              <div className='relative group'>
                <img src={insurance3} alt='insure' className='object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale' />
                <div className='absolute top-0 left-0 w-full h-full bg-black cursor-pointer rounded-[25px] opacity-0 transition duration-300 ease-in-out group-hover:opacity-50'></div>
                <div className='absolute top-[40%] left-0 w-full h-full flex flex-col items-center text-white'>
                  <h3 className='w-[259px] h-[29px] font-normal text-[24px] leading-[29px] text-center'>Home Insurance</h3>
                  <p className='w-[169px] h-[39px] font-normal text-[12px] leading-[19px] text-center'>Our car insurance plans are designed</p>
                </div>
              </div>
            </Link>


          </div>
        </div>
      </section>

      <section>
        <div className='bg-[#F1F5F9] w-full h-[794px] flex items-center justify-end'>
          <div className='w-[1350px] h-[552px] flex relative'>
            <div className='mt-[120px] flex flex-col 3xl:ml-[-30px] large:ml-[40px]'>
              <h2 className='h-[116px] w-[362] text-[35px] leading-[52px] font-light tracking-[-1px] mt-4'>Get INSURANCE FROM
                CORONATION TODAY.</h2>
              <p className='w-[415px] h-[96px] leading-[32px] text-[20px] font-light'>
                No one should have to wait more than 48 hours for their claims to be paid. That’s why we do it in less.
              </p>

              <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer' className='w-[179px] h-[50px] bg-customPurple text-white mt-4 flex items-center justify-center'>
                MAKE A CLAIM
              </Link>
            </div>
            <div className='relative flex items-center'>
              <div className='bg-black w-[840px] h-[286px]'></div>
              <img src={psInsurance} alt='history' className='absolute w-[560px] h-[552px] object-cover top-0 right-[24%]' />
            </div>

          </div>
        </div>
      </section>

      <Banner />
      <Footer />
    </div>
  )
}

export default ProductSolution