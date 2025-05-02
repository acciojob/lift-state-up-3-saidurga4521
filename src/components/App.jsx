import React from "react";
import "./../styles/App.css";
import { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
const App = () => {
  const [option, selectedOption] = useState("");
  return (
    <div>
      <div className="parent">
        <ChildComponent1 option={option} selectedOption={selectedOption} />
        <ChildComponent2 option={option} selectedOption={selectedOption} />
        <p>Selected Option:{option}</p>
      </div>
    </div>
  );
};

export default App;
