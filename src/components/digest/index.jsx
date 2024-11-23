import React from "react";
import img from "../../assets/Photo.png";

function DigestComponent() {
  return (
      <div className="bg-[#3B3B3B] max-sm:bg-[#2B2B2B] p-10 max-sm:p-0 rounded-3xl flex gap-[6rem] justify-center w-[80%] max-sm:w-[90%] max-lg:w-[90%] items-center">

        <div className=" flex  justify-between max-sm:flex-col gap-5 w-full h-full">

        <div className="rounded-3xl overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover " />
        </div>

        <div className="w-[50%] max-sm:w-full text-white	flex flex-col justify-center gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold max-sm:text-2xl max-lg:text-4xl">
            Join our weekly digest
            </h1>
           <p className="font-light	 text-2xl max-sm:text-lg max-lg:text-lg">
             Get exclusive promotions & updates straight to your inbox.
          </p>
          </div>
          
          <div className="flex max-sm:flex-col max-sm:gap-5 ">
            <input
              className="p-6 rounded-l-3xl w-[60%] max-sm:w-full max-sm:rounded-3xl max-sm:p-3 "
              type="email"
              required
              placeholder="Enter your email here"
            />
            <input
              className="p-6 rounded-r-3xl bg-purple-500 text-white cursor-pointer  w-[40%] max-sm:w-full max-sm:rounded-3xl max-sm:p-3 "
              type="submit"
              value={"Subscribe"}
            />
          </div>
        </div>


        </div>
        
      </div>
    
  );
}

export default DigestComponent;
