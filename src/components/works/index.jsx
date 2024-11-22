import React from "react";
import img3 from "../../assets/wrk icons/Iconz (3).png";
import img2 from "../../assets/wrk icons/Iconz (2).png";
import img1 from "../../assets/wrk icons/Iconz (1).png";

const steps = [
  {
    img: img3,
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: img2,
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links, and floor price.",
  },
  {
    img: img1,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

function WorksComponent() {
  return (
    <div className=" flex flex-col  bg-[#2B2B2B] text-white w-[80%] max-sm:w-[90%] max-lg:w-[90%] mx-auto gap-10">
      {/* Header */}
      <div className=" ">
        <h3 className="font-semibold text-3xl font-Work Sans max-sm:text-2xl ">
          How It Works
        </h3>
        <p className="font-normal max-sm:text-xl">
          Find out how to get started
        </p>
      </div>

      {/* Steps */}
      <div className="flex max-sm:flex-col w-full max-sm:justify-start justify-center items-center gap-8 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className=" bg-[#3B3B3B] rounded-[1.5rem] max-sm:p-2 p-5 flex flex-col justify-between gap-5 items-center max-sm:flex-row"
          >
            <div className="max-sm:h-full max-sm:w-full">
            <img src={step.img} alt={`icon${index + 1}`} className="h-full w-full" />
            </div>
            <div className="flex flex-col max-sm:text-left gap-2">
              <p className=" max-sm:text-lg text-2xl font-semibold max-lg:text-lg">{step.title}</p>
              <p className="max-sm:text-sm max-lg:text-sm">
              {step.description}
            </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksComponent;
