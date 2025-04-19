import './App.css';
import { Task } from './Task';
import { useState } from 'react';
function App() {
  return (
    <div className='.App'>

    </div>
          );
}
export default App;


//the following is example of using useState in react
/*
function App() {
  const [age, setAge] = useState(0);
  const IncreaseAge = () => {
    setAge(age - 1);
  };
  return (
    <div className="App">
      {age}
      <button onClick={IncreaseAge}>Increase</button>
    </div>
  );
}
  */

//another example   const handelInputChange = (event) => {
//    setInputValue(event.target.value);
//  }

/*
function App() {
  const [textColor, setTextColor] = useState(true);

  return (
    <div className="App">
      <button onClick={() => {
        setTextColor(!textColor)
      }}>Hide/Show</button>
      <h1 style={{ color: textColor ? "blue": 'red' }}>Hi Ashe</h1>
    </div>
  );
}

*/
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [showText, setShowValue] = useState(true);

//   return (
//     <div className="App">
//       <button onClick={() => {
//         setShowValue(!showText)
//       }}>Hide/Show</button>
//       {showText && <h1>Hi Ashe</h1>}
//     </div>
//   );
// }
// export default App;

/*function App() {
  const [changer, setAdder] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setAdder(changer + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setAdder(changer - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setAdder(0);
        }}
      >
        setZero
      </button>
      {changer}
    </div>
  );
}

export default App; */
//the following is using component in react

// import { User } from "./users";

// function App() {
//   const Planets = [
//     { name: "Mars", isGasPlante: true },
//     { name: "Earth", isGasPlante: false },
//     { name: "Jupiter", isGasPlante: true },
//     { name: "Venus", isGasPlante: false },
//     { name: "Neptun", isGasPlante: true },
//     { name: "Uranus", isGasPlante: true },
//   ];
//   return (
//     <div className="App">
//       {Planets.map((Planet, key) => {
//         return <User name={!Planet.isGasPlante && Planet.name} />;
//       })}
//     </div>
//   );
// }

/*
import './App.css';
import { Task } from './Task';
import { useState } from 'react';
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const changeHandler = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setToDoList([...toDoList, task])
  };
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setToDoList(
      //toDoList.map((task) => {
        if (task.id === id)
          return { ...task, completed: true }
        else {
          return task
        }
}));
  }
  return (
    <div className="App">
      <div className="input_add">
        <input className="addTask" onChange={changeHandler} />
        <button className="firstbutton" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div
        className="list"
      >
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
*/