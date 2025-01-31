import React from "react";
import { Link } from "react-router-dom";
import astroImag from "../../assets/bgAstro.png";
import landsImag from "../../assets/bglandscape.png";
import bgSpaceship from "../../assets/main1spaceship.png";
import person5 from "../../assets/person5.png";
import person3 from "../../assets/person3.png";
import person11 from "../../assets/person11.png";
import NftCards from "../nftCards/NftCards";

const ReDiscoverNft = () => {
  const Discover = [
    {
      id: 1,
      mainImage: bgSpaceship,
      title: "Distant Galaxy",
      dp: person3,
      pname: "MoonDancer",
      price: 1.63,
      curr: "ETH",
      highestBid: 0.33,
    },
    {
      id: 2,
      mainImage: landsImag,
      title: "Life On Edena",
      dp: person5,
      pname: "NebulaKid",
      price: 1.63,
      curr: "ETH",
      highestBid: 0.33,
    },
    {
      id: 3,
      mainImage: astroImag,
      title: "AstroFiction",
      dp: person11,
      pname: "Spaceone",
      price: 1.63,
      curr: "ETH",
      highestBid: 0.33,
    },
  ];

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-sm:w-full  gap-8 ">
      {Discover.map((item) => (
       <NftCards
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
