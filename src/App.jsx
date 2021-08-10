import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">hoge</ColorfulMessage>
      <ColorfulMessage color="pink">fuga</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
    </>
  );
};

export default App;
