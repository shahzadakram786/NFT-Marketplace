import React, { useState } from 'react';
import signimg from '../../assets/signup img/sign.png';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';

function SignupComponent() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      console.log('ouput',values);
    },
  });


  const [passwordType , setPasswordType] = useState('password')
  const [confirmPasswordType ,setConfirmPasswordType ] = useState('password');
  const [passwordIcon , setPasswordIcon] = useState(eyeOff);
  const [confirmPasswordIcon , setConfirmPasswordIcon] = useState(eyeOff);


   const handlePasswordToggle = () => {
    if(passwordType === 'password'){
        setPasswordIcon(eye);
        setPasswordType('text');
    }else{
        setPasswordIcon(eyeOff);
        setPasswordType('password')
    }
   }


   const handleConfirmPasswordToogle = () => {

    if(confirmPasswordType === 'password'){
        setConfirmPasswordIcon(eye);
        setConfirmPasswordType('text');
    }else{
        setConfirmPasswordIcon(eyeOff);
        setConfirmPasswordType('password');
    }

   }


  return (
    <div className="bg-[#2B2B2B] grid grid-cols-2 max-md:grid-cols-2 gap-9 max-sm:grid-cols-1 max-sm:justify-center max-sm:w-full">
      <div className="h-full">
        <img src={signimg} className="h-full" alt="" />
      </div>
      <div className="flex flex-col max-md:items-center w-[60%] max-sm:w-[90%] max-sm:items-center max-sm:m-auto">
        <form
          className="flex flex-col font-sans gap-9 max-sm:w-full py-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col text-white gap-4 max-lg:w-full">
            <h1 className="text-5xl font-semibold max-lg:text-3xl">
              Create account
            </h1>
            <p className="text- font-normal w-[70%] max-lg:text-sm max-lg:w-full">
              Welcome! Enter your details and start creating, collecting, and
              selling NFTs.
            </p>
          </div>

          <div className="flex flex-col max-sm:w-full gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className="text-red-500 text-sm absolute bottom-[-18px] left-0">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="text-red-500 text-sm absolute bottom-[-18px] left-0">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type={passwordType}
                id="password"
                name="password"
                placeholder="Password"
                className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handlePasswordToggle}>

                <Icon icon={passwordIcon} size={20}/>

              </span>


              
              {formik.errors.password ? (
                <div className="text-red-500 text-sm absolute bottom-[-18px] left-0">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type={confirmPasswordType}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="rounded-2xl border-2 border-gray-400 p-2 placeholder-black w-full"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleConfirmPasswordToogle}>
                <Icon icon={confirmPasswordIcon} size={20} />
              </span>


              {formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm absolute bottom-[-18px] left-0">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="p-3 max-sm:p-2 rounded-3xl border-2 border-none bg-[#A259FF] text-white cursor-pointer text-[19px]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupComponent;