import React from "react";

function Input2({ value2, setValue2 }) {
  return (
    <>
      <span>2-ci eded</span>
      <input
        onChange={(e) => {
          setValue2(e.target.value);
        }}
        type="number"
      />
    </>
  );
}

export default Input2;
