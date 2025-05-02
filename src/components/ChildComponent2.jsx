import React from "react";

const ChildComponent2 = ({ option, selectedOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          selectedOption("option2");
        }}
      >
        option2
      </button>
    </div>
  );
};

export default ChildComponent2;
