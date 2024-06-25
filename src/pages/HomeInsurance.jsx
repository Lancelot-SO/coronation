import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import homeBg from "../assets/home/homeBg.png"
import homePay from "../assets/home/homePay.png"
import homeOwner from "../assets/home/homeOwner.png"
import householder from "../assets/home/householder.png"
import motorComp3 from "../assets/motor/motorComp3.png"



import { FaFingerprint, FaLongArrowAltRight } from 'react-icons/fa'
import HouseOwnerModal from '../components/HouseOwnerModal'
import HouseHolderModal from '../components/HouseHolderModal'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const HomeInsurance = () => {

    const [showHouseOwnerModal, setShowHouseOwnerModal] = useState(false);
    const [showHouseHolderModal, setshowHouseHolderModal] = useState(false);




    return (
        <div>
            <div className='relative'>
                <img src={homeBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className="absolute inset-0 w-full h-full bg-black opacity-30"></div>
                <div className='absolute top-[303px] left-[160px] w-[745px] h-[263px] bg-[rgba(0,0,0,0.7)] p-6'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>Home Insurance.</h2>
                    <p className='w-[686px] h-[99px] text-[19px] leading-[25px] text-white font-light'>
                        Ask yourself: do you want your home to be protected in the event of flood, fire, theft or other accidental damage? Or would you rather deal with the expense and the stress on your own? Add to that the fact that some mortgage providers might require you to have building cover. It’s more than a minor detail.  We’ll cover your house and belongings against life’s unexpected events. We offer building and contents insurance – plus a range of added extras to make sure you get the protection you need.
                    </p>
                </div>
                <div className='absolute top-[181px] left-[1000px] 3xl:ml-[230px]'>
                    <img src={homePay} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>
                            Want to know more about our services? Let's talk
                        </p>
                        <Link to="https://ecoronation.com/motor" target="_blank" rel="noopener noreferrer">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-[#B580D1] ml-[20px] justify-center text-white rounded-[30px]'>Request & Pay <FaFingerprint /></button>
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
                            HOME INSURANCE THAT SUITS YOUR NEEDS
                        </h2>
                        <div className='w-[1090px] h-[77px] ml-10'>
                            <p className='font-light text-[24px] leading-[32px]'>
                                Whether it’s theft, damage by extreme weather, fire, burst pipes and other losses, we have the right cover for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[694px] flex flex-col'>
                    <div className=' flex items-end justify-end'>
                        <div className='w-[1350px] h-[552px] mt-[80px] flex relative'>
                            <div className='mt-[100px] flex flex-col mr-[30px] large:ml-[20px]'>
                                <h2 className='h-[52px] w-[318px] text-[40px] leading-[52px] font-light tracking-[-1px] mt-4 mb-4'>
                                    HOMEOWNERS
                                </h2>
                                <p className='w-[430px] h-[240px] leading-[32px] text-[20px] font-light'>
                                    Home Owners is a comprehensive insurance that covers damage to a building occasioned by flood, fire and fallen trees as well as injury to visitors to the property. The product also covers the contents of a home such as furniture & fittings, jewelleries, refrigerator and so on.
                                </p>
                                <div className=''>
                                    <button type='button' onClick={() => setShowHouseOwnerModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                        <span>Insurance Features</span>
                                        <FaLongArrowAltRight className='mt-[5px]' />
                                    </button>
                                    {showHouseOwnerModal && <HouseOwnerModal onClose={() => setShowHouseOwnerModal(false)} />}

                                </div>
                            </div>
                            <div className='relative flex items-center'>
                                <div className='bg-black w-[871px] h-[286px]'></div>
                                <img src={homeOwner} alt='history' className='absolute w-[600px] h-[460px] object-cover top-[40px] right-[20%]' />
                            </div>

                        </div>
                    </div>
                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>

            <section>
                <div className='bg-[#F1F5F9] w-full h-[694px] flex flex-col'>
                    <div className='w-[1300px] h-[552px] flex relative'>
                        <div className='relative flex items-center'>
                            <div className='bg-black w-[840px] h-[286px]'></div>
                            <img src={householder} alt='history' className='absolute w-[600px] h-[460px] object-cover top-[40px] left-[16%]' />
                        </div>
                        <div className='mt-[170px] flex flex-col ml-4'>
                            <h2 className='w-[332px] h-[52px] text-[40px] leading-[52px] font-light tracking-[-1px] flex mb-4'>
                                HOUSEHOLDERS
                            </h2>
                            <p className='w-[430px] h-[184px] leading-[32px] text-[24px] ml-1 font-light'>
                                This policy is designed to meet the needs of the insured who do not own their home (and therefore do not require building insurance) but still desire protection for their belongings.                            </p>
                            <div className=''>
                                <button type='button' onClick={() => setshowHouseHolderModal(true)} className='flex items-center gap-2 w-[222px] h-[44px] hover:text-customPurple'>
                                    <span>Insurance Features</span>
                                    <FaLongArrowAltRight className='mt-[5px]' />
                                </button>
                                {showHouseHolderModal && <HouseHolderModal onClose={() => setshowHouseHolderModal(false)} />}
                            </div>
                        </div>
                    </div>

                    <Link to="https://ecoronation.com/" target="_blank" rel="noopener noreferrer" className='flex ml-[650px] mt-[100px] items-center justify-center bg-customPurple text-white w-[222px] h-[44px]'>
                        Request & Pay
                    </Link>
                </div>
            </section>


            <section>
                <div className='bg-[#F1F5F9] flex items-center 3xl:h-[720px] large:h-[600px] justify-center h-screen'>
                    <div className='relative flex w-[1200px] h-[526px]'>
                        <div className='flex flex-col mt-[100px] z-10'>
                            <h2 className='h-[62px] w-[307px] text-[56px] leading-[62px] font-light mb-6'>
                                BENEFITS
                            </h2>
                            <p className='w-[358px] h-[108px] leading-[36px] text-[20px] font-normal mb-6'>
                                The product has been designed with a combination of Enhanced term life which gives you an additional benefit.
                            </p>

                            <Link to="/" className='w-[179px] h-[50px] bg-customPurple text-white mt-4 flex items-center justify-center'>
                                REQUEST & BUY
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

export default HomeInsurance