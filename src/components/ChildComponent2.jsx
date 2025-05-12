import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSelectedOption("Option2");
        }}
      >
        Option2
      </button>
    </div>
  );
};

export default ChildComponent2;
