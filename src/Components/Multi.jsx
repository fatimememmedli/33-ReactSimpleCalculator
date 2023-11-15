import React from "react";

function Multi({ result, setResult, MultiInput }) {
  return (
    <>
      <button
        onClick={() => {
          let multi = MultiInput();
          setResult(multi);
        }}
      >
        Multiplication
      </button>
    </>
  );
}

export default Multi;
