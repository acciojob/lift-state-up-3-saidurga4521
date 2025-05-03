import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSelectedOption("option2");
        }}
      >
        option2
      </button>
    </div>
  );
};

export default ChildComponent2;
