import React from 'react'
import Sidebar from './components/SideNavbar'
import Container from './components/Container'

const Dashboard = () => {
  return (
    <div className="min-h-screen md:flex ">
      <div className='h-fit'>
        <Sidebar />
      </div>
      <div className="w-full md:w-auto h-max md:flex-grow bg-gradient-to-r from-gray-100 to-gray-50">
        <Container />
      </div>
    </div>    
  )
}

export default Dashboard