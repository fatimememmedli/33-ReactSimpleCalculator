import React from "react";
function Input1({ value1, setValue1 }) {
  return (
    <>
      <span>1-ci eded</span>
      <input
        onChange={(e) => {
          setValue1(e.target.value);
        }}
        type="number"
      />
    </>
  );
}

export default Input1;
