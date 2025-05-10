import React, { use, useEffect } from 'react'
import { useState } from 'react'
import { RiPlayListAddFill } from "react-icons/ri";
import ShowTasks from "./ShowTasks";
import DoneTasks from "./DoneTasks";
import { v4 as uuidv4 } from 'uuid';

const Mains = () => {
    // DELETE IT LATER...
    const [tasks, setTasks] = useState(["lorem", "ipsum"]);
    const [times, settimes] = useState([1, 2]);
    const [Ctasks, setCTasks] = useState(["Clorem", "Cipsum", "Cdolor", "Csit", "Camet"]);
    const [Ctimes, setCtimes] = useState([6, 7, 8, 9, 10]);

    // State to hold the selected radio button value
    const [selectedOption, setSelectedOption] = useState('act');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // State to hold the value of the new task
    const [newTask, setNewTask] = useState({ nTask: '', tTask: '', sTask: false, id: '' });
    const handleNewTask = (event) => {
        const { name, value } = event.target;
        setNewTask({ ...newTask, [name]: value });
    };

    // Function to add a new task
    const [isHid, setIsHid] = useState(false);
    const saveTask = () => {
        if (newTask.nTask && newTask.tTask !== '') {
            const idTask = uuidv4();
            const aTakss = {
                nTask: newTask.nTask,
                tTask: newTask.tTask,
                sTask: false,
            };
            localStorage.setItem(idTask, JSON.stringify(aTakss));
            setIsHid(true);
            setTimeout(() => {
                setIsHid(false);
            }, 1000);
        }
    };

    // Function to mark a task as done
    const tDone = (key) => {
        confirm(`You sure have completed the task?`) ? (localStorage.setItem(key, JSON.stringify({ ...JSON.parse(localStorage.getItem(key)), sTask: true }))) : null;
        // console.log(key,JSON.stringify({...JSON.parse(localStorage.getItem(key)), sTask:true}));
        setSelectedOption('comp')

    }

    // Function to delete a task
    const tDelete = (key) => {
        localStorage.removeItem(key);
        // setSelectedOption('comp');
        setSelectedOption('comp');
    }

    // Actual showing the tasks saved in localStroage    
    const showTaskss = () => {
        const ataskssss = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            // console.log(value.nTask, value.tTask.split("T")[0], value.tTask.split("T")[1] , value.sTask);
            if (value.sTask === false) {
                ataskssss.push(<ShowTasks key={key} text={value.nTask} time={`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`} tDone={tDone} tDelete={tDelete} id={key} />)
                //    console.log(key,tDone(key))
            }
            // return [value.nTask,`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`, value.sTask, key]
        }
        return ataskssss;
    }

    const showCTaskss = () => {
        const ataskssss = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            // console.log(value.nTask, value.tTask.split("T")[0], value.tTask.split("T")[1] , value.sTask);
            if (value.sTask === true) {
                ataskssss.push(<DoneTasks key={key} text={value.nTask} time={`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`} />)
                //    console.log(key,tDone(key))
            }
            // return [value.nTask,`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`, value.sTask, key]
        }
        return ataskssss;
    }


    return (
        <>
          {/* Heading */}
          <div className="font-bold text-3xl sm:text-4xl text-left px-4 sm:px-6 md:px-12 mx-auto mb-6">
            TODOs
          </div>
      
          {/* Main Container */}
          <div className="text-center border-2 border-black bg-[rgba(255,255,255,0.25)] rounded-2xl w-full max-w-[700px] mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {/* Input Row */}
              <div className="bg-white w-full rounded-lg flex flex-col md:flex-row items-center gap-4 p-4">
                <input
                  type="text"
                  name="nTask"
                  id="nTask"
                  className="focus:outline-0 font-semibold w-full md:w-3/5 px-3 py-2 border border-gray-300 rounded"
                  placeholder="Hello bro, Write your task here!"
                  onChange={handleNewTask}
                />
                <input
                  type="datetime-local"
                  name="tTask"
                  id="tTask"
                  className="focus:outline-0 font-semibold w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded"
                  onChange={handleNewTask}
                />
                <button
                  className="hover:bg-blue-200 hover:scale-105 p-2 rounded-xl transition"
                  onClick={saveTask}
                >
                  <RiPlayListAddFill size={24} />
                </button>
              </div>
      
              {/* Saved Message */}
              <div>
                <span
                  className={`${
                    isHid ? '' : 'hidden'
                  } bg-gray-500 text-white font-light px-3 py-1 rounded-lg transition duration-1000`}
                >
                  Saved!
                </span>
              </div>
      
              {/* Radio Buttons */}
              <div className="bg-gray-300 font-light w-full md:w-1/2 rounded-lg flex justify-center gap-4 mx-auto py-2">
                <input
                  type="radio"
                  name="whatto"
                  id="act"
                  value="act"
                  className="hidden peer/act"
                  checked={selectedOption === 'act'}
                  onChange={handleChange}
                />
                <label
                  htmlFor="act"
                  className="peer-checked/act:bg-blue-200 peer-checked/act:font-normal hover:bg-blue-100 px-3 py-1 rounded-xl cursor-pointer transition"
                >
                  Active
                </label>
                <input
                  type="radio"
                  name="whatto"
                  id="comp"
                  value="comp"
                  className="hidden peer/comp"
                  checked={selectedOption === 'comp'}
                  onChange={handleChange}
                />
                <label
                  htmlFor="comp"
                  className="peer-checked/comp:bg-blue-200 peer-checked/comp:font-normal hover:bg-blue-100 px-3 py-1 rounded-xl cursor-pointer transition"
                >
                  Completed
                </label>
              </div>
      
              {/* Task Display */}
              <div>
                {selectedOption === 'act' && showTaskss()}
                {selectedOption === 'comp' && showCTaskss()}
              </div>
            </div>
          </div>
        </>
      );
      
      
}
export default Mains