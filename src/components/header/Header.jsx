import React, { useState } from "react";
import { Link } from "react-router-dom";
import marketLogo from "../../assets/nav/Storefront.png";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useReadingProgress } from "../progressPageBar";

const Header = () => {
  const navLinks = ["Marketplace", "Rankings", "Connect a wallet"];
  const [mobileOpen, setMobileOpen] = useState(false);

  const completion = useReadingProgress();

  return (
    <>
      <nav className="bg-[#2B2B2B] w-full h-auto sticky z-50 top-0 backdrop-blur-3xl py-2">
      <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-[#A259FF]`}
      />
        <div className="p-6 px-8  max-sm:p-2 flex justify-between items-center max-sm:w-[90%] m-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <img src={marketLogo} alt="Marketplace Logo" />
            <h3 className="text-white font-bold text-sm md:text-base lg:text-lg">
              NFT Marketplace
            </h3>
          </Link>

          {/* Menu Button for Mobile */}
          <button
            className="block lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <IoIosClose color="white" size={40} />
            ) : (
              <IoIosMenu color="white" size={40} />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="lg:flex gap-2 xl:gap-10 items-center justify-center hidden">
            <div className="text-white flex gap-10">
              {navLinks.map((item) => (
                <div key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-lg group relative"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#A259FF] group-hover:w-3/6 group-hover:left-1/4"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#A259FF] group-hover:w-3/6 group-hover:right-1/4"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-2">
            <Link
              to="/login"
              className="flex items-center gap-3 text-white border-none px-6 py-3 rounded-2xl"
            >
              <p className="text-lg">Sign In</p>
            </Link>
            <Link
              to="/signup"
              className="relative inline-flex items-center gap-3 overflow-hidden font-medium transition-all bg-[#A259FF] rounded-2xl group px-6 py-3"
            >
              <span className="absolute bottom-0 left-0 w-56 h-48 bg-purple-700 rounded translate-x-full translate-y-full transition-all duration-500 ease-out mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
              <AiOutlineUser
                size={20}
                className="relative z-10 text-white transition-colors duration-300 ease-in-out group-hover:text-white"
              />
              <p className="relative z-10 text-lg text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign up
              </p>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#1E1E1E] h-full w-full absolute p-6">
            <div className="text-white flex flex-col gap-6 md:justify-center md:items-center">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xl"
                  onClick={() => setMobileOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              ))}
            </div>
            <Link
              to="/signup"
              className="flex items-center gap-3 text-white bg-[#A259FF] border-none px-6 py-3 rounded-2xl mt-4 md:m-auto md:w-[30%] md:mt-5 md:justify-center"
              onClick={() => setMobileOpen(false)} // Close menu on click
            >
              <AiOutlineUser size={20} />
              <p className="text-xl">Sign up</p>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
