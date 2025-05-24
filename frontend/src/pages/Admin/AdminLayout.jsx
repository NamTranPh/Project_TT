import React from 'react'
import Sidebar from '~/components/Admin/Sidebar/Sidebar'
import Navbar from '~/components/Admin/Navbar/Navbar'
import AppBar from '~/components/Admin/AppBar/AppBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-full flex flex-row'>
      <Sidebar />
      <div>
        <Navbar />
        <AppBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
