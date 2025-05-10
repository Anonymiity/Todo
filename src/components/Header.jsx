import React from 'react'

const Header = () => {
  return (
    
        <div className=' h-50 text-white'> 
            <div className='bg-blue-950 text-white flex justify-between px-10 text-xl h-10 justify-items-center'>
            <div className='font-bold'><span>TodoList by Tanush</span></div>
            <div className=''><ul className='flex gap-5'>
                    <li className='hover:cursor-pointer'>Home</li>
                    <li className='hover:cursor-pointer'>Tasks</li>
            </ul></div>
            </div>
        </div>
  )
}

export default Header