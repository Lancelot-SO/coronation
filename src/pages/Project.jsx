import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

const Project = ({ item }) => {
    return (
        <div>
            <div key={item.id}>
                <div className='flex flex-col w-[299px] h-[450px] rounded-t-[15px] bg-[#F6F6F6] mt-[20px] mb-[20px]'>
                    <img src={item.image} alt='insight' />
                    <div className='flex flex-col p-[30px] gap-[20px] w-full h-[206px]'>
                        <p className='w-[222px] h-[38px] text-[16px] leading-[19px] font-normal text-customPurple'>{item.heading}</p>
                        <p className='w-[222px] text-[16px] leading-[19px] font-normal'>{item.details}</p>
                        <a href={item.link} className='flex items-center w-[111px] justify-center h-[20px]'>
                            <p className='text-[16px] leading-[19px] font-normal'>READ MORE</p>
                            <FaLongArrowAltRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project