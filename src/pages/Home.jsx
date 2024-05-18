import React, { useState } from 'react';
import landInd from '../assets/landingInd.png';
import landCop from "../assets/landingCop.png";
import landingImg from "../assets/landingImg.png";
import Navbar from '../components/Navbar';

const Home = () => {
    const [hovered, setHovered] = useState(false);

    const handleHover = (side) => {
        setHovered(side);
    };

    return (
        <div>
            <Navbar bgColor={hovered ? 'bg-primary' : 'bg-black bg-opacity-50'} />
            <div className='relative flex'
                onMouseEnter={() => handleHover('left')}
                onMouseLeave={() => handleHover(false)}
            >
                <div className='relative w-full h-screen'>
                    <img src={landInd} alt='individual' className='absolute inset-0 w-full h-full object-cover' />

                    <div cclassName={`absolute w-[335px] h-[316px] flex flex-col justify-center items-start top-[200px] left-[50px] text-white z-50`}>
                        <h1 className='text-4xl font-semibold mb-4'>INDIVIDUAL</h1>
                        <p className='mb-6 text-[24px] leading-[38px]'>Invest and manage your money on your own terms. It's easier than ever before with Coronation Insurance.</p>
                        <button className='bg-primary text-white font-bold py-2 px-4 rounded w-[212px]'>Enter</button>
                    </div>

                    <div className='absolute inset-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-90 z-60'></div>
                </div>


                <div className='relative w-full h-screen'>
                    <img src={landCop} alt='corporate' className='absolute inset-0 w-full h-full object-cover' />
                    <div className='absolute w-[335px] h-[316px] flex flex-col justify-end items-end top-[200px] right-[50px] text-white'>
                        <h1 className='text-4xl font-semibold mb-4'>CORPORATE</h1>
                        <p className='mb-6 text-[24px] leading-[38px] text-right'>Invest and manage your money on your own terms. It's easier than ever before with Coronation Insurance.</p>
                        <button className='bg-secondary text-white font-bold py-2 px-4 rounded w-[212px]'>Enter</button>
                    </div>
                </div>

                <img src={landingImg} alt='landing' className='absolute h-[600px] top-[80px] left-[752px] transform -translate-x-1/2 z-30' />
            </div>
        </div>
    );
}

export default Home;