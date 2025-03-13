import React from 'react'

const Login = () => {
  return (
    <div className='px-5 w-screen flex flex-col justify-center items-center my-[100px] lg:flex-row gap-6'>
      <form className='border-[1px] border-black/30 rounded-md shadow-xs p-6 w-full md:w-[400px]'>
        <h1 className='font-semibold text-2xl mb-1'>Login</h1>
        <p className='text-xs text-gray-500 mb-5'>Please login below</p>
        <div className='flex flex-col gap-7'>
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name="FirstName" id="" placeholder='Email' />
          <input className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" name="FirstName" id="" placeholder='Password' />
          <button className='bg-primary rounded-sm shadow-lg h-10 text-white font-semibold'>Sign in</button>
          <a href="" className='text-primary text-center'>Forgot Your Password?</a>
        </div>
      </form>
      <div className='w-full flex justify-center items-center flex-col gap-2 md:w-[300px]'>
        <h1 className='text-md font-semibold '>Don’t Have An Account?</h1>
        {/* <Link to='Signup'> */}
          <button className='border border-primary shadow-sm rounded-md w-full h-10 text-primary font-semibold text-sm'>Create Account</button>
        {/* </Link> */}
        <p className='text-center text-xs lg:text-sm px-2'>Your privacy and security are important to us. For more information on how we use your data read our</p>
        <p className='text-xs text-primary font-semibold lg:text-sm'>Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Login