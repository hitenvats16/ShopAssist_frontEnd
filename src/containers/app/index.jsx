import React from 'react'
import SideBar from '../../components/sidebar'
import MainSection from '../../components/mainsection'
import { Navigate } from 'react-router-dom'

function App({profile}) {
  console.log(profile)
  
  if(!profile){
    return <Navigate to = '/login'/>
  }

  return (
    <div className='bg-gray-700 w-full h-screen flex'>
        <SideBar profile={profile}/>
        <MainSection profile={profile}/>
    </div>
  )
}

export default App