import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import motorBg from "../assets/motor/motorBg.png"
import motorPay from "../assets/motor/motorPay.png"
import motorComp from "../assets/motor/motorComp.png"
import motorComp1 from "../assets/motor/motorComp1.png"
import motorComp2 from "../assets/motor/motorComp2.png"
import motorComp3 from "../assets/motor/motorComp3.png"



import { FaFingerprint, FaLongArrowAltRight } from 'react-icons/fa'
import MotorModal from '../components/MotorModal'
import PartyModal from '../components/PartyModal'
import ThirdModal from '../components/ThirdModal'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const MotorInsurance = () => {

    const [showCallModal, setShowCallModal] = useState(false);
    const [showPartyModal, setShowPartyModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);


    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <img src={motorBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute md:top-[303px] top-[200px] md:left-[160px] left-4 w-[370px] h-[310px] md:w-[745px] md:h-[202px] bg-[rgba(0,0,0,0.7)] p-6'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Motor Insurance</h2>
                    <p className='md:w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light'>
                        This is an insurance product that pays for damages to your vehicle (private or commercial) as a result of theft, accident or fire. It also covers third-party injury and death, property damage and legal cost. It comes in 3 variants namely Third Party, Third Party, Fire and theft & Comprehensive.
                    </p>
                </div>
                <div className='absolute md:top-[181px] top-[230px] left-10 md:left-[1000px] 3xl:ml-[230px]'>
                    <img src={motorPay} alt='print' className='relative hidden md:flex' />
                    <div className='absolute inset-0 bg-black opacity-40 rounded-[30px]'></div>
                    <div className='absolute hidden md:flex md:flex-col top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>
                            Want to purchase any of our products? <br />Get a quote below.
                        </p>
                    </div>
                    <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>GET A QUOTE <FaFingerprint /></button>
                    </Link>
                </div>
                <div className='md:w-[660px] w-[300px] h-[7px] bg-[#B580D1] absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className='w-full flex items-center justify-center mb-14 md:mb-10'>
                    <div className='md:w-[1120px] md:h-[168px] flex flex-col'>
                        <h2 className='md:text-[40px] text-[20px] md:leading-[52px] md:font-light font-normal text-center mt-10 mb-4 tracking-[-1px]'>
                            CAR INSURANCE THAT IS CUSTOMIZED FOR YOU
                        </h2>
                        <div className='md:w-[1111px] h-[63px]'>
                            <p className='font-light md:text-[24px] md:leading-[32px] p-4 md:p-0'>
                                Your car is as unique as you. This is why our plans are flexible and designed to fit your
                                specific needs. No matter the size of your car (or pocket), we’ve got something for you.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F1F5F9] w-full md:h-[694px] flex flex-col">
                    <div className="flex items-end justify-end">
                        <div className="lg:w-[1350px] w-full md:h-[552px] md:mt-[80px] flex flex-col-reverse md:flex-row relative">
                            <div className="md:mt-[50px] flex flex-col mr-[30px] md:ml-[20px] p-4 md:p-0">
                                <h2 className="md:h-[104px] md:w-[318px] md:text-[40px] text-[24px] md:leading-[52px] md:font-light tracking-[-1px] md:mt-4">
                                    COMPREHENSIVE INSURANCE
                                </h2>
                                <p className="md:w-[450px] h-[224px] md:leading-[32px] md:text-[20px] font-light">
                                    This is an insurance product that pays for damages to your vehicle as a result of theft, accident or fire. It also covers legal liability to third-parties in the event of death, bodily injury, legal cost and property damage. With this policy, the cost of replacing or repairing your vehicle is covered.
                                </p>

                                <div className="">
                                    <button
                                        type="button"
                                        onClick={() => setShowCallModal(true)}
                                        className="flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple"
                                    >
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className="mt-[5px]" />
                                    </button>
                                    {showCallModal && <MotorModal onClose={() => setShowCallModal(false)} />}
                                </div>
                            </div>
                            <div className="relative flex items-center md:items-start">
                                <div className="hidden md:block bg-black w-[871px] h-[286px] md:mt-32"></div>
                                <img
                                    src={motorComp}
                                    alt="history"
                                    className="w-full p-4 md:p-0 md:absolute md:w-[600px] h-auto md:h-[391px] object-cover md:top-[80px] md:right-[20%]"
                                />
                            </div>
                        </div>
                    </div>
                    <Link
                        to="https://ecoronation.com/motor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex md:ml-[650px] ml-20 items-center justify-center bg-customPurple text-white w-[222px] h-[44px]"
                    >
                        GET A QUOTE
                    </Link>
                </div>


            </section>

            <section>
                <div className="bg-[#F1F5F9] w-full md:h-[694px] flex flex-col pt-8 md:pt-0">
                    <div className="w-full md:w-[1300px] md:h-[552px] flex flex-col md:flex-row relative">
                        <div className="relative flex items-center">
                            <div className="hidden md:block w-full md:w-[840px] md:h-[286px] md:bg-black"></div>
                            <img
                                src={motorComp1}
                                alt="history"
                                className="w-full md:w-[600px] h-auto md:h-[391px] object-cover md:absolute top-0 md:top-[80px] md:left-[16%]"
                            />
                        </div>
                        <div className="mt-[20px] md:mt-[70px] flex flex-col ml-4 md:ml-11">
                            <h2 className="w-full md:w-[332px] h-auto md:h-[104px] text-[32px] md:text-[40px] leading-[42px] md:leading-[52px] md:font-light tracking-[-1px] flex mb-4">
                                THIRD PARTY FIRE & THEFT
                            </h2>
                            <p className="w-full md:w-[430px] h-auto md:h-[384px] md:leading-[32px] md:text-[24px] ml-1 font-light">
                                This is an insurance product which covers the policy holder against legal liability to third parties in the event of death, bodily injury and property damage. Beyond these, this policy also covers theft or damage by fire. Under Third party fire & theft the cost of repairs and/or outright replacement is also covered. The policy allows you to buy additional features such as personal accident and cover for riots along with the standard features of the product.
                            </p>

                            <div className="">
                                <button
                                    type="button"
                                    onClick={() => setShowPartyModal(true)}
                                    className="flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple"
                                >
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className="mt-[5px]" />
                                </button>
                                {showPartyModal && <PartyModal onClose={() => setShowPartyModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link
                        to="https://ecoronation.com/motor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex md:ml-[650px] ml-20 mt-[20px] md:mt-[100px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]"
                    >
                        GET A QUOTE
                    </Link>
                </div>
            </section>

            <section>
                <div className="bg-[#F1F5F9] w-full md:h-[694px] flex flex-col">
                    <div className="flex items-end justify-end">
                        <div className="lg:w-[1350px] w-full md:h-[552px] md:mt-[80px] flex flex-col-reverse md:flex-row relative">
                            <div className="md:mt-[50px] flex flex-col mr-[30px] md:ml-[20px] p-4 md:p-0">
                                <h2 className="md:h-[104px] md:w-[318px] md:text-[40px] text-[24px] md:leading-[52px] md:font-light tracking-[-1px] md:mt-4">
                                    THIRD PARTY ONLY
                                </h2>
                                <p className="md:w-[450px] h-[224px] md:h-[300px] md:leading-[32px] md:text-[20px] font-light">
                                    It is a simple insurance product which covers the policyholder against legal liability to third parties in the event of death, bodily injury, legal cost and property damage involving the insured vehicle. Third party insurance is a mandatory requirement for all vehicles on Ghanaian roads. It became mandatory through the Motor Vehicle (third party) Insurance Act of 1958.                                </p>

                                <div className=''>
                                    <button type='button' onClick={() => setShowThirdModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showThirdModal && <ThirdModal onClose={() => setShowThirdModal(false)} />}

                                </div>
                            </div>
                            <div className="relative flex items-center md:items-start">
                                <div className="hidden md:block bg-black w-[871px] h-[286px] md:mt-32"></div>
                                <img
                                    src={motorComp2}
                                    alt="history"
                                    className="w-full p-4 md:p-0 md:absolute md:w-[600px] h-auto md:h-[391px] object-cover md:top-[80px] md:right-[20%]"
                                />
                            </div>
                        </div>
                    </div>
                    <Link
                        to="https://ecoronation.com/motor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex md:ml-[650px] ml-20 items-center justify-center bg-customPurple text-white w-[222px] h-[44px]"
                    >
                        GET A QUOTE
                    </Link>
                </div>
            </section>

            <section>
                <div className="bg-[#F1F5F9] flex items-center justify-center h-full 3xl:h-[720px] large:h-[680px]">
                    <div className="relative flex flex-col md:flex-row w-full md:w-[1200px] h-[1000px] md:h-[626px]">
                        <div className="flex flex-col mt-[100px] z-10 items-center md:items-start">
                            <h2 className="text-[56px] leading-[62px] font-light mb-6 h-[62px] w-[307px]">
                                BENEFITS
                            </h2>
                            <p className="w-[358px] h-[108px] leading-[36px] text-[20px] font-normal mb-6">
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>
                            <Link
                                to="https://ecoronation.com/motor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[179px] h-[50px] bg-customPurple text-white mt-4 flex items-center justify-center"
                            >
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="relative mt-8 md:mt-0 md:ml-[150px] flex justify-center md:block">
                            <img src={motorComp3} alt="ban" className="w-full h-auto" />
                            <div className="absolute md:top-[160px] top-[250px] md:left-[-40px] w-full h-full flex flex-col md:flex-row gap-4 justify-center items-center p-4">
                                <div className="w-full md:w-[350px] h-auto md:h-[350px] bg-black text-white p-4 rounded">
                                    <h4 className="font-bold text-[12px] leading-[17px] mb-6">
                                        COMPREHENSIVE INSURANCE
                                    </h4>
                                    <ul>
                                        <li className="font-normal text-[14px] leading-[18px] text-white mb-4">
                                            • Free tracker for vehicles with value - GHS100,000
                                        </li>
                                        <li className="font-normal text-[14px] leading-[14px] text-white mb-4">
                                            • No-Claim discount at renewal
                                        </li>
                                        <li className="font-normal text-[14px] leading-[20px] text-white mb-3">
                                            • Reimbursement of legal fees if policy holder is prosecuted in court over an accident resulting in a valid claim
                                        </li>
                                        <li className="font-normal text-[14px] leading-[14px] text-white mb-2">
                                            • Waives your windscreen excess
                                        </li>
                                        <li className="font-normal text-[14px] leading-[14px] text-white">
                                            • Multi-car Discount
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full md:w-[350px] h-auto md:h-[350px] bg-black text-white p-4 rounded">
                                    <h4 className="font-bold text-[12px] leading-[17px] mb-6">
                                        THIRD PARTY FIRE & THEFT
                                    </h4>
                                    <ul>
                                        <li className="font-normal text-[14px] leading-[14px] text-white mb-4">
                                            • No-Claim discount at renewal
                                        </li>
                                        <li className="font-normal text-[14px] leading-[14px] text-white">
                                            • Multi-car Discount
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Banner />
            <Footer />

        </div>
    )
}

export default MotorInsurance