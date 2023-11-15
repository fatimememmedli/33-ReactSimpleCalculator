import React from "react";

function SumButton({ result, setResult, sumInput }) {
  return (
    <>
      <button
        onClick={() => {
          let sum = sumInput();
          console.log(sum);
          setResult(sum);
          console.log(result);
        }}
      >
        Sum
      </button>
    </>
  );
}

export default SumButton;
