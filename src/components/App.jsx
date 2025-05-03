import React from "react";
import "./../styles/App.css";
import { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div className="parent">
        <ChildComponent1 setSelectedOption={setSelectedOption} />
        <ChildComponent2 setSelectedOption={setSelectedOption} />
        <p>Selected Option:{selectedOption}</p>
      </div>
    </div>
  );
};

export default App;
