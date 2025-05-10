import React from 'react';

const DoneTasks = (props) => {
  return (
    <div className="hover:bg-gray-300 bg-gray-200 w-full max-w-[700px] mx-auto rounded-lg flex flex-col sm:flex-row justify-between items-center p-4 mt-2 border border-gray-300">
      <div className="w-full text-left break-words">
        <div className="font-medium">{props.text}</div>
        <div className="text-sm text-gray-600">{props.time}</div>
      </div>
    </div>
  );
};

export default DoneTasks;
