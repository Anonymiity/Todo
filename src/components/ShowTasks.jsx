import React from 'react'
import { FaCheckSquare,FaSkullCrossbones  } from "react-icons/fa";


const ShowTasks = (props) => {
  return (
    <div className='hover:bg-gray-200 bg-white w-5/6 min-h-10 rounded-lg mx-auto flex justify-between items-center p-5 mt-1 border-t-5 border-l-5'>
            <button className='hover:bg-blue-200 hover:cursor-pointer hover:scale-120 p-1 rounded-xl' onClick={()=>{props.tDone(props.id)}}><FaCheckSquare /></button>
            <div className=' min-w-0 text-wrap bg-red flex justify-between'> 
                <div className='mr-10'>{props.text}</div>
                <div> {props.time}</div>
            </div>
            <button className='hover:bg-blue-200 hover:cursor-pointer hover:scale-120 p-1 rounded-xl ml-5' onClick={()=>{props.tDelete(props.id)}}><FaSkullCrossbones  /></button> 
    </div>
  )
}

export default ShowTasks