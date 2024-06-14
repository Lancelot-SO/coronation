import React from 'react'

import brochureUrl from "../assets/insight/Digitalisation.pdf"

import insightdetailBg from "../assets/rightside.png"
import brochureImg from "../assets/insight/brochureImg.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SecondInsightDetail = () => {


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
                                <h2 className='h-[36px] font-light text-[30px] leading-[36px] text-[#1C1F35] mb-2'>REVOLUTIONISING CUSTOMER EXPERIENCE</h2>
                                <p className='w-[664px]  font-normal h-[170px] leading-[24px] text-[16px] text-[#666C89]'>
                                    As a much more digitised economy looks set to become the
                                    new normal post-COVID, “it is increasingly evident that
                                    almost all businesses need to find new ways to deal with
                                    clients remotely,” says Mr. Adedayo Arowojolu, Managing
                                    Director, Coronation Insurance Ghana LTD.
                                    In response, Coronation Insurance Ghana recently
                                    developed two channels for customers to purchase cover
                                    and also manage their policies online.
                                </p>
                                <p className='w-[664px]  font-normal leading-[24px] h-[120px] text-[16px] text-[#666C89]'>
                                    Firstly, Coronation’s USSD <b>*789*115#</b> channel allows
                                    customers to purchase and manage insurance on their
                                    mobile phones. Customers can also renew existing policies,
                                    initiate claims or check on claims progress – all from a
                                    handheld phone. Since the USSD capability doesn’t rely on
                                    internet access, “even customers with the oldest phones
                                    can now manage their insurance remotely,” says Mr.
                                    Arowojolu.
                                </p>
                            </div>
                            <div className='bg-black mt-8 w-[664px] h-[172px] flex items-center p-4'>
                                <p className='font-normal text-[20px] text-white italic'>“COVID-19 saw a rapid pivot to digitalisation.
                                    Organisations with the technology and financial runways
                                    to equip their staff to work remotely, adapted well to the
                                    pandemic. Others also quickly developed platforms to
                                    service clients online.”
                                </p>
                            </div>

                            <div className='w-[664px] mt-4'>
                                <p className='h-[135px] text-[16px] leading-[24px] font-normal text-[#666C89]'>
                                    Secondly, Coronation Insurance has also developed a web-
                                    based e-insurance portal <b>https://my.coronationinsuranceghana.com</b> providing
                                    online access to the entire purchase, renewal and claims
                                    management process, customers with internet access can
                                    manage their covers and claims from anywhere in the
                                    world. Gone are the days of travelling to branches, waiting
                                    in queues or spending hours on the phone with call centre
                                    agents.
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
                                <p className='mt-2 leading-8'>
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
                            </div>
                            <div className='min-w-[440px] min-h-[304px] mt-10 bg-[#F5F5F5]'>
                                <p className='mt-2 leading-8'>
                                    Historically, when applying for insurance or processing
                                    claims, a raft of physical forms had to be secured, manually
                                    completed and returned to the insurer. Thereafter,
                                    settlement was an uncertain and opaque process. In the
                                    past, “policy holders were simply paid out or had their
                                    claims rejected. There was very little explanation,
                                    understanding or transparency in the process,” reports Mr.
                                    Arowojolu.
                                    Technology has changed all this.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default SecondInsightDetail