import React from "react";

function SubBtn({ result, setResult, SubInput }) {
  return (
    <>
      <button
        onClick={() => {
          let sub = SubInput();
          setResult(sub);
        }}
      >
        Sub
      </button>
    </>
  );
}

export default SubBtn;
