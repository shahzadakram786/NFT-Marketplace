import React from "react";
import { Link } from "react-router-dom";
import astroImag from "../../assets/bgAstro.png";
import landsImag from "../../assets/bglandscape.png";
import bgSpaceship from "../../assets/main1spaceship.png";
import person5 from "../../assets/person5.png";
import person3 from "../../assets/person3.png";
import person11 from "../../assets/person11.png";

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
        <Link
          to={"/marketplace"}
          key={item.id}
          className="bg-[#3B3B3B] rounded-3xl overflow-hidden shadow-md "
        >
          <div className="w-full h-auto ">
            <img
              src={item.mainImage}
              alt="NFT"
              className="w-full h-[270px] object-fill"
            />
          </div>

          <div className="flex flex-col py-2 px-6 gap-1">
            <h3 className="text-xl text-white">{item.title}</h3>
            <div className="flex gap-3 items-center">
              <img
                src={item.dp}
                alt="Avatar"
                className="w-6 h-6 rounded-full"
              />
              <p className="text-white text-sm">{item.pname}</p>
            </div>
          </div>
          <div className="flex justify-between px-6 py-1">
            <div className="font-extralight">
              <h4 className="text-gray-400 text-xs">Price</h4>
              <div className="text-white flex gap-1 text-sm">
                <p>{item.price}</p>
                <span>{item.curr}</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-400 text-xs">Highest Bid</h4>
              <div className="text-white flex gap-1 text-sm">
                <p>{item.highestBid}</p>
                <span>{item.curr}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReDiscoverNft;
