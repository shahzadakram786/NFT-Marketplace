import React from 'react'
import img3 from "../../assets/wrk icons/Iconz (3).png"
import img2 from "../../assets/wrk icons/Iconz (2).png"
import img1 from "../../assets/wrk icons/Iconz (1).png"
function WorksComponent() {
  return (
    <div className="h-[68rem] text-4xl bg-[#2B2B2B] text-white   px-[4rem] py-[5rem]"  >
        <div className="px-[4rem] py-[5rem]">
      <h3 className='font-semibold text-5xl font-Work Sans
	'>How It Works</h3>
      <p className="font-normal	" >Find out how to get started</p>
      </div>
      <div className="flex 	 justify-center align-center gap-[3rem] text-center">
          
      <div className="h-[539px] w-[380px] bg-[#3B3B3B] rounded-[1.5rem] p-[2rem] flex flex-col justify-center items-center">
          <img src={img3} alt="icon2" className='h-[24rem]' />
          <p className='text-[31px] py-[1rem]'>Setup Your wallet</p>
          <p className='text-[19px] leading-[29px] py-[10px]text-[19px] leading-[29px] py-[10px]	'>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>
        <div className="h-[539px] w-[380px] bg-[#3B3B3B] rounded-[1.5rem] p-[2rem] flex flex-col justify-center items-center">
          <img src={img2} alt="icon3" className='h-[24rem]'  />
          <p className='text-[31px] py-[1rem]'>Create Collection</p>
          <p className='text-[19px] leading-[29px] py-[10px]text-[19px] leading-[29px] py-[10px]'>Upload your work and setup your collection. Add a description, social links and floor price.</p>
        </div>
        <div className="h-[539px] w-[380px] bg-[#3B3B3B] rounded-[1.5rem] p-[2rem] flex flex-col justify-center items-center">
          <img src={img1} alt="icon4"  className='h-[24rem]' />
          <p className='text-[31px] py-[1rem]'>Start Earning</p>
          <p className='text-[19px] leading-[29px] py-[10px]text-[19px] leading-[29px] py-[10px]'>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
        </div>

      </div>
    </div>
  )
}

export default WorksComponent
