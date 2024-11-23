import React from 'react'
import { Link } from 'react-router-dom'
import marketLogo from '../../assets/nav/Storefront.png'
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io'

const Header = () => {

  const navLinks = [
   'Marketplace' , 'Rankings' , 'Connect a wallet'
  ]








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


          <div>

          </div>
        </div>
    </div>
  </nav>
</>  )
}

export default Header