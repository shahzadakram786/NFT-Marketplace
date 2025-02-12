import React from 'react'
import { BiSearch } from "react-icons/bi";
import ReDiscoverNft from '../discoverMoreNft/ReDiscoverNft';

const MarketPlaceComp = ({data , bgColor}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center" >

    <div className="flex flex-col gap-6 p-2 w-[60%]">
      <div className="p-2 flex flex-col gap-3">
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
            placeholder="Search your favourite NFTs"
            className="bg-transparent p-2 w-full outline-none text-[#616160] text-xl"
          />
          <BiSearch size={25} color="white" />

          {/* logo   */}
        </div>
      </div>
    </div>
      
    <hr className="mt-20 w-full h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

  <div className='flex flex-col justify-center items-center w-[60%]'>

    <div className="flex gap-4 text-gray-500 text-2xl w-full">

    
              <button className="p-5  px-10 flex gap-3 items w-[50%] justify-center  focus:text-white focus:border-b-2 border-gray-500" >NFTs
                 <h1 className="bg-gray-500 text-white rounded-full py-1 px-2 text-sm">333</h1>
              </button>
        
         
              <button className="p-5 px-10 flex gap-3 items justify-center  w-[50%] focus:text-white focus:border-b-2 border-gray-500" >Collections
                 <h1 className="bg-gray-500 text-white rounded-full py-1 px-2 text-sm">346</h1>
              </button>
         
    </div>
    
  </div>
    
    <div className='flex justify-center w-full bg-[#3B3B3B] items-center p-10 lg:py-20'>
        <div className='w-[64%]'>
                         <ReDiscoverNft data={data} bgColor={bgColor}/>
        </div>
    </div>

    </div>
  )
}

export default MarketPlaceComp