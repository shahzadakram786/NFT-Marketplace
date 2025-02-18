import React from "react";

import { Link } from "react-router-dom";

// import img9 from "../../assets/Photo & Icon.png"
function Catogries({data}) {
 

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="">
        <h1 className="font-semibold text-white text-4xl max-sm:text-2xl ">
          Browse Categories
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2 ">
        {data.map((category) => (
          <Link to="/marketplace" className="transform transition duration-500 hover:scale-[0.95]">
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
