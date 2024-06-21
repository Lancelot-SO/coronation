import React, { useContext, useState } from "react";
import landInd from "../assets/landingInd.png";
import landCop from "../assets/rightside.png";
import landingImg from "../assets/landingImg.png";
import { HoverContext } from "../contexts/HoverContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { setIsHovered, setFromRight, setIsRightClicked } = useContext(HoverContext);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const handleLeftMouseEnter = () => {
    setIsHovered("left");
    setIsLeftHovered(true);
  };

  const handleLeftMouseLeave = () => {
    setIsHovered("left");
    setIsLeftHovered(false);
  };

  const handleRightMouseEnter = () => {
    setIsHovered("right");
    setIsRightHovered(true);
  };

  const handleRightMouseLeave = () => {
    setIsHovered("right");
    setIsRightHovered(false);
  };

  const handleLeftClick = () => {
    setFromRight(false);
    setIsRightClicked(false);
  };

  const handleRightClick = () => {
    setFromRight(true);
    setIsRightClicked(true);
  };

  return (
    <div className="relative flex h-screen bg-[#C4C4C4] lg:bg-none">
      <div className="flex lg:hidden object-cover">
        <img
          src={landInd}
          alt="individual"
          className=" w-1/2 h-full object-cover"
        />
        <img
          src={landCop}
          alt="corporate"
          className=" w-1/2 h-full object-cover"
        />
      </div>
      <div
        className="relative w-1/2 h-full hidden lg:flex"
        onMouseEnter={handleLeftMouseEnter}
        onMouseLeave={handleLeftMouseLeave}
      >
        <img
          src={landInd}
          alt="individual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute w-[335px] h-[316px] flex flex-col justify-start items-start top-[240px] 3xl:top-[450px] left-[50px] text-white z-40 transition-opacity duration-300 ${isLeftHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          <h1 className="text-4xl font-semibold mb-4 tracking-[5px]">INDIVIDUAL</h1>
          <p className="mb-6 text-[24px] leading-[35px] text-left">
            Invest and manage your money on your own terms. It's easier than
            ever before with Coronation Insurance.
          </p>
          <Link to='/hero' onClick={handleLeftClick}>
            <button className="bg-customPurple text-white font-bold py-2 px-4 rounded w-[212px]">
              Enter
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-10"></div>
      </div>

      <div
        className="relative w-1/2 h-full hidden lg:flex"
        onMouseEnter={handleRightMouseEnter}
        onMouseLeave={handleRightMouseLeave}
      >
        <img
          src={landCop}
          alt="corporate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className={`absolute w-[335px] h-[316px] flex flex-col justify-end items-end top-[200px] 3xl:top-[400px] right-[50px] text-white z-40 transition-opacity duration-300 ${isRightHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          <h1 className="text-4xl font-semibold mb-4 tracking-[5px]">CORPORATE</h1>
          <p className="mb-6 text-[24px] leading-[35px] text-right">
            Invest and manage your money on your own terms. It's easier than
            ever before with Coronation Insurance.
          </p>
          <Link to='/herored' onClick={handleRightClick}>
            <button className="bg-secondary text-white font-bold py-2 px-4 rounded w-[212px]">
              Enter
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-10"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <img
          src={landingImg}
          alt="landing"
          className="h-[600px] lg:h-[622px] 3xl:h-[960px]"
        />
      </div>

      {/* Visible only on smaller screens */}
      <div className="absolute bottom-0 w-full lg:hidden h-[400px] bg-black z-40 flex">
        <div className="w-full h-full bg-black flex flex-col justify-center items-center">

          <div className="flex flex-col items-center gap-8">
            <div className="flex w-[300px] h-[79px] mb-[30px]">
              <h2 className="text-white text-[45px] font-normal leading-[50px]">WELCOME TO CORONATION
              </h2>
            </div>
            <div className="">
              <Link to='/hero' onClick={handleLeftClick}>
                <button className="bg-customPurple text-white font-bold py-2 px-4 rounded w-[250px]">
                  INDIVIDUAL
                </button>
              </Link>
            </div>
            <div>
              <Link to='/herored' onClick={handleRightClick}>
                <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-2 px-4 rounded w-[250px]">
                  CORPORATE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
