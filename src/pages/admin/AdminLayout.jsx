import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className='w-screen h-screen flex items-start gap-7 lg:px-5 lg:my-5'>
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <div className='h-full grow overflow-y-scroll'>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout