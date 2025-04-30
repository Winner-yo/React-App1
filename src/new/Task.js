import React from "react";
import { useState, useEffect } from "react"
const Text = () => {
  const [text, setText] = useState('');
}

return (
  <div>
    <input onChange={(event) => {
      setText(event.target.value);
    }} >
      {text}
  </div>
    
);
  























/*
export const Task = (props) => {
    return (
      <div
        className="task_delete"
        style={{ backgroundColor: props.completed ? "green" : "white" }}
      >
        <h3 className="one">{props.taskName} </h3>
        <button
          className="secondbutton"
          onClick={() => props.deleteTask(props.id)}>X</button>
        <button className='one' onClick={() => props.completedTask(props.id)}>Completed</button>
      </div>
    );
}

{/* const uc = <Task task_Name=taskName, id_=id/> */}