import React from "react";
import img from "../../assets/Photo & Icon.png";
import img2 from "../../assets/Photo & Icon (1).png";
import img3 from "../../assets/Photo & Icon (2).png";
import img4 from "../../assets/Photo & Icon (3).png";
import img5 from "../../assets/Photo & Icon (4).png";
import img6 from "../../assets/Photo & Icon (5).png";
import img7 from "../../assets/Photo & Icon (7).png";
import img8 from "../../assets/Photo & Icon (8).png";
import { Link } from "react-router-dom";

// import img9 from "../../assets/Photo & Icon.png"
function Catogries() {
  const categories = [
    {
      id: 1,
      name: "Art",
      image: img,
    },
    {
      id: 2,
      name: "Collectibles",
      image: img2,
    },
    {
      id: 3,
      name: "Music",
      image: img3,
    },
    {
      id: 4,
      name: "Photography",
      image: img4,
    },
    {
      id: 5,
      name: "Video",
      image: img5,
    },
    {
      id: 6,
      name: "Utility",
      image: img6,
    },
    {
      id: 8,
      name: "Sport",
      image: img7,
    },
    {
      id: 9,
      name: "Virtual Worlds",
      image: img8,
    },
  ];

  return (
    <div className="flex flex-col w-[80%] max-md:w-[90%] max-lg:w-[90%] gap-10">
      <div className="">
        <h1 className="font-semibold text-white text-4xl max-sm:text-2xl ">
          Browse Categories
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2 ">
        {categories.map((category) => (
          <Link to="/marketplace">
            <div
              key={category.id}
              className="bg-[#3B3B3B] rounded-3xl font-[Work Sans] font-semibold	text-xl"
            >
              <img className="w-full" src={category.image} alt="" />
              <p className="p-5 text-white max-md:text-lg max-sm:text-sm">
                {" "}
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catogries;
