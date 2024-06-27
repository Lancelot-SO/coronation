import React from 'react'
import "../App.css"

import modalbg from "../assets/motor/modalBg.png"

const IndividualModal = ({ onClose }) => {

    return (
        <div class="call-modal">
            <div class="call__modal-content">
                <div class="relative flex flex-col items-center justify-center main__shadow w-screen h-auto p-4">
                    <img src={modalbg} alt="modal" class="absolute top-0 object-cover " />
                    <ul class="relative z-10 top-[40px] p-2 bg-white rounded-2xl space-y-1 text-black">
                        <button onClick={onClose} class="absolute top-4 right-4 text-black" aria-label="Close">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Third party bodily injury & death - unlimited</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Reimbursement of legal fees if policy holder is<br /> prosecuted in court over an accident resulting in a valid<br /> claim</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Fire damage to the insured vehicle</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Theft of the vehicle</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Personal Accident for Insured / Driver: GHS7,000</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">Deductible/excess</li>

                        <div class="text-right text-black font-bold mt-4 z-10">
                            CORONATION
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default IndividualModal