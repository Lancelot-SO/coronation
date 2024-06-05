import React from 'react'

import slider from "../assets/slider.png"


const Slider = () => {
    return (
        <div>
            <div className='flex w-[979px] h-[480px]'>
                <img src={slider} alt='slider' className='w-[450px] h-[480px]' />

                <div className='w-[450px] h-[163px] mt-[100px] pl-8'>
                    <div className='flex flex-col mb-[80px]'>
                        <h2 className='text-[20px] font-bold text-[#475569] leading-[20px] tracking-[3px] mb-4'>SUCCESS STORIES</h2>
                        <p className='w-[450px] h-[127px] font-normal text-[16px] leading-[30px]'>
                            <b className='text-[30px] text-customPurple'>“</b> Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo. <b className='text-[30px] text-customPurple'>”</b>
                        </p>
                    </div>

                    <div className=''>
                        <p className='text-[18px] leading-[29px] font-normal'>Aben Anokye Adisi,</p>
                        <p className='text-[20px] leading-[22px] font-medium'>CEO, EIB NETWORK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider