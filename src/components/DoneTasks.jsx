import React from 'react'

const DoneTasks = (props) => {
  return (
    <div className='hover:bg-gray-400 bg-gray-200 w-5/6 min-h-10 rounded-lg mx-auto flex justify-center items-center p-5 mt-1 border-t-5 border-l-5'>
      <div className=' min-w-0 text-wrap bg-red flex justify-between'> 
        <div className='mr-10'>{props.text}</div>
        <div> {props.time}</div>
      </div>
    </div>
  )
}

export default DoneTasks

