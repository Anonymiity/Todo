import React, { use, useEffect} from 'react'
import { useState } from 'react'
import { RiPlayListAddFill } from "react-icons/ri";
import ShowTasks from "./ShowTasks";
import DoneTasks from "./DoneTasks";
import { v4 as uuidv4 } from 'uuid';

const Mains = () => {
    // DELETE IT LATER...
    const [tasks,setTasks]=useState(["lorem","ipsum"]);
    const [times,settimes]=useState([1,2]);
    const [Ctasks,setCTasks]=useState(["Clorem","Cipsum","Cdolor","Csit","Camet"]);
    const [Ctimes,setCtimes]=useState([6,7,8,9,10]);

    // State to hold the selected radio button value
    const [selectedOption, setSelectedOption] = useState('act');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // State to hold the value of the new task
    const [newTask, setNewTask] = useState({nTask: '', tTask: '', sTask:false, id:''});
    const handleNewTask = (event) => {
        const {name, value} = event.target;
        setNewTask({...newTask,[name]:value}); 
    };

    // Function to add a new task
    const [isHid,setIsHid] = useState(false);
    const saveTask = () => {
        if(newTask.nTask && newTask.tTask !== ''){
            const idTask=uuidv4();
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
    }};

    // Function to mark a task as done
    const tDone=(key)=>{
        confirm(`You sure have completed the task?`)?(localStorage.setItem(key, JSON.stringify({...JSON.parse(localStorage.getItem(key)), sTask:true}))):null;
        // console.log(key,JSON.stringify({...JSON.parse(localStorage.getItem(key)), sTask:true}));
        setSelectedOption('comp')
        
    }

    // Function to delete a task
    const tDelete=(key)=>{
        localStorage.removeItem(key);
        // setSelectedOption('comp');
        setSelectedOption('comp');
    }

    // Actual showing the tasks saved in localStroage    
    const showTaskss=()=>{
        const ataskssss=[];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            // console.log(value.nTask, value.tTask.split("T")[0], value.tTask.split("T")[1] , value.sTask);
            if (value.sTask===false) {
                ataskssss.push( <ShowTasks key={key} text={value.nTask} time={`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`} tDone={tDone} tDelete={tDelete} id={key} />)
            //    console.log(key,tDone(key))
            }
            // return [value.nTask,`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`, value.sTask, key]
        }
        return ataskssss;
    }

    const showCTaskss=()=>{
        const ataskssss=[];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            // console.log(value.nTask, value.tTask.split("T")[0], value.tTask.split("T")[1] , value.sTask);
            if (value.sTask===true) {
                ataskssss.push( <DoneTasks key={key} text={value.nTask} time={`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`}/>)
            //    console.log(key,tDone(key))
            }
            // return [value.nTask,`${value.tTask.split("T")[1]} on ${value.tTask.split("T")[0]}`, value.sTask, key]
        }
        return ataskssss;
    }
    

  return (
    <>
    <div className='font-bold text-4xl text-left pl-100 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-[127px] 2xl:ml-[127px] mx-auto mb-10'>TODOs</div>
    <div className='text-center border-2 border-black bg-[rgba(255,255,255,0.25)] rounded-2xl w-5xl min-h-100 mx-auto'>
        <div className='p-5 flex-col'>  
        <div className='bg-white w-5/6 h-10 rounded-lg mx-auto flex justify-between items-center p-5 mb-5'>
            <input type="text" name="nTask" id="nTask" className='focus:outline-0 ml-7 content-center font-semibold w-4/6' placeholder={`Hello bro, Write your task here!`} onChange={handleNewTask} />
            <input type="datetime-local" name="tTask" id="tTask" className='focus:outline-0 ml-7 mr-10 content-center font-semibold w-2/6' onChange={handleNewTask} />
            <button className='hover:bg-blue-200 hover:scale-120 p-1 rounded-xl' onClick={saveTask}><RiPlayListAddFill/></button>
        </div>
        <div>
            <div><span className={`${isHid ? '' : 'hidden'} bg-gray-500 text-white font-light p-1 rounded-lg transition-all duration-1000`}>Saved!</span></div>
        </div>
        <div className='bg-gray-300 font-light w-4/12 h-10 rounded-lg ml-21 flex justify-left items-center p-5 mb-2'>
            <input type="radio" name='whatto' id="act" className='hidden peer/act' value="act" checked={selectedOption === 'act'} onChange={handleChange}/><label htmlFor="act" className='peer-checked/act:bg-blue-200 peer-checked/act:font-normal hover:bg-blue-100 ml-10 hover:font-bold hover:animate-pulse hover:scale-101 p-1 rounded-xl all' defaultChecked >Active</label>
            <input type="radio" name='whatto' id="comp" className='hidden peer/comp' value="comp" checked={selectedOption === 'comp'} onChange={handleChange}/><label htmlFor="comp" className='peer-checked/comp:bg-blue-200 peer-checked/comp:font-normal hover:bg-blue-100 ml-10 hover:font-bold hover:animate-pulse hover:scale-101 p-1 rounded-xl'>Completed</label>
        </div>
        {selectedOption==='act' && showTaskss()}
        {selectedOption==='comp' && showCTaskss()}
    </div>
    </div>
    </>
  )
}
export default Mains