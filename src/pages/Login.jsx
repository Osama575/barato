import { useSignInUserMutation, useSignUpUserMutation } from '@/app/features/api/authApiSlice';
import supabase from '@/app/supabaseClient';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiEye } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email().min(1, "please input your email"),
  password: z.string().min(6, 'please add your password')
})

const Login = () => {
  const [signInUser] = useSignInUserMutation()
  const {register, handleSubmit,reset, formState:{errors,isSubmitting}} = useForm({
        resolver: zodResolver(signInSchema)
  })
  const [hide, setHide] = useState();
  const navigate = useNavigate()
  const isOnline = useSelector(state => state.persistedReducer.auth.user)

  const onSubmit = async (formData) => {
      try {
     const {data: newUser, error:newUserError} = await signInUser(formData)

     if(newUserError) throw newUserError

     console.log(newUser)
     
      reset()
    } catch (error) {
      console.error('Error logging in user:', error)
    }
}

useEffect(() => {
  if(isOnline){
    navigate('/')
  }
},[isOnline])


  return (
    <div className='px-5 w-screen flex flex-col justify-center items-center my-[100px] lg:flex-row gap-6'>

      <form onSubmit={handleSubmit(onSubmit)} className='border-[1px] border-black/30 rounded-md shadow-xs p-6 w-full md:w-[400px]'>
        <h1 className='font-semibold text-2xl mb-1'>Login</h1>
        <p className='text-xs text-gray-500 mb-5'>Please login below</p>
        <div className='flex flex-col gap-7'>
          <input {...register('email')} className='border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type="text" placeholder='Email' />
          {errors.email && (<p className="-mt-5 text-red-500 text-sm">{errors.email.message}</p>)}


          <div className='relative'>
            <input {...register('password')} className='w-full border border-gray rounded-sm shadow-xs h-10 p-3 placeholder:text-xs' type={hide ? 'password' : "text"} placeholder='Password' />
            <FiEye onClick={() => setHide(!hide)} className='absolute right-5 top-3'/>
          </div>
          {errors.password && (<p className="-mt-5 text-red-500 text-sm">{errors.password.message}</p>)}

          <button className='bg-primary rounded-sm shadow-lg h-10 text-white font-semibold'>Sign in</button>
          <a href="" className='text-primary text-center'>Forgot Your Password?</a>
        </div>
      </form>


      <div className='w-full flex justify-center items-center flex-col gap-2 md:w-[300px]'>
        <h1 className='text-md font-semibold '>Don’t Have An Account?</h1>
        <Link className='w-full' to='/auth/register'>
          <button className='border border-primary shadow-sm rounded-md w-full h-10 text-primary font-semibold text-sm'>Create Account</button>
        </Link>
        <p className='text-center text-xs lg:text-sm px-2'>Your privacy and security are important to us. For more information on how we use your data read our</p>
        <p className='text-xs text-primary font-semibold lg:text-sm'>Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Login