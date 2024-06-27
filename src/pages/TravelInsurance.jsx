import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import travelBg from "../assets/travel/travelBg.png"
import travelPay from "../assets/travel/travelPay.png"
// import travelComp from "../assets/travel/travelComp.png"
import travelComp1 from "../assets/travel/travelComp1.png"
import travelComp2 from "../assets/travel/travelComp2.png"
import motorComp3 from "../assets/motor/motorComp3.png"



import { FaFingerprint, FaLongArrowAltRight } from 'react-icons/fa'
// import PilgrimageModal from '../components/PilgrimageModal'
import StudentModal from '../components/StudentModal'
import IndividualModal from '../components/IndividualModal'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const TravelInsurance = () => {

    // const [showPilgrimageModal, setShowPilgrimageModal] = useState(false);
    const [showStudentModal, setshowStudentModal] = useState(false);
    const [showIndividualModal, setshowIndividualModal] = useState(false);




    return (
        <div>
            <div className='relative'>
                <img src={travelBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute top-[303px] left-[160px] w-[745px] h-[220px] bg-[rgba(0,0,0,0.7)] p-6'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Travel Insurance.</h2>
                    <p className='w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light'>
                        Travel insurance provides cover for risks associated with travelling out of your country of residence on a temporary basis. This cover includes  medical expenses as a result of accident or illness, cost of repatriation and financial compensation to your beneficiaries in the event of unfortunate case of death while under cover and many more.
                    </p>
                </div>
                <div className='absolute top-[181px] left-[1000px] 3xl:ml-[230px]'>
                    <img src={travelPay} alt='print' className='relative' />
                    <div className='absolute inset-0 bg-black opacity-30 rounded-[30px]'></div>
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>
                            Want to know more about our services? <br />Let's talk
                        </p>
                        <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>GET A QUOTE <FaFingerprint /></button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-[#B580D1] absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className='w-full flex items-center justify-center mb-10'>
                    <div className='w-[1120px] h-[168px] flex flex-col'>
                        <h2 className='text-[40px] leading-[52px] font-light text-center mt-10 mb-4 tracking-[-1px]'>
                            WHY CHOOSE CORONATION INSURANCE GHANA LTD?
                        </h2>
                        <div className='w-[1111px] h-[63px]'>
                            <p className='font-light text-[24px] leading-[32px]'>
                                No matter where you are in the world, you’ll enjoy the support and cover you need. There’s a reason we’re one of Africa’s most respected insurance companies.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section>
                <div className='bg-[#F1F5F9] w-full h-[694px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] mt-[80px] flex relative'>
                            <div className='mt-[100px] flex flex-col mr-[30px] large:ml-[20px]'>
                                <h2 className='h-[52px] w-[318px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4 mb-4'>
                                    PILGRIMAGE
                                </h2>
                                <p className='w-[440p3] h-[96px] leading-[32px] text-[20px] font-light'>
                                    Pilgrimage is a holy journey; let’s take care of your travel, and help you focus on what truly matters.
                                </p>
                                <div className=''>
                                    <button type='button' onClick={() => setShowPilgrimageModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showPilgrimageModal && <PilgrimageModal onClose={() => setShowPilgrimageModal(false)} />}

                                </div>
                            </div>
                            <div className='relative flex items-center'>
                                <div className='bg-black w-[871px] h-[286px]'></div>
                                <img src={travelComp} alt='history' className='absolute w-[600px] h-[460px] object-cover top-[40px] right-[20%]' />
                            </div>

                        </div>
                    </div>
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>*/}

            <section>
                <div className='bg-[#F1F5F9] w-full h-[694px] flex flex-col'>
                    <div className='w-[1300px] h-[552px] flex relative'>
                        <div className='relative flex items-center'>
                            <div className='bg-black w-[840px] h-[286px]'></div>
                            <img src={travelComp1} alt='history' className='absolute w-[600px] h-[460px] object-cover top-[40px] left-[16%]' />
                        </div>
                        <div className='mt-[170px] flex flex-col ml-4'>
                            <h2 className='w-[332px] h-[52px] text-[40px] leading-[52px] font-light tracking-[-1px] flex mb-4'>
                                STUDENT
                            </h2>
                            <p className='w-[430px] h-[100px] leading-[32px] text-[24px] ml-1 font-light'>
                                Protection for students that study outside their country or travel for school excursion.
                            </p>
                            <div className=''>
                                <button type='button' onClick={() => setshowStudentModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showStudentModal && <StudentModal onClose={() => setshowStudentModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[100px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[600px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] flex relative'>
                            <div className='mt-[130px] flex flex-col mr-[30px] large:ml-[20px]'>
                                <h2 className='h-[52px] w-[237px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4 mb-4'>
                                    INDIVIDUALS
                                </h2>
                                <p className='w-[430px] h-[120px] leading-[32px] text-[20px] font-light'>
                                    Traveling abroad? Solo or with people? Business or leisure, we’ve got something to make the journey better..                                </p>

                                <div className=''>
                                    <button type='button' onClick={() => setshowIndividualModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showIndividualModal && <IndividualModal onClose={() => setshowIndividualModal(false)} />}

                                </div>
                            </div>
                            <div className='relative flex items-center'>
                                <div className='bg-black w-[871px] h-[286px]'></div>
                                <img src={travelComp2} alt='history' className='absolute w-[600px] h-[460px] object-cover top-[40px] right-[20%]' />
                            </div>

                        </div>
                    </div>
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        GET A QUOTE
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] flex items-center 3xl:h-[720px] large:h-[600px]  justify-center h-screen'>
                    <div className='relative flex w-[1200px] h-[526px]'>
                        <div className='flex flex-col mt-[100px] z-10'>
                            <h2 className='h-[62px] w-[307px] text-[56px] leading-[62px] font-light mb-6'>
                                BENEFITS
                            </h2>
                            <p className='w-[358px] h-[108px] leading-[36px] text-[20px] font-normal mb-6'>
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>

                            <Link to="/" className='w-[179px] h-[50px] bg-customPurple text-white mt-4 flex items-center justify-center'>
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className='relative ml-[150px]'>
                            <img src={motorComp3} alt='ban' className='w-full h-auto' />
                            <div className='absolute top-[100px] left-[-40px] w-full h-full flex gap-4 justify-center items-center p-4'>
                                <div className='w-[597px] h-[221px] bg-black text-white p-4 rounded'>
                                    <ul className='h-[221px]'>
                                        <li class="w-full font-normal text-[10px] leading-[18px] text-white  mb-4">Payment of medical assistance for illness or accident sustained while travelling</li>
                                        <li class="w-full font-normal text-[10px] leading-[14px] text-white mb-4">Provides transport or repatriation for medical reasons for the insured and/or family members travelling with the insured</li>
                                        <li class="w-full font-normal text-[10px] leading-[20px] text-white mb-3">Provides transport or repatriation of mortal remains of insured</li>
                                        <li class="w-full font-normal text-[10px] leading-[20px] text-white  mb-4">Communication of urgent messages related to any event covered in the policy</li>
                                        <li class="w-full font-normal text-[10px] leading-[14px] text-white  mb-2">Payment of compensation for in-flight loss of checked-in luggage</li>
                                        <li class="w-full font-normal text-[10px] leading-[18px] text-white  mb-2">Payment of compensation for delay of flight and delay of luggage.</li>
                                        <li class="w-full font-normal text-[10px] leading-[14px] text-white ">Emergency return home following the death of a close family member</li>
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

export default TravelInsurance