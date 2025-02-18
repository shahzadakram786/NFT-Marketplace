import React from "react";
import { Link } from "react-router-dom";


const TopCards = ({data}) => {
  
  return (
    <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2  w-full ">
      {data.map((items) => (
        <Link
          to={"/dynamicpage"}
          key={items}
          className="transform transition duration-500 hover:scale-[0.95] rounded-3xl w-full max-md:p-4 p-5 max-sm:w-full flex flex-col max-md:flex-row max-lg:flex-row max-md:gap-4 gap-5 bg-[#3B3B3B] relative"
        >
          <div className="flex justify-center gap-5">
            <p className="bg-[#2B2B2B] text-xs text-center p-2 rounded-[50%] text-gray-500 absolute top-3 left-4  flex items-center justify-center w-8 h-8">
              {items.id}
            </p>
            <div>
              <img src={items.image} alt="" />
            </div>
          </div>
          <div className=" flex flex-col items-left justify-center w-full gap-2">
            <div>
              <h2 className="text-white text-xl font-bold text-center max-lg:text-left  max-md:text-left">
                {items.person}
              </h2>
            </div>
            <div className="flex items-center justify-center max-lg:justify-start max-md:justify-start max-md:items-start gap-2 max-md:gap-3">
              <p className="text-gray-500 text-md text-center">Total Sales:</p>
              <span className="text-white flex text-md  font-light">
                <p>{items.totalSales}</p>
                <p>{items.curr}</p>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopCards;
