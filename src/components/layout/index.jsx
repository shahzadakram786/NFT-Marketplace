import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <div>
            <Header/>
            {/* <div className='bg-[#2B2B2B] flex flex-col justify-center items-center py-20'> */}
                <Outlet/>
            {/* </div> */}
            <Footer/>
        </div>
    </div>
  )
}

export default Layout