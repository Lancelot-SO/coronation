import React from 'react';
import modalbg from "../assets/motor/modalBg.png";

const ThirdModal = ({ onClose }) => {
    return (
        <div className="call-modal">
            <div className="call__modal-content">
                <div className="relative flex flex-col items-center justify-center main__shadow w-screen h-auto p-4">
                    <img src={modalbg} alt="modal" className="absolute top-0 object-cover" />
                    <ul className="relative z-10 top-[100px] p-2 bg-white rounded-2xl space-y-1 text-black">
                        <button onClick={onClose} className="absolute top-4 right-4 text-black" aria-label="Close">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <li className="w-full font-normal text-[14px] leading-[32px] text-black">• Third party bodily injury & death - unlimited</li>
                        <li className="w-full font-normal text-[14px] leading-[32px] text-black">• Third party property damage limit: GHS6,000</li>
                        <li className="w-full font-normal text-[14px] leading-[32px] text-black">• 7. Reimbursement of legal fees if policy holder is<br /> prosecuted in court over an accident resulting in a valid<br /> claim</li>
                        <li className="w-full font-normal text-[14px] leading-[32px] text-black">• Personal Accident for Insured / Driver: GHS7,000</li>
                        <li className="w-full font-normal text-[14px] leading-[32px] text-black">• Passenger liability: as stated in our policy document</li>
                        {/*<div className="text-right text-gray-800 font-bold mt-4 z-10">
                            CORONATION
                        </div>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThirdModal;
