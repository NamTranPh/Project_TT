import React, { useState } from 'react'
import Sidebar from '~/components/Admin/Sidebar/Sidebar'
import Navbar from '~/components/Admin/Navbar/Navbar'
import AppBar from '~/components/Admin/AppBar/AppBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = ({ children }) => {
  return (
    <div className='h-screen w-full flex flex-row'>
      <Sidebar />
      <div className="ml-[200px] w-full">
        <Navbar />
        {/* <AppBar /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
