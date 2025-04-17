import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const handelInputChange = (event) => {
    console.log()
    setInputValue(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={handelInputChange}/>
      {inputValue}
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