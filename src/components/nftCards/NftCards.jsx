import React from 'react'
import { Link } from 'react-router-dom'

const NftCards = ({mainImage, title, dp, pname, price, curr, highestBid, link }) => {
  return (
    <Link
    to={"/marketplace"}
    className="bg-[#3B3B3B] rounded-3xl overflow-hidden shadow-md "
  >
    <div className="w-full h-auto ">
      <img
        src={mainImage}
        alt="NFT"
        className="w-full h-[270px] object-cover"
      />
    </div>

    <div className="flex flex-col py-2 px-6 gap-1">
      <h3 className="text-xl text-white">{title}</h3>
      <div className="flex gap-3 items-center">
        <img
          src={dp}
          alt="Avatar"
          className="w-6 h-6 rounded-full"
        />
        <p className="text-white text-sm">{pname}</p>
      </div>
    </div>
    <div className="flex justify-between px-6 py-1">
      <div className="font-extralight">
        <h4 className="text-gray-400 text-xs">Price</h4>
        <div className="text-white flex gap-1 text-sm">
          <p>{price}</p>
          <span>{curr}</span>
        </div>
      </div>
      <div>
        <h4 className="text-gray-400 text-xs">Highest Bid</h4>
        <div className="text-white flex gap-1 text-sm">
          <p>{highestBid}</p>
          <span>{curr}</span>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default NftCards