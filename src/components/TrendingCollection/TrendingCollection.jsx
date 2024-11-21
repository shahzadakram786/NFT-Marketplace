import React from "react";
import imageM from "../../assets/home/trending/Primary Photo Placeholder.png";
import image1 from "../../assets/home/trending/Secondary Photo Placeholder.png";
import image2 from "../../assets/home/trending/Secondary Photo Placeholder (1).png";
import AvaImg from "../../assets/home/trending/Avatar Placeholder (1).png";
import mushimgM from "../../assets/home/trending/Primary Photo PlaceholdermushromMain.png";
import mushimg1 from "../../assets/home/trending/Secondary Photo PlaceholderMush1.png";
import mushimg2 from "../../assets/home/trending/Secondary Photo Placeholder (3).png";
import avaMus from "../../assets/home/trending/Avatar Placeholder (1)avamush.png";
import robotM from "../../assets/home/trending/Primary Photo Placeholder (1).png";
import robot1 from "../../assets/home/trending/Secondary Photo Placeholder (4).png";
import robot2 from "../../assets/home/trending/Secondary Photo Placeholder (5).png";
import avaRo from "../../assets/home/trending/Avatar Placeholder (2).png";
import { Link } from "react-router-dom";

const TrendingCollection = () => {
  const Trending = [
    {
      id: 1,
      imageMain: imageM,
      image1: image1,
      image2: image2,
      numImag: "1025+",
      title: "DSGN Animals",
      avatarImg: AvaImg,
      avatarName: "MrFox",
    },
    {
      id: 2,
      imageMain: mushimgM,
      image1: mushimg1,
      image2: mushimg2,
      numImag: "1025+",
      title: "Magic Mushrooms",
      avatarImg: avaMus,
      avatarName: "Shroomie",
    },
    {
      id: 3,
      imageMain: robotM,
      image1: robot1,
      image2: robot2,
      numImag: "1025+",
      title: "Disco Machines",
      avatarImg: avaRo,
      avatarName: "BeKind2Robots",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-start items-left text-left w-[80%] max-sm:w-[90%] max-lg:w-[90%] gap-10">
        {/* heading section  */}
        <div>
          <h2 className="text-white max-sm:text-2xl text-3xl font-bold">
            Trending Collection
          </h2>
          <p className="text-white max-sm:text-sm text-xl">
            Checkout our weekly updated trending collection.
          </p>
        </div>
        {/* iamages section  */}
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-lg:grid-cols-2  w-full content-center m-auto  ">
          {Trending.map((items) => (
            <div key={items} className="flex flex-col gap-5 max-sm:w-full">
              <Link to={"/marketplace"}>
                <img src={items.imageMain} className="max-sm:w-full" alt="" />
              </Link>
              <div className="flex gap-4 max-sm:justify-between">
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <img src={items.image1} alt="image1" />
                </Link>
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <img src={items.image2} alt="image2" />
                </Link>
                <Link
                  to={"/marketplace"}
                  className="flex justify-center items-center bg-[#A259FF] rounded-3xl cursor-pointer"
                >
                  <p className="text-white text-xl font-bold p-5 ">
                    {items.numImag}
                  </p>
                </Link>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-white text-2xl font-bold">
                    {items.title}
                  </h2>
                  <div className="flex items-center gap-4 ">
                    <img src={items.avatarImg} alt="avatar" />
                    <p className="text-white text-md">{items.avatarName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCollection;
