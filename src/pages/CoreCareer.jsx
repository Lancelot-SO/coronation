import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CoreCareer = ({ item }) => {
    return (
        <div>
            <div className='flex mt-8'>
                <div className='w-[537px]'>
                    <h2 className='w-[500px] h-[52px] font-light leading-[52px] text-[40px] mt-10'>LIFE AT CORONATION</h2>
                    <p className='w-[537px] h-[87px] mt-6 text-[#475569]'>
                        Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation…
                    </p>
                    <Link to={item.link} className='flex items-center w-[151px] h-[20px] mt-4 gap-4 text-customPurple'>
                        <p className='text-[16px] leading-[19px] font-normal'>LEARN MORE</p>
                        <FaLongArrowAltRight />
                    </Link>
                </div>
                <div className='mt-4 ml-10'>
                    <img src={item.image} alt='ph' className='w-[500px] h-[356px]' />
                </div>
            </div>
        </div>
    )
}

export default CoreCareer