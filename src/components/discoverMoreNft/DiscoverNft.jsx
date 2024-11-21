import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReDiscoverNft from "./ReDiscoverNft";

const DiscoverNft = () => {
 

  return (
    <div className="flex flex-col justify-center items-center w-[80%] max-sm:w-[90%] max-md:w-[90%] max-lg:w-[90%] gap-10">
      {/* Header Section */}
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col justify-between w-full gap-4">
          <div>
            <h2 className="text-white text-4xl font-bold max-sm:text-2xl">
              Discover More NFTs
            </h2>
          </div>
          <div className="flex justify-between items-center max-sm:items-start gap-5  max-sm:flex-col">

            <p className="text-white text-xl max-sm:text-sm">Explore New Trending NFTs</p>


            <div className="hidden max-sm:w-full max-sm:flex">
              <ReDiscoverNft/>
            </div>


            <Link
              to="/marketplace"
              className="flex py-3 rounded-2xl border-purple-500 max-sm:w-full justify-center border text-md text-white px-10 items-center gap-2"
            >
              <IoEyeOutline />
              <button className="">See All</button>
            </Link>
          </div>
        </div>

        {/* Card Section */}
        <div className="max-sm:hidden">
               <ReDiscoverNft/>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNft;
