import { useState } from "react";
// import "./App.css";
import Input2 from "./Components/Input2";
import Result from "./Components/Result";
import SumButton from "./Components/SumButton";
import Input1 from "./Components/İnput1";
import SubBtn from "./Components/SubBtn";
import Multi from "./Components/Multi";
import Division from "./Components/Division";
function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [resultt, setResult] = useState(0);
  // console.log(value1);
  // console.log(value2);
  function SumInput() {
    return Number(value1) + Number(value2);
  }
  function SubInput() {
    return Number(value1) - Number(value2);
  }
  // console.log(SubInput());

  function MultiInput() {
    return value1 * value2;
  }
  function DivisionInput() {
    return Number(value1) / Number(value2);
  }
  console.log(DivisionInput());
  // console.log(SumInput());
  // function getValue1(data) {
  //   return data;
  // }
  // function getValue2(data) {
  //   console.log(data);
  // }

  return (
    <>
      <div>
        <Input1 value1={value1} setValue1={setValue1} />
      </div>
      <div>
        <Input2 value2={value2} setValue2={setValue2} />
      </div>
      <div></div>
      <div>
        <SumButton
          setValue1={setValue1}
          result={resultt}
          setResult={setResult}
          sumInput={SumInput}
        />
        <SubBtn result={resultt} setResult={setResult} SubInput={SubInput} />
        <Multi result={resultt} setResult={setResult} MultiInput={MultiInput} />
        <Division
          result={resultt}
          setResult={setResult}
          DivisionInput={DivisionInput}
        />
      </div>
      <div>
        <Result result={resultt} setResult={setResult} sumInput={SumInput} />
      </div>
    </>
  );
}

export default App;
