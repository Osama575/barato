import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='p-5 w-screen flex  justify-center items-center my-[100px] '>
      <form className='w-full border-[1px] border-black/30 rounded-md shadow-xs p-6 lg:w-[400px]'>
        <h1 className='font-semibold text-2xl mb-1'>Forgot Password</h1>
        <p className='text-xs text-gray-500 mb-5'>We will send you an email to reset your passwords</p>
        <div className='flex flex-col gap-7'>
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name="FirstName" id="" placeholder='Email' />
          <button className='bg-primary rounded-sm shadow-lg h-10 text-white font-semibold mb-6'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword