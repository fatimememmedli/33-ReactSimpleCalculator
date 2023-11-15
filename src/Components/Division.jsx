import React from "react";

function Division({ result, setResult, DivisionInput }) {
  return (
    <>
      <button
        onClick={() => {
          let divi = DivisionInput();
          console.log(divi);
          setResult(divi);
        }}
      >
        Division
      </button>
    </>
  );
}

export default Division;
