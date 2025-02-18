import React from "react";

import { Link } from "react-router-dom";

const TrendingCollection = ({data}) => {


  return (
    <>
      <div className="flex flex-col justify-start items-left text-left w-full  gap-10">
        {/* heading section  */}
        <div>
          <h2 className="text-white max-sm:text-2xl text-3xl font-bold">
            Trending Collection
          </h2>
          <p className="text-white max-sm:text-sm text-xl">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        {/* iamages section  */}
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2  w-full  content-center m-auto" >
          {data.map((items) => (
            <div key={items} className="flex flex-col   items-center gap-5 max-sm:w-full">
              <Link to={"/marketplace"}>
                <img src={items.imageMain} className="max-sm:w-full transform transition duration-500 hover:scale-[0.95]" alt="" />
              </Link>

              <div className=" flex flex-col gap-3">

              <div className="flex gap-4 max-sm:justify-between">
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <img src={items.image1} alt="image1" className="" />
                </Link>
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <img src={items.image2} alt="image2" />
                </Link>
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <p className="text-white text-xl font-bold p-5 ">
                    {items.numImag}
                  </p>
                </Link>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">
                    {items.title}
                  </h2>
                  <div className="flex items-center gap-4 ">
                    <img src={items.avatarImg} alt="avatar" />
                    <p className="text-white text-md">{items.avatarName}</p>
                  </div>
                </div>
              </div>

              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCollection;
