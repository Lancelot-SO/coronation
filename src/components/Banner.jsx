import React from 'react'
import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div className='w-full'>
                <img src={banner} alt='banner' className='object-fit w-full' />

            </div>
        </div>
    )
}

export default Banner