import React from 'react'

function SideBar() {
  return (
    <div className='bg-gray-900 w-64 h-screen flex flex-col'>
      <div className=' w-full h-12 p-4 mb-4'>
        <button className='w-full text-gray-400 border-gray-600 border py-2 px-4 flex text-sm hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 ease-in-out'>
          + New Chat
        </button>
      </div>
      <div className='flex flex-1'>
      </div>
    </div>
  )
}

export default SideBar