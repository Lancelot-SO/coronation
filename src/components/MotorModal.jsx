import React from 'react';
import modalbg from "../assets/motor/modalBg.png";

import logo from "../assets/corologo.png"

const MotorModal = ({ onClose }) => {
    return (
        <div className="call-modal">
            <div className="call__modal-content">
                <div className="relative flex flex-col items-center justify-center main__shadow w-screen h-auto p-4">
                    <img src={modalbg} alt="modal" className="absolute top-0 object-cover" />
                    <ul className=" w-[400px] relative z-10 top-[100px] bg-white p-2 rounded-2xl space-y-1 text-black">
                        <button onClick={onClose} className="absolute top-4 right-4 text-black" aria-label="Close">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Third party bodily injury & death as stated in our policy document</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Fire damage to the insured vehicle</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Theft of the vehicle</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Accidental damage to insured's vehicle</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Personal Accident for Insured / Driver: GHS7,000</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Deductible/excess except where buy back is applicable</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Depreciation rate: as applicable</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Towing charges: not exceed 20% of total repairs bill</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Loss of personal effect: as stated in the policy schedule</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Authorized repair limit: as stated in our policy document</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Passenger liability: as stated in our policy document</li>
                        <li className="w-full font-normal text-[14px] leading-[32px]">• Third-party liabilities Within (ECOWAS) Countries</li>
                        <div className="mt-4 z-10">
                            <img src={logo} alt='logo' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MotorModal;
