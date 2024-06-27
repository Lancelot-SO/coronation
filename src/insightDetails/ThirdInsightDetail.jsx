import React from 'react'

import brochureUrl from "../assets/insight/Resilience.pdf"

import insightdetailBg from "../assets/insight/insight3.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ThirdInsightDetail = () => {


    return (
        <div>
            <div>
                <img src={insightdetailBg} alt='bg' className='w-full h-[773px] object-cover' />
            </div>

            <section>
                <div className='flex items-center justify-center'>
                    <div className=' w-[1123px] h-[940px] mt-[30px] flex gap-4'>
                        <div>
                            <div className=' w-[664px]'>
                                <p className='w-[664px]  font-light leading-[32px] text-[24px] text-[#666C89]'>
                                    Life in retail is full of rewards, but it also comes with
                                    its share of risks. From unexpected accidents to
                                    unforeseen disasters, protecting your business is
                                    crucial for long-term success. This is where a strong
                                    insurance plan comes in – it is the safety net that can
                                    help you bounce back from the unexpected and keep
                                    your business thriving.
                                </p>

                                <h2 className='font-normal text-[30px] leading-[36px] text-black mb-2'>
                                    The Basics: Motor Insurance – A Must-Have
                                </h2>
                                <p className='w-[664px]  font-light leading-[32px] text-[24px] text-[#666C89]'>
                                    Let us start with the essentials. By law, every vehicle
                                    on the road needs at least third-party motor
                                    insurance. This covers any injuries or damage you
                                    cause to others with your vehicle. It's the foundation,
                                    but consider going a step further with
                                    comprehensive insurance. Coronation Insurance
                                    offers comprehensive policies that provide additional
                                    protection for your own vehicle in case of accidents,
                                    theft, fire, and more. As a bonus, Coronation throws
                                    in a free tracking device with these policies, helping
                                    you locate your car in case of emergencies.
                                </p>
                            </div>

                            <div className='w-[664px] mt-4 '>
                                <h2 className='font-normal text-[30px] leading-[36px] text-black mb-2'>
                                    The Basics: Motor Insurance – A Must-Have
                                </h2>
                                <p className='w-[664px]  font-light leading-[32px] text-[24px] text-[#666C89] mb-8'>
                                    Let us start with the essentials. By law, every vehicle
                                    on the road needs at least third-party motor
                                    insurance. This covers any injuries or damage you
                                    cause to others with your vehicle. It's the foundation,
                                    but consider going a step further with
                                    comprehensive insurance. Coronation Insurance
                                    offers comprehensive policies that provide additional
                                    protection for your own vehicle in case of accidents,
                                    theft, fire, and more. As a bonus, Coronation throws
                                    in a free tracking device with these policies, helping
                                    you locate your car in case of emergencies.
                                </p>

                                <a href={brochureUrl} download className='text-[#08ABDE]'>
                                    Click here to download Article
                                </a>
                            </div>



                            <p className='w-[664px] font-light text-[24px] leading-[32px] mt-8'>
                                Digitising the process has also sped up the rate at which
                                claims are processed and paid out. Regardless of the
                                interface that Coronation customers use to access their
                                insurance covers remotely, simple claims, like motor cover,
                                are, today, generally processed and paid out within 24
                                hours once all documentation is uploaded. Even more
                                complex claims, like accident, flood, marine and fire, are,
                                today, paid out within 48 hours after receipt of all required
                                documents.
                            </p>


                            <div className='flex w-[664px] h-[60px] items-center justify-between mt-[50px] border border-y-2 border-x-0'>
                                <div>
                                    <ul className="flex gap-4 text-black items-center">
                                        <li>
                                            <Link to="https://www.instagram.com/coronationgh/" target='_blank' rel='noopener noreferrer' className="">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.facebook.com/coronationghana/" target='_blank' rel='noopener noreferrer'>
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://x.com/coronationghana" target='_blank' rel='noopener noreferrer'>
                                                <FaTwitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.linkedin.com/company/coronation-insurance-ghana/" target='_blank' rel='noopener noreferrer'>
                                                <FaLinkedinIn />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>Category : insurance</div>
                            </div>
                        </div>
                        <div>
                            <div className='min-w-[440px] p-4 bg-[#F5F5F5]'>
                                <h2 className='font-normal text-[30px] leading-[36px] text-black mb-2'>
                                    Peace of Mind for Business Owners: Business
                                    Protection Insurance
                                </h2>
                                <p className='mt-2 text-[24px] font-light leading-[32px]'>
                                    Running a retail business exposes you to unique
                                    risks. Business protection insurance from
                                    Coronation Insurance can shield you from
                                    financial losses caused by fire, floods, and even
                                    personal accidents that might prevent you from
                                    working. This ensures your business can keep
                                    operating smoothly even during challenging
                                    times.
                                </p>
                            </div>
                            <div className='min-w-[440px] p-4 mt-10 bg-[#F5F5F5]'>
                                <h2 className='font-normal text-[30px] leading-[36px] text-black mb-2'>
                                    Coronation Insurance: Your Partner in Resilience
                                </h2>
                                <p className='mt-2 text-[24px] font-light leading-[32px]'>
                                    At Coronation Insurance, we understand the
                                    importance of protecting your business. That is
                                    why we offer same-day claims payment, making
                                    it easier for you to get back on your feet quickly.
                                    Additionally, our digital solutions allow you to
                                    manage your policies and make claims
                                    conveniently online. Most importantly, our
                                    dedicated staff is here to answer your questions
                                    and guide you through the process, ensuring you
                                    have the right coverage for your needs.
                                    Do not wait for a crisis to strike. By investing in a
                                    comprehensive insurance plan from Coronation
                                    Insurance, you are building a strategy for
                                    resilience – a safety net that allows you to focus
                                    on what matters most: running your successful
                                    retail business. Contact Coronation Insurance
                                    today and take a step towards a more secure
                                    future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default ThirdInsightDetail