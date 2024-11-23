import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import marketLogo from '../../assets/nav/Storefront.png';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosMenu, IoIosClose } from 'react-icons/io';


const Header = () => {
  
  
  const navLinks = ['Marketplace', 'Rankings', 'Connect a wallet'];
  const [mobileOpen, setMobileOpen] = useState(false);



  return (

<>
  <nav className='bg-[#2B2B2B] w-[100%] h-auto '>
    <div className='p-6 px-20 flex justify-between items-center'>
      {/* for logo */}
        <Link to={'/'} className='flex items-center gap-2'>
            <img src={marketLogo} alt="" />
            <h3 className='text-white bolder text-xl'>NFT Marketplace</h3>
        </Link>


        <button className='block md:hidden'>
          <IoIosMenu color='white' size={40} />
        </button>

        {/* for navigation links  */}

        <div className='md:flex gap-10 items-center hidden'>
          <div className='text-white flex gap-10'>
            {navLinks.map((items) => (
              <div key={items}>
                <Link  to={`/${items.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className='text-xl'>{items}</p>
              </Link>
              </div>
              
            ))}
          </div>

          <Link to={'/signup'} className='flex items-center gap-3 text-white bg-[#A259FF] border-none px-6 py-3 rounded-2xl'>
          <AiOutlineUser size={20} />
          <p className='text-xl'>Sign up</p>
          
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
          <div className="lg:flex gap-10 items-center hidden">
            <div className="text-white flex gap-10">
              {navLinks.map((item) => (
                <div key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xl"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
            <Link
              to="/signup"
              className="flex items-center gap-3 text-white bg-[#A259FF] border-none px-6 py-3 rounded-2xl"
            >
              <AiOutlineUser size={20} />
              <p className="text-xl">Sign up</p>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#1E1E1E] p-6">
            <div className="text-white flex flex-col gap-6 md:justify-center md:items-center">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
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
