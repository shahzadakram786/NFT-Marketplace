import React from "react";
import bgImageTop from "../../assets/imagebgcreatortop.png";
import person10 from "../../assets/Person10.png";
import { CgCopy } from "react-icons/cg";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsDiscord, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";


const DynamicPage = () => {
  return (
    <div className="w-full bg-[#2B2B2B] border-b-gray-500">
      <div className=" border-b-2 border-gray-700">
        <div className="flex flex-col relative mb-20">
          <div className="">
            <img className="w-full" src={bgImageTop} alt="" />
          </div>
          <div className="flex w-[50%] bg-transparent  justify-start absolute left-[25%] -bottom-14">
            <div className="bg-transparent rounded-2xl overflow-hidden">
              <img src={person10} alt="" />
            </div>
          </div>
        </div>
        {/* container  */}
        <div className="flex justify-center text-center py-5 w-full">
          <div className="flex gap-10 flex-col w-[50%] max-md:w-[80%]  max-lg:w-[80%] max-sm:w-[85%] ">
            {/* for title and button */}
            <div className="flex justify-between gap-5 w-full items-center m-auto max-md:flex-col max-lg:flex-col  max-md:justify-start max-md:items-start max-lg:justify-start max-lg:items-start">
              <div>
                <h2 className="text-white font-bold text-3xl max-sm:text-2xl">AnimaKid</h2>
              </div>
              {/* fot button copy and follow */}
              <div className="flex max-sm:flex-col gap-5 text-sm max-sm:w-full">
                <Link
                  to={"#"}
                  className="flex items-center p-3 rounded-2xl gap-2 bg-purple-500 max-sm:justify-center"
                >
                  <CgCopy color="white" cursor="pointer" />
                  <button className="text-white ">0xc0e3...ewf89c</button>
                </Link>
                <Link
                  to={"#"}
                  className=" flex items-center gap-2 py-2 px-8 rounded-2xl border-purple-600 border max-sm:justify-center "
                >
                  <BiPlus color="white" cursor="pointer" />
                  <button className="text-white ">Follow</button>
                </Link>
              </div>
            </div>

            {/* for next row amount followers and volume nfst */}
            <div className=" w-full flex flex-col items-start gap-6">
              <div className="flex text-white justify-between w-[40%] max-md:w-full max-md:items-start max-md:justify-start max-md:gap-10 lg:w-[50%] max-sm:w-full">
                <div className="">
                  <h2 className="font-bold max-sm:text-xl max-lg:text-2xl max-md:text-xl text-xl ">
                    250K+
                  </h2>
                  <p className="max-sm:text-sm text-lg max-lg:text-xl max-md:text-lg ">
                    Volume
                  </p>
                </div>
                <div>
                  <h2 className="font-bold max-sm:text-xl max-lg:text-2xl max-md:text-xl text-xl">
                    50K+
                  </h2>
                  <p className=" max-sm:text-sm text-lg max-lg:text-xl   max-md:text-lg  ">
                    Nfts Sold
                  </p>
                </div>
                <div>
                  <h2 className="font-bold max-sm:text-xl max-lg:text-2xl max-md:text-xl text-xl">
                    3000K+
                  </h2>
                  <p className="max-sm:text-sm text-lg max-lg:text-xl  max-md:text-lg">
                    Followers
                  </p>
                </div>
              </div>

              {/* Bio section  */}
              <div className="flex flex-col text-left gap-3">
                <h3 className="text-gray-500">Bio</h3>
                <p className="text-white text-max-md">
                  The Internet's Friendliest Designer Kid.
                </p>
              </div>

              {/* Links section */}
              <div className="flex flex-col gap-3">
                <h3 className="text-left text-gray-500 ">Links</h3>
                <div className="flex  gap-5">
                  <BsDiscord
                    size={30}
                    color="gray"
                    className="cursor-pointer"
                  />
                  <BsYoutube
                    size={30}
                    color="gray"
                    className="cursor-pointer"
                  />
                  <BsTwitter
                    size={30}
                    color="gray"
                    className="cursor-pointer"
                  />
                  <BsInstagram
                    size={30}
                    color="gray"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Created 302 ,  owned 67,   Collection 4  */}
            <div className="flex justify-center gap-5 items-center pt-2 w-full ">

                <div  className="flex justify-center gap-5 max-sm:gap-2 items-end ">

                <div className="  text-white flex items-center gap-3 py-3 px-20 max-md:px-6 max-md:gap-1 max-lg:px-6  max-sm:px-2 max-sm:text-sm border-b-2 border-gray-500 cursor-pointer">
                    <p className="px-3 font-semibold">Created</p><span className="text-sm max-sm:hidden py-1 px-3 rounded-2xl bg-gray-600">302</span>
                </div>
                <div className="  text-white flex items-center gap-3 py-3 px-20  max-md:px-6 max-md:gap-1 max-lg:px-6  max-sm:px-2 max-sm:text-sm cursor-pointer">
                    <p className="text-gray-400 px-3 font-semibold">Owned</p><span className="max-sm:hidden  text-sm py-1 px-3 rounded-2xl bg-gray-600">67</span>
                </div>
                <div className= "text-white  flex items-center gap-3 py-3 px-20   max-md:px-6 max-lg:px-6 max-sm:px-2 max-sm:text-sm max-md:gap-1 cursor-pointer">
                    <p className="text-gray-400 px-3 font-semibold">Collection</p><span className="max-sm:hidden  text-sm py-1 px-3 rounded-2xl bg-gray-600">4</span>
                </div>

                </div>

                

            </div>

    </div>
  );
};

export default DynamicPage;
