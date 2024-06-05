import React from 'react'
import "../App.css"

import modalbg from "../assets/motor/modalBg.png"

const MotorModal = ({ onClose }) => {

    return (
        <div class="call-modal">
            <div class="call__modal-content">
                <div class="relative flex flex-col items-center justify-center main__shadow w-screen h-auto p-4">
                    <img src={modalbg} alt="modal" class="absolute top-0 object-cover " />
                    <ul class="relative z-10 top-[100px] shadow p-2 bg-gray-800 bg-opacity-75 rounded-2xl space-y-1">
                        <button onClick={onClose} class="absolute top-4 right-4 text-gray-600 dark:text-gray-300" aria-label="Close">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Third party bodily injury & death - unlimited</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Third-party property damage limit: GHS6,000</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Fire damage to the insured vehicle</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Theft of the vehicle</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Accidental damage to insured's vehicle</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Personal Accident for Insured / Driver: GHS7,000</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Deductible/excess except where buy back is applicable</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Depreciation rate: as applicable</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Towing charges: not exceed 20% of total repairs bill</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Loss of personal effect: as stated in the policy schedule</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Authorized repair limit: as stated in our policy document</li>
                        <li class="w-full font-normal text-[14px] leading-[32px] text-white">Passenger liability: as stated in our policy document</li>
                        <div class="text-right text-gray-800 dark:text-white font-bold mt-4 z-10">
                            CORONATION
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default MotorModal