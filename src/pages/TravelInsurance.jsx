import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import travelBg from "../assets/travel/travelBg.png"
import travelPay from "../assets/travel/travelPay.png"
// import travelComp from "../assets/travel/travelComp.png"
import travelComp1 from "../assets/travel/travelComp1.png"
import travelComp2 from "../assets/travel/travelComp2.png"
import motorComp3 from "../assets/motor/motorComp3.png"



import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdWifiCalling3 } from "react-icons/md";

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
        <div className='overflow-hidden'>
            <div className='relative'>
                <img src={travelBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute md:top-[303px] top-[200px] md:left-[160px] left-4 w-[370px] h-[330px] md:w-[745px] md:h-[202px] bg-[rgba(0,0,0,0.7)] p-6'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Travel Insurance</h2>
                    <p className='md:w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light'>
                        Travel insurance provides cover for risks associated with travelling out of your country of residence on a temporary basis. This cover includes  medical expenses as a result of accident or illness, cost of repatriation and financial compensation to your beneficiaries in the event of unfortunate case of death while under cover and many more.                    </p>
                </div>
                <div className='absolute md:top-[181px] top-[250px] left-10 md:left-[1000px] 3xl:ml-[230px]'>
                    <img src={travelPay} alt='print' className='relative hidden md:flex' />
                    <div className='absolute inset-0 bg-black opacity-40 rounded-[30px]'></div>
                    <div className='absolute hidden md:flex md:flex-col top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>
                            Want to know more about our services? <br />Let's talk
                        </p>
                    </div>
                    <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer" className='absolute top-[300px] items-center justify-center'>
                        <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>GET A QUOTE <MdWifiCalling3 /></button>
                    </Link>
                </div>
                <div className='md:w-[660px] w-[300px] h-[7px] bg-[#B580D1] absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className='w-full flex items-center justify-center mb-14 md:mb-10'>
                    <div className='md:w-[1120px] md:h-[168px] flex flex-col'>
                        <h2 className='md:text-[40px] text-[20px] md:leading-[52px] md:font-light font-normal text-center mt-10 mb-4 tracking-[-1px]'>
                            WHY CHOOSE CORONATION INSURANCE GHANA LTD?
                        </h2>
                        <div className='md:w-[1111px] h-[63px]'>
                            <p className='font-light md:text-[24px] md:leading-[32px] p-4 md:p-0'>
                                No matter where you are in the world, you’ll enjoy the support and cover you need. There’s a reason we’re one of Africa’s most respected insurance companies.
                            </p>
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
                <div className="bg-[#F1F5F9] w-full md:h-[500px] flex flex-col pt-8 md:pt-0">
                    <div className="w-full md:w-[1300px] md:h-[552px] flex flex-col md:flex-row relative">
                        <div className="relative flex items-center">
                            <div className="hidden md:block w-full md:w-[840px] md:h-[286px] md:bg-black"></div>
                            <img
                                src={travelComp1}
                                alt="history"
                                className="w-full p-4 md:p-0 md:w-[600px] h-auto md:h-[391px] object-cover md:absolute top-0 md:top-[80px] md:left-[16%]"
                            />
                        </div>
                        <div className="mt-[20px] md:mt-[70px] flex flex-col ml-4 md:ml-11">
                            <h2 className="w-full md:w-[332px] h-auto md:h-[104px] text-[32px] md:text-[40px] leading-[42px] md:leading-[52px] md:font-light tracking-[-1px] flex mb-4">
                                STUDENT
                            </h2>
                            <p className="pr-4 md:pr-0 md:w-[430px] h-auto md:h-[154px] md:leading-[32px] md:text-[24px] ml-1 font-light">
                                Protection for students that study outside their country or travel for school excursion.                            </p>

                            <div className=''>
                                <button type='button' onClick={() => setshowStudentModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showStudentModal && <StudentModal onClose={() => setshowStudentModal(false)} />}
                            </div>
                        </div>
                    </div>

                    {/*<Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[100px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>*/}

                </div>
            </section>

            <section>
                <div className="bg-[#F1F5F9] w-full md:h-[694px] flex flex-col">
                    <div className="flex items-end justify-end">
                        <div className="lg:w-[1350px] w-full md:h-[552px] md:mt-[80px] flex flex-col-reverse md:flex-row relative">
                            <div className="md:mt-[50px] flex flex-col mr-[30px] md:ml-[20px] p-4 md:p-0">
                                <h2 className="md:h-[104px] md:w-[318px] md:text-[40px] text-[24px] md:leading-[52px] md:font-light tracking-[-1px] md:mt-4">
                                    INDIVIDUALS
                                </h2>
                                <p className="md:w-[450px] h-[100px] md:h-[130px] md:leading-[32px] md:text-[20px] font-light">
                                    Traveling abroad? Solo or with people? Business or leisure, we’ve got something to make the journey better..
                                </p>

                                <div className=''>
                                    <button type='button' onClick={() => setshowIndividualModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showIndividualModal && <IndividualModal onClose={() => setshowIndividualModal(false)} />}

                                </div>
                            </div>
                            <div className="relative flex items-center md:items-start">
                                <div className="hidden md:block bg-black w-[840px] h-[286px] md:mt-32"></div>
                                <img
                                    src={travelComp2}
                                    alt="history"
                                    className="w-full p-4 md:p-0 md:absolute md:w-[600px] h-auto md:h-[391px] object-cover md:top-[80px] md:right-[20%]"
                                />
                            </div>
                        </div>
                    </div>
                    {/*<Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        GET A QUOTE
                    </Link>*/}
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] flex md:items-center 3xl:h-[720px] large:h-[600px] md:justify-center h-[800px]'>
                    <div className='relative flex flex-col md:flex-row w-full md:w-[1200px] h-auto md:h-[526px] p-4'>
                        <div className='flex flex-col mt-[100px] z-10 items-center md:items-start'>
                            <h2 className='h-[62px] w-auto md:w-[307px] text-[32px] md:text-[56px] leading-[38px] md:leading-[62px] font-light mb-6 text-center md:text-left'>
                                BENEFITS
                            </h2>
                            <p className='w-full md:w-[358px] h-auto md:h-[108px] leading-[28px] md:leading-[36px] text-[16px] md:text-[20px] font-normal mb-6 text-center md:text-left'>
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>

                            {/*<Link to="/" className='w-full md:w-[179px] h-[50px] bg-customPurple text-white mt-4 flex items-center justify-center'>
          GET A QUOTE
      </Link>*/}
                        </div>
                        <div className='relative ml-0 md:ml-[150px] mt-6 md:mt-0 flex justify-center md:block'>
                            <img src={motorComp3} alt='ban' className='w-full h-auto' />
                            <div className='absolute md:top-[100px] top-[180px] left-0 md:left-[-40px] w-full h-full flex gap-4 justify-center items-center p-2 md:p-4'>
                                <div className='w-[90%] md:w-[597px] h-auto md:h-[221px] bg-black text-white p-2 md:p-4 rounded'>
                                    <ul className='h-full md:h-[221px]'>
                                        <li className="w-full font-normal text-[10px] leading-[18px] text-white mb-2 md:mb-4">Payment of medical assistance for illness or accident sustained while travelling</li>
                                        <li className="w-full font-normal text-[10px] leading-[14px] text-white mb-2 md:mb-4">Provides transport or repatriation for medical reasons for the insured and/or family members travelling with the insured</li>
                                        <li className="w-full font-normal text-[10px] leading-[20px] text-white mb-2 md:mb-3">Provides transport or repatriation of mortal remains of insured</li>
                                        <li className="w-full font-normal text-[10px] leading-[20px] text-white mb-2 md:mb-4">Communication of urgent messages related to any event covered in the policy</li>
                                        <li className="w-full font-normal text-[10px] leading-[14px] text-white mb-2">Payment of compensation for in-flight loss of checked-in luggage</li>
                                        <li className="w-full font-normal text-[10px] leading-[18px] text-white mb-2">Payment of compensation for delay of flight and delay of luggage.</li>
                                        <li className="w-full font-normal text-[10px] leading-[14px] text-white">Emergency return home following the death of a close family member</li>
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