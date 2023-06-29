import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      {/* we will show either maincontainer or show watch page */}
      {/* <MainContainer />
      <watchPage /> */} 
      <Outlet />
    </div>
  )
}

export default Body;
