import React from "react";
import avatarImg from "../../assets/hero/Avatar Placeholder.png";
import cardImg from "../../assets/hero/Image Placeholder.png";

const SingleCard = () => {
  return (
    <div className="bg-[#3B3B3B] rounded-3xl h-[100%] w-full">
      <div className="w-full">
        <img className="w-full" src={cardImg} alt="cardimage" />
      </div>
      <div className="flex flex-col p-5 gap-3">
        <h3 className="text-xl text-white">Space Walking</h3>

        {/* avatar  */}
        <div className="flex gap-4">
          <img src={avatarImg} alt="avatar" />
          <p className="text-white">AnimaKid</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
