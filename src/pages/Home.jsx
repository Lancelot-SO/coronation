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
    <div>
      <div className="relative flex">
        <div
          className="relative w-full h-screen"
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
        >
          <img
            src={landInd}
            alt="individual"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className={`absolute w-[335px] h-[316px] flex flex-col justify-start items-start top-[240px] 3xl:top-[450px] large:top-[400px] left-[50px] text-white z-40 transition-opacity duration-300 ${isLeftHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <h1 className="text-4xl font-semibold mb-4 tracking-[5px]">INDIVIDUAL</h1>
            <p className="mb-6 text-[24px] leading-[35px] text-left">
              Invest and manage your money on your own terms. It's easier than
              ever before with Coronation Insurance.
            </p>
            <Link to='/hero' onClick={handleLeftClick}>
              <button className="bg-primary text-white font-bold py-2 px-4 rounded w-[212px]">
                Enter
              </button>
            </Link>
          </div>

          <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-1"></div>
        </div>

        <div
          className="relative w-full h-screen"
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleRightMouseLeave}
        >
          <img
            src={landCop}
            alt="corporate"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className={`absolute w-[335px] h-[316px] flex flex-col justify-end items-end top-[200px] 3xl:top-[400px] large:top-[340px] right-[50px] text-white z-40 transition-opacity duration-300 ${isRightHovered ? "opacity-100" : "opacity-0"
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

          <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-1"></div>
        </div>

        <img
          src={landingImg}
          alt="landing"
          className="absolute h-[600px] top-[80px] left-[752px] 3xl:left-[863px] large:left-[670px] large:h-[733px] 3xl:h-[960px] transform -translate-x-1/2 z-30"
        />
      </div>
    </div>
  );
};

export default Home;
