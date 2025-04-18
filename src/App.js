import './App.css';
import { useState } from 'react';
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const changeHandler = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = ()=> {
    setToDoList([...toDoList, newTask])
  } 

  const deleteTask = (taskName) => {
    setToDoList(toDoList.filter((task) => task !== taskName));
  };

  return (
    <div className="App">
      <div>
        <input className="addTask" onChange={changeHandler} />
        <button onClick={addTask}> Add Task</button>
      </div>

      <div className="list">
        {toDoList.map(
          (task) => {
            return (
              <h3>
                {task} {<button onClick={()=>deleteTask(task)}>X</button>}
              </h3>
            );
          }
        )}
        
      </div>
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