import React from 'react'

import brochureUrl from "../assets/insight/Staying_Ahead_of_The_Storm.pdf"

import insightdetailBg from "../assets/insight/insightdetail1.png"
import brochureImg from "../assets/insight/brochureImg.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FirstInsightDetail = () => {


    return (
        <div>
            <div>
                <img src={insightdetailBg} alt='bg' className='w-full h-[773px]' />
            </div>

            <section>
                <div className='flex items-center justify-center'>
                    <div className=' w-[1123px] h-[1377px] mt-[30px] flex gap-4'>
                        <div>
                            <div className=' w-[664px] h-[303px]'>
                                <h2 className='w-[496px] h-[36px] font-light text-[30px] leading-[36px] text-[#1C1F35]'>STAYING AHEAD OF THE STORM</h2>
                                <p className='w-[664px]  font-normal h-[170px] leading-[24px] text-[16px] text-[#666C89]'>
                                    In today's age of global warming, characterised by a rise in the
                                    frequency and severity of floods and fires, the significance of taking
                                    preventive measures cannot be overstated. Ghana, in particular,
                                    experiences periodic flooding attributed to various factors such as
                                    heavy rainfall, inadequate drainage systems, and human activities like
                                    improper waste management and urbanisation. Urban areas of the
                                    country are particularly susceptible to frequent flooding during
                                    moderate to heavy rainfalls.
                                </p>
                                <p className='w-[664px]  font-normal leading-[24px] h-[120px] text-[16px] text-[#666C89]'>
                                    The consequences of flooding can be severe, including loss of lives,
                                    displacement of people, property damage, and more. Therefore, it is
                                    crucial to identify strategies that can mitigate these impacts. As we
                                    approach the rainy season, it is advisable to take immediate steps to
                                    avoid, prevent, or minimize the adverse effects and costs of flooding.
                                </p>
                            </div>
                            <div className='bg-black mt-8 w-[664px] h-[172px] flex items-center justify-center'>
                                <p className='w-[554px] h-[72px] font-normal text-[20px] text-white italic'>“With a same-day/24-hour claims payout policy on
                                    all household and business covers, Coronation
                                    Insurance ensures prompt assistance in times of
                                    need through its dedicated account managers.”</p>
                            </div>

                            <div className='w-[664px] mt-4'>
                                <p className='h-[95px] text-[16px] leading-[24px] font-normal text-[#666C89]'>
                                    We have partnered with highly regarded global institutions to build Nigeria's first fully integrated technology-enabled investment platform, thus allowing us to become one of the region's fastest-growing fund managers.

                                </p>

                                <a href={brochureUrl} download className='text-[#08ABDE]'>
                                    Click here to download Brochure
                                </a>
                            </div>

                            <div className='mt-8 w-[664px] flex flex-col'>
                                <img src={brochureImg} alt='brochure' />
                                <p className='text-center text-[#666C89] mt-2'>coronation</p>
                            </div>

                            <p className='w-[664px] h-[168px] font-normal text-[16px] leading-[24px] mt-8'>
                                Although developing a strategy for flood or fire may seem complex,
                                an insurance product will simplify the process significantly. It is
                                advisable to consult with risk experts to tailor insurance coverage to
                                specific risks and working with a reputable and qualified insurer may
                                just be the icing on the cake.Even more important, is getting a claim
                                paid out when a loss occurs. Coronation Insurance stands out in
                                Ghana for its effective, comprehensive, and speedy claims payment.
                            </p>


                            <div className='flex w-[664px] h-[60px] items-center justify-between mt-[50px] border border-y-2 border-x-0'>
                                <div>
                                    <ul className="flex gap-4 text-black items-center">
                                        <li>
                                            <Link to="https://instagram.com" className="">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://facebook.com">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://twitter.com">
                                                <FaTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://linkedIn.com">
                                                <FaLinkedinIn />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>Category : insurance</div>
                            </div>
                        </div>
                        <div>
                            <div className='min-w-[440px] min-h-[304px] bg-[#F5F5F5]'>
                                <h3 className=''>Here are some key aspects of home insurance:</h3>
                                <p className='mt-2 leading-10'>
                                    1. Protects the structure of your home, including its foundation,
                                    walls, roof, and attached structures like garages or decks<br />
                                    2. Covers your personal belongings, such as furniture, appliances,
                                    electronics, clothing, and valuables against damage<br />
                                    3. Provides 3rd party liability cover for events that occur within
                                    your premises.<br />
                                    4. Provides compensation for the cost of alternative
                                    accommodation in the event that flood, fire, or other incidents
                                    require you to move out of your home during repairs<br />
                                    5. Provides personal accident cover
                                </p>
                            </div>
                            <div className='min-w-[440px] min-h-[304px] mt-10 bg-[#F5F5F5]'>
                                <h3 className=''>Regarding fire risks, it is crucial to adhere to some of the tips below:</h3>
                                <p className='mt-2 leading-10'>
                                    1. Address faulty electrical wiring, which remains a significant cause of
                                    fires in Ghana.<br />
                                    2. Employ professionally qualified electricians who are knowledgeable
                                    about building and wiring requirements.<br />
                                    3. Ensure all electrical repairs adhere to statutory building and wiring
                                    codes.<br />
                                    4. Report Illegal electricity connections to the relevant authorities, as
                                    they pose a danger to the entire neighborhood.<br />
                                    5. Avoid accumulating flammable materials on the premises.
                                    Flammable goods should be stored in safe and fire-protected
                                    buildings or storage areas.<br />
                                    6. Practise responsible personal behaviour, such as switching off
                                    electrical equipment when not in use and unplugging them.<br />
                                    7. Proper handling of gas, including turning it off when not in use and
                                    storing gas cylinders in purpose-built protective structures or using
                                    approved cylinders for internal domestic use and storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FirstInsightDetail