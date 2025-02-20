import React, { useState } from "react";
import ReDiscoverNft from "../discoverMoreNft/ReDiscoverNft";


const MarketPlaceCardArea = ({ data, bgColor , search , setsearch}) => {

 const [activeTab, setActiveTab] = useState("collection");
 



const handleChangeCategory =(category)=>{
  setActiveTab(category)
  console.log("category is > " , category)
}

  return (
    <>
           
          <div className=" bg-[rgb(43,43,43)] px-[10px] sm:px-[15px] md:px-[20%]">
          <hr className=" w-[100%] h-px border-t-0 bg-transparent bg-gradient-to-r  from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 text-gray-500 text-2xl w-full max-sm:text-[16px]">
              <button onClick={()=>handleChangeCategory('NFT')}
                value="Nft"
                className="p-5  px-10 flex gap-3 items w-[50%] justify-center  focus:text-white focus:border-b-2 border-gray-500"
              >
                NFTs
                <h1 className="bg-gray-500 text-white items-center flex rounded-full py-1 px-2 text-sm max-sm:hidden">
                  333
                </h1>
              </button>

              <button onClick={()=>handleChangeCategory('collection')}
                value="collection"
                className="p-5 px-10 flex gap-3 items justify-center  w-[50%] focus:text-white focus:border-b-2 border-gray-500"
              >
                Collections
                <h1 className="bg-gray-500 text-white flex items-center rounded-full py-1 px-2 text-sm max-sm:hidden">
                  346
                </h1>
              </button>
            </div>
          </div>

            </div>
      <div className=" bg-[#3B3B3B] px-[10px] sm:px-[15px] md:px-[20%]  border-b-[rgb(43,43,43)] border-b-2">
        <div className="flex flex-col w-full">

          

          <div className="flex justify-center w-full bg-[#3B3B3B] items-center py-20">
            <div className="w-full">
              <ReDiscoverNft data={data} bgColor={bgColor} category={activeTab} search={search} setsearch={setsearch}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceCardArea;
