import React, { useState } from 'react'
import 'react-phone-number-input/style.css'


import contactBg from "../assets/contact/contactBg.png"
import contactPay from "../assets/contact/contactPay.png"
import formImage from "../assets/contact/formImage.png"
import { Link } from 'react-router-dom'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
import FooterRed from '../components/FooterRed'
import Banner from '../components/Banner'

const ContactRed = () => {
    const [value, setValue] = useState()

    return (
        <div>
            <div>
                <img src={contactBg} alt='hero' className='w-full h-[629px] relative object-cover' />
                <div className='absolute top-[403px] left-[160px] w-[745px] h-[164px] bg-[rgba(0,0,0,0.8)] p-10'>
                    <h2 className='mb-4 text-[31px] leading-[37px] text-white font-normal'>CONTACT US</h2>
                    <p className='w-[686px] h-[128px] text-[18px] leading-[25px] text-white font-light opacity-50'>
                        We would love to hear from you. Let’s know more about you by filling in your details below to help match you with the right member of our team

                    </p>
                </div>
                <div className='absolute top-[281px] left-[1000px]'>
                    <img src={contactPay} alt='print' className='relative' />
                    <div className='absolute top-[180px] items-center justify-center'>
                        <h3 className='w-[263px] h-[16px] text-[13px] leading-[16px] font-normal mb-4 text-center text-white'>MY INSURANCE ACCOUNT</h3>
                        <p className='w-[263px] h-[54px] text-[13px] leading-[18px] font-normal mb-6 text-center ml-[20px] text-white'>Want to know more about our services? Let's talk</p>
                        <Link to="/contact">
                            <button className='flex w-[263px] h-[45px] items-center gap-4 bg-secondary ml-[20px] justify-center text-white rounded-[30px]'>Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className='w-[660px] h-[7px] bg-gradient-to-r from-red-600 to-orange-500 absolute bottom-0'>
                </div>
            </div>

            <section>
                <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen ml-[70px]">
                    <div className="w-full md:w-1/2 p-6 bg-white text-black  rounded-lg shadow-card">
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">First name</label>
                                    <input type="text" placeholder="First name" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm  text-black" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-black">Last name</label>
                                    <input type="text" placeholder="Last name" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm  text-black" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Email</label>
                                <input type="email" placeholder="you@company.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm  text-black" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Phone number</label>

                                <PhoneInput
                                    defaultCountry='GH'
                                    value={value}
                                    onChange={setValue}
                                    placeholder="233 54868650"
                                    className='block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm text-black'
                                />
                                {value && isPossiblePhoneNumber(value) && (
                                    <div className="text-red-500">Yes, it is a possible phone number</div>
                                )}

                                {value && isValidPhoneNumber(value) && (
                                    <div className="text-red-500">Yes, it is a valid phone number</div>
                                )}

                                {value && (
                                    <div className="text-red-500">International number: {formatPhoneNumberIntl(value)}</div>
                                )}

                                {value && (
                                    <div className="text-red-500">Local number: {formatPhoneNumber(value)}</div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Enquiry related</label>
                                <select className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm text-black">
                                    <option>Select at least one option</option>
                                    <option>Asset Management</option>
                                    <option>Insurance</option>
                                    <option>Corperate and Investment Banking</option>
                                    <option>Securities Trading and Brokerage</option>
                                    <option>Registrar Service</option>
                                    <option>Research</option>
                                    <option>Private Equity</option>
                                    <option>Venture Building </option>
                                    <option>Techology</option>
                                    <option>Careers</option>

                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black">Message</label>
                                <textarea rows="4" placeholder="Enter your Message" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm text-black"></textarea>
                            </div>
                            <div className="flex items-start">
                                <input type="checkbox" id="privacy" className="h-4 w-4 text-secondary border-gray-300 rounded" />
                                <label for="privacy" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">You agree to our friendly <Link to="https://www.coronation.ng/privacy-and-cookie-policy/" target='_blank' rel='noopener noreferrer' className="text-secondary hover:underline">privacy policy</Link>.</label>
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-md shadow-card hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:secondary">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div class="w-full rounded-lg md:w-1/2 p-6">
                        <img src={formImage} alt="Person on phone" className="w-[576px] h-[570px]" />
                    </div>
                </div>
            </section>

            <Banner />
            <FooterRed />
        </div>
    )
}

export default ContactRed