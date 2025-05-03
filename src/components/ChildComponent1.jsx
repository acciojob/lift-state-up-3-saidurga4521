import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSelectedOption("option1");
        }}
      >
        option1
      </button>
    </div>
  );
};

export default ChildComponent1;
