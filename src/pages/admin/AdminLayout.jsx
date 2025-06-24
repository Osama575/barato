import { useGetUserQuery } from '@/app/features/api/authApiSlice'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AdminLayout = () => {
    const userId = useSelector(state => state.persistedReducer.auth.user)
    const {data:user, isLoading} = useGetUserQuery(userId?.id);
    console.log(user)
  
  
  if(isLoading){
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='loader-primary'></div>
      </div>
    );
  }


  return (
    <div className='w-screen h-screen flex items-start gap-7 lg:px-5 lg:my-5'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <div className='h-full grow overflow-y-scroll'>
          {user && user[0].role === 'admin'  ? 
            <Outlet />
           : <Navigate to="/" replace />}
        </div>
    </div>
  )
}

export default AdminLayout