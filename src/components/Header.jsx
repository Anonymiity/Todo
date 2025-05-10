import React from 'react'

const Header = () => {
  return (
    
        <div className=' h-50 text-white'> 
            <div className="bg-blue-950 text-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 text-lg sm:text-xl h-auto sm:h-14 py-3">
  <div className="font-bold mb-2 sm:mb-0">
    <span>TodoList by Tanush</span>
  </div>
  <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
    <li className="hover:cursor-pointer hover:underline">Home</li>
    <li className="hover:cursor-pointer hover:underline">Tasks</li>
  </ul>
</div>

        </div>
  )
}

export default Header