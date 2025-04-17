import './App.css';
import { User } from './users';

function App() {
  const Planets = [
    {name:"Mars", isGasPlante:true},
    {name:"Earth", isGasPlante:false},
    {name:"Jupiter", isGasPlante:true},
    {name:"Venus", isGasPlante:false},
    {name:"Neptun", isGasPlante:true},
    { name: "Uranus", isGasPlante: true }
  ]
  return <div className="App">{Planets.map((Planet, key) => {
    return <User name={Planet.isGasPlante && Planet.name} />;
  })}</div>;
}

export default App;
