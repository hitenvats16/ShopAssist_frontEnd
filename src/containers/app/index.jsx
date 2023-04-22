import React from 'react'
import SideBar from '../../components/sidebar'
import MainSection from '../../components/mainsection'

function App() {
  return (
    <div className='bg-gray-700 w-full h-screen flex'>
        <SideBar/>
        <MainSection/>
    </div>
  )
}

export default App