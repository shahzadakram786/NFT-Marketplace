import React from "react";
import { Link } from "react-router-dom";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
import person7 from "../../assets/person7.png";
import person8 from "../../assets/person8.png";
import person9 from "../../assets/person9.png";
import person10 from "../../assets/person10.png";
import person11 from "../../assets/person11.png";
import person12 from "../../assets/person12.png";

const TopCards = () => {
  const topCreators = [
    {
      id: 1,
      image: person1,
      person: "Keepitreal",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 2,
      image: person2,
      person: "DigiLab",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 3,
      image: person3,
      person: "GravityOne",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 4,
      image: person4,
      person: "Juanie",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 5,
      image: person5,
      person: "BlueWhale",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 6,
      image: person6,
      person: "Mr Fox",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 7,
      image: person7,
      person: "Shroomie",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 8,
      image: person8,
      person: "Robotica",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 9,
      image: person9,
      person: "RustyRobot",
      totalSales: 34.53,
      curr: "ETH",
    },
    {
      id: 10,
      image: person10,
      person: "Animakid",
      totalSales: 34.53,
      curr: "ETH",
    },
    ,
    {
      id: 11,
      image: person11,
      person: "Dotgu",
      totalSales: 34.53,
      curr: "ETH",
    },
    ,
    {
      id: 12,
      image: person12,
      person: "Ghiblier",
      totalSales: 34.53,
      curr: "ETH",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2  w-full ">
      {topCreators.map((items) => (
        <Link
          to={"/rankings"}
          key={items}
          className=" rounded-3xl w-full max-md:p-4 p-5 max-sm:w-full flex flex-col max-md:flex-row max-lg:flex-row max-md:gap-4 gap-5 bg-[#3B3B3B] relative"
        >
          <div className="flex justify-center gap-5">
            <p className="bg-[#2B2B2B] text-xs text-center p-2 rounded-[50%] text-gray-500 absolute top-3 left-4  flex items-center justify-center w-8 h-8">
              {items.id}
            </p>
            <div>
              <img src={items.image} alt="" />
            </div>
          </div>
          <div className=" flex flex-col items-left justify-center w-full gap-2">
            <div>
              <h2 className="text-white text-xl font-bold text-center max-lg:text-left  max-md:text-left">
                {items.person}
              </h2>
            </div>
            <div className="flex items-center justify-center max-lg:justify-start max-md:justify-start max-md:items-start gap-2 max-md:gap-3">
              <p className="text-gray-500 text-md text-center">Total Sales:</p>
              <span className="text-white flex text-md  font-light">
                <p>{items.totalSales}</p>
                <p>{items.curr}</p>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopCards;
