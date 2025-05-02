import React from "react";

const ChildComponent1 = ({ option, selectedOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          selectedOption("option1");
        }}
      >
        option1
      </button>
    </div>
  );
};

export default ChildComponent1;
