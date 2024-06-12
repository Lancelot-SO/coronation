import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import engineerBg from "../assets/engineer/engineerBg.png"
import engineerPay from "../assets/engineer/engineerPay.png"
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

const EngineerInsurance = () => {

    const [showCallModal, setShowCallModal] = useState(false);
    const [showPartyModal, setShowPartyModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);


    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <img src={engineerBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute top-[303px] left-[160px] w-[745px] h-[202px] bg-[rgba(0,0,0,0.7)] p-4'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Engineering Insurance.</h2>
                    <p className='w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light opacity-50'>
                        This is a product that covers the risk of accidental, physical loss or damage in respect to contract works, during the execution of a civil project. It also covers legal liability falling on the insured's contractor as a result of bodily injury or property damage belonging to a third party. It also covers“All risks” of theft, loss or accidental damage to property insured subject to terms, exceptions and conditions of the policy..
                    </p>
                </div>
                <div className='absolute top-[181px] left-[1000px]'>
                    <img src={engineerPay} alt='print' className='relative' />
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
                <div className='bg-[#F1F5F9] w-full h-[800px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] mt-[80px] flex relative'>
                            <div className='mt-[50px] flex flex-col mr-[30px]'>
                                <h2 className='h-[104px] w-[175px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4'>
                                    PLANT ALL-RISK
                                </h2>
                                <div className='w-[450px] h-[424px] leading-[32px] text-[20px] font-light'>
                                    <ul>
                                        <li>• Indemnifies in the event of Short-circuit, disruption, electrical overpressure</li>
                                        <li>• Failure of operation of safety devices</li>
                                        <li>• Structural defects, material defects or defects of assembly.</li>
                                        <li>• Fortuitous working accidents such as vibration, maladjustment</li>
                                        <li>• Loosening of parts, abnormal stresses, fatigue, centrifugal force, excessive speed</li>
                                        <li>• Defective or accidental lack of lubrication, water, seizure or local overheating</li>
                                        <li>• Falling, impact, collision or similar occurrences</li>
                                        <li>• Obstruction or the entry of foreign </li>
                                    </ul>
                                </div>

                                <div className='mt-[30px]'>
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
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[100px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
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
                            <h2 className='w-[232px] h-[104px] text-[40px] leading-[52px] font-light tracking-[-1px] flex mb-4'>Contractors
                                All - Risk
                            </h2>
                            <div className='w-[450px] h-[424px] leading-[32px] text-[20px] font-light'>
                                <ul>
                                    <li>• This insurance provides an ‘all risk ‘cover for contract work. All perils are covered unless specifically excluded</li>
                                    <li>• This Policy can also extend the policy to cover:</li>
                                    <li>• Temporary buildings and contents on the worksite,</li>
                                    <li>• The policyholder’s existing property</li>
                                    <li>• Contractors’ plant and equipment brought onto the site</li>
                                    <li>• Clearance of debris,</li>
                                    <li>• Professional advisers’ fees</li>
                                    <li>• Off-site storage cover</li>
                                    <li>• Covers damages or loss of materials in transit</li>
                                    <li>• Covers loss or damage to properties in</li>

                                </ul>
                            </div>

                            <div className=''>
                                <button type='button' onClick={() => setShowPartyModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-secondary'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showPartyModal && <PartyModal onClose={() => setShowPartyModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[130px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
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
                                    Machinery
                                    Breakdown
                                </h2>
                                <p className='w-[430px] h-[280px] leading-[32px] text-[20px] font-light'>
                                    This policy is designed to indemnify the insured against damage to the machinery (already fixed and in use) caused by breakdown, principally from the sources within the machinery
                                    It covers unforeseen and sudden physical loss of or damage to the insured items, necessitating their repair or replacement.
                                    The breakdown could result to the machinery while Working or at rest Being dismantled, moved or re-erected for the purposes of cleaning, inspection, repair or installation in another position within the premises stated in the policy.
                                </p>

                                <div className='mt-[120px]'>
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
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[40px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
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
                            <h2 className='w-[132px] h-[104px] text-[40px] leading-[52px] font-light tracking-[-1px] flex mb-4'>Erection
                                All - Risk
                            </h2>
                            <div className='w-[450px] h-[254px] leading-[32px] text-[20px] font-light'>
                                <ul>
                                    <li>•	Indemnifies in the event of fire, lightning, explosion, aircraft damage, riot, strike, malicious act, flood, inundation, storm, cyclone and allied perils</li>
                                    <li>•	Indemnifies in the event of landslide, subsidence and rockslide</li>
                                    <li>•	Indemnifies in the event of burglary and/or theft of the subject matter</li>

                                </ul>
                            </div>

                            <div className=''>
                                <button type='button' onClick={() => setShowPartyModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-secondary'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showPartyModal && <PartyModal onClose={() => setShowPartyModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[60px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[794px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] flex relative'>
                            <div className='mt-[50px] flex flex-col mr-[30px]'>
                                <h2 className='h-[104px] w-[464px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4'>
                                    Electronic equipment
                                    Computer  all - risk

                                </h2>
                                <div className='w-[430px] h-[280px] leading-[32px] text-[20px] font-light'>
                                    <p>
                                        A Computer All Risk Policy seeks to cover electronic equipment risks ranging from all sudden and unforeseen physical losses, which are not subject of exclusions, listed in insurance conditions
                                    </p>
                                    <p>
                                        •	This insurance provides an ‘all risk ‘cover for electronic equipments. All perils are covered unless specifically excluded
                                        The electronic equipment may range from industrial to IT related equipment e.g. Servers, routers, UPS, Stabilizers etc.
                                    </p>
                                    <p>

                                        •	It provides cover for increase cost of working as result of loss.
                                    </p>
                                </div>

                                <div className='mt-[120px]'>
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
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[40px] items-center justify-center bg-secondary text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] flex items-center justify-center h-screen'>
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

export default EngineerInsurance