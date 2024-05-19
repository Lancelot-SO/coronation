import React, { useContext } from "react";
import landInd from "../assets/landingInd.png";
import landCop from "../assets/landingCop.png";
import landingImg from "../assets/landingImg.png";
// import Navbar from "../components/Navbar";
import { HoverContext } from "../contexts/HoverContext";

const Home = () => {
  // const [hovered, setHovered] = useState(false);

  // const handleHover = (side) => {
  //   setHovered(side);
  // };

  const { setIsHovered } = useContext(HoverContext);

  return (
    <div>
      <div
        className="relative flex"
      >
        {/* left side */}
        <div
          className="relative w-full h-screen"
          onMouseEnter={() => setIsHovered("left")}
          onMouseLeave={() => setIsHovered("left")}
        >
          <img
            src={landInd}
            alt="individual"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute w-[335px] h-[316px] flex flex-col justify-start items-start top-[200px] left-[50px] text-white z-40">
            <h1 className="text-4xl font-semibold mb-4">INDIVIDUAL</h1>
            <p className="mb-6 text-[24px] leading-[38px] text-left">
              Invest and manage your money on your own terms. It's easier than
              ever before with Coronation Insurance.
            </p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded w-[212px]">
              Enter
            </button>
          </div>

          <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-1"></div>
        </div>

        {/* right side */}
        <div
          className="relative w-full h-screen"
          onMouseEnter={() => setIsHovered("right")}
          onMouseLeave={() => setIsHovered("right")}
        >
          <img
            src={landCop}
            alt="corporate"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute w-[335px] h-[316px] flex flex-col justify-end items-end top-[200px] right-[50px] text-white z-40">
            <h1 className="text-4xl font-semibold mb-4">CORPORATE</h1>
            <p className="mb-6 text-[24px] leading-[38px] text-right">
              Invest and manage your money on your own terms. It's easier than
              ever before with Coronation Insurance.
            </p>
            <button className="bg-secondary text-white font-bold py-2 px-4 rounded w-[212px]">
              Enter
            </button>
          </div>

          
          <div className="absolute inset-0 w-full h-full bg-black hover:opacity-90 opacity-0 transition-opacity duration-300 z-1"></div>
        </div>

        <img
          src={landingImg}
          alt="landing"
          className="absolute h-[600px] top-[80px] left-[752px] transform -translate-x-1/2 z-30"
        />
      </div>
    </div>
  );
};

export default Home;
