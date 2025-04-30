import React from "react";
import LabMemberList from "./components/LabMemberList";
import "./App.css";

function App() {
  const team = [
    {
      name: "Alice Johnson",
      department: "Biochemistry",
      section: "Enzymology",
      hobby: "Photography",
      skill: "Data Analysis",
      quote: "Science is a way of thinking.",
    },
    {
      name: "Bob Smith",
      department: "Molecular Biology",
      section: "Genetics",
      hobby: "Hiking",
      skill: "PCR Techniques",
      quote: "In genes we trust.",
    },
    // add more members as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Lab Members</h1>
      </header>
      <LabMemberList members={team} />
    </div>
  );
}

export default App;
