import React from 'react'
import { BiSearch } from "react-icons/bi";
// import ReDiscoverNft from '../discoverMoreNft/ReDiscoverNft';
import Wrapper from '../wrapper/Wrapper';
import MarketPlaceCardArea from '../marketplaceCardsArea';

const MarketPlaceComp = ({data , bgColor}) => {
  return (
    <>
    <Wrapper>

    <div className="bg-[rgb(43,43,43)] flex flex-col justify-center items-center w-full py-20" >
    {/* <Wrapper> */}
    <div className="flex flex-col gap-6 py-2 w-full xs:w-full">
      <div className="py-2 flex flex-col gap-3">
        <h1 className="text-5xl text-white font-bold">Browse Markeetplace</h1>
        <p className="text-xl text-white">
          Browse through more than 50k NFTs on the NFT Marketplace
        </p>
      </div>
      {/* //search abr  */}
      <div>
        <div className="flex gap-1 items-center justify-between px-3 text-white rounded-2xl border-gray-600 border outline-none">
          <input

            type="text"
            // value={}
            placeholder="Search your favourite NFTs"
            className="bg-transparent p-2 w-full outline-none text-[#616160] text-xl"
          />
          <BiSearch size={25} color="white" />

          {/* logo   */}
        </div>
      </div>
    </div>

      {/* </Wrapper> */}
      
  

    </div>
    </Wrapper>

     <MarketPlaceCardArea data={data} bgColor={bgColor} />
    </>

  )
}

export default MarketPlaceComp