import React from "react";

import NftCards from "../nftCards/NftCards";

const ReDiscoverNft = ({ data, bgColor, category, search }) => {
  const filteredData = data.filter((data) => {
    return (
      data.category === category
      // &&
      // (data.title?.toLowerCase() || "").includes(search.toLowerCase())

      // (data.title || "").toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:w-full w-full gap-8 ">
      {filteredData.map((item) => (
        <NftCards
          bgColor={bgColor}
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
