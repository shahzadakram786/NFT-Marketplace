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
          <div className="flex gap-10 flex-col w-[50%] ">
            {/* for title and button */}
            <div className="flex justify-between gap-5 w-full items-center m-auto">
              <div>
                <h2 className="text-white font-bold text-3xl">AnimaKid</h2>
              </div>
              {/* fot button copy and follow */}
              <div className="flex  gap-5 text-sm">
                <Link
                  to={"#"}
                  className="flex items-center p-3 rounded-2xl gap-2 bg-purple-500"
                >
                  <CgCopy color="white" cursor="pointer" />
                  <button className="text-white ">0xc0e3...ewf89c</button>
                </Link>
                <Link
                  to={"#"}
                  className=" flex items-center gap-2 py-2 px-8 rounded-2xl border-purple-600 border "
                >
                  <BiPlus color="white" cursor="pointer" />
                  <button className="text-white ">Follow</button>
                </Link>
              </div>
            </div>

            {/* for next row amount followers and volume nfst */}
            <div className=" w-full flex flex-col items-start gap-6">
              <div className="flex text-white justify-between w-[40%]">
                <div>
                  <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-xl ">
                    250K+
                  </h2>
                  <p className="max-sm:text-xl text-lg max-lg:text-xl">
                    Volume
                  </p>
                </div>
                <div>
                  <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-xl">
                    50K+
                  </h2>
                  <p className=" max-sm:text-xl text-lg max-lg:text-xl">
                    Nfts Sold
                  </p>
                </div>
                <div>
                  <h2 className="font-bold max-sm:text-2xl max-lg:text-2xl text-xl">
                    3000K+
                  </h2>
                  <p className="max-sm:text-xl text-lg max-lg:text-xl">
                    Followers
                  </p>
                </div>
              </div>

              {/* Bio section  */}
              <div className="flex flex-col text-left gap-3">
                <h3 className="text-gray-500">Bio</h3>
                <p className="text-white text-md">
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
            <div className="flex justify-center gap-5 items-center pt-2">

                <div  className="flex justify-center gap-5 items-end ">

                <div className="  text-white flex items-center gap-3 py-3 px-20 border-b-2 border-gray-500 cursor-pointer">
                    <p className="px-3 font-semibold">Created</p><span className="text-sm py-1 px-3 rounded-2xl bg-gray-600">302</span>
                </div>
                <div className="  text-white flex items-center gap-3 py-3 px-20  cursor-pointer">
                    <p className="text-gray-400 px-3 font-semibold">Owned</p><span className=" text-sm py-1 px-3 rounded-2xl bg-gray-600">67</span>
                </div>
                <div className= "text-white  flex items-center gap-3 py-3 px-20  cursor-pointer">
                    <p className="text-gray-400 px-3 font-semibold">Collection</p><span className=" text-sm py-1 px-3 rounded-2xl bg-gray-600">4</span>
                </div>

                </div>

                

            </div>

    </div>
  );
};

export default DynamicPage;
