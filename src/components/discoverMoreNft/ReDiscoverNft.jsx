import React from "react";

import NftCards from "../nftCards/NftCards";

const ReDiscoverNft = ({data , bgColor}) => {
  

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:w-full w-full gap-8 ">
      {data.map((item) => (
       <NftCards bgColor={bgColor}
       key={item.id}
       mainImage={item.mainImage}
       title={item.title}
       dp={item.dp}
       pname={item.pname}
       price={item.price}
       curr={item.curr}
       highestBid={item.highestBid}
       link="/marketplace"
        />
      ))}
    </div>
  );
};

export default ReDiscoverNft;
