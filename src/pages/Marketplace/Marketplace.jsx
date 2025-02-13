import React from "react";

import Wrapper from "../../components/wrapper/Wrapper";
import MarketPlaceComp from "../../components/marketplace";
import DataMarketPlace from "./data";

const Marketplace = () => {
  return (
    <Wrapper >
      <MarketPlaceComp data={DataMarketPlace} bgColor={"bg-[#2B2B2B]"}/>
    </Wrapper>
  );
};

export default Marketplace;
