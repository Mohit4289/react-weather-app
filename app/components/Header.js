"use client"
import React, {useState} from "react";


const Header = () => {
  const [taskInput, settaskInput] = useState("");
  const [tasks, settasks] = useState([]);

  const handlesubmit = (event) => {
    event.preventDefault();
    settasks([...tasks,taskInput])
    settaskInput("")
  };

  const remove = (index)=>{
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    settasks(updatedTasks);
  }

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="flex justify-center items-center"
      >
        <input
          type="text"
          className="p-2 bg-black mr-4 rounded text-white"
          value={taskInput}
          onChange={(e) => settaskInput(e.target.value)}
        />
        <button type='submit' className="p-2 bg-blue-500 text-white font-bold rounded border-none">
          Add
        </button>
      </form>
      <div className="bg-slate-400 mt-6 ">
      <ul className="p-4 text-black text-2xl">
          {tasks.length < 1 ? (
            <li>Nothing Added</li>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <li>{task}</li>
                <button onClick={()=>remove(index)} className="bg-red-500 border-none text-white font-bold p-2 rounded mb-3">
                  Completed
                </button>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
