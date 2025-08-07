import React from 'react'
import { useSidebar } from '../contexts/SidebarContext'
import Sidebar from '../components/dashboardLayout/Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  const {isOpen} = useSidebar()
  return (
     <div className={`w-full flex flex-col bg-gray-100 h-screen transition-all duration-300 overflow-y-auto relative
  ${isOpen?" pl-11 md:pl-[250px]" : "pl-0 "}`}>
      
    <Sidebar/>

      <div id='adminDetail'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
