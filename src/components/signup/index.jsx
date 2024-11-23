import React from 'react'
import signimg from '../../assets/signup img/sign.png'

function SignupComponent() {
    return (
        <div className='bg-[#2B2B2B] grid grid-cols-2 max-md:grid-cols-2 gap-9 max-sm:grid-cols-1 max-sm:justify-center	 max-sm:w-full  ' >
            <div className='h-full '>
                <img  src={signimg} className='h-full' alt="" />
            </div>
            <div className='flex flex-col max-md:items-center w-[60%] max-sm:w-[90%] max-sm:items-center max-sm:m-auto'>

                <form className='flex flex-col font-sans gap-9 max-sm:w-full py-5  '>
                    <div className='flex flex-col text-white gap-4 max-lg:w-full '>
                        <h1 className='text-5xl font-semibold	max-lg:text-3xl ' >Create account</h1>
                        <p className='text- font-normal w-[70%]	max-lg:text-sm max-lg:w-full 	'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                    </div>

                    <div className='flex flex-col max-sm:w-full '>
                  

                        <input type="text" id="name" name="name" required placeholder='Username' className=' rounded-3xl border-2 border-gray-400 p-2 text-black placeholder-black' /><br />

                        <input type="email" id="email" name="email" required placeholder='Email Address' className=' rounded-3xl border-2 border-gray-400 p-2 placeholder-black' /><br />

                        <input type="password" id="password" name="password" required placeholder='Password' className=' rounded-3xl border-2 border-gray-400 p-2 placeholder-black' /><br />
                        <input type="password" id="confirmPassword" name="confirmPassword" required placeholder='Confirm Password' className=' rounded-3xl border-2 border-gray-400 p-2 placeholder-black' /><br />

                    <input type="submit" value="Submit" className='p-3 max-sm:p-2 rounded-3xl border-2 border-none bg-[#A259FF] text-white  cursor-pointer text-[l9px]' />

                    </div>


                </form>

            </div>
        </div>
    )
}


export default SignupComponent
