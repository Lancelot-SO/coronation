import React from 'react'
import "../App.css"

import modalbg from "../assets/motor/modalBg.png"

const HouseHolderModal = ({ onClose }) => {

    return (
        <div class="call-modal">
            <div class="call__modal-content">
                <div class="relative flex flex-col items-center justify-center main__shadow w-screen h-auto p-4">
                    <img src={modalbg} alt="modal" class="absolute top-0 object-cover " />
                    <ul className="relative z-10 top-[40px] p-2 bg-white rounded-2xl space-y-1 text-black">
                        <button onClick={onClose} class="absolute top-4 right-4 text-black" aria-label="Close">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <li class="w-full font-normal text-[14px] leading-[32px]">• Covers   the loss of rent or the additional cost of alternative accommodation in case   of fire  </li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">• Covers replacement of stolen items (based on   inventory provided)</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">• Covers contents while temporarily removed for   cleaning, renovating, repairs or similar purpose</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">• Covers public liability up to GHS20,000</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">• Covers personal accident uo to GHS20,000 for   the houshold, maximum 5 occupants</li>
                        <li class="w-full font-normal text-[14px] leading-[32px]">•  All risk coverage is for laptops, jewelry, and   other moveable items. Customer cannot take insurance <br />cover for all risk items   alone. It must be taken along side Home owners cover.</li>
                        <div class="text-right text-gray-800 dark:text-white font-bold mt-4 z-10">
                            CORONATION
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default HouseHolderModal