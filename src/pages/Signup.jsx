import React from 'react'
import { FiEye } from "react-icons/fi";

const Signup = () => {
  return (
    <div className='px-5 w-screen flex flex-col justify-center items-center my-[100px] lg:flex-row gap-6'>
      <form className='w-full border-[1px] border-black/30 rounded-md shadow-xs p-6 md:w-[400px]'>
        <h1 className='font-semibold text-2xl mb-1'>Create Account</h1>
        <p className='text-xs text-gray-500 mb-5'>Please register your details</p>
        <div className='flex flex-col gap-7'>
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs ' type="text" name="FirstName" id="" placeholder='First Name' />
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name='' id='' placeholder='Last Name' />
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name="FirstName" id="" placeholder='Email' />
          <div className='relative'>
            <input className='w-full border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name="FirstName" id="" placeholder='Password' />
            <FiEye className='absolute right-5 top-3'/>
          </div>
          <button className='bg-primary rounded-sm shadow-lg h-10 text-white font-semibold mb-6'>Create</button>
        </div>
      </form>
      <div className='w-full md:w-[300px] flex justify-center items-center flex-col gap-2'>
        <h1 className='text-md font-semibold '>Already Have An Account</h1>
        <button className='border border-primary shadow-sm rounded-md w-full h-10 text-primary font-semibold text-sm'>Log in</button>
        <p className='text-center text-xs lg:text-sm p-2'>Your privacy and security are important to us. For more information on how we use your data read our</p>
        <p className='text-xs text-primary font-semibold lg:text-sm'>Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Signup