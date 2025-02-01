import React from "react";
import signimg from "../../assets/signup img/sign.png";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";

function LoginComponent() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-[#2B2B2B] grid grid-cols-2 max-md:grid-cols-2 gap-9 max-sm:grid-cols-1 max-sm:justify-center	 max-sm:w-full  ">
      <div className="h-full ">
        <img src={signimg} className="h-full" alt="" />
      </div>
      <div className="flex flex-col max-md:items-center w-[60%] max-sm:w-[90%] max-sm:items-center max-sm:m-auto">
        <form className="flex flex-col font-sans gap-9 max-sm:w-full py-5  ">
          <div className="flex flex-col text-white gap-4 max-lg:w-full ">
            <h1 className="text-5xl font-semibold	max-lg:text-3xl ">
              Login Your Account
            </h1>
            <p className="text- font-normal w-[70%]	max-lg:text-sm max-lg:w-full 	">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>

          <div className="flex flex-col max-sm:w-full gap-6 ">

            <div className="relative ">

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            
            />

            {formik.errors.email ? (
              <div className="text-red-500 text-sm absolute bottom-[-18px]  left-0">
                {formik.errors.email}
              </div>
            ) : null}


            </div>

            <div className="relative ">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.errors.password ? (
              <div className="text-red-500 text-sm absolute bottom-[-18px] left-0">
                {formik.errors.password}
              </div>
            ) : null}

          </div>

          <div className='text-right'>
              <Link to="/forgot-password" className="text-[#A259FF] text-sm font-medium">
                Forgot Password?
              </Link>
            </div>



          <button
              type="submit"
              className='p-3 max-sm:p-2 rounded-3xl border-2 border-none bg-[#A259FF] text-white cursor-pointer text-[l9px]'
            >
              Login
            </button>
            
          </div>

        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
