import React from 'react'
import { FaCheckSquare, FaSkullCrossbones } from "react-icons/fa";

const ShowTasks = (props) => {
  return (
    <div className="hover:bg-gray-200 bg-white w-full max-w-[700px] mx-auto rounded-lg flex flex-col sm:flex-row justify-between items-center p-4 mt-2 border border-gray-300">
      {/* Buttons and Task Text */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button
          className="hover:bg-blue-200 hover:cursor-pointer hover:scale-105 p-2 rounded-lg transition"
          onClick={() => props.tDone(props.id)}
        >
          <FaCheckSquare />
        </button>

        <div className="flex-1 text-left break-words">
          <div className="font-semibold">{props.text}</div>
          <div className="text-sm text-gray-600">{props.time}</div>
        </div>
      </div>

      {/* Delete Button */}
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          className="hover:bg-red-200 hover:cursor-pointer hover:scale-105 p-2 rounded-lg transition"
          onClick={() => props.tDelete(props.id)}
        >
          <FaSkullCrossbones />
        </button>
      </div>
    </div>
  );
};

export default ShowTasks;
