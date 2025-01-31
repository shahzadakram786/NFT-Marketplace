import React from "react";
import { Link } from "react-router-dom";
import { PiRocketLaunch } from "react-icons/pi";
import TopCards from "./TopCards";

const Topcreators = ({data}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] max-sm:w-[90%] max-lg:w-[90%] gap-10">
      {/* content area  */}
      <div className="flex flex-col justify-between w-full gap-4">
        <div>
          <h2 className="text-white text-4xl font-bold max-sm:text-2xl">
            Top Creators
          </h2>
        </div>
        <div className="flex justify-between max-sm:items-start max-sm:w-full max-sm:flex-col items-center gap-5 max-md:gap-2">
          <p className="text-white text-xl max-sm:text-sm max-lg:text-lg">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>

          <div className="hidden max-sm:flex w-full">
            <TopCards data={data} />
          </div>

          <Link
            to={"/rankings"}
            className="flex py-4 rounded-2xl border-purple-500 border text-md text-white px-10 max-lg:px-6 justify-center  max-sm:w-full items-center gap-2"
          >
            <PiRocketLaunch color="" />
            <button className="max-sm:text-lg">View Rankings</button>
          </Link>
        </div>
      </div>
      {/* image area   */}
      <div className="max-sm:hidden w-full">
        <TopCards data={data}/>
      </div>
    </div>
  );
};

export default Topcreators;
