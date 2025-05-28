import React, { useState } from 'react'
import Sidebar from '~/components/Admin/Sidebar/Sidebar'
import Navbar from '~/components/Admin/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  const toggleSidebbar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  }

  return (
    <div className='h-screen w-full flex flex-row'>
      <Sidebar isOpen = {isSidebarOpen}/>
      <div className={`${isSidebarOpen ? 'ml-[250px]' : 'ml-0'} w-full transition-all duration-600`}>
        <Navbar onToggleSidebar = {toggleSidebbar} />
        {/* <AppBar /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
