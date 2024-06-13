import React from 'react'

const Slider = ({ item }) => {
    return (
        <div className='flex w-full h-[480px]'>
            <img src={item.image} alt='slider' className='w-[450px] h-[480px]' />
            <div className='w-[450px] h-[163px] mt-[100px] pl-8'>
                <div className='flex flex-col mb-[40px]'>
                    <h2 className='text-[20px] font-bold text-[#475569] leading-[20px] tracking-[3px] mb-10'>SUCCESS STORIES</h2>
                    <p className='w-[450px] h-[127px] font-normal text-[16px] leading-[30px]'>
                        <b className='text-[30px]'>“</b> {item.text} <b className='text-[30px]'>”</b>
                    </p>
                </div>
                <div>
                    <p className='text-[18px] leading-[29px] font-normal'>{item.name}</p>
                    {item.title && <p className='text-[20px] leading-[22px] font-medium'>{item.title}</p>}
                </div>
            </div>
        </div>
    );
}

export default Slider;
