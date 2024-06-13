import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import motorRedBg from "../assets/motor/motorRedBg.png"
import motorRedPay from "../assets/motor/motorRedPay.png"
import motorCompRed from "../assets/motor/motorcompRed.png"
import motorCompRed1 from "../assets/motor/motorCompRed1.png"
import motorCompRed2 from "../assets/motor/motorCompRed2.png"
import motorComp3 from "../assets/motor/motorComp3.png"



import { FaFingerprint, FaLongArrowAltRight } from 'react-icons/fa'
import MotorModal from '../components/MotorModal'
import PartyModal from '../components/PartyModal'
import ThirdModal from '../components/ThirdModal'
import Banner from '../components/Banner'
import FooterRed from '../components/FooterRed'

const MotorInsuranceRed = () => {

    const [showCallModal, setShowCallModal] = useState(false);
    const [showPartyModal, setShowPartyModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);


    return (
        <div>
            <div className='relative'>
                <img src={motorRedBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute top-[303px] left-[160px] w-[745px] h-[202px] bg-[rgba(0,0,0,0.7)] p-6'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Motor Insurance.</h2>
                    <p className='w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light'>
                        This is an insurance product that pays for damages to your vehicle (private or commercial) as a result of theft, accident or fire. It also covers third-party injury and death, property damage and legal cost. It comes in 3 variants namely Third Party, Third Party, Fire and theft & Comprehensive		.                    </p>
                </div>
                <div className='absolute top-[181px] left-[1000px]'>
                    <img src={motorRedPay} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>
                            Want to know more about our services? Let's talk
                        </p>
                        <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-secondary ml-[20px] justify-center text-white rounded-[30px]'>Request & Pay <FaFingerprint /></button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-secondary absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className='w-full flex items-center justify-center mb-10'>
                    <div className='w-[1120px] h-[168px] flex flex-col'>
                        <h2 className='text-[40px] leading-[52px] font-light text-center mt-10 mb-4 tracking-[-1px]'>
                            CAR INSURANCE THAT IS CUSTOMIZED FOR YOU
                        </h2>
                        <div className='w-[1111px] h-[63px]'>
                            <p className='font-light text-[24px] leading-[32px]'>
                                Your car, your rules. We offer flexible plans that fit your unique needs and budget. No matter your ride, get the perfect coverage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] mt-[80px] flex relative'>
                            <div className='mt-[50px] flex flex-col mr-[30px]'>
                                <h2 className='h-[104px] w-[318px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4'>
                                    COMPREHENSIVE INSURANCE</h2>
                                <p className='w-[450px] h-[224px] leading-[32px] text-[20px] font-light'>
                                    This is an insurance product that pays for damages to your vehicle as a result of theft, accident or fire. It also covers legal liability to third-parties in the event of death, bodily injury, legal cost and property damage. With this policy, the cost of replacing or repairing your vehicle is covered no matter who is at fault.
                                </p>

                                <div className=''>
                                    <button type='button' onClick={() => setShowCallModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-secondary'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showCallModal && <MotorModal onClose={() => setShowCallModal(false)} />}

                                </div>
                            </div>
                            <div className='relative flex items-center'>
                                <div className='bg-black w-[871px] h-[286px]'></div>
                                <img src={motorCompRed} alt='history' className='absolute w-[600px] h-[391px] object-cover top-[80px] right-[20%]' />
                            </div>

                        </div>
                    </div>
                    <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex flex-col'>
                    <div className='w-[1300px] h-[552px] flex relative'>
                        <div className='relative flex items-center'>
                            <div className='bg-black w-[840px] h-[286px]'></div>
                            <img src={motorCompRed1} alt='history' className='absolute w-[600px] h-[391px] object-cover top-[80px] left-[16%]' />
                        </div>
                        <div className='mt-[70px] flex flex-col ml-4'>
                            <h2 className='w-[332px] h-[104px] text-[40px] leading-[52px] font-light tracking-[-1px] flex mb-4'>THIRD PARTY FIRE
                                & THEFT
                            </h2>
                            <p className='w-[430px] h-[384px] leading-[32px] text-[24px] ml-1 font-light'>
                                This is an insurance product which covers the policy holder against legal liability to third parties in the event of death, bodily injury and property damage. Beyond these, this policy also covers theft or damage by fire. Under Third party fire & theft the cost of repairs and/or outright replacement is also covered. The policy allows you to buy additional features such as personal accident and cover for riots along with the standard features of the product.
                            </p>

                            <div className=''>
                                <button type='button' onClick={() => setShowPartyModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-secondary'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showPartyModal && <PartyModal onClose={() => setShowPartyModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[100px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] flex relative'>
                            <div className='mt-[50px] flex flex-col mr-[30px]'>
                                <h2 className='h-[104px] w-[237px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4'>
                                    THIRD PARTY ONLY
                                </h2>
                                <p className='w-[430px] h-[280px] leading-[32px] text-[20px] font-light'>
                                    It is a simple insurance product which covers the policyholder against legal liability to third parties in the event of death, bodily injury, legal cost and property damage involving the insured vehicle. Third party insurance is a mandatory requirement for all vehicles on Ghanaian roads. It became mandatory through the Motor Vehicle (third party) Insurance Act of 1958.
                                </p>

                                <div className=''>
                                    <button type='button' onClick={() => setShowThirdModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-secondary'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showThirdModal && <ThirdModal onClose={() => setShowThirdModal(false)} />}

                                </div>
                            </div>
                            <div className='relative flex items-center'>
                                <div className='bg-black w-[871px] h-[286px]'></div>
                                <img src={motorCompRed2} alt='history' className='absolute w-[600px] h-[391px] object-cover top-[80px] right-[20%]' />
                            </div>

                        </div>
                    </div>
                    <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] flex items-center 3xl:h-[720px] justify-center h-screen'>
                    <div className='relative flex w-[1200px] h-[626px]'>
                        <div className='flex flex-col mt-[100px] z-10'>
                            <h2 className='h-[62px] w-[307px] text-[56px] leading-[62px] font-light mb-6'>
                                BENEFITS
                            </h2>
                            <p className='w-[358px] h-[108px] leading-[36px] text-[20px] font-normal mb-6'>
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>

                            <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='w-[179px] h-[50px] bg-secondary text-white mt-4 flex items-center justify-center'>
                                REQUEST & BUY
                            </Link>
                        </div>
                        <div className='relative ml-[150px]'>
                            <img src={motorComp3} alt='ban' className='w-full h-auto' />
                            <div className='absolute top-[160px] left-[-40px] w-full h-full flex gap-4 justify-center items-center p-4'>
                                <div className='w-[350px] h-[350px] bg-black text-white p-4 rounded'>
                                    <h4 className='w-[233px] h-[17px] font-bold text-[12px] leading-[17px] mb-6'>COMPREHENSIVE INSURANCE</h4>
                                    <ul className='w-[287px] h-[216px]'>
                                        <li class="w-full font-normal text-[14px] leading-[18px] text-white  mb-4">Free tracker for vehicles with  value GHS100,000</li>
                                        <li class="w-full font-normal text-[14px] leading-[14px] text-white mb-4">No-Claim discount at renewal</li>
                                        <li class="w-full font-normal text-[14px] leading-[20px] text-white mb-3">Reimbursement of legal fees if policy holder is
                                            prosecuted in court over an accident resulting in a valid claim
                                        </li>
                                        <li class="w-full font-normal text-[14px] leading-[20px] text-white  mb-4">Nil depreciation on total write off for a brand new vehicle of
                                            less than twelve months
                                        </li>
                                        <li class="w-full font-normal text-[14px] leading-[14px] text-white  mb-2">Waives your windscreen excess</li>
                                        <li class="w-full font-normal text-[14px] leading-[18px] text-white  mb-2">Foreign Use (Ecowas Countries) for additional premium</li>
                                        <li class="w-full font-normal text-[14px] leading-[14px] text-white ">Multi-car Discount</li>
                                    </ul>
                                </div>

                                <div className='w-[350px] h-[350px] bg-black text-white p-4 rounded'>
                                    <h4 className='w-[233px] h-[17px] font-bold text-[12px] leading-[17px] mb-6'>THIRD PARTY FIRE & THEFT</h4>
                                    <ul className='w-[287px] h-[216px]'>
                                        <li class="w-full font-normal text-[14px] leading-[18px] text-white  mb-6">Free tracker for vehicles with  value GHS100,000</li>
                                        <li class="w-full font-normal text-[14px] leading-[14px] text-white mb-6">No-Claim discount at renewal</li>
                                        <li class="w-full font-normal text-[14px] leading-[20px] text-white mb-6">Reimbursement of legal fees if policy holder is
                                            prosecuted in court over an accident resulting in a valid claim
                                        </li>
                                        <li class="w-full font-normal text-[14px] leading-[18px] text-white  mb-6">Foreign Use (Ecowas Countries) for additional premium</li>
                                        <li class="w-full font-normal text-[14px] leading-[14px] text-white ">Multi-car Discount</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Banner />
            <FooterRed />

        </div>
    )
}

export default MotorInsuranceRed