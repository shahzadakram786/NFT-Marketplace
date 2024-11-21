import React from "react";
import { PiRocketLaunch } from "react-icons/pi";
import SingleCard from "./SingleCard";

const Hero = () => {
  return (
    <div className="flex justify-between gap-12 w-[70%] max-sm:w-[90%] max-lg:w-[90%]">
      {/* content area  */}
      <div className="flex flex-col gap-10 w-[50%] max-sm:w-full">
        <div className="flex flex-col gap-10 max-lg:gap-5 w-full">
          <h1 className="text-white max-sm:text-2xl text-6xl max-lg:text-5xl font-bold w-full">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="text-white text-2xl max-lg:text-lg leading-relaxed w-[70%] max-sm:w-full max-lg:w-full">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <div className="max-sm:flex hidden ">
            <SingleCard />
          </div>

          <div className="w-[50%] max-sm:w-full p-5 max-lg:p-4 flex justify-center items-center rounded-3xl bg-purple-500 text-white cursor-pointer gap-3">
            <PiRocketLaunch />
            <button className="rounded-3xl bg-purple-500 text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* sales and auction area  */}
        <div className="flex text-white justify-between">
          <div>
            <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-4xl ">
              240K+
            </h2>
            <p className="max-sm:text-xl text-2xl max-lg:text-xl">Total Sale</p>
          </div>
          <div>
            <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-4xl">
              100K+
            </h2>
            <p className=" max-sm:text-xl text-2xl max-lg:text-xl">Auctions</p>
          </div>
          <div>
            <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-4xl">
              240K+
            </h2>
            <p className="max-sm:text-xl text-2xl max-lg:text-xl">Artists</p>
          </div>
        </div>
      </div>

      {/* image area  */}

      <div className="max-sm:hidden md:block h-full w-[50%]">
        <SingleCard />
      </div>
    </div>
  );
};

export default Hero;
