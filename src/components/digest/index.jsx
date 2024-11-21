import React from 'react'
import img from '../../assets/Photo.png'

function DigestComponent() {
  return (
    <div className='h-[550px] bg-[#2B2B2B] flex justify-center items-center'>
      <div className='bg-[#3B3B3B] p-10 rounded-3xl w-[1240px] h-[430px] flex gap-[6rem] justify-center items-center'>
      <div>
        <img src={img} alt="" className='h-[21rem] w-[31rem] ' />
      </div>
      
        <div className='w-[31rem] text-white	flex flex-col justify-center '>
   <h1 className="text-[3.5rem] font-bold	 py-[18px] leading-[75px]		" >Join our weekly digest</h1>
   <p className='font-light	 text-[1.5rem]	'>Get exclusive promotions & updates straight to your inbox.</p>
   <div className='py-[2.0rem] flex '>
                  <input className='p-6 rounded-l-3xl w-[19rem] h-[4rem] ' type="email" required placeholder='Enter your email here' />
                  <input className='p-6 rounded-r-3xl bg-purple-500 text-white cursor-pointer  w-[10rem]  h-[4rem] ' type="submit" value={'Subscribe'}/>
                </div>
        </div>

    </div>
    </div>
  )
}

export default DigestComponent
