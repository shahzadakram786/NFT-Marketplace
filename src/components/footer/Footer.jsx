
import React from 'react'
import { BsDiscord, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import marketLogo from '../../assets/nav/Storefront.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-[#3B3B3B] p-20 max-sm:p-8  max-md:p-8">
      <div className="flex flex-col w-[90%] max-md:w-full gap-6">
        {/* upper footer  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 gap-5 max-sm:gap-10 justify-between w-[100%] ">
          {/* nft marketplace p  */}
          <div className="flex flex-col flex-wrap gap-10">
            {/* for the logo  */}
            <div>
              <Link to={"/"} className="flex items-center gap-2">
                <img src={marketLogo} alt="" />
                <h3 className="text-white bolder text-2xl max-sm:text-xl max-md:text-xl">
                  NFT Marketplace
                </h3>
              </Link>
            </div>
            {/* for below content  */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-gray-400 max-sm:text-sm">
                  NFT marketplace UI created with Anima for Figma.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-400 text-1xl max-sm:text-sm">
                  Join our community :
                </p>
                {/* for social media icons  */}
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

          {/* explore  */}
          <div className="flex flex-col gap-10 max-sm:gap-5">
            {/* theese p should be link of navbar so well work on it  */}
            <h3 className="text-white bolder text-2xl max-sm:text-xl max-md:text-xl">
              Explore
            </h3>

            <div className="flex flex-col gap-5 max-sm:text-sm">
              <Link to={"/marketplace"} className="text-gray-400">
                Marketplace
              </Link>
              <Link to={"/rankings"} className="text-gray-400">
                Rankings
              </Link>
              <Link to={"/connect-a-wallet"} className="text-gray-400">
                Connect a wallet
              </Link>
            </div>
          </div>
          {/* join oir weekly digest  */}
          <div className="flex flex-col gap-10">
            <h3 className="text-white bolder text-2xl max-sm:text-xl max-md:text-xl">
              Join our Weekly Digest
            </h3>

            <div className="flex flex-col gap-5">
              <p className="text-gray-400 max-sm:text-sm">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <div className="max-sm:w-full max-md:gap-5 flex max-md:flex-col ">
                <input
                  className="p-5 rounded-l-3xl w-full max-sm:rounded-3xl max-md:rounded-3xl max-sm:text-sm max-md:text-sm"
                  type="email"
                  required
                  placeholder="Enter your email here"
                />
                <input
                  className="p-5 rounded-r-3xl w-full max-sm:rounded-3xl max-md:rounded-3xl max-sm:text-sm bg-purple-500 text-white cursor-pointer"
                  type="submit"
                  value={"Subscribe"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* bottom footer  */}
        <div className=" flex border-t-2 border-gray-500 py-5">
          <p className="text-start text-gray-400">
            @ NFT Market. Use this template freely
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
